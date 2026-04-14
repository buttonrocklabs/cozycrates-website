# CLAUDE.md — Cozy Crates Website

## Organization Identity

Cozy Crates is a 501(c)(3) nonprofit founded by Lily Falconer that provides comfort crates to children affected by natural disasters. Based in Lewisville, Texas.

**Mission:** Comfort as many children in need as we can and raise awareness of the emotional impact of natural disasters on children.

**What Cozy Crates does:** Assembles and delivers individualized comfort crates containing handmade blankets, stuffed animals, backpacks, activity books, colored pencils, card games, jump ropes, and personal hand-written notes to children in disaster shelters.

## This Project — Cozy Crates Marketing Website

**What:** Multi-page static marketing website for cozycrates.org
**Stack:** Vite + React 19 + TypeScript + Tailwind CSS v4
**Entry:** src/main.tsx → src/App.tsx (React Router) → src/pages/*.tsx
**Styles:** src/index.css (Tailwind v4 imports, CSS custom properties via @theme)
**Fonts:** Google Fonts loaded in index.html (Oswald — headings, Open Sans — body)
**Hosting:** Cloudflare Pages, deployed from GitHub repo buttonrocklabs/cozycrates-website
**DNS:** IONOS
**Build:** `npm run dev` (dev server, port 5173), `npm run build` (static output to /dist)
**Config:** vite.config.ts (React plugin, Tailwind plugin, path aliases)

### File Structure
```
cozycrates-website/
├── index.html           — shell with <div id="root">, Google Fonts link
├── public/
│   ├── _redirects        — Cloudflare Pages SPA routing
│   ├── favicon.jpg
│   ├── og-image.jpg
│   └── cozy-crates-no-sew-blanket.pdf
├── src/
│   ├── main.tsx          — React DOM entry + BrowserRouter
│   ├── App.tsx           — React Router routes
│   ├── index.css         — Tailwind v4 + CSS custom properties
│   ├── assets/images/    — all site images
│   ├── components/
│   │   ├── NavBar.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   └── pages/
│       ├── Home.tsx
│       ├── OurMission.tsx
│       ├── OurCrates.tsx
│       ├── OurTeam.tsx
│       ├── AboutLily.tsx
│       ├── HowToHelp.tsx
│       ├── OurResponse.tsx
│       └── Media.tsx
├── vite.config.ts
├── tsconfig.json
├── package.json
└── CLAUDE.md
```

## Brand Design System

### Color Palette
- Black: #161616 (header, footer, dark sections)
- Dark: #1a1a1a
- Green accent: #87FE45 (primary CTA, highlights)
- Green dark: #6bd835 (hover states)
- Green light: #d0ffc2 (backgrounds, badges)
- White: #ffffff (content areas)
- Off-white: #f5f5f5 (alternating sections)

### Typography
- Headings: Oswald (Google Fonts, weights 400, 500, 600, 700), uppercase, letter-spacing 0.02em
- Body: Open Sans (Google Fonts, weights 400, 500, 600)

### UI Components
- Primary button: bg green, text black, font-heading font-bold, rounded
- Hero sections: full-width background image with dark overlay + centered text
- Section alternation: white and off-white backgrounds
- Cards: rounded-lg with shadow-sm, hover:shadow-md

## Pages
1. **Home** (/) — Hero, about preview, mission preview, CTA
2. **Our Mission** (/our-mission) — Mission statement, 2023 goals, volunteer call
3. **Our Crates** (/our-crates) — What's in a crate, item descriptions, photos
4. **Our Team** (/our-team) — Team member cards (Avery, Camille)
5. **About Lily** (/about-lily) — Founder bio, Hurricane Maria story
6. **How to Help** (/how-to-help) — Donate (PayPal, GoFundMe, Amazon), contact form
7. **Our Response** (/our-response) — Hurricane Ian story, photo gallery
8. **Media** (/media) — Press coverage, video, press kit

## Rules
- Edit files in place. Do NOT delete and recreate.
- Do NOT modify vite.config.ts without explicit instruction.
- Do NOT add npm packages without explicit instruction.
- Colors must use CSS custom properties or Tailwind theme tokens.
- Mobile responsive required.
- The /dist output must remain flat and Cloudflare Pages-deployable.

## Deploy Process
1. Push to GitHub (buttonrocklabs/cozycrates-website)
2. Cloudflare Pages auto-builds from main branch
3. Build command: `npm run build`, output: `dist`
