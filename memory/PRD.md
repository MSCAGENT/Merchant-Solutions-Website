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

### Dejavoo Terminals - Free Placement & Activation Flow (March 2026) - COMPLETED
1. Added Free Placement disclosure below Dual Pricing rate card
2. Updated all 3 testimonials (Jason D. Orlando FL, Linda M. Katy TX, Brianna G. New York NY)
3. Changed terminal "Pricing" buttons to "Free Placement" with:
   - Pricing modal showing Dual Pricing + Flat Rate with disclosure
   - "Apply Now" triggers Activation & Shipping Deposit popup ($45 activation, deposit covers)
   - "Continue Activation" links to JotForm application

### 8-Point Dejavoo & Smart Terminals Update (March 2026) - COMPLETED
1. MAPLE logo in AIPoweredSection reverted to original colors (removed filter)
2. Dejavoo Standard plan: added 4G Sim Card Service feature; Premium plan: rewrote all features
3. Added "Create an Account" buttons to Flat Rate and Dual Pricing rate cards
4. Changed Xerocharge merchant rate from 3.89% to 0%
5. Fixed CRITICAL recurring pricing modal glitch (single controlled Dialog pattern)
6. Replaced P18 terminal image with user-provided asset
7. Added "Purchase Now" buttons to all 4 Smart Terminals product cards
8. Added 5 new FAQs with FAQPage schema to Smart Terminals page

### Site-wide SEO Overhaul (March 2026) - COMPLETED
- All 50+ public pages have absolute canonical URLs, robots meta, OG tags, BreadcrumbList, Organization, Service, and FAQPage JSON-LD schemas

### Other Completed Work
- Payment Processing page interlinking (10 internal links)
- Business Loans page: Square Financial funding option + 10 FAQs with schema
- ScrollToTop navigation fix (site-wide)
- Footer with full sitemap and social links
- Multiple new pages: EcommercePayments, ServiceAreas, CloudKitchenPOS, FoodTrucksPOS

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
- Component Refactoring (break down monolithic pages)
- Fix broken video heroes on older pages
- Self-Ordering Kiosk page consolidation

## Tech Stack
- Frontend: React, react-helmet-async, globe.gl, three.js, topojson-client
- Backend: FastAPI, MongoDB
- Integrations: AutoSEO.ai, Lead Connector, Calendly, Emergent Object Storage

## Credentials
- Blog Admin: `/resources/blog/admin` - marketing@merchantsolutionscorp.com / Mscpay$1
- Document Portal: `/resources/documents` - admin1 / 12345
