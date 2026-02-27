# Payment Processing Website - PRD

## Original Problem Statement
Build a comprehensive, SEO-optimized payment processing website for Merchant Solutions Corp. Multi-page frontend with specific design language, complex navigation, numerous content pages with specific layouts, functional forms, and granular UI/UX and SEO enhancements.

## Tech Stack
- **Frontend**: React.js + TailwindCSS + Shadcn/UI
- **Routing**: react-router-dom
- **Backend**: Not yet implemented (all content hardcoded)
- **External Services**: Lead Connector (iframes), Calendly (iframes), Formstack

## Architecture
- Frontend-only React app with 70+ pages
- All content hardcoded in React components
- Forms handled via external services (Lead Connector, Calendly, Formstack) embedded in modals/iframes

## Implemented Pages (Key)
- Home, About, Contact, Careers, Resources, Security
- Payment Processing, Gateway, MSC Gateway
- CloverPOS, SquarePOS (with video hero), PayAnywhere, Dejavoo Terminals, Ingenico Terminals
- POS Hardware, Industry Detail, Solution Detail
- Restaurant Payment Processing (video hero)
- Dental Payment Processing (dual-video hero, EMR carousel)
- Medical Clinics Payment Processing (dual-video hero, EMR carousel)
- High Risk Merchant Services (dark theme, image slideshow hero)
- ATM Solutions
- IT Services / Tech & Installation
- Agents & ISO Partnerships
- ISV Partnerships
- Partners, Partnerships
- Solutions sub-pages

## Latest Changes (Feb 2026)
- **Square POS page**: Added dual-video cycling hero section with two provided Square videos

## Pending Tasks
- P0: Add images to Agents & ISO Partnership page
- User will likely continue with incremental page updates

## Backlog
- P1: Backend Integration (MongoDB + FastAPI for dynamic content)
- P2: Component Refactoring (break down large page files >800 lines)
- P3: Abstract reusable components (modals, hero sections, carousels)

## Key Patterns
- Hero sections: video backgrounds (single or cycling) or image slideshows with gradient overlay
- Modals: Shadcn Dialog with iframe content (Lead Connector for quotes, Calendly for demos)
- Logo Carousels: CSS animation for infinitely scrolling logos
- New page pattern: create component → add SEO route in App.js → update Header.jsx nav → alias old route
