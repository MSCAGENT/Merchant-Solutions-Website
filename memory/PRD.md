# Merchant Solutions Corp - Payment Processing Website

## Original Problem Statement
Build a comprehensive, SEO-optimized payment processing website with a blog CMS, secure document portal, interactive tools, and extensive industry/solution pages.

## Architecture
- **Frontend**: React + TailwindCSS + Shadcn UI
- **Backend**: FastAPI + MongoDB
- **Integrations**: Calendly popups, Lead Connector iframes, Emergent Object Storage

## What's Been Implemented
- Full-stack blog CMS with admin panel
- Secure document portal (login-protected)
- Interactive savings calculator (Dual Pricing page)
- Numerous SEO-optimized industry/solution pages
- Calendly popup standardization across all pages
- Video hero backgrounds on Gas Station and Dual Pricing pages
- Self Ordering Kiosk page removed per user request (2026-03-03)

## Key Pages
- Home, Contact, About, Security, Pricing, Careers
- Solutions: Payment Processing, Dual Pricing, Gift Cards, Crypto, Loyalty, Business Loans, ATMs, Payroll, IT Services, Gateway
- Industries: Restaurants, Healthcare, Chiropractors, Dental, Medical, Salon/Spa, Gas Station, Professional Services, Retail, High Risk, Specialty
- POS/Hardware: Clover, Square, Exatouch, PayAnywhere, Dejavoo, Ingenico, DaySmart Salon
- Blog: /resources/blog (public), /resources/blog/admin (admin)
- Documents: /resources/documents (login-protected)

## Completed (2026-03-03)
- P0: Added video background to Dual Pricing hero section
- Deleted Self Ordering Kiosk page and cleaned up routes/navigation

## Known Issues
- Hero section videos may be broken on some pages (user will address later with custom forms)

## Upcoming Tasks
- P1: DocuSign integration for document portal
- P2: Full backend content migration (hardcoded to DB)

## Backlog
- P3: Component refactoring (break large pages into smaller components)
- P4: Abstract common hero/content grid patterns

## Credentials
- Document Portal: admin1 / 12345
- Blog Admin: marketing@merchantsolutionscorp.com / Mscpay$1
