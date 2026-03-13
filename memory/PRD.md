# PRD: Merchant Solutions Corp Website

## Original Problem Statement
Build and maintain a comprehensive marketing/sales website for a merchant services company. Key goals: expand content for SEO, enhance existing pages, automate blog creation, and create lead qualification tools.

## What's Been Implemented

### Dejavoo Terminal Cards & Maverick Forms (March 2026) - COMPLETED
1. Flat Rate card: changed rate to 2.60% + $0.10, added Free Placement disclosure
2. Both "Create an Account" buttons open Maverick boarding forms in popup (Dual: id 1180, Flat: id 1497)
3. All 8 terminal "Free Placement" buttons → "Subscribe Now"
4. XerochargeGO shows monthly fees: Dual Price $9.99/mo, Flat Rate $14.95/mo
5. Modal Advantage Program: $99 annual fee lowered to $79
6. Both modal "Apply Now" buttons open Maverick forms with MSC logo at top

### Previous Dejavoo Updates (March 2026) - COMPLETED
- Redesigned Free Placement modal: MOST POPULAR badge, benefit checkmarks, full Advantage Program disclosure
- Free Placement disclosure, updated testimonials, activation flow
- Standard/Premium features, Xerocharge 0%, P18 image, modal glitch fix, Create Account buttons

### Smart Terminals (March 2026) - COMPLETED
- "Purchase Now" buttons on all 4 product cards
- 5 new FAQs with FAQPage schema

### Navigation (March 2026) - COMPLETED
- PayAnywhere POS moved from "POS Systems" to "Payment Terminals"

### Site-wide SEO (March 2026) - COMPLETED
- 50+ pages with full JSON-LD schemas and canonical URLs

## Known Limitations
- Maverick form "Continue/Start" button color cannot be changed from our code (cross-origin iframe from merchantsolutionscorpdb.com). Must be changed in the Maverick boarding platform admin.

## Prioritized Backlog

### P1 - High Priority
- Implement Qualifier Wizard (multi-step lead qualification form)

### P2 - Medium Priority
- PDF Upload for Document Portal
- Embed Payment Link in PayAnywhere flow

### P3 - Lower Priority
- "How to Get a Free POS System" content page
- DocuSign Integration

### P4 - Future
- Backend Content Migration to MongoDB CMS
- Component Refactoring
- Fix broken video heroes on older pages

## Tech Stack
- Frontend: React, react-helmet-async, globe.gl, three.js
- Backend: FastAPI, MongoDB
- Integrations: AutoSEO.ai, Lead Connector, Calendly, Emergent Object Storage, MaverickClient

## Credentials
- Blog Admin: `/resources/blog/admin` - marketing@merchantsolutionscorp.com / Mscpay$1
- Document Portal: `/resources/documents` - admin1 / 12345
