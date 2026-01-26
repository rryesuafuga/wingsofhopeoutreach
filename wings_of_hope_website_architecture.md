# Wings of Hope Outreach Website Architecture

## Complete Technical & Design Documentation

**Version:** 1.0  
**Document Date:** January 26, 2026  
**Organization:** Wings of Hope Outreach Limited  
**Registration No:** 80034655477699  
**Tagline:** *Inspiring Hope, Transforming Lives*

---

## Executive Summary

This document provides the complete technical architecture for the Wings of Hope Outreach website—a modern, accessible, Vercel-deployable web application featuring professional visualizations, interactive D3.js components, GSAP animations, and WCAG 2.1 AA compliant design optimized for colorblind accessibility.

The website serves as the digital presence for Wings of Hope Outreach Limited, a Uganda-based NGO incorporated on June 11, 2024, focused on supporting vulnerable children, youth, and communities through 13 comprehensive program areas.

---

## Table of Contents

1. [Organization Profile](#1-organization-profile)
2. [Technology Stack](#2-technology-stack)
3. [Project Structure](#3-project-structure)
4. [Page Architecture](#4-page-architecture)
5. [Component Library](#5-component-library)
6. [Interactive Visualizations](#6-interactive-visualizations)
7. [Accessibility & Colorblind Design](#7-accessibility--colorblind-design)
8. [Animation System](#8-animation-system)
9. [Database Schema](#9-database-schema)
10. [API Architecture](#10-api-architecture)
11. [Deployment Configuration](#11-deployment-configuration)
12. [Design System](#12-design-system)
13. [Performance Optimization](#13-performance-optimization)
14. [Security Implementation](#14-security-implementation)
15. [Sitemap & Routing](#15-sitemap--routing)

---

## 1. Organization Profile

### 1.1 Legal Information

| Field | Value |
|-------|-------|
| **Legal Name** | Wings of Hope Outreach Limited |
| **Registration Number** | 80034655477699 |
| **Type** | Company Limited By Guarantee Without Share Capital |
| **Incorporation Date** | June 11, 2024 |
| **Country** | Republic of Uganda |
| **Registered Office** | Uganda |

### 1.2 Leadership

| Role | Name | Location |
|------|------|----------|
| **Director** | Gabula Hannah | Wakiso, Kitala, Uganda |
| **Secretary** | Kitimbo Shellor Sarah | Wakiso, Katabitc, Kitala |

### 1.3 Founding Subscribers

1. Gabula Hannah - Business Woman
2. Nyende Proscovia - Business Woman
3. Mutesi Eunice - Business Woman

### 1.4 Mission & Objects (13 Program Areas)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    WINGS OF HOPE OUTREACH PROGRAMS                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐             │
│  │   EDUCATION     │  │    HEALTH &     │  │   ECONOMIC      │             │
│  │   & YOUTH       │  │   NUTRITION     │  │   EMPOWERMENT   │             │
│  ├─────────────────┤  ├─────────────────┤  ├─────────────────┤             │
│  │ • Basic Social  │  │ • Community     │  │ • Income        │             │
│  │   Necessities   │  │   Healthcare    │  │   Generation    │             │
│  │ • Educational   │  │ • Nutrition     │  │ • Microfinance  │             │
│  │   Institutions  │  │ • Water/WASH    │  │   Scheme        │             │
│  │ • Vocational    │  │ • Environmental │  │ • Poverty       │             │
│  │   Training      │  │   Sanitation    │  │   Eradication   │             │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘             │
│                                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐             │
│  │   CHILD &       │  │   FAMILY &      │  │   SPIRITUAL &   │             │
│  │   FOSTER CARE   │  │   COUNSELING    │  │   MORAL VALUES  │             │
│  ├─────────────────┤  ├─────────────────┤  ├─────────────────┤             │
│  │ • Foster Homes  │  │ • Marriage      │  │ • Religious     │             │
│  │ • Vulnerable    │  │   Counseling    │  │   Values        │             │
│  │   Children      │  │ • Home/Family   │  │ • Ethics        │             │
│  │ • Moral         │  │   Services      │  │ • Community     │             │
│  │   Guidance      │  │ • Church/Society│  │   Strengthening │             │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘             │
│                                                                             │
│  ┌─────────────────┐  ┌─────────────────┐                                   │
│  │   AGRICULTURE   │  │   GOVERNANCE    │                                   │
│  │   & FARMING     │  │   & INTEGRITY   │                                   │
│  ├─────────────────┤  ├─────────────────┤                                   │
│  │ • Food Crops    │  │ • Financial     │                                   │
│  │ • Animal        │  │   Integrity     │                                   │
│  │   Farming       │  │ • Sound         │                                   │
│  │ • Training &    │  │   Governance    │                                   │
│  │   Sensitization │  │ • Record Keeping│                                   │
│  └─────────────────┘  └─────────────────┘                                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Technology Stack

### 2.1 Core Framework

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| **Framework** | Next.js | 14.x | React-based SSR/SSG framework |
| **Runtime** | Node.js | 20.x LTS | Server runtime |
| **Language** | TypeScript | 5.x | Type-safe development |
| **Styling** | Tailwind CSS | 3.4.x | Utility-first CSS |
| **Animation** | GSAP | 3.12.x | Professional animations |
| **Visualization** | D3.js | 7.x | Data visualizations |
| **Charts** | Chart.js | 4.x | Statistical charts |
| **Maps** | Leaflet | 1.9.x | Interactive maps |
| **3D Graphics** | Three.js | r160 | 3D visual effects |

### 2.2 Backend & Database

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Database** | PostgreSQL (Supabase) | Primary data store |
| **ORM** | Prisma | Database toolkit |
| **Authentication** | NextAuth.js | User authentication |
| **File Storage** | Cloudinary | Image/media CDN |
| **Email** | Resend | Transactional emails |
| **Forms** | React Hook Form + Zod | Form handling & validation |

### 2.3 Deployment & DevOps

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Hosting** | Vercel | Edge deployment |
| **CDN** | Vercel Edge Network | Global content delivery |
| **Analytics** | Vercel Analytics | Performance monitoring |
| **CI/CD** | GitHub Actions | Automated deployment |
| **Monitoring** | Sentry | Error tracking |

### 2.4 Development Tools

```bash
# Package Manager
pnpm (recommended) or npm

# Code Quality
ESLint + Prettier
Husky (Git hooks)
lint-staged

# Testing
Jest + React Testing Library
Playwright (E2E)
Storybook (Component docs)
```

---

## 3. Project Structure

### 3.1 Directory Architecture

```
wings-of-hope-outreach/
├── .github/
│   └── workflows/
│       ├── ci.yml                    # CI pipeline
│       └── deploy.yml                # Vercel deployment
├── public/
│   ├── fonts/
│   │   ├── playfair-display/         # Heading font
│   │   └── source-sans/              # Body font
│   ├── images/
│   │   ├── logo/
│   │   │   ├── woho-logo.svg         # Primary logo
│   │   │   ├── woho-logo-white.svg   # White variant
│   │   │   └── woho-icon.svg         # Favicon/icon
│   │   ├── hero/                     # Hero section images
│   │   ├── programs/                 # Program images
│   │   ├── team/                     # Team photos
│   │   ├── gallery/                  # Photo gallery
│   │   └── partners/                 # Partner logos
│   ├── documents/
│   │   ├── registration-certificate.pdf
│   │   ├── annual-reports/
│   │   └── policies/
│   └── favicon.ico
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (marketing)/              # Marketing pages group
│   │   │   ├── page.tsx              # Home page
│   │   │   ├── about/
│   │   │   │   ├── page.tsx          # About us
│   │   │   │   ├── leadership/
│   │   │   │   ├── history/
│   │   │   │   └── partners/
│   │   │   ├── programs/
│   │   │   │   ├── page.tsx          # All programs
│   │   │   │   ├── [slug]/           # Individual program
│   │   │   │   ├── education/
│   │   │   │   ├── healthcare/
│   │   │   │   ├── economic-empowerment/
│   │   │   │   ├── foster-care/
│   │   │   │   ├── counseling/
│   │   │   │   ├── vocational-training/
│   │   │   │   ├── agriculture/
│   │   │   │   └── spiritual-development/
│   │   │   ├── impact/
│   │   │   │   ├── page.tsx          # Impact dashboard
│   │   │   │   ├── stories/          # Success stories
│   │   │   │   └── reports/          # Annual reports
│   │   │   ├── get-involved/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── donate/
│   │   │   │   ├── volunteer/
│   │   │   │   ├── partner/
│   │   │   │   └── sponsor-child/
│   │   │   ├── news/
│   │   │   │   ├── page.tsx          # Blog/news listing
│   │   │   │   └── [slug]/           # Individual article
│   │   │   ├── gallery/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [album]/
│   │   │   └── contact/
│   │   │       └── page.tsx
│   │   ├── (dashboard)/              # Admin dashboard group
│   │   │   ├── admin/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── donations/
│   │   │   │   ├── volunteers/
│   │   │   │   ├── content/
│   │   │   │   └── analytics/
│   │   │   └── donor-portal/
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   ├── donate/
│   │   │   ├── newsletter/
│   │   │   ├── volunteer/
│   │   │   └── webhooks/
│   │   ├── layout.tsx                # Root layout
│   │   ├── globals.css               # Global styles
│   │   └── not-found.tsx             # 404 page
│   ├── components/
│   │   ├── ui/                       # Base UI components
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── Modal/
│   │   │   ├── Input/
│   │   │   ├── Select/
│   │   │   └── ...
│   │   ├── layout/                   # Layout components
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Navigation.tsx
│   │   │   │   ├── MobileMenu.tsx
│   │   │   │   └── SearchModal.tsx
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── FooterLinks.tsx
│   │   │   │   └── Newsletter.tsx
│   │   │   └── Sidebar/
│   │   ├── sections/                 # Page sections
│   │   │   ├── Hero/
│   │   │   │   ├── HeroSlideshow.tsx
│   │   │   │   ├── HeroParticles.tsx
│   │   │   │   └── HeroStats.tsx
│   │   │   ├── Programs/
│   │   │   │   ├── ProgramCarousel.tsx
│   │   │   │   └── ProgramCard.tsx
│   │   │   ├── Impact/
│   │   │   │   ├── ImpactDashboard.tsx
│   │   │   │   ├── StatisticsCounter.tsx
│   │   │   │   └── ImpactMap.tsx
│   │   │   ├── Stories/
│   │   │   ├── CTA/
│   │   │   └── Partners/
│   │   ├── visualizations/           # D3.js & Chart components
│   │   │   ├── ImpactChart/
│   │   │   │   ├── ImpactChart.tsx
│   │   │   │   └── ImpactChart.d3.ts
│   │   │   ├── DonationFlow/
│   │   │   │   ├── SankeyDiagram.tsx
│   │   │   │   └── SankeyDiagram.d3.ts
│   │   │   ├── GeographicMap/
│   │   │   │   ├── UgandaMap.tsx
│   │   │   │   └── UgandaMap.d3.ts
│   │   │   ├── ProgramRadar/
│   │   │   │   ├── RadarChart.tsx
│   │   │   │   └── RadarChart.d3.ts
│   │   │   ├── TimelineViz/
│   │   │   │   ├── InteractiveTimeline.tsx
│   │   │   │   └── Timeline.d3.ts
│   │   │   ├── TreeMap/
│   │   │   │   └── BudgetTreeMap.tsx
│   │   │   └── shared/
│   │   │       ├── ChartContainer.tsx
│   │   │       ├── Tooltip.tsx
│   │   │       └── Legend.tsx
│   │   ├── animations/               # GSAP animations
│   │   │   ├── ScrollReveal.tsx
│   │   │   ├── CounterAnimation.tsx
│   │   │   ├── ParallaxSection.tsx
│   │   │   ├── MorphingShapes.tsx
│   │   │   └── HoverEffects.tsx
│   │   └── forms/                    # Form components
│   │       ├── ContactForm.tsx
│   │       ├── DonationForm.tsx
│   │       ├── VolunteerForm.tsx
│   │       └── SponsorshipForm.tsx
│   ├── lib/
│   │   ├── db/
│   │   │   ├── prisma.ts             # Prisma client
│   │   │   └── queries/              # Database queries
│   │   ├── utils/
│   │   │   ├── formatters.ts
│   │   │   ├── validators.ts
│   │   │   └── helpers.ts
│   │   ├── hooks/
│   │   │   ├── useIntersectionObserver.ts
│   │   │   ├── useWindowSize.ts
│   │   │   ├── useScrollPosition.ts
│   │   │   └── useMediaQuery.ts
│   │   ├── animations/
│   │   │   ├── gsap-config.ts
│   │   │   ├── scroll-triggers.ts
│   │   │   └── page-transitions.ts
│   │   └── visualizations/
│   │       ├── d3-config.ts
│   │       ├── color-scales.ts
│   │       └── chart-utils.ts
│   ├── styles/
│   │   ├── globals.css
│   │   ├── typography.css
│   │   ├── animations.css
│   │   └── colorblind-safe.css
│   ├── types/
│   │   ├── index.ts
│   │   ├── program.ts
│   │   ├── donation.ts
│   │   └── content.ts
│   └── constants/
│       ├── navigation.ts
│       ├── programs.ts
│       └── site-config.ts
├── prisma/
│   ├── schema.prisma                 # Database schema
│   ├── migrations/
│   └── seed.ts                       # Seed data
├── .env.example
├── .env.local
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── vercel.json
└── README.md
```

---

## 4. Page Architecture

### 4.1 Master Layout Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          ANNOUNCEMENT BAR (optional)                        │
│  "Join us for our Annual Charity Gala - Register Now →"                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                              TOP BAR                                        │
│  📍 Wakiso, Uganda  │  📧 info@wingsofhopeoutreach.org  │  📞 +256 XXX XXX │
│  [FB] [TW] [IG] [LI] [YT]                                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                           MAIN HEADER (Sticky)                              │
│                                                                             │
│  [LOGO]              [Navigation Menu]                    [Donate Button]   │
│  Wings of Hope       About ▼ | Programs ▼ | Impact |      [🤍 Donate Now]  │
│  Outreach            Get Involved ▼ | News | Contact       [🔍]            │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                                                                             │
│                          MAIN CONTENT AREA                                  │
│                        (Page-specific content)                              │
│                                                                             │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                        DONATION CTA STRIP                                   │
│  "Your generosity transforms lives. Every donation matters."  [Donate Now]  │
├─────────────────────────────────────────────────────────────────────────────┤
│                              FOOTER                                         │
│  ┌───────────────┬───────────────┬───────────────┬───────────────┐         │
│  │ About WOHO    │ Our Programs  │ Get Involved  │ Contact Info  │         │
│  │ • Our Story   │ • Education   │ • Donate      │ • Address     │         │
│  │ • Leadership  │ • Healthcare  │ • Volunteer   │ • Phone       │         │
│  │ • Partners    │ • Foster Care │ • Partner     │ • Email       │         │
│  │ • Reports     │ • Vocational  │ • Sponsor     │ • Hours       │         │
│  └───────────────┴───────────────┴───────────────┴───────────────┘         │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────┐       │
│  │                    NEWSLETTER SUBSCRIPTION                       │       │
│  │  Stay updated with our mission  [Email...........] [Subscribe]  │       │
│  └─────────────────────────────────────────────────────────────────┘       │
│                                                                             │
│  Registration: 80034655477699 | © 2024 Wings of Hope Outreach Limited      │
│  [Privacy] [Terms] [Accessibility] [Sitemap]                                │
└─────────────────────────────────────────────────────────────────────────────┘
│                      [↑ Back to Top Button]                                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Home Page Sections

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  SECTION 1: HERO SLIDESHOW (100vh)                                          │
│  ┌─────────────────────────────────────────────────────────────────────────┐│
│  │                                                                         ││
│  │  ┌──────────────────────────────────────────────────────────────────┐  ││
│  │  │                    Animated Dove + Cross Logo                    │  ││
│  │  │                    (Three.js 3D animation)                       │  ││
│  │  └──────────────────────────────────────────────────────────────────┘  ││
│  │                                                                         ││
│  │                    WINGS OF HOPE OUTREACH                               ││
│  │              "Inspiring Hope, Transforming Lives"                       ││
│  │                                                                         ││
│  │  Empowering vulnerable children, youth, and communities                 ││
│  │  in Uganda through holistic development programs                        ││
│  │                                                                         ││
│  │  [Explore Our Mission]        [Donate Now]                              ││
│  │                                                                         ││
│  │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐                           ││
│  │  │ 500+   │ │  13    │ │  5+    │ │ 1000+  │   (Animated counters)     ││
│  │  │Children│ │Programs│ │Partners│ │ Lives  │                           ││
│  │  │Reached │ │ Active │ │        │ │Impacted│                           ││
│  │  └────────┘ └────────┘ └────────┘ └────────┘                           ││
│  │                                                                         ││
│  │  [● ○ ○ ○ ○]  Slide indicators                                         ││
│  └─────────────────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  SECTION 2: WELCOME / ABOUT PREVIEW                                         │
│  ┌─────────────────────────────────────────────────────────────────────────┐│
│  │  ┌────────────────────────┐  ┌────────────────────────────────────────┐││
│  │  │                        │  │                                        │││
│  │  │   [Image: Community    │  │  Welcome to Wings of Hope Outreach     │││
│  │  │    outreach scene]     │  │  ─────────────────────────────────     │││
│  │  │                        │  │                                        │││
│  │  │   GSAP parallax        │  │  Wings of Hope Outreach Limited was    │││
│  │  │   scroll effect        │  │  founded in Uganda in June 2024 as     │││
│  │  │                        │  │  a response to the needs of vulnerable │││
│  │  │                        │  │  children, youth, and communities.     │││
│  │  │                        │  │                                        │││
│  │  │                        │  │  Our 13 program areas address:         │││
│  │  │                        │  │  • Education & Basic Necessities       │││
│  │  │                        │  │  • Healthcare & Nutrition              │││
│  │  │                        │  │  • Economic Empowerment                │││
│  │  │                        │  │  • Foster Care & Child Protection      │││
│  │  │                        │  │                                        │││
│  │  │                        │  │  [Learn More About Us →]               │││
│  │  └────────────────────────┘  └────────────────────────────────────────┘││
│  └─────────────────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  SECTION 3: PROGRAMS OVERVIEW (Interactive D3.js Wheel)                     │
│  ┌─────────────────────────────────────────────────────────────────────────┐│
│  │                      Our Programs                                       ││
│  │                      ─────────────                                      ││
│  │  "The mandate of our organization is to transform lives through         ││
│  │   comprehensive community development"                                  ││
│  │                                                                         ││
│  │  ┌─────────────────────────────────────────────────────────────────┐   ││
│  │  │                                                                 │   ││
│  │  │              [Interactive Program Wheel - D3.js]                │   ││
│  │  │                                                                 │   ││
│  │  │                    ┌───────────────┐                            │   ││
│  │  │          Education │               │ Healthcare                 │   ││
│  │  │                 ╲  │    WINGS OF   │  ╱                         │   ││
│  │  │    Vocational    ─ │     HOPE      │ ─   Counseling             │   ││
│  │  │                 ╱  │   (Dove Icon) │  ╲                         │   ││
│  │  │         Foster    │               │  Agriculture                │   ││
│  │  │           Care     └───────────────┘                            │   ││
│  │  │                          │                                      │   ││
│  │  │                     Microfinance                                │   ││
│  │  │                                                                 │   ││
│  │  │     Click any segment to learn more                             │   ││
│  │  └─────────────────────────────────────────────────────────────────┘   ││
│  │                                                                         ││
│  │  [View All Programs →]                                                  ││
│  └─────────────────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  SECTION 4: IMPACT DASHBOARD (D3.js + GSAP)                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐│
│  │  ┌────────────────────────────────────────────────────────────────────┐││
│  │  │                      Our Impact                                    │││
│  │  │                      ──────────                                    │││
│  │  │                                                                    │││
│  │  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                │││
│  │  │  │  Interactive │  │   Program   │  │  Geographic │                │││
│  │  │  │   Timeline   │  │   Radar     │  │    Map      │                │││
│  │  │  │   (D3.js)    │  │  (D3.js)    │  │  (Leaflet)  │                │││
│  │  │  │             │  │             │  │             │                │││
│  │  │  │  2024 ──●── │  │      ╱╲     │  │  [Uganda]   │                │││
│  │  │  │  Jun: Founded│  │     ╱  ╲    │  │     ●       │                │││
│  │  │  │             │  │    ╱    ╲   │  │    Wakiso   │                │││
│  │  │  │  2024 ──●── │  │   ╱      ╲  │  │             │                │││
│  │  │  │  First...   │  │  ╱────────╲ │  │             │                │││
│  │  │  └─────────────┘  └─────────────┘  └─────────────┘                │││
│  │  │                                                                    │││
│  │  │  [View Full Impact Report →]                                       │││
│  │  └────────────────────────────────────────────────────────────────────┘││
│  └─────────────────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  SECTION 5: SUCCESS STORIES (Carousel)                                      │
│  ┌─────────────────────────────────────────────────────────────────────────┐│
│  │                   Stories of Transformation                             ││
│  │                   ─────────────────────────                             ││
│  │                                                                         ││
│  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐                    ││
│  │  │   [Photo]    │ │   [Photo]    │ │   [Photo]    │                    ││
│  │  │              │ │              │ │              │                    ││
│  │  │  "Education  │ │ "The foster  │ │ "Vocational  │                    ││
│  │  │   changed    │ │  program     │ │  training    │                    ││
│  │  │   my life"   │ │  gave me     │ │  helped me   │                    ││
│  │  │              │ │  a family"   │ │  start..."   │                    ││
│  │  │  - Mary, 14  │ │ - John, 12   │ │ - Sarah, 22  │                    ││
│  │  │              │ │              │ │              │                    ││
│  │  │ [Read More]  │ │ [Read More]  │ │ [Read More]  │                    ││
│  │  └──────────────┘ └──────────────┘ └──────────────┘                    ││
│  │                                                                         ││
│  │  [← Prev]                [● ○ ○ ○]                    [Next →]          ││
│  └─────────────────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  SECTION 6: DONATION CTA (Full-width with Sankey Diagram)                   │
│  ┌─────────────────────────────────────────────────────────────────────────┐│
│  │  Background: Gradient with subtle pattern                               ││
│  │                                                                         ││
│  │                Your Generosity in Action                                ││
│  │                ─────────────────────────                                ││
│  │                                                                         ││
│  │  ┌─────────────────────────────────────────────────────────────────┐   ││
│  │  │              Where Your Donation Goes (Sankey Diagram)          │   ││
│  │  │                                                                 │   ││
│  │  │  $100 ═══════╦═══════════════════════════► Education (35%)      │   ││
│  │  │  Donation    ╠═══════════════════► Healthcare (25%)             │   ││
│  │  │              ╠════════════► Foster Care (20%)                   │   ││
│  │  │              ╠════════► Vocational (15%)                        │   ││
│  │  │              ╚════► Operations (5%)                             │   ││
│  │  │                                                                 │   ││
│  │  └─────────────────────────────────────────────────────────────────┘   ││
│  │                                                                         ││
│  │  [Donate $25]  [Donate $50]  [Donate $100]  [Custom Amount]            ││
│  └─────────────────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  SECTION 7: NEWS / BLOG PREVIEW                                             │
│  ┌─────────────────────────────────────────────────────────────────────────┐│
│  │                      Latest News & Updates                              ││
│  │                      ─────────────────────                              ││
│  │                                                                         ││
│  │  ┌────────────────┐ ┌────────────────┐ ┌────────────────┐              ││
│  │  │    [Image]     │ │    [Image]     │ │    [Image]     │              ││
│  │  │                │ │                │ │                │              ││
│  │  │  Jan 15, 2025  │ │  Jan 10, 2025  │ │  Jan 5, 2025   │              ││
│  │  │  ─────────     │ │  ─────────     │ │  ─────────     │              ││
│  │  │  First Annual  │ │  New Vocational│ │  Community     │              ││
│  │  │  Report...     │ │  Center Opens  │ │  Health Camp   │              ││
│  │  │                │ │                │ │                │              ││
│  │  │  [Read More]   │ │  [Read More]   │ │  [Read More]   │              ││
│  │  └────────────────┘ └────────────────┘ └────────────────┘              ││
│  │                                                                         ││
│  │  [View All News →]                                                      ││
│  └─────────────────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  SECTION 8: PARTNERS & SUPPORTERS                                           │
│  ┌─────────────────────────────────────────────────────────────────────────┐│
│  │                    Our Partners & Supporters                            ││
│  │                    ─────────────────────────                            ││
│  │                                                                         ││
│  │  [Logo 1] ─→ [Logo 2] ─→ [Logo 3] ─→ [Logo 4] ─→ [Logo 5] ─→          ││
│  │                    (Infinite scroll carousel)                           ││
│  │                                                                         ││
│  │  [Become a Partner →]                                                   ││
│  └─────────────────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.3 Programs Page Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  HERO SECTION (30vh)                                                        │
│  "Our Programs" - Empowering Communities Through Holistic Development       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PROGRAM CATEGORIES (Interactive Grid with D3.js Treemap)                   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                                                                     │   │
│  │  ┌──────────────────┬──────────────────┬──────────────────┐        │   │
│  │  │    EDUCATION     │    HEALTHCARE    │    ECONOMIC      │        │   │
│  │  │    & YOUTH       │    & NUTRITION   │   EMPOWERMENT    │        │   │
│  │  │                  │                  │                  │        │   │
│  │  │  • Basic needs   │  • Community     │  • Microfinance  │        │   │
│  │  │  • Institutions  │    healthcare    │  • Income gen    │        │   │
│  │  │  • Vocational    │  • Nutrition     │  • Poverty       │        │   │
│  │  │    training      │  • WASH          │    eradication   │        │   │
│  │  ├──────────────────┼──────────────────┼──────────────────┤        │   │
│  │  │  FOSTER CARE     │   COUNSELING     │   AGRICULTURE    │        │   │
│  │  │  & PROTECTION    │   & FAMILY       │   & FARMING      │        │   │
│  │  │                  │                  │                  │        │   │
│  │  │  • Foster homes  │  • Marriage      │  • Food crops    │        │   │
│  │  │  • Vulnerable    │  • Home/family   │  • Animal        │        │   │
│  │  │    children      │  • Church/society│    farming       │        │   │
│  │  │  • Moral guidance│                  │  • Training      │        │   │
│  │  ├──────────────────┴──────────────────┴──────────────────┤        │   │
│  │  │           SPIRITUAL & GOVERNANCE                        │        │   │
│  │  │  • Religious values  • Ethics  • Sound governance       │        │   │
│  │  └─────────────────────────────────────────────────────────┘        │   │
│  │                                                                     │   │
│  │  [Click any program to learn more]                                  │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.4 Impact Page Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  HERO: "Our Impact" - Measuring What Matters                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  REAL-TIME IMPACT DASHBOARD                                                 │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐   │   │
│  │  │  500+   │  │   13    │  │   5+    │  │  50+    │  │  1000+  │   │   │
│  │  │Children │  │Programs │  │Partners │  │Volunteers│ │ Lives   │   │   │
│  │  │ Served  │  │ Active  │  │         │  │         │  │Impacted │   │   │
│  │  └─────────┘  └─────────┘  └─────────┘  └─────────┘  └─────────┘   │   │
│  │                    (Animated counters with GSAP)                    │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  GEOGRAPHIC REACH (Leaflet + D3.js)                                         │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                                                                     │   │
│  │                         UGANDA MAP                                  │   │
│  │                                                                     │   │
│  │                            ●  Wakiso - Main Office                  │   │
│  │                            ●  Kitala - Program Center               │   │
│  │                            ●  Partner Locations                     │   │
│  │                                                                     │   │
│  │  [Interactive - hover for details]                                  │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  PROGRAM PERFORMANCE (D3.js Radar Chart)                                    │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                                                                     │   │
│  │  Compare program reach and effectiveness across all 13 areas        │   │
│  │                                                                     │   │
│  │                      Education ────●────                            │   │
│  │                    ╱                    ╲                            │   │
│  │         Governance                       Healthcare                 │   │
│  │                  ╲                      ╱                            │   │
│  │                   ╲────────●────────╱                               │   │
│  │                                                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  FINANCIAL TRANSPARENCY (D3.js Treemap)                                     │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  How We Allocate Resources                                          │   │
│  │  ┌────────────────┬────────────────┬──────────┬──────────┐         │   │
│  │  │                │                │          │          │         │   │
│  │  │  Programs      │  Operations    │  Admin   │ Reserve  │         │   │
│  │  │    (75%)       │    (15%)       │  (7%)    │  (3%)    │         │   │
│  │  │                │                │          │          │         │   │
│  │  └────────────────┴────────────────┴──────────┴──────────┘         │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Component Library

### 5.1 UI Component Specifications

#### Button Component

```typescript
// src/components/ui/Button/Button.tsx

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size: 'sm' | 'md' | 'lg' | 'xl';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

// Colorblind-safe color variants
const variants = {
  primary: 'bg-teal-600 hover:bg-teal-700 text-white',
  secondary: 'bg-amber-500 hover:bg-amber-600 text-slate-900',
  outline: 'border-2 border-teal-600 text-teal-600 hover:bg-teal-50',
  ghost: 'text-teal-600 hover:bg-teal-50',
  danger: 'bg-rose-600 hover:bg-rose-700 text-white'
};
```

#### Card Component

```typescript
// src/components/ui/Card/Card.tsx

interface CardProps {
  variant: 'default' | 'elevated' | 'bordered' | 'interactive';
  padding: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
```

### 5.2 Section Components

#### Hero Slideshow Component

```typescript
// src/components/sections/Hero/HeroSlideshow.tsx

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  ctaPrimary: { text: string; href: string };
  ctaSecondary: { text: string; href: string };
  stats?: StatItem[];
}

interface HeroSlideshowProps {
  slides: Slide[];
  autoplayInterval?: number; // default: 6000ms
  showDots?: boolean;
  showArrows?: boolean;
  pauseOnHover?: boolean;
}
```

#### Statistics Counter Component

```typescript
// src/components/sections/Impact/StatisticsCounter.tsx

interface Statistic {
  id: string;
  value: number;
  suffix?: string;      // e.g., '+', '%', 'K'
  prefix?: string;      // e.g., '$', '>'
  label: string;
  icon?: string;
  description?: string;
  color: string;        // Colorblind-safe color
}

interface StatisticsCounterProps {
  statistics: Statistic[];
  animationDuration?: number; // default: 2000ms
  animationDelay?: number;    // stagger delay
  triggerOnScroll?: boolean;
}
```

---

## 6. Interactive Visualizations

### 6.1 D3.js Visualization Components

#### Program Wheel (Radial Dendrogram)

```typescript
// src/components/visualizations/ProgramWheel/ProgramWheel.d3.ts

interface ProgramNode {
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;         // Colorblind-safe
  beneficiaries: number;
  children?: ProgramNode[];
}

const config = {
  width: 600,
  height: 600,
  innerRadius: 80,
  outerRadius: 250,
  colors: COLORBLIND_SAFE_PALETTE,
  transitionDuration: 500,
  hoverScale: 1.1
};

// Creates interactive sunburst/wheel showing all 13 programs
// - Click to zoom into program category
// - Hover for program details tooltip
// - Animated transitions between states
```

#### Impact Timeline (Horizontal Timeline)

```typescript
// src/components/visualizations/TimelineViz/InteractiveTimeline.d3.ts

interface TimelineEvent {
  date: Date;
  title: string;
  description: string;
  type: 'milestone' | 'program' | 'achievement' | 'partnership';
  image?: string;
  metrics?: { label: string; value: number }[];
}

const config = {
  width: 1200,
  height: 300,
  margin: { top: 40, right: 40, bottom: 60, left: 40 },
  nodeRadius: 12,
  lineStrokeWidth: 3,
  colors: {
    milestone: '#0D9488',    // Teal
    program: '#D97706',      // Amber
    achievement: '#059669',  // Emerald
    partnership: '#7C3AED'   // Violet
  }
};

// Features:
// - Horizontal scrollable timeline
// - Click events for detail modal
// - Animated entry on scroll
// - Zoom and pan support
```

#### Donation Flow (Sankey Diagram)

```typescript
// src/components/visualizations/DonationFlow/SankeyDiagram.d3.ts

interface SankeyNode {
  id: string;
  name: string;
}

interface SankeyLink {
  source: string;
  target: string;
  value: number;
}

interface DonationFlowData {
  nodes: SankeyNode[];
  links: SankeyLink[];
}

// Shows how donations flow from source to programs
// Nodes: Donation Sources → Fund Allocation → Programs → Outcomes
// Interactive: hover to highlight flow path
```

#### Geographic Map (Leaflet + D3.js Overlay)

```typescript
// src/components/visualizations/GeographicMap/UgandaMap.tsx

interface Location {
  id: string;
  name: string;
  type: 'office' | 'program' | 'partner' | 'outreach';
  coordinates: [number, number]; // [lat, lng]
  description: string;
  programs?: string[];
  beneficiaries?: number;
}

const mapConfig = {
  center: [0.3476, 32.5825], // Uganda center
  zoom: 7,
  maxZoom: 18,
  minZoom: 5,
  tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
};

// Features:
// - Custom markers with program icons
// - Clustered markers for dense areas
// - Popup cards with location details
// - Heat map overlay for beneficiary density
// - D3.js overlay for custom visualizations
```

#### Program Performance Radar Chart

```typescript
// src/components/visualizations/ProgramRadar/RadarChart.d3.ts

interface ProgramMetric {
  program: string;
  metrics: {
    reach: number;        // 0-100
    effectiveness: number;
    sustainability: number;
    scalability: number;
    communityImpact: number;
  };
}

const radarConfig = {
  width: 500,
  height: 500,
  levels: 5,
  maxValue: 100,
  labelFactor: 1.25,
  opacityArea: 0.35,
  dotRadius: 4,
  strokeWidth: 2,
  colors: COLORBLIND_SAFE_PALETTE
};

// Multi-axis radar showing program performance
// Overlay multiple programs for comparison
// Animated transitions when data changes
```

### 6.2 Chart.js Components

```typescript
// src/components/visualizations/Charts/DonationTrendChart.tsx

// Line chart showing donation trends over time
const donationTrendConfig = {
  type: 'line',
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Donation Trends' }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
};

// Bar chart for program comparison
// Doughnut chart for fund allocation
// Area chart for beneficiary growth
```

### 6.3 Three.js 3D Elements

```typescript
// src/components/animations/HeroDove3D.tsx

// Animated 3D dove with olive branch
// Positioned over stylized cross
// Gentle floating animation
// Particle system for "hope" effect

const doveConfig = {
  scale: 1.5,
  rotationSpeed: 0.001,
  floatAmplitude: 0.1,
  floatSpeed: 0.5,
  particleCount: 50,
  particleColors: ['#FFFFFF', '#F0FDF4', '#DCFCE7']
};
```

---

## 7. Accessibility & Colorblind Design

### 7.1 WCAG 2.1 AA Compliance

```typescript
// src/lib/accessibility/wcag-config.ts

const accessibilityRequirements = {
  // Color Contrast
  minContrastRatio: {
    normalText: 4.5,    // AA standard
    largeText: 3,       // 18pt+ or 14pt bold
    graphicElements: 3
  },
  
  // Focus Indicators
  focusIndicator: {
    style: 'outline',
    width: '3px',
    offset: '2px',
    color: '#0D9488'    // Teal-600
  },
  
  // Motion
  reducedMotion: {
    respectPreference: true,
    fallbackDuration: 0
  },
  
  // Typography
  minFontSize: '16px',
  lineHeight: 1.5,
  letterSpacing: 'normal'
};
```

### 7.2 Colorblind-Safe Color Palette

```typescript
// src/lib/visualizations/color-scales.ts

// IBM Design colorblind-safe palette
export const COLORBLIND_SAFE_PALETTE = {
  // Primary colors (distinguishable for all color vision types)
  primary: {
    teal: '#0D9488',      // Primary brand
    amber: '#D97706',     // Secondary/accent
    slate: '#475569',     // Text
    white: '#FFFFFF'      // Background
  },
  
  // Semantic colors
  semantic: {
    success: '#059669',   // Emerald-600
    warning: '#D97706',   // Amber-600
    error: '#DC2626',     // Red-600
    info: '#0284C7'       // Sky-600
  },
  
  // Chart/visualization colors (8-color safe palette)
  chart: [
    '#0D9488',  // Teal
    '#D97706',  // Amber
    '#7C3AED',  // Violet
    '#059669',  // Emerald
    '#DC2626',  // Red
    '#0284C7',  // Sky
    '#DB2777',  // Pink
    '#65A30D'   // Lime
  ],
  
  // Gradient-safe sequential scales
  sequential: {
    teal: ['#CCFBF1', '#99F6E4', '#5EEAD4', '#2DD4BF', '#14B8A6', '#0D9488', '#0F766E', '#115E59'],
    amber: ['#FEF3C7', '#FDE68A', '#FCD34D', '#FBBF24', '#F59E0B', '#D97706', '#B45309', '#92400E']
  },
  
  // Diverging scale for comparisons
  diverging: {
    negative: '#DC2626',
    neutral: '#64748B',
    positive: '#059669'
  }
};

// Color vision simulation utilities
export const colorVisionTypes = ['normal', 'protanopia', 'deuteranopia', 'tritanopia', 'achromatopsia'];
```

### 7.3 Accessibility Features

```tsx
// Key accessibility implementations

// 1. Skip Navigation Link
<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-600 text-white px-4 py-2 rounded">
  Skip to main content
</a>

// 2. ARIA Labels for visualizations
<svg role="img" aria-labelledby="chart-title chart-desc">
  <title id="chart-title">Program Impact Distribution</title>
  <desc id="chart-desc">A pie chart showing the distribution of impact across 13 programs...</desc>
</svg>

// 3. Screen reader announcements for dynamic content
const [announcement, setAnnouncement] = useState('');
<div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
  {announcement}
</div>

// 4. Keyboard navigation for interactive charts
const handleKeyDown = (e: KeyboardEvent) => {
  switch(e.key) {
    case 'ArrowRight': selectNextSegment(); break;
    case 'ArrowLeft': selectPrevSegment(); break;
    case 'Enter':
    case ' ': activateSegment(); break;
  }
};

// 5. High contrast mode support
@media (prefers-contrast: high) {
  .card { border-width: 2px; }
  .button { outline: 2px solid currentColor; }
}
```

### 7.4 Pattern & Texture System

```css
/* src/styles/colorblind-safe.css */

/* Patterns for chart fills - distinguishable without color */
.pattern-dots {
  background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
  background-size: 8px 8px;
}

.pattern-lines {
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 2px,
    currentColor 2px,
    currentColor 4px
  );
}

.pattern-crosshatch {
  background-image: 
    repeating-linear-gradient(45deg, transparent, transparent 2px, currentColor 2px, currentColor 4px),
    repeating-linear-gradient(-45deg, transparent, transparent 2px, currentColor 2px, currentColor 4px);
}

.pattern-waves {
  background-image: repeating-radial-gradient(
    circle at 0 0,
    transparent 0,
    currentColor 2px,
    transparent 4px,
    transparent 8px
  );
}
```

---

## 8. Animation System

### 8.1 GSAP Configuration

```typescript
// src/lib/animations/gsap-config.ts

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// Global defaults
gsap.defaults({
  duration: 0.8,
  ease: 'power2.out'
});

// Respect reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  gsap.globalTimeline.timeScale(0);
  ScrollTrigger.config({ limitCallbacks: true });
}

// Animation presets
export const animations = {
  fadeInUp: {
    from: { opacity: 0, y: 60 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
  },
  fadeInLeft: {
    from: { opacity: 0, x: -60 },
    to: { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
  },
  fadeInRight: {
    from: { opacity: 0, x: 60 },
    to: { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
  },
  scaleIn: {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }
  },
  staggerChildren: {
    stagger: { each: 0.1, from: 'start' }
  }
};
```

### 8.2 Scroll Animations

```typescript
// src/components/animations/ScrollReveal.tsx

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
  delay?: number;
  duration?: number;
  threshold?: number;  // 0-1, when to trigger
  stagger?: boolean;
}

export function ScrollReveal({ 
  children, 
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.8,
  threshold = 0.2 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: `top ${100 - threshold * 100}%`,
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo(element, 
      animations[animation].from,
      { ...animations[animation].to, delay, duration }
    );

    return () => { tl.kill(); };
  }, [animation, delay, duration, threshold]);

  return <div ref={ref}>{children}</div>;
}
```

### 8.3 Counter Animation

```typescript
// src/components/animations/CounterAnimation.tsx

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface CounterAnimationProps {
  end: number;
  start?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  separator?: string;
}

export function CounterAnimation({
  end,
  start = 0,
  duration = 2,
  prefix = '',
  suffix = '',
  decimals = 0,
  separator = ','
}: CounterAnimationProps) {
  const [displayValue, setDisplayValue] = useState(start);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const counter = { value: start };
    
    gsap.to(counter, {
      value: end,
      duration,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        once: true
      },
      onUpdate: () => {
        setDisplayValue(counter.value);
      }
    });
  }, [end, start, duration]);

  const formattedValue = displayValue.toFixed(decimals)
    .replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{formattedValue}{suffix}
    </span>
  );
}
```

### 8.4 Page Transitions

```typescript
// src/lib/animations/page-transitions.ts

export const pageTransitions = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
};

// Implemented via Next.js App Router layout with framer-motion
// or GSAP-based transitions
```

### 8.5 Micro-interactions

```css
/* src/styles/animations.css */

/* Button hover effects */
.btn-primary {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(13, 148, 136, 0.4);
}

.btn-primary:active {
  transform: translateY(0);
}

/* Card hover */
.card-interactive {
  transition: all 0.3s ease;
}

.card-interactive:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Link underline animation */
.link-underline {
  position: relative;
}

.link-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease;
}

.link-underline:hover::after {
  width: 100%;
}

/* Image zoom on hover */
.img-zoom {
  overflow: hidden;
}

.img-zoom img {
  transition: transform 0.5s ease;
}

.img-zoom:hover img {
  transform: scale(1.05);
}
```

---

## 9. Database Schema

### 9.1 Prisma Schema

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ============================================
// CONTENT MANAGEMENT
// ============================================

model Program {
  id            String    @id @default(cuid())
  name          String
  slug          String    @unique
  shortName     String?
  description   String    @db.Text
  fullContent   String?   @db.Text
  icon          String?
  image         String?
  gallery       String[]
  color         String?   // Hex color for theming
  category      ProgramCategory
  objectives    String[]
  outcomes      Json?     // { metric: value }
  beneficiaries Int       @default(0)
  isActive      Boolean   @default(true)
  sortOrder     Int       @default(0)
  
  // Relations
  stories       Story[]
  events        Event[]
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

enum ProgramCategory {
  EDUCATION
  HEALTHCARE
  ECONOMIC_EMPOWERMENT
  FOSTER_CARE
  COUNSELING
  VOCATIONAL
  AGRICULTURE
  SPIRITUAL
  GOVERNANCE
}

model Article {
  id            String    @id @default(cuid())
  title         String
  slug          String    @unique
  excerpt       String?   @db.VarChar(300)
  content       String    @db.Text
  featuredImage String?
  gallery       String[]
  category      ArticleCategory
  tags          String[]
  author        String
  authorImage   String?
  isPublished   Boolean   @default(false)
  isFeatured    Boolean   @default(false)
  publishedAt   DateTime?
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

enum ArticleCategory {
  NEWS
  BLOG
  PRESS_RELEASE
  NEWSLETTER
  REPORT
}

model Story {
  id            String    @id @default(cuid())
  title         String
  slug          String    @unique
  excerpt       String?
  content       String    @db.Text
  beneficiaryName String?
  beneficiaryAge  Int?
  location      String?
  image         String?
  videoUrl      String?
  isFeatured    Boolean   @default(false)
  isPublished   Boolean   @default(false)
  
  // Relations
  program       Program?  @relation(fields: [programId], references: [id])
  programId     String?
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model Event {
  id            String    @id @default(cuid())
  title         String
  slug          String    @unique
  description   String    @db.Text
  location      String?
  venue         String?
  startDate     DateTime
  endDate       DateTime?
  image         String?
  registrationUrl String?
  isPublished   Boolean   @default(false)
  
  // Relations
  program       Program?  @relation(fields: [programId], references: [id])
  programId     String?
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model GalleryAlbum {
  id            String    @id @default(cuid())
  title         String
  slug          String    @unique
  description   String?
  coverImage    String?
  images        GalleryImage[]
  isPublished   Boolean   @default(false)
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model GalleryImage {
  id            String    @id @default(cuid())
  url           String
  caption       String?
  altText       String?
  sortOrder     Int       @default(0)
  
  album         GalleryAlbum @relation(fields: [albumId], references: [id], onDelete: Cascade)
  albumId       String
  
  createdAt     DateTime  @default(now())
}

// ============================================
// TEAM & PARTNERS
// ============================================

model TeamMember {
  id            String    @id @default(cuid())
  name          String
  slug          String    @unique
  role          String
  bio           String?   @db.Text
  image         String?
  email         String?
  phone         String?
  linkedIn      String?
  twitter       String?
  category      TeamCategory
  sortOrder     Int       @default(0)
  isActive      Boolean   @default(true)
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

enum TeamCategory {
  BOARD
  LEADERSHIP
  STAFF
  VOLUNTEER
  ADVISOR
}

model Partner {
  id            String    @id @default(cuid())
  name          String
  slug          String    @unique
  description   String?
  logo          String?
  website       String?
  partnerType   PartnerType
  since         DateTime?
  isActive      Boolean   @default(true)
  isFeatured    Boolean   @default(false)
  sortOrder     Int       @default(0)
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

enum PartnerType {
  CORPORATE
  NGO
  GOVERNMENT
  ACADEMIC
  INDIVIDUAL
  FOUNDATION
}

// ============================================
// DONATIONS & FINANCIALS
// ============================================

model Donation {
  id            String    @id @default(cuid())
  amount        Decimal   @db.Decimal(10, 2)
  currency      String    @default("USD")
  donorName     String?
  donorEmail    String
  donorPhone    String?
  isAnonymous   Boolean   @default(false)
  type          DonationType
  frequency     DonationFrequency @default(ONE_TIME)
  designation   String?   // Specific program/fund
  message       String?
  paymentMethod String?
  paymentId     String?   // External payment reference
  status        DonationStatus @default(PENDING)
  receiptSent   Boolean   @default(false)
  
  // For recurring donations
  subscriptionId String?
  nextBillingDate DateTime?
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

enum DonationType {
  GENERAL
  PROGRAM_SPECIFIC
  SPONSORSHIP
  IN_KIND
  LEGACY
}

enum DonationFrequency {
  ONE_TIME
  MONTHLY
  QUARTERLY
  ANNUALLY
}

enum DonationStatus {
  PENDING
  COMPLETED
  FAILED
  REFUNDED
  CANCELLED
}

model Sponsorship {
  id            String    @id @default(cuid())
  sponsorName   String
  sponsorEmail  String
  sponsorPhone  String?
  sponsorAddress String?
  childCode     String?   // Anonymous child identifier
  monthlyAmount Decimal   @db.Decimal(10, 2)
  currency      String    @default("USD")
  startDate     DateTime
  endDate       DateTime?
  isActive      Boolean   @default(true)
  paymentMethod String?
  subscriptionId String?
  
  // Communication preferences
  wantsUpdates  Boolean   @default(true)
  wantsLetters  Boolean   @default(true)
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

// ============================================
// ENGAGEMENT
// ============================================

model Volunteer {
  id            String    @id @default(cuid())
  firstName     String
  lastName      String
  email         String    @unique
  phone         String?
  address       String?
  city          String?
  country       String?
  skills        String[]
  interests     String[]  // Program areas
  availability  String?
  motivation    String?   @db.Text
  experience    String?   @db.Text
  status        VolunteerStatus @default(PENDING)
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

enum VolunteerStatus {
  PENDING
  APPROVED
  ACTIVE
  INACTIVE
  REJECTED
}

model Contact {
  id            String    @id @default(cuid())
  name          String
  email         String
  phone         String?
  subject       ContactSubject
  message       String    @db.Text
  isRead        Boolean   @default(false)
  isResolved    Boolean   @default(false)
  resolvedBy    String?
  resolvedAt    DateTime?
  notes         String?
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

enum ContactSubject {
  GENERAL_INQUIRY
  DONATION_INQUIRY
  VOLUNTEER_INQUIRY
  PARTNERSHIP_INQUIRY
  MEDIA_INQUIRY
  COMPLAINT
  OTHER
}

model NewsletterSubscriber {
  id            String    @id @default(cuid())
  email         String    @unique
  firstName     String?
  lastName      String?
  interests     String[]  // Program areas
  isActive      Boolean   @default(true)
  confirmedAt   DateTime?
  unsubscribedAt DateTime?
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

// ============================================
// ANALYTICS & IMPACT
// ============================================

model ImpactMetric {
  id            String    @id @default(cuid())
  name          String
  slug          String    @unique
  description   String?
  value         Decimal   @db.Decimal(12, 2)
  unit          String?   // e.g., "children", "meals", "hours"
  period        String?   // e.g., "2024", "Q1 2024"
  category      String?
  source        String?
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model AnnualReport {
  id            String    @id @default(cuid())
  year          Int       @unique
  title         String
  description   String?
  pdfUrl        String
  coverImage    String?
  highlights    Json?     // { metric: value }
  isPublished   Boolean   @default(false)
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

// ============================================
// SITE CONFIGURATION
// ============================================

model HeroSlide {
  id            String    @id @default(cuid())
  title         String
  subtitle      String?
  description   String?
  backgroundImage String
  ctaPrimaryText String?
  ctaPrimaryUrl String?
  ctaSecondaryText String?
  ctaSecondaryUrl String?
  isActive      Boolean   @default(true)
  sortOrder     Int       @default(0)
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model SiteSettings {
  id            String    @id @default("settings")
  organizationName String @default("Wings of Hope Outreach")
  tagline       String    @default("Inspiring Hope, Transforming Lives")
  email         String?
  phone         String?
  address       String?
  socialLinks   Json?     // { platform: url }
  donationGoal  Decimal?  @db.Decimal(12, 2)
  currentDonations Decimal? @db.Decimal(12, 2)
  
  updatedAt     DateTime  @updatedAt
}
```

---

## 10. API Architecture

### 10.1 API Routes Structure

```
/api
├── /contact
│   └── POST - Submit contact form
├── /donate
│   ├── POST - Create donation
│   └── /webhooks
│       └── POST - Payment provider webhooks
├── /newsletter
│   ├── POST - Subscribe
│   └── DELETE - Unsubscribe
├── /volunteer
│   └── POST - Submit application
├── /sponsorship
│   └── POST - Start sponsorship
├── /search
│   └── GET - Site-wide search
└── /webhooks
    ├── /stripe
    └── /paypal
```

### 10.2 API Route Examples

```typescript
// src/app/api/contact/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db/prisma';
import { sendEmail } from '@/lib/email';

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.enum([
    'GENERAL_INQUIRY',
    'DONATION_INQUIRY',
    'VOLUNTEER_INQUIRY',
    'PARTNERSHIP_INQUIRY',
    'MEDIA_INQUIRY',
    'COMPLAINT',
    'OTHER'
  ]),
  message: z.string().min(10).max(5000)
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);
    
    // Save to database
    const contact = await prisma.contact.create({
      data: validatedData
    });
    
    // Send notification email
    await sendEmail({
      to: process.env.ADMIN_EMAIL!,
      subject: `New Contact: ${validatedData.subject}`,
      template: 'contact-notification',
      data: validatedData
    });
    
    // Send confirmation to user
    await sendEmail({
      to: validatedData.email,
      subject: 'Thank you for contacting Wings of Hope Outreach',
      template: 'contact-confirmation',
      data: { name: validatedData.name }
    });
    
    return NextResponse.json(
      { success: true, id: contact.id },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

```typescript
// src/app/api/donate/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db/prisma';
import { createPaymentIntent } from '@/lib/payments/stripe';

const donationSchema = z.object({
  amount: z.number().min(1).max(1000000),
  currency: z.string().default('USD'),
  donorName: z.string().optional(),
  donorEmail: z.string().email(),
  donorPhone: z.string().optional(),
  isAnonymous: z.boolean().default(false),
  type: z.enum(['GENERAL', 'PROGRAM_SPECIFIC', 'SPONSORSHIP']),
  frequency: z.enum(['ONE_TIME', 'MONTHLY', 'QUARTERLY', 'ANNUALLY']).default('ONE_TIME'),
  designation: z.string().optional(),
  message: z.string().max(500).optional()
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = donationSchema.parse(body);
    
    // Create payment intent
    const paymentIntent = await createPaymentIntent({
      amount: validatedData.amount,
      currency: validatedData.currency,
      metadata: {
        donorEmail: validatedData.donorEmail,
        type: validatedData.type,
        designation: validatedData.designation || 'General Fund'
      }
    });
    
    // Create pending donation record
    const donation = await prisma.donation.create({
      data: {
        ...validatedData,
        paymentId: paymentIntent.id,
        status: 'PENDING'
      }
    });
    
    return NextResponse.json({
      success: true,
      clientSecret: paymentIntent.client_secret,
      donationId: donation.id
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }
    console.error('Donation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

---

## 11. Deployment Configuration

### 11.1 Vercel Configuration

```json
// vercel.json

{
  "framework": "nextjs",
  "buildCommand": "pnpm build",
  "outputDirectory": ".next",
  "installCommand": "pnpm install",
  "devCommand": "pnpm dev",
  "regions": ["iad1"],
  "env": {
    "NEXT_PUBLIC_SITE_URL": "https://wingsofhopeoutreach.org"
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    },
    {
      "source": "/fonts/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=86400, stale-while-revalidate=604800"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/home",
      "destination": "/",
      "permanent": true
    }
  ],
  "rewrites": [
    {
      "source": "/sitemap.xml",
      "destination": "/api/sitemap"
    },
    {
      "source": "/robots.txt",
      "destination": "/api/robots"
    }
  ]
}
```

### 11.2 Environment Variables

```bash
# .env.example

# App
NEXT_PUBLIC_SITE_URL=https://wingsofhopeoutreach.org
NEXT_PUBLIC_SITE_NAME="Wings of Hope Outreach"

# Database (Supabase)
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Authentication
NEXTAUTH_URL=https://wingsofhopeoutreach.org
NEXTAUTH_SECRET=your-secret-key

# Email (Resend)
RESEND_API_KEY=re_...
ADMIN_EMAIL=admin@wingsofhopeoutreach.org

# Payments
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Media (Cloudinary)
CLOUDINARY_CLOUD_NAME=your-cloud
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

# Analytics
NEXT_PUBLIC_GA_ID=G-...
SENTRY_DSN=https://...

# Maps
NEXT_PUBLIC_MAPBOX_TOKEN=pk...
```

### 11.3 Next.js Configuration

```javascript
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  
  experimental: {
    optimizePackageImports: ['gsap', 'd3', 'chart.js'],
  },
  
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.stripe.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://api.stripe.com https://vitals.vercel-insights.com;"
          }
        ]
      }
    ];
  },
  
  webpack: (config, { isServer }) => {
    // D3 external dependencies
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
```

### 11.4 GitHub Actions CI/CD

```yaml
# .github/workflows/ci.yml

name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

env:
  NODE_VERSION: '20.x'

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
          
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'pnpm'
          
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
        
      - name: Run ESLint
        run: pnpm lint
        
      - name: Run Prettier
        run: pnpm format:check
        
      - name: TypeScript check
        run: pnpm type-check

  test:
    runs-on: ubuntu-latest
    needs: lint
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
          
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'pnpm'
          
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
        
      - name: Run tests
        run: pnpm test
        
      - name: Run E2E tests
        run: pnpm test:e2e

  build:
    runs-on: ubuntu-latest
    needs: [lint, test]
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
          
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'pnpm'
          
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
        
      - name: Build
        run: pnpm build
        env:
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
          
      - name: Upload build artifacts
        uses: actions/upload-artifact@v4
        with:
          name: build
          path: .next
```

---

## 12. Design System

### 12.1 Typography

```css
/* src/styles/typography.css */

/* Font Families */
:root {
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Source Sans 3', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

/* Type Scale (Based on 1.250 Major Third) */
:root {
  --text-xs: 0.64rem;     /* 10.24px */
  --text-sm: 0.8rem;      /* 12.8px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.25rem;     /* 20px */
  --text-xl: 1.563rem;    /* 25px */
  --text-2xl: 1.953rem;   /* 31.25px */
  --text-3xl: 2.441rem;   /* 39px */
  --text-4xl: 3.052rem;   /* 48.83px */
  --text-5xl: 3.815rem;   /* 61px */
}

/* Headings */
h1, .h1 {
  font-family: var(--font-heading);
  font-size: var(--text-4xl);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

h2, .h2 {
  font-family: var(--font-heading);
  font-size: var(--text-3xl);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

h3, .h3 {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-weight: 600;
  line-height: 1.3;
}

h4, .h4 {
  font-family: var(--font-body);
  font-size: var(--text-xl);
  font-weight: 600;
  line-height: 1.4;
}

/* Body */
body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-slate-700);
}

/* Paragraph */
p {
  margin-bottom: 1.5rem;
}

.lead {
  font-size: var(--text-lg);
  line-height: 1.7;
  color: var(--color-slate-600);
}
```

### 12.2 Color System

```css
/* src/styles/globals.css */

:root {
  /* Primary - Teal (Hope, Growth, Trust) */
  --color-primary-50: #f0fdfa;
  --color-primary-100: #ccfbf1;
  --color-primary-200: #99f6e4;
  --color-primary-300: #5eead4;
  --color-primary-400: #2dd4bf;
  --color-primary-500: #14b8a6;
  --color-primary-600: #0d9488;
  --color-primary-700: #0f766e;
  --color-primary-800: #115e59;
  --color-primary-900: #134e4a;
  
  /* Secondary - Amber (Warmth, Energy, Hope) */
  --color-secondary-50: #fffbeb;
  --color-secondary-100: #fef3c7;
  --color-secondary-200: #fde68a;
  --color-secondary-300: #fcd34d;
  --color-secondary-400: #fbbf24;
  --color-secondary-500: #f59e0b;
  --color-secondary-600: #d97706;
  --color-secondary-700: #b45309;
  --color-secondary-800: #92400e;
  --color-secondary-900: #78350f;
  
  /* Neutral - Slate */
  --color-slate-50: #f8fafc;
  --color-slate-100: #f1f5f9;
  --color-slate-200: #e2e8f0;
  --color-slate-300: #cbd5e1;
  --color-slate-400: #94a3b8;
  --color-slate-500: #64748b;
  --color-slate-600: #475569;
  --color-slate-700: #334155;
  --color-slate-800: #1e293b;
  --color-slate-900: #0f172a;
  
  /* Semantic Colors */
  --color-success: #059669;
  --color-warning: #d97706;
  --color-error: #dc2626;
  --color-info: #0284c7;
  
  /* Background */
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f8fafc;
  --color-bg-tertiary: #f1f5f9;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-primary: #0f172a;
    --color-bg-secondary: #1e293b;
    --color-bg-tertiary: #334155;
  }
}
```

### 12.3 Spacing System

```css
/* Spacing scale (based on 4px) */
:root {
  --space-0: 0;
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
}

/* Container */
.container {
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}

@media (min-width: 640px) {
  .container {
    padding-left: var(--space-6);
    padding-right: var(--space-6);
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: var(--space-8);
    padding-right: var(--space-8);
  }
}
```

### 12.4 Component Variants

```typescript
// src/lib/design-system/variants.ts

export const buttonVariants = {
  base: 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
  
  variants: {
    primary: 'bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500',
    secondary: 'bg-amber-500 text-slate-900 hover:bg-amber-600 focus:ring-amber-400',
    outline: 'border-2 border-teal-600 text-teal-600 hover:bg-teal-50 focus:ring-teal-500',
    ghost: 'text-teal-600 hover:bg-teal-50 focus:ring-teal-500',
    white: 'bg-white text-teal-600 hover:bg-slate-50 focus:ring-white'
  },
  
  sizes: {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  },
  
  states: {
    disabled: 'opacity-50 cursor-not-allowed',
    loading: 'opacity-75 cursor-wait'
  }
};

export const cardVariants = {
  base: 'rounded-xl bg-white overflow-hidden',
  
  variants: {
    default: 'shadow-md',
    elevated: 'shadow-xl',
    bordered: 'border border-slate-200',
    interactive: 'shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer'
  },
  
  padding: {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
};
```

---

## 13. Performance Optimization

### 13.1 Image Optimization

```typescript
// next.config.js image configuration

images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'res.cloudinary.com' },
    { protocol: 'https', hostname: 'images.unsplash.com' },
  ],
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
}

// Usage
import Image from 'next/image';

<Image
  src="/images/hero/community.jpg"
  alt="Community outreach program"
  width={1200}
  height={800}
  priority={true}  // For above-fold images
  placeholder="blur"
  blurDataURL={blurDataURL}
/>
```

### 13.2 Code Splitting & Lazy Loading

```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const ImpactChart = dynamic(
  () => import('@/components/visualizations/ImpactChart'),
  { 
    loading: () => <ChartSkeleton />,
    ssr: false  // Client-only for D3.js
  }
);

const UgandaMap = dynamic(
  () => import('@/components/visualizations/UgandaMap'),
  { 
    loading: () => <MapSkeleton />,
    ssr: false  // Leaflet requires client
  }
);

// Intersection Observer for lazy loading
const LazySection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <div ref={ref}>
      {inView ? children : <SectionSkeleton />}
    </div>
  );
};
```

### 13.3 Bundle Analysis

```json
// package.json scripts

{
  "scripts": {
    "analyze": "ANALYZE=true next build",
    "bundle-size": "npx next-bundle-analyzer"
  }
}
```

### 13.4 Core Web Vitals Targets

| Metric | Target | Strategy |
|--------|--------|----------|
| **LCP** | < 2.5s | Optimize hero images, preload critical assets |
| **FID** | < 100ms | Code split, defer non-critical JS |
| **CLS** | < 0.1 | Reserve space for images, avoid layout shifts |
| **TTFB** | < 600ms | Edge caching, optimized database queries |

---

## 14. Security Implementation

### 14.1 Security Headers

```typescript
// next.config.js headers

async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        { 
          key: 'Content-Security-Policy',
          value: `
            default-src 'self';
            script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.stripe.com;
            style-src 'self' 'unsafe-inline';
            img-src 'self' data: https: blob:;
            font-src 'self' https://fonts.gstatic.com;
            connect-src 'self' https://api.stripe.com https://vitals.vercel-insights.com;
            frame-src https://js.stripe.com;
          `.replace(/\s+/g, ' ').trim()
        }
      ]
    }
  ];
}
```

### 14.2 Form Security

```typescript
// Rate limiting
import rateLimit from 'express-rate-limit';

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per window
  message: 'Too many requests, please try again later.'
});

// Honeypot field for spam prevention
<input
  type="text"
  name="website"
  className="hidden"
  tabIndex={-1}
  autoComplete="off"
/>

// Server-side check
if (body.website) {
  // Bot detected - silently reject
  return NextResponse.json({ success: true });
}
```

### 14.3 Data Validation

```typescript
// Zod schemas for all inputs
import { z } from 'zod';

export const donationSchema = z.object({
  amount: z.number()
    .min(1, 'Minimum donation is $1')
    .max(1000000, 'Maximum donation is $1,000,000'),
  email: z.string()
    .email('Invalid email address')
    .max(255),
  message: z.string()
    .max(500, 'Message too long')
    .optional()
    .transform(val => val ? sanitize(val) : val)
});
```

---

## 15. Sitemap & Routing

### 15.1 Complete Route Map

```
/                                    # Home page
├── /about                           # About overview
│   ├── /about/our-story            # Organization history
│   ├── /about/leadership           # Board & leadership team
│   ├── /about/partners             # Partners & supporters
│   └── /about/financials           # Financial transparency
├── /programs                        # All programs
│   ├── /programs/education         # Education & basic needs
│   ├── /programs/healthcare        # Healthcare & nutrition
│   ├── /programs/economic-empowerment  # Microfinance & income
│   ├── /programs/foster-care       # Foster homes & child protection
│   ├── /programs/counseling        # Family counseling services
│   ├── /programs/vocational-training   # Skills development
│   ├── /programs/agriculture       # Farming & food security
│   └── /programs/spiritual-development # Faith & ethics
├── /impact                          # Impact dashboard
│   ├── /impact/stories             # Success stories
│   ├── /impact/reports             # Annual reports
│   └── /impact/metrics             # Key statistics
├── /get-involved                    # Ways to help
│   ├── /get-involved/donate        # Donation page
│   ├── /get-involved/volunteer     # Volunteer signup
│   ├── /get-involved/partner       # Partnership inquiries
│   └── /get-involved/sponsor       # Child sponsorship
├── /news                            # Blog/news
│   └── /news/[slug]                # Individual article
├── /gallery                         # Photo gallery
│   └── /gallery/[album]            # Album view
├── /events                          # Upcoming events
│   └── /events/[slug]              # Event detail
├── /contact                         # Contact page
├── /privacy                         # Privacy policy
├── /terms                           # Terms of service
├── /accessibility                   # Accessibility statement
└── /sitemap                         # HTML sitemap
```

### 15.2 Dynamic Sitemap Generation

```typescript
// src/app/sitemap.ts

import { MetadataRoute } from 'next';
import { prisma } from '@/lib/db/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wingsofhopeoutreach.org';
  
  // Static pages
  const staticPages = [
    '', '/about', '/about/our-story', '/about/leadership', '/about/partners',
    '/programs', '/impact', '/get-involved', '/get-involved/donate',
    '/get-involved/volunteer', '/news', '/gallery', '/contact'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8
  }));
  
  // Dynamic program pages
  const programs = await prisma.program.findMany({ 
    where: { isActive: true },
    select: { slug: true, updatedAt: true }
  });
  
  const programPages = programs.map(program => ({
    url: `${baseUrl}/programs/${program.slug}`,
    lastModified: program.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));
  
  // Dynamic news/blog pages
  const articles = await prisma.article.findMany({
    where: { isPublished: true },
    select: { slug: true, updatedAt: true }
  });
  
  const articlePages = articles.map(article => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: article.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));
  
  return [...staticPages, ...programPages, ...articlePages];
}
```

---

## 16. Summary & Next Steps

### 16.1 Key Features Summary

| Category | Features |
|----------|----------|
| **Framework** | Next.js 14 with App Router, TypeScript, Tailwind CSS |
| **Visualizations** | D3.js (program wheel, timeline, Sankey), Chart.js, Leaflet maps |
| **Animations** | GSAP ScrollTrigger, Three.js 3D elements, CSS micro-interactions |
| **Accessibility** | WCAG 2.1 AA, colorblind-safe palette, keyboard navigation |
| **Database** | PostgreSQL (Supabase) with Prisma ORM |
| **Deployment** | Vercel Edge Network, automatic CI/CD |
| **Security** | CSP headers, rate limiting, Zod validation |

### 16.2 Development Phases

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| **Phase 1** | 2 weeks | Core structure, layout, navigation, basic pages |
| **Phase 2** | 3 weeks | All program pages, content management, forms |
| **Phase 3** | 2 weeks | D3.js visualizations, impact dashboard |
| **Phase 4** | 2 weeks | GSAP animations, Three.js hero, polish |
| **Phase 5** | 1 week | Testing, accessibility audit, performance optimization |
| **Phase 6** | 1 week | Deployment, domain setup, go-live |

### 16.3 Estimated Resources

| Resource | Specification |
|----------|---------------|
| **Database** | Supabase Free Tier (upgradable) |
| **Hosting** | Vercel Pro ($20/month) |
| **CDN/Media** | Cloudinary Free Tier (25GB) |
| **Email** | Resend Free Tier (3000/month) |
| **Domain** | wingsofhopeoutreach.org (~$15/year) |
| **SSL** | Included with Vercel |

---

## Appendix A: Logo Assets

The website should use the provided logo assets:

| File | Usage |
|------|-------|
| `WOHO.svg` | Primary logo (full color) |
| `WOHO-1.svg` | Alternative logo variant |
| `WOHO.jpg` | Fallback raster format |

**Logo Description:** A stylized cross with a white dove carrying an olive branch, symbolizing hope, peace, and faith. The organization name "WINGS OF HOPE OUTREACH" appears alongside with the tagline "Inspiring Hope, Transforming Lives."

---

## Appendix B: Contact Information

**Wings of Hope Outreach Limited**  
Registration No: 80034655477699  
Wakiso, Kitala, Uganda

**Director:** Gabula Hannah  
**Secretary:** Kitimbo Shellor Sarah

---

*Document Version: 1.0*  
*Last Updated: January 26, 2026*  
*Prepared for: Wings of Hope Outreach Limited*
