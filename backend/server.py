from fastapi import FastAPI, APIRouter, HTTPException, Depends, UploadFile, File
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import secrets
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")
security = HTTPBasic()

# ─── Models ───

class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class BlogPost(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    slug: str = ""
    topic: str = ""
    subject: str = ""
    hashtags: List[str] = []
    keywords: List[str] = []
    content: str = ""
    excerpt: str = ""
    cover_image: str = ""
    images: List[str] = []
    author: str = "Merchant Solutions Corp"
    published: bool = False
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    updated_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class BlogPostCreate(BaseModel):
    title: str
    topic: str = ""
    subject: str = ""
    hashtags: List[str] = []
    keywords: List[str] = []
    content: str = ""
    excerpt: str = ""
    cover_image: str = ""
    images: List[str] = []
    author: str = "Merchant Solutions Corp"
    published: bool = False

class BlogPostUpdate(BaseModel):
    title: Optional[str] = None
    topic: Optional[str] = None
    subject: Optional[str] = None
    hashtags: Optional[List[str]] = None
    keywords: Optional[List[str]] = None
    content: Optional[str] = None
    excerpt: Optional[str] = None
    cover_image: Optional[str] = None
    images: Optional[List[str]] = None
    author: Optional[str] = None
    published: Optional[bool] = None

class DocumentItem(BaseModel):
    name: str
    url: str = ""

class DocumentCategory(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    processor: str
    subtitle: str = ""
    documents: List[DocumentItem] = []

class DocLoginRequest(BaseModel):
    username: str
    password: str

# ─── Helpers ───

def make_slug(title: str) -> str:
    import re
    slug = title.lower().strip()
    slug = re.sub(r'[^\w\s-]', '', slug)
    slug = re.sub(r'[\s_]+', '-', slug)
    slug = re.sub(r'-+', '-', slug)
    return slug.strip('-')

# ─── Status Routes ───

@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

# ─── Blog Routes ───

@api_router.get("/blog")
async def get_blog_posts(published_only: bool = True):
    query = {"published": True} if published_only else {}
    posts = await db.blog_posts.find(query, {"_id": 0}).sort("created_at", -1).to_list(100)
    return posts

@api_router.get("/blog/{post_id}")
async def get_blog_post(post_id: str):
    post = await db.blog_posts.find_one({"id": post_id}, {"_id": 0})
    if not post:
        post = await db.blog_posts.find_one({"slug": post_id}, {"_id": 0})
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return post

@api_router.post("/blog")
async def create_blog_post(post_data: BlogPostCreate):
    post = BlogPost(**post_data.model_dump())
    post.slug = make_slug(post.title)
    doc = post.model_dump()
    await db.blog_posts.insert_one(doc)
    doc.pop("_id", None)
    return doc

@api_router.put("/blog/{post_id}")
async def update_blog_post(post_id: str, update_data: BlogPostUpdate):
    updates = {k: v for k, v in update_data.model_dump().items() if v is not None}
    if not updates:
        raise HTTPException(status_code=400, detail="No fields to update")
    updates["updated_at"] = datetime.now(timezone.utc).isoformat()
    if "title" in updates:
        updates["slug"] = make_slug(updates["title"])
    result = await db.blog_posts.update_one({"id": post_id}, {"$set": updates})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Post not found")
    post = await db.blog_posts.find_one({"id": post_id}, {"_id": 0})
    return post

@api_router.delete("/blog/{post_id}")
async def delete_blog_post(post_id: str):
    result = await db.blog_posts.delete_one({"id": post_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Post not found")
    return {"message": "Post deleted"}

# ─── Document Portal Routes ───

DOC_USERNAME = "admin1"
DOC_PASSWORD = "12345"

@api_router.post("/documents/login")
async def documents_login(creds: DocLoginRequest):
    if creds.username == DOC_USERNAME and creds.password == DOC_PASSWORD:
        token = secrets.token_hex(32)
        await db.doc_sessions.insert_one({
            "token": token,
            "created_at": datetime.now(timezone.utc).isoformat()
        })
        return {"token": token, "message": "Login successful"}
    raise HTTPException(status_code=401, detail="Invalid credentials")

@api_router.get("/documents")
async def get_documents(token: str = ""):
    if not token:
        raise HTTPException(status_code=401, detail="Authentication required")
    session = await db.doc_sessions.find_one({"token": token})
    if not session:
        raise HTTPException(status_code=401, detail="Invalid session")
    docs = await db.document_categories.find({}, {"_id": 0}).to_list(100)
    if not docs:
        docs = await seed_documents()
    return docs

async def seed_documents():
    categories = [
        {
            "id": str(uuid.uuid4()),
            "processor": "CYGMA / Wells Fargo – Commercial Bank of CA",
            "subtitle": "Wells Fargo Commercial Banking Documents",
            "documents": [
                {"name": "Bank Account Change Form", "url": ""},
                {"name": "Account Maintenance", "url": ""},
                {"name": "Verification of Business Account", "url": ""},
                {"name": "American Express Addendum", "url": ""},
                {"name": "(Non-Customer) Merchant Cancelation Form", "url": ""},
                {"name": "Merchant Funding Onboarding Packet", "url": ""}
            ]
        },
        {
            "id": str(uuid.uuid4()),
            "processor": "EPX – BMO Harris, Fresno First, Citizens Bank",
            "subtitle": "EPX Processing Documents",
            "documents": [
                {"name": "Bank Account Change Form", "url": ""},
                {"name": "Business Information Change Request", "url": ""},
                {"name": "Merchant Debit Authorization Form", "url": ""},
                {"name": "Merchant Request Verification", "url": ""},
                {"name": "High Risk Attestation", "url": ""},
                {"name": "EDD Telehealth / Telemedicine", "url": ""},
                {"name": "High Risk – Ecommerce Merchants", "url": ""},
                {"name": "Personal Statement of Affairs", "url": ""},
                {"name": "Special Pricing Request", "url": ""},
                {"name": "W9 Form IRS", "url": ""}
            ]
        },
        {
            "id": str(uuid.uuid4()),
            "processor": "TSYS – Avidia Bank, Axiom Bank, Merrick Bank, FFB Bank & NABC",
            "subtitle": "TSYS Processing Documents",
            "documents": [
                {"name": "Bank Account Change Request", "url": ""},
                {"name": "Merchant Account Change Form", "url": ""},
                {"name": "Special Price or Change Rate Form", "url": ""},
                {"name": "Merchant Reserve Form", "url": ""},
                {"name": "Order Authorization Form", "url": ""},
                {"name": "Terminal Placement Agreement", "url": ""},
                {"name": "Merchant Account Closure Form (ETF)", "url": ""},
                {"name": "Transaction Re-key Consent Form", "url": ""},
                {"name": "Merchant Authorized Signer Form", "url": ""}
            ]
        }
    ]
    for cat in categories:
        await db.document_categories.insert_one(cat)
    return categories

# ─── App Setup ───

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
