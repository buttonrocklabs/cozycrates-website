# CLAUDE.md — Cozy Crates Website

## Quick Reference

| Item | Value |
|------|-------|
| **Live site** | https://cozycrates.org |
| **Staging site** | https://cozycrates-website.pages.dev |
| **GitHub repo** | https://github.com/buttonrocklabs/cozycrates-website |
| **GitHub org** | buttonrocklabs |
| **Stack** | Vite + React 19 + TypeScript + Tailwind CSS v4 |
| **Hosting** | Cloudflare Pages (free plan) |
| **DNS** | Cloudflare (zone: cozycrates.org) |
| **Domain registrar** | IONOS (nameservers delegated to Cloudflare) |
| **Video hosting** | Cloudflare R2 bucket `cozycrates-media` |
| **Cloudflare account** | greg@buttonrocklabs.com |
| **Cloudflare account ID** | e2de8eec44e77d4a25d3246f8bb22daf |
| **Cloudflare zone ID** | b4faaab7ebbe59d48f2beb81a2e018a5 |
| **Local path** | /Users/gregfalconer/Documents/cozycrates-website |

---

## Organization Identity

**Cozy Crates** is a 501(c)(3) nonprofit founded by **Lily Falconer** (Greg Falconer's daughter) that provides comfort crates to children affected by natural disasters. Based in Lewisville, Texas.

**Mission:** Comfort as many children in need as we can and raise awareness of the emotional impact of natural disasters on children.

**What Cozy Crates does:** Assembles and delivers individualized comfort crates containing handmade blankets, stuffed animals, backpacks, activity books, colored pencils, card games, jump ropes, and personal hand-written notes to children in disaster shelters.

**Contact:**
- Email: contact@cozycrates.org
- Address: 611 Sword Bridge Drive, Lewisville, Texas 75056
- Social: Facebook, Instagram, LinkedIn, TikTok, Twitter (@cozycratesorg)

---

## Migration History

This website was migrated from **GoDaddy Website Builder** to a self-hosted static site on **April 14, 2026**.

**Previous state:**
- GoDaddy Website Builder 8.0.0 (proprietary JS-rendered SPA, no exportable source)
- All images hosted on GoDaddy's wsimg CDN
- Videos hosted on Vimeo (3 videos)
- DNS managed by IONOS, pointed at GoDaddy hosting
- Domain registered at IONOS

**Migration steps completed:**
1. Rebuilt entire site as Vite + React + TypeScript + Tailwind (same stack as buttonrocklabs.com)
2. Downloaded all images from GoDaddy CDN + local files (iCloud, Google Drive download)
3. Converted HEIC photos to JPEG for Hurricane Ian gallery
4. Created GitHub repo under buttonrocklabs org
5. Deployed to Cloudflare Pages via `wrangler pages deploy`
6. Added cozycrates.org zone to Cloudflare
7. Changed IONOS nameservers to Cloudflare (benedict.ns.cloudflare.com, jamie.ns.cloudflare.com)
8. Updated DNS: CNAME @ → cozycrates-website.pages.dev, CNAME www → cozycrates.org
9. Universal SSL certificate issued (Google CA, auto-renewing)
10. Downloaded Vimeo videos, compressed 4K→1080p with ffmpeg, uploaded to Cloudflare R2
11. Replaced Vimeo embeds with self-hosted `<video>` tags
12. GoDaddy Website Builder subscription cancelled

---

## Infrastructure Details

### Cloudflare Pages
- **Project name:** cozycrates-website
- **Production branch:** main
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Custom domains:** cozycrates.org, www.cozycrates.org
- **Deployment method:** Manual via `npx wrangler pages deploy dist --project-name cozycrates-website --branch main --commit-dirty=true`
- **Note:** GitHub auto-deploy is NOT connected. Deployments are manual via wrangler CLI after pushing to GitHub.

### Cloudflare DNS (zone: cozycrates.org)
| Type | Name | Content | Proxy |
|------|------|---------|-------|
| CNAME | cozycrates.org | cozycrates-website.pages.dev | Proxied |
| CNAME | www | cozycrates.org | Proxied |
| MX | @ | mx01.ionos.com (priority 10) | DNS only |
| MX | @ | mx00.ionos.com (priority 10) | DNS only |
| TXT | @ | google-site-verification=... | DNS only |
| TXT | @ | v=spf1 include:_spf-us.ionos.com ~all | DNS only |

### Cloudflare R2 (video storage)
- **Bucket name:** cozycrates-media
- **Public URL:** https://pub-2bc2bf823845443c99633e3c6a3d342f.r2.dev
- **Videos stored:**
  - `videos/cozy-crates-home-video.mp4` (100MB, 1080p, compressed from 595MB 4K)
  - `videos/cozycrates.mp4` (70MB, 1080p, compressed from 253MB 4K)
  - `videos/hawktv-segment.mp4` (30MB, 720p)
- **Original video sources:** /Users/gregfalconer/Documents/CozyCrates/drive-download-20260414T195432Z-3-001/

### IONOS (domain registrar)
- **Domain:** cozycrates.org
- **Nameservers:** Delegated to Cloudflare (benedict.ns.cloudflare.com, jamie.ns.cloudflare.com)
- **Email:** MX records still point to IONOS mail servers (mx00.ionos.com, mx01.ionos.com)
- **IONOS DNS records are inactive** — all DNS management is in Cloudflare

### SSL/TLS
- **Mode:** Full
- **Certificate:** Universal SSL (Google CA), covers *.cozycrates.org and cozycrates.org
- **Auto-renewing:** Yes (Cloudflare managed)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Language | TypeScript |
| Build tool | Vite 8 |
| CSS | Tailwind CSS v4 |
| Routing | React Router DOM v7 |
| Fonts | Google Fonts (Oswald, Open Sans) |
| Hosting | Cloudflare Pages |
| Video hosting | Cloudflare R2 |
| DNS | Cloudflare |
| Version control | Git / GitHub |

### Entry Points
- `index.html` → `src/main.tsx` → `src/App.tsx` (React Router) → `src/pages/*.tsx`
- Styles: `src/index.css` (Tailwind v4 imports + CSS custom properties via @theme)
- Fonts loaded in `index.html` via Google Fonts CDN

### Build Commands
```bash
npm run dev      # Dev server on port 5173
npm run build    # Production build to /dist
npm run preview  # Preview production build locally
```

---

## File Structure

```
cozycrates-website/
├── index.html               — HTML shell, Google Fonts, meta tags, OG tags
├── package.json
├── vite.config.ts            — React plugin, Tailwind plugin, path aliases (@/)
├── tsconfig.json
├── CLAUDE.md                 — This file
├── .gitignore
├── .claude/
│   └── launch.json           — Claude Code preview server config
├── public/
│   ├── _redirects            — Cloudflare Pages SPA catch-all (/* → /index.html 200)
│   ├── favicon.jpg           — Site favicon
│   ├── og-image.jpg          — OpenGraph social sharing image (Red Cross by Truck)
│   └── cozy-crates-no-sew-blanket.pdf  — Downloadable blanket-making instructions
├── src/
│   ├── main.tsx              — React DOM createRoot + BrowserRouter
│   ├── App.tsx               — React Router route definitions
│   ├── index.css             — Tailwind v4 + @theme CSS custom properties + base styles
│   ├── assets/images/        — All site images (see Image Assets section)
│   ├── components/
│   │   ├── NavBar.tsx        — Sticky header, logo, nav links, About Us dropdown, mobile hamburger
│   │   ├── Footer.tsx        — Contact info, quick links, social icons, copyright
│   │   └── Layout.tsx        — NavBar + <Outlet> + Footer wrapper, scroll-to-top on navigate
│   └── pages/
│       ├── Home.tsx          — Hero, about preview, mission preview, donate CTA
│       ├── OurMission.tsx    — Mission statement, 2023 goals grid, volunteer CTA
│       ├── OurCrates.tsx     — Crate item cards with icons, photo gallery
│       ├── OurTeam.tsx       — Team member cards (Avery, Camille)
│       ├── AboutLily.tsx     — Founder bio, Hurricane Maria story, founding story
│       ├── HowToHelp.tsx     — GoFundMe card, mailto contact form
│       ├── OurResponse.tsx   — Hurricane Ian story, stats banner, 12-photo gallery
│       └── Media.tsx         — Press articles, 3 self-hosted videos, press kit CTA
```

---

## Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home.tsx | Hero with background image, about section, mission section, donate CTA |
| `/our-mission` | OurMission.tsx | Mission statement, 2023 goals (4 cards), volunteer call to action |
| `/our-crates` | OurCrates.tsx | What's in a crate — 5 item cards with descriptions, photo gallery |
| `/our-team` | OurTeam.tsx | Team bios — Avery Dyer (Marketing) and Camille Jones (Content) |
| `/about-lily` | AboutLily.tsx | Lily Falconer's story, Hurricane Maria experience, founding motivation |
| `/how-to-help` | HowToHelp.tsx | GoFundMe donation card, mailto-based contact form |
| `/our-response` | OurResponse.tsx | Hurricane Ian response story (Sept 2022), 100 crates delivered, photo gallery |
| `/media` | Media.tsx | 3 press articles, 3 self-hosted videos from R2, press kit contact |

### Navigation Structure
```
NavBar:
├── Home
├── About Us (dropdown)
│   ├── About Lily, Founder → /about-lily
│   ├── Our Team → /our-team
│   ├── Our Crates → /our-crates
│   └── Our Mission → /our-mission
├── Our Response → /our-response
├── Media → /media
└── HOW TO HELP → /how-to-help (green CTA button)
```

---

## Brand Design System

### Color Palette (defined in src/index.css @theme)
| Token | Hex | Usage |
|-------|-----|-------|
| `cc-black` | #161616 | Header, footer, dark sections |
| `cc-dark` | #1a1a1a | Dropdown backgrounds |
| `cc-gray-dark` | #2a2a2a | Borders in dark sections |
| `cc-gray` | #4a4a4a | — |
| `cc-gray-light` | #8a8a8a | — |
| `cc-gray-lighter` | #d0d0d0 | — |
| `cc-white` | #ffffff | Content area backgrounds |
| `cc-off-white` | #f5f5f5 | Alternating section backgrounds |
| `cc-green` | #87FE45 | Primary accent, CTAs, highlights |
| `cc-green-dark` | #6bd835 | Hover states, secondary accent |
| `cc-green-light` | #d0ffc2 | Badge backgrounds, icon circles |

### Typography
- **Headings:** Oswald (Google Fonts, weights 400/500/600/700), uppercase, letter-spacing 0.02em
- **Body:** Open Sans (Google Fonts, weights 400/500/600)
- All headings (`h1`–`h6`) styled globally in index.css with font-heading, font-bold, uppercase

### UI Patterns
- **Hero sections:** Full-width background image with `bg-black/60` overlay, centered white text
- **Section alternation:** White (`bg-white`) and off-white (`bg-cc-off-white`) backgrounds
- **Primary button:** `bg-cc-green text-cc-black font-heading font-bold rounded hover:bg-cc-green-dark`
- **Cards:** `rounded-lg shadow-sm hover:shadow-md` with icon circles
- **Icon circles:** `h-12 w-12 rounded-full bg-cc-green-light text-cc-green-dark`

---

## Image Assets (src/assets/images/)

| File | Description | Source |
|------|-------------|--------|
| `logo.svg` | Vector logo | Local (Google Drive download) |
| `logo.png` | PNG logo | Local (Google Drive download) |
| `logo-horizontal.jpg` | Horizontal logo variant | Local (Google Drive download) |
| `logo-site.png` | Logo as used on GoDaddy site | Downloaded from wsimg CDN |
| `hero-bg.jpeg` | Home page hero background | Downloaded from wsimg CDN |
| `red-cross-by-truck.jpg` | Red Cross shelter delivery photo | Downloaded from wsimg CDN |
| `red-cross-by-truck-alt.jpg` | Alternate Red Cross photo | Downloaded from wsimg CDN |
| `closed-box.jpg` | Packed Cozy Crate | Downloaded from wsimg CDN |
| `tiger-box.jpg` | Crate with tiger stuffed animal | Local (Social Media Pictures) |
| `white-lion-box.jpg` | Crate with white lion stuffed animal | Local (Social Media Pictures) |
| `lily-unloading-truck.jpg` | Lily unloading crates | Downloaded from wsimg CDN |
| `lily-in-shelter.jpg` | Lily in shelter donation area | Downloaded from wsimg CDN |
| `lily-inside-shelter.jpg` | Inside disaster shelter | Downloaded from wsimg CDN |
| `lily-with-cart.jpg` | Lily with cart of crates | Downloaded from wsimg CDN |
| `packed-truck.jpg` | Packed truck and U-Haul | Downloaded from wsimg CDN |
| `team-avery.jpeg` | Avery Dyer headshot | Downloaded from wsimg CDN |
| `team-camille.jpg` | Camille Jones headshot | Downloaded from wsimg CDN |
| `ian-IMG_9224.jpg` | Hurricane Ian gallery | Converted from HEIC (local) |
| `ian-IMG_9230.jpg` | Hurricane Ian gallery | Converted from HEIC (local) |
| `ian-IMG_9238.jpg` | Hurricane Ian gallery | Converted from HEIC (local) |
| `ian-IMG_9244.jpg` | Hurricane Ian gallery | Converted from HEIC (local) |
| `ian-IMG_9253.jpg` | Hurricane Ian gallery | Converted from HEIC (local) |
| `ian-IMG_9262.jpg` | Hurricane Ian gallery | Converted from HEIC (local) |

### Original Asset Sources (not in repo)
- **iCloud:** `/Users/gregfalconer/Library/Mobile Documents/com~apple~CloudDocs/Cozy Crates/` — High-res originals (iCloud stubs, need download before use)
- **Google Drive download:** `/Users/gregfalconer/Documents/CozyCrates/drive-download-20260414T195432Z-3-001/` — Logos, photos, videos, documents
- **Hurricane Ian HEIC photos:** `.../Photos/Hurricane Ian/` (~39 HEIC files)
- **Social Media photos:** `.../Photos/Social Media Pictures/` (~14 HEIC/JPG files)

---

## External Links & Integrations

| Service | URL | Status |
|---------|-----|--------|
| GoFundMe | https://gofund.me/bee1cc79e | Active |
| PayPal Donate | — | Not yet integrated (removed from page, add back when URL available) |
| Amazon Wish List | — | Not yet integrated (removed from page, add back when URL available) |
| No-Sew Blanket PDF | /cozy-crates-no-sew-blanket.pdf | Hosted locally in /public |
| Contact form | mailto:contact@cozycrates.org | Uses mailto: link (no backend) |

### Social Media Links (in Footer)
- Facebook: https://www.facebook.com/cozycratesorg
- Instagram: https://www.instagram.com/cozycratesorg
- LinkedIn: https://www.linkedin.com/company/cozy-crates
- TikTok: https://www.tiktok.com/@cozycratesorg
- Twitter: https://twitter.com/cozycratesorg

---

## Deploy Process

### Manual deployment (current method)
```bash
# 1. Build
npm run build

# 2. Deploy to Cloudflare Pages
npx wrangler pages deploy dist --project-name cozycrates-website --branch main --commit-dirty=true

# 3. Push to GitHub
git add -A
git commit -m "description"
git push
```

### Upload videos to R2
```bash
npx wrangler r2 object put cozycrates-media/videos/FILENAME.mp4 \
  --file /path/to/video.mp4 \
  --content-type video/mp4 \
  --remote
```

### Wrangler authentication
```bash
npx wrangler login   # Opens browser for OAuth
npx wrangler whoami  # Verify auth
```
Token stored at: `~/Library/Preferences/.wrangler/config/default.toml`

---

## Known Issues & Future Work

### Content updates needed
- **Dated content:** Site content references 2023 goals and team members who were high school seniors — needs updating with current info (check with Lily)
- **Team bios:** Avery and Camille may have graduated — verify if still on team
- **Goals section:** Replace 2023 goals with current/future goals

### Missing integrations
- **PayPal donate button:** Removed from How to Help page — add back when URL is provided
- **Amazon Wish List:** Removed from How to Help page — add back when URL is provided
- **Contact form:** Currently uses mailto: — could upgrade to Formspree, Cloudflare Workers, or similar for better UX

### Potential improvements
- **GitHub auto-deploy:** Connect Cloudflare Pages to GitHub for automatic deployments on push (currently manual via wrangler)
- **Image optimization:** Large images (tiger-box.jpg 2.9MB, white-lion-box.jpg 1.6MB) could be compressed or converted to WebP
- **R2 custom domain:** Could add `media.cozycrates.org` as custom domain for R2 bucket instead of the pub-xxx.r2.dev URL
- **Vimeo account:** Can be cancelled now that videos are self-hosted on R2 (credentials: cozycratesorg@gmail.com)
- **DMARC policy:** Cloudflare recommends adding a DMARC DNS record for email authentication

---

## Rules for Claude Code

- Edit files in place. Do NOT delete and recreate.
- Do NOT modify vite.config.ts without explicit instruction.
- Do NOT add npm packages without explicit instruction.
- Colors must use CSS custom properties or Tailwind theme tokens defined in index.css @theme.
- Mobile responsive required.
- The /dist output must remain flat and Cloudflare Pages-deployable.
- All images go in `src/assets/images/` and are imported in components.
- Static files (PDFs, favicon, OG image, _redirects) go in `public/`.
- Videos are hosted on R2 and referenced by full URL, not stored in repo.
