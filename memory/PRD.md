# PRD: Merchant Solutions Corp Website

## Original Problem Statement
Build and maintain a comprehensive marketing/sales website for a merchant services company. Key goals: expand content for SEO, enhance existing pages, automate blog creation, and create lead qualification tools.

## Core Requirements
- Payment processing marketing website with 50+ pages
- Full SEO implementation (meta tags, OG tags, canonical URLs, JSON-LD schemas)
- Blog system with admin panel
- Lead capture via Lead Connector iframes and Calendly
- Interactive 3D globe on Service Areas page
- Support Center with live search
- Secure document portal

## What's Been Implemented

### Navigation & Modal Redesign (March 2026) - COMPLETED
1. Moved PayAnywhere POS from "POS Systems" to "Payment Terminals" in navigation
2. Redesigned Dejavoo Free Placement modal to match provided screenshot:
   - "MOST POPULAR" purple gradient badge on Dual Pricing card
   - Benefit-style checkmarks (purple for Dual, blue for Flat Rate)
   - Full Advantage Program disclosure (36-month, $595 ETF, $99 annual, 30-day trial)
   - Rounded gradient "Apply Now" buttons
3. Maverick form button color: CANNOT be changed (cross-origin iframe limitation from merchantsolutionscorpdb.com)

### Free Placement & Activation Flow (March 2026) - COMPLETED
1. Free Placement disclosure on Dual Pricing rate card
2. Updated testimonials (Jason D., Linda M., Brianna G.)
3. Terminal "Free Placement" button → pricing modal → Activation popup → JotForm

### 8-Point Dejavoo & Smart Terminals Update (March 2026) - COMPLETED
- Standard/Premium features, Create Account buttons, Xerocharge 0%, P18 image, modal fix, Purchase Now buttons, 5 Smart Terminal FAQs

### Site-wide SEO Overhaul (March 2026) - COMPLETED
- All 50+ public pages have full JSON-LD schemas and canonical URLs

## Prioritized Backlog

### P1 - High Priority
- Implement Qualifier Wizard (multi-step lead qualification form)

### P2 - Medium Priority
- PDF Upload for Document Portal
- Embed Payment Link in PayAnywhere flow

### P3 - Lower Priority
- "How to Get a Free POS System" content page
- DocuSign Integration for document portal

### P4 - Future
- Backend Content Migration to MongoDB CMS
- Component Refactoring
- Fix broken video heroes on older pages

## Tech Stack
- Frontend: React, react-helmet-async, globe.gl, three.js, topojson-client
- Backend: FastAPI, MongoDB
- Integrations: AutoSEO.ai, Lead Connector, Calendly, Emergent Object Storage, MaverickClient

## Credentials
- Blog Admin: `/resources/blog/admin` - marketing@merchantsolutionscorp.com / Mscpay$1
- Document Portal: `/resources/documents` - admin1 / 12345
