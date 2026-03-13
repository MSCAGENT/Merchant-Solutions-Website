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

### Payment Processing Interlinking (March 2026) - COMPLETED
- Added internal links on `/solutions/payment-processing` page connecting each payment type section to its dedicated page (Clover, Dejavoo, Ingenico, PayAnywhere, ACH, eCommerce, Gateways, Dual Pricing)

### Business Loans Page Enhancements (March 2026) - COMPLETED
- Added Square Financial as 6th funding option ($150K-$1.5M, links to Square page)
- Added 10 detailed FAQs with FAQ schema markup for rich search results

### Site-wide SEO Overhaul (March 2026) - COMPLETED
- All 50+ public pages have absolute canonical URLs, robots meta, OG tags, BreadcrumbList, Organization, Service, and FAQPage JSON-LD schemas
- Zero relative canonical URLs remaining

### Pages Created
- `/support` - Support Center with live search, knowledge base
- `/smart-payment-terminals` - Smart Payment Terminals with slideshow
- `/service-areas` - Service Areas with 3D interactive globe
- `/ecommerce-payments` - Ecommerce Payments (SEO gold standard)
- `/cloud-kitchen-pos-system` - Cloud Kitchen POS with video hero
- `/food-trucks-pos` - Food Trucks POS with video hero

### Key Features
- ScrollToTop navigation fix (site-wide)
- AI-Powered Section component on 14 pages
- Footer with full sitemap and social links
- Blog admin panel with attachment uploads
- Secure document portal with auth

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
