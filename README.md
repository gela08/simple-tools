# Simple Tools Hub — v2.0

A fast, free, privacy-friendly collection of online utility tools built with Next.js 15, TypeScript, and Tailwind CSS.

## What's new in v2.0

### 30 Total Tools (up from 6)

**Text Tools**
- Word Counter
- Character Counter
- Reading Time Calculator
- Text Reverser *(new)*
- Remove Duplicate Lines *(new)*
- Capitalize Sentences *(new)*
- Slug Generator *(new)*
- Lorem Ipsum Generator *(new)*

**Formatters**
- Text Case Converter
- Remove Extra Spaces
- Line Sorter *(new)*

**Sorting Tools** *(new category)*
- Alphabetical Sort
- Number Sort
- List Randomizer

**Generators**
- Username Generator *(upgraded with custom input + 6 styles)*
- Password Generator *(new)*
- Wedding Hashtag Generator *(new)*
- Random Name Picker *(new)*

**Fun & Random** *(new category)*
- Random Number Generator
- Dice Roller
- Coin Flip
- Yes / No Generator
- Spin the Wheel
- Idea Generator

**Utility Tools** *(new category)*
- Days Until Calculator
- Age Calculator
- Percentage Calculator
- Unit Converter
- Password Strength Checker
- Text to Binary Converter

### New Features
- **Global search bar** in header (desktop + mobile)
- **Category filter tabs** on the All Tools page
- **Featured Tools** section on homepage
- **Browse by Category** cards on homepage
- Upgraded Username Generator with 6 styles + custom keyword input
- All components are `"use client"` where needed, server components otherwise

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build & Deploy

```bash
npm run build
npm run start
```

Deploy to Vercel with zero config — just push to GitHub and connect to Vercel.

## Project Structure

```
simple-tools-hub/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata
│   ├── page.tsx            # Homepage
│   ├── not-found.tsx       # 404 page
│   ├── robots.ts           # SEO robots.txt
│   ├── sitemap.ts          # Auto-generated sitemap for all tools
│   ├── about/page.tsx
│   ├── privacy/page.tsx
│   └── tools/
│       ├── page.tsx        # All tools index with search + filter
│       └── [tool-slug]/page.tsx  (×30 tools)
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky header with search
│   │   ├── Footer.tsx      # Footer with tool links
│   │   └── ToolLayout.tsx  # Shared tool page wrapper
│   ├── tools/
│   │   └── [ComponentName].tsx  (×30 tool components)
│   └── ui/
│       ├── CopyButton.tsx
│       ├── SearchBar.tsx   # Global tool search
│       ├── StatCard.tsx
│       ├── ToolCard.tsx
│       └── ToolsGrid.tsx   # Client-side filter/search grid
├── data/
│   └── tools.ts            # Tool registry + searchTools() + getRelatedTools()
└── lib/
    └── utils.ts            # Shared helper functions
```

## Future Ad Placement

When ready to monetize:

1. **Custom Domain**: In Vercel dashboard → Settings → Domains → Add your domain.
   Update `metadataBase` in `app/layout.tsx` and `app/sitemap.ts`.

2. **Ad Network Setup** (Google AdSense example):
   - Add AdSense script in `app/layout.tsx`
   - Suggested ad slots (already marked with `{/* AD_SLOT */}` comments):
     - **Header banner**: Below `<Header />` in layout.tsx — 728×90
     - **Tool sidebar**: In `ToolLayout.tsx` alongside the tool — 300×250
     - **Footer leaderboard**: In `Footer.tsx` bottom bar — 728×90
     - **Between tool sections**: In `ToolsGrid.tsx` between categories

3. **Analytics**: Add `<Script>` in layout.tsx for Plausible or Google Analytics.

4. **Ad-friendly layout notes**:
   - `max-w-6xl` containers allow sidebar expansion to max-w-screen-xl
   - `ToolLayout.tsx` uses `max-w-3xl` which leaves room for a 300px sidebar
   - All pages have proper OG metadata for social sharing traffic

## Checks Before Deploy

```bash
npm run lint          # No ESLint errors
npm run build         # No TypeScript/build errors
npm run start         # Test production build locally
```
