from fastapi import FastAPI, APIRouter, HTTPException, UploadFile, File, Query
from fastapi.responses import Response
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import secrets
import requests
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

# ─── Object Storage ───

STORAGE_URL = "https://integrations.emergentagent.com/objstore/api/v1/storage"
EMERGENT_KEY = os.environ.get("EMERGENT_LLM_KEY")
APP_NAME = "msc-payments"
storage_key = None

def init_storage():
    global storage_key
    if storage_key:
        return storage_key
    resp = requests.post(f"{STORAGE_URL}/init", json={"emergent_key": EMERGENT_KEY}, timeout=30)
    resp.raise_for_status()
    storage_key = resp.json()["storage_key"]
    return storage_key

def put_object(path: str, data: bytes, content_type: str) -> dict:
    key = init_storage()
    resp = requests.put(
        f"{STORAGE_URL}/objects/{path}",
        headers={"X-Storage-Key": key, "Content-Type": content_type},
        data=data, timeout=120
    )
    resp.raise_for_status()
    return resp.json()

def get_object(path: str):
    key = init_storage()
    resp = requests.get(
        f"{STORAGE_URL}/objects/{path}",
        headers={"X-Storage-Key": key}, timeout=60
    )
    resp.raise_for_status()
    return resp.content, resp.headers.get("Content-Type", "application/octet-stream")

# ─── Models ───

class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContentPost(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    content_type: str = "blog"
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
    attachments: List[dict] = []
    author: str = "Merchant Solutions Corp"
    published: bool = False
    visible_on_site: bool = True
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    updated_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class ContentPostCreate(BaseModel):
    content_type: str = "blog"
    title: str
    topic: str = ""
    subject: str = ""
    hashtags: List[str] = []
    keywords: List[str] = []
    content: str = ""
    excerpt: str = ""
    cover_image: str = ""
    images: List[str] = []
    attachments: List[dict] = []
    author: str = "Merchant Solutions Corp"
    published: bool = False
    visible_on_site: bool = True

class ContentPostUpdate(BaseModel):
    content_type: Optional[str] = None
    title: Optional[str] = None
    topic: Optional[str] = None
    subject: Optional[str] = None
    hashtags: Optional[List[str]] = None
    keywords: Optional[List[str]] = None
    content: Optional[str] = None
    excerpt: Optional[str] = None
    cover_image: Optional[str] = None
    images: Optional[List[str]] = None
    attachments: Optional[List[dict]] = None
    author: Optional[str] = None
    published: Optional[bool] = None
    visible_on_site: Optional[bool] = None

class DocLoginRequest(BaseModel):
    username: str
    password: str

class DocumentItem(BaseModel):
    name: str
    url: str = ""

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

# ─── Auth ───

BLOG_USERNAME = "marketing@merchantsolutionscorp.com"
BLOG_PASSWORD = "Mscpay$1"
DOC_USERNAME = "admin1"
DOC_PASSWORD = "12345"

@api_router.post("/blog/login")
async def blog_login(creds: DocLoginRequest):
    if creds.username == BLOG_USERNAME and creds.password == BLOG_PASSWORD:
        token = secrets.token_hex(32)
        await db.blog_sessions.insert_one({"token": token, "created_at": datetime.now(timezone.utc).isoformat()})
        return {"token": token, "message": "Login successful"}
    raise HTTPException(status_code=401, detail="Invalid credentials")

@api_router.get("/blog/verify")
async def verify_blog_token(token: str = ""):
    if not token:
        raise HTTPException(status_code=401, detail="Authentication required")
    session = await db.blog_sessions.find_one({"token": token})
    if not session:
        raise HTTPException(status_code=401, detail="Invalid session")
    return {"valid": True}

# ─── File Upload ───

@api_router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    ext = file.filename.split(".")[-1] if "." in file.filename else "bin"
    path = f"{APP_NAME}/uploads/{uuid.uuid4()}.{ext}"
    data = await file.read()
    result = put_object(path, data, file.content_type or "application/octet-stream")
    file_record = {
        "id": str(uuid.uuid4()),
        "storage_path": result["path"],
        "original_filename": file.filename,
        "content_type": file.content_type,
        "size": result.get("size", len(data)),
        "is_deleted": False,
        "created_at": datetime.now(timezone.utc).isoformat()
    }
    await db.files.insert_one(file_record)
    file_record.pop("_id", None)
    return file_record

@api_router.get("/files/{path:path}")
async def download_file(path: str):
    record = await db.files.find_one({"storage_path": path, "is_deleted": False})
    if not record:
        raise HTTPException(status_code=404, detail="File not found")
    data, content_type = get_object(path)
    return Response(content=data, media_type=record.get("content_type", content_type))

# ─── Content (Blog/Articles/Guides) Routes ───

@api_router.get("/blog")
async def get_content(published_only: bool = True, content_type: str = "", visible_only: bool = False):
    query = {}
    if published_only:
        query["published"] = True
    if visible_only:
        query["visible_on_site"] = True
    if content_type:
        query["content_type"] = content_type
    posts = await db.blog_posts.find(query, {"_id": 0}).sort("created_at", -1).to_list(100)
    return posts

@api_router.get("/blog/{post_id}")
async def get_content_post(post_id: str):
    post = await db.blog_posts.find_one({"id": post_id}, {"_id": 0})
    if not post:
        post = await db.blog_posts.find_one({"slug": post_id}, {"_id": 0})
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return post

@api_router.post("/blog")
async def create_content_post(post_data: ContentPostCreate):
    post = ContentPost(**post_data.model_dump())
    post.slug = make_slug(post.title)
    doc = post.model_dump()
    await db.blog_posts.insert_one(doc)
    doc.pop("_id", None)
    return doc

@api_router.put("/blog/{post_id}")
async def update_content_post(post_id: str, update_data: ContentPostUpdate):
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
async def delete_content_post(post_id: str):
    result = await db.blog_posts.delete_one({"id": post_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Post not found")
    return {"message": "Post deleted"}

# ─── Document Portal Routes ───

@api_router.post("/documents/login")
async def documents_login(creds: DocLoginRequest):
    if creds.username == DOC_USERNAME and creds.password == DOC_PASSWORD:
        token = secrets.token_hex(32)
        await db.doc_sessions.insert_one({"token": token, "created_at": datetime.now(timezone.utc).isoformat()})
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

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup():
    try:
        init_storage()
        logger.info("Object storage initialized")
    except Exception as e:
        logger.error(f"Storage init failed: {e}")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
