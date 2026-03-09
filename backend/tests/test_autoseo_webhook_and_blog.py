"""
Test Suite: AutoSEO Webhook Integration & Blog CRUD with SEO Fields
Tests the POST /api/autoseo/webhook endpoint and Blog API with SEO fields
"""

import pytest
import requests
import os
import uuid

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

# Test credentials
WEBHOOK_TOKEN = "aseo_wh_9d05ea2b895f42718d2a1d9b25665192"
BLOG_EMAIL = "marketing@merchantsolutionscorp.com"
BLOG_PASSWORD = "Mscpay$1"


class TestAutoSEOWebhook:
    """AutoSEO Webhook endpoint tests - /api/autoseo/webhook"""
    
    def test_webhook_double_bearer_prefix_returns_200(self):
        """Test: Authorization with 'Bearer Bearer <token>' double prefix returns 200"""
        response = requests.post(
            f"{BASE_URL}/api/autoseo/webhook",
            headers={
                "Authorization": f"Bearer Bearer {WEBHOOK_TOKEN}",
                "Content-Type": "application/json"
            },
            json={"event": "test"}
        )
        assert response.status_code == 200, f"Expected 200 with double Bearer prefix, got {response.status_code}: {response.text}"
        data = response.json()
        assert "url" in data, "Response should contain 'url' field for test event"
        print(f"Double Bearer prefix test passed: {data}")

    def test_webhook_single_bearer_prefix_returns_200(self):
        """Test: Authorization with single 'Bearer <token>' returns 200"""
        response = requests.post(
            f"{BASE_URL}/api/autoseo/webhook",
            headers={
                "Authorization": f"Bearer {WEBHOOK_TOKEN}",
                "Content-Type": "application/json"
            },
            json={"event": "test"}
        )
        assert response.status_code == 200, f"Expected 200 with single Bearer prefix, got {response.status_code}: {response.text}"
        data = response.json()
        assert "url" in data
        print(f"Single Bearer prefix test passed: {data}")

    def test_webhook_invalid_token_returns_401(self):
        """Test: Authorization with invalid token returns 401"""
        response = requests.post(
            f"{BASE_URL}/api/autoseo/webhook",
            headers={
                "Authorization": "Bearer invalid_token_12345",
                "Content-Type": "application/json"
            },
            json={"event": "test"}
        )
        assert response.status_code == 401, f"Expected 401 with invalid token, got {response.status_code}: {response.text}"
        print(f"Invalid token rejection test passed: status {response.status_code}")

    def test_webhook_no_token_returns_401(self):
        """Test: No Authorization header returns 401"""
        response = requests.post(
            f"{BASE_URL}/api/autoseo/webhook",
            headers={"Content-Type": "application/json"},
            json={"event": "test"}
        )
        assert response.status_code == 401, f"Expected 401 with no token, got {response.status_code}"
        print(f"No token rejection test passed: status {response.status_code}")

    def test_webhook_test_event_returns_url(self):
        """Test: Test event returns URL in response"""
        response = requests.post(
            f"{BASE_URL}/api/autoseo/webhook",
            headers={
                "Authorization": f"Bearer {WEBHOOK_TOKEN}",
                "Content-Type": "application/json"
            },
            json={"event": "test"}
        )
        assert response.status_code == 200
        data = response.json()
        assert "url" in data, "Test event should return URL"
        assert "/test" in data["url"], f"Test event URL should contain '/test': {data['url']}"
        print(f"Test event URL: {data['url']}")

    def test_webhook_full_article_creates_blog_post(self):
        """Test: Full article payload creates blog post with correct fields"""
        unique_id = str(uuid.uuid4())[:8]
        test_slug = f"test-autoseo-article-{unique_id}"
        
        payload = {
            "id": f"autoseo_{unique_id}",
            "title": f"TEST AutoSEO Article {unique_id}",
            "slug": test_slug,
            "metaDescription": "Test meta description from AutoSEO",
            "content_html": "<h2>Test Heading</h2><p>Test paragraph content.</p>",
            "keywords": ["test", "autoseo", "article"],
            "metaKeywords": "seo, testing, webhook",
            "status": "published"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/autoseo/webhook",
            headers={
                "Authorization": f"Bearer {WEBHOOK_TOKEN}",
                "Content-Type": "application/json"
            },
            json=payload
        )
        assert response.status_code == 200, f"Failed to create post: {response.text}"
        data = response.json()
        assert "url" in data
        assert test_slug in data["url"], f"URL should contain slug: {data['url']}"
        
        # Verify post was created by fetching it
        get_response = requests.get(f"{BASE_URL}/api/blog/{test_slug}")
        assert get_response.status_code == 200, f"Failed to fetch created post: {get_response.status_code}"
        
        post = get_response.json()
        assert post["title"] == payload["title"], "Title mismatch"
        assert post["slug"] == test_slug, "Slug mismatch"
        assert "test" in post["keywords"], "Keywords should include 'test'"
        assert post["published"] == True, "Post should be published"
        assert "<h2>" in post["content"], "Content should be HTML"
        
        print(f"Created post: {post['title']} at {data['url']}")
        
        # Cleanup - delete the test post
        delete_response = requests.delete(f"{BASE_URL}/api/blog/{post['id']}")
        assert delete_response.status_code == 200, f"Failed to cleanup test post"
        print(f"Cleaned up test post {post['id']}")

    def test_webhook_deduplication_updates_existing(self):
        """Test: Sending same autoseo_id twice updates instead of creating duplicate"""
        unique_id = str(uuid.uuid4())[:8]
        autoseo_id = f"dedup_test_{unique_id}"
        
        # First request - create
        payload1 = {
            "id": autoseo_id,
            "title": f"TEST Original Title {unique_id}",
            "slug": f"test-dedup-{unique_id}",
            "metaDescription": "Original description",
            "content_html": "<p>Original content</p>",
            "status": "published"
        }
        
        response1 = requests.post(
            f"{BASE_URL}/api/autoseo/webhook",
            headers={
                "Authorization": f"Bearer {WEBHOOK_TOKEN}",
                "Content-Type": "application/json"
            },
            json=payload1
        )
        assert response1.status_code == 200
        
        # Second request - should update, not create new
        payload2 = {
            "id": autoseo_id,
            "title": f"TEST Updated Title {unique_id}",
            "slug": f"test-dedup-updated-{unique_id}",
            "metaDescription": "Updated description",
            "content_html": "<p>Updated content</p>",
            "status": "published"
        }
        
        response2 = requests.post(
            f"{BASE_URL}/api/autoseo/webhook",
            headers={
                "Authorization": f"Bearer {WEBHOOK_TOKEN}",
                "Content-Type": "application/json"
            },
            json=payload2
        )
        assert response2.status_code == 200
        
        # Verify only one post exists with updated content
        get_response = requests.get(f"{BASE_URL}/api/blog/{payload2['slug']}")
        assert get_response.status_code == 200
        
        post = get_response.json()
        assert post["title"] == payload2["title"], "Title should be updated"
        assert post["slug"] == payload2["slug"], "Slug should be updated"
        assert "Updated" in post["content"], "Content should be updated"
        
        print(f"Deduplication test passed - post updated correctly")
        
        # Cleanup
        delete_response = requests.delete(f"{BASE_URL}/api/blog/{post['id']}")
        assert delete_response.status_code == 200


class TestBlogCRUDWithSEOFields:
    """Blog CRUD tests with SEO fields (slug, meta_title, meta_description, schema_markup)"""
    
    def test_create_post_with_seo_fields(self):
        """Test: POST /api/blog creates post with custom SEO fields"""
        unique_id = str(uuid.uuid4())[:8]
        
        payload = {
            "title": f"TEST SEO Post {unique_id}",
            "slug": f"custom-seo-slug-{unique_id}",
            "meta_title": "Custom Meta Title for SEO",
            "meta_description": "Custom meta description for better search ranking",
            "schema_markup": '{"@context":"https://schema.org","@type":"Article","headline":"Test"}',
            "content": "Test content for SEO fields",
            "published": True
        }
        
        response = requests.post(
            f"{BASE_URL}/api/blog",
            headers={"Content-Type": "application/json"},
            json=payload
        )
        assert response.status_code == 200, f"Failed to create post: {response.text}"
        
        post = response.json()
        assert post["slug"] == payload["slug"], f"Slug mismatch: {post['slug']}"
        assert post["meta_title"] == payload["meta_title"], f"Meta title mismatch"
        assert post["meta_description"] == payload["meta_description"], f"Meta description mismatch"
        assert post["schema_markup"] == payload["schema_markup"], f"Schema markup mismatch"
        
        print(f"Created post with SEO fields: {post['id']}")
        
        # Cleanup
        requests.delete(f"{BASE_URL}/api/blog/{post['id']}")

    def test_update_post_seo_fields(self):
        """Test: PUT /api/blog/{id} updates SEO fields"""
        unique_id = str(uuid.uuid4())[:8]
        
        # Create
        create_response = requests.post(
            f"{BASE_URL}/api/blog",
            headers={"Content-Type": "application/json"},
            json={"title": f"TEST Update SEO {unique_id}", "content": "Initial"}
        )
        assert create_response.status_code == 200
        post = create_response.json()
        post_id = post["id"]
        
        # Update SEO fields
        update_payload = {
            "slug": f"updated-seo-slug-{unique_id}",
            "meta_title": "Updated Meta Title",
            "meta_description": "Updated meta description",
            "schema_markup": '{"@context":"https://schema.org","@type":"BlogPosting"}'
        }
        
        update_response = requests.put(
            f"{BASE_URL}/api/blog/{post_id}",
            headers={"Content-Type": "application/json"},
            json=update_payload
        )
        assert update_response.status_code == 200, f"Update failed: {update_response.text}"
        
        updated_post = update_response.json()
        assert updated_post["slug"] == update_payload["slug"]
        assert updated_post["meta_title"] == update_payload["meta_title"]
        assert updated_post["meta_description"] == update_payload["meta_description"]
        assert updated_post["schema_markup"] == update_payload["schema_markup"]
        
        print(f"Updated SEO fields for post {post_id}")
        
        # Cleanup
        requests.delete(f"{BASE_URL}/api/blog/{post_id}")

    def test_update_title_auto_generates_slug(self):
        """Test: PUT with title change but no explicit slug auto-generates slug from title"""
        unique_id = str(uuid.uuid4())[:8]
        
        # Create post
        create_response = requests.post(
            f"{BASE_URL}/api/blog",
            headers={"Content-Type": "application/json"},
            json={"title": f"TEST Original Title {unique_id}", "content": "Test"}
        )
        assert create_response.status_code == 200
        post = create_response.json()
        post_id = post["id"]
        original_slug = post["slug"]
        
        # Update title without providing slug
        new_title = f"TEST New Updated Title {unique_id}"
        update_response = requests.put(
            f"{BASE_URL}/api/blog/{post_id}",
            headers={"Content-Type": "application/json"},
            json={"title": new_title}
        )
        assert update_response.status_code == 200
        
        updated_post = update_response.json()
        assert updated_post["title"] == new_title
        assert updated_post["slug"] != original_slug, "Slug should have changed with title"
        assert "new-updated-title" in updated_post["slug"].lower(), f"Slug should be derived from new title: {updated_post['slug']}"
        
        print(f"Slug auto-generated from title: {updated_post['slug']}")
        
        # Cleanup
        requests.delete(f"{BASE_URL}/api/blog/{post_id}")

    def test_get_post_by_slug_with_seo_fields(self):
        """Test: GET /api/blog/{slug} retrieves post by slug with all SEO fields"""
        unique_id = str(uuid.uuid4())[:8]
        test_slug = f"test-slug-retrieval-{unique_id}"
        
        # Create with SEO fields
        payload = {
            "title": f"TEST Slug Retrieval {unique_id}",
            "slug": test_slug,
            "meta_title": "Retrieval Meta Title",
            "meta_description": "Retrieval meta description",
            "schema_markup": '{"@type":"Article"}',
            "content": "Content for slug test",
            "published": True
        }
        
        create_response = requests.post(
            f"{BASE_URL}/api/blog",
            headers={"Content-Type": "application/json"},
            json=payload
        )
        assert create_response.status_code == 200
        created_post = create_response.json()
        
        # Retrieve by slug
        get_response = requests.get(f"{BASE_URL}/api/blog/{test_slug}")
        assert get_response.status_code == 200, f"Failed to get post by slug: {get_response.status_code}"
        
        retrieved_post = get_response.json()
        assert retrieved_post["slug"] == test_slug
        assert retrieved_post["meta_title"] == payload["meta_title"]
        assert retrieved_post["meta_description"] == payload["meta_description"]
        assert retrieved_post["schema_markup"] == payload["schema_markup"]
        
        print(f"Retrieved post by slug with all SEO fields: {test_slug}")
        
        # Cleanup
        requests.delete(f"{BASE_URL}/api/blog/{created_post['id']}")


class TestBlogAdminAuth:
    """Blog Admin authentication tests"""
    
    def test_blog_login_valid_credentials(self):
        """Test: Login with valid credentials returns token"""
        response = requests.post(
            f"{BASE_URL}/api/blog/login",
            headers={"Content-Type": "application/json"},
            json={"username": BLOG_EMAIL, "password": BLOG_PASSWORD}
        )
        assert response.status_code == 200, f"Login failed: {response.text}"
        data = response.json()
        assert "token" in data, "Response should contain token"
        assert len(data["token"]) > 0
        print(f"Blog admin login successful, token: {data['token'][:16]}...")

    def test_blog_login_invalid_credentials(self):
        """Test: Login with invalid credentials returns 401"""
        response = requests.post(
            f"{BASE_URL}/api/blog/login",
            headers={"Content-Type": "application/json"},
            json={"username": "wrong@email.com", "password": "wrongpassword"}
        )
        assert response.status_code == 401, f"Expected 401 for invalid credentials, got {response.status_code}"
        print("Invalid credentials correctly rejected")

    def test_blog_verify_valid_token(self):
        """Test: Verify valid token returns success"""
        # Get token first
        login_response = requests.post(
            f"{BASE_URL}/api/blog/login",
            headers={"Content-Type": "application/json"},
            json={"username": BLOG_EMAIL, "password": BLOG_PASSWORD}
        )
        token = login_response.json().get("token")
        
        # Verify token
        verify_response = requests.get(f"{BASE_URL}/api/blog/verify?token={token}")
        assert verify_response.status_code == 200
        data = verify_response.json()
        assert data.get("valid") == True
        print("Token verification successful")


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
