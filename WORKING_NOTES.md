# Working Notes — Sean Doyle Personal Portfolio

> **Internal document. Not intended for public audiences.**
> This file should be updated at the end of every working session.
> It is a briefing document for the developer and for AI assistants continuing this project.

---

## How to Use This File (For AI Assistants)

1. Read this entire file before suggesting any changes or writing any code.
2. Read `README.md` for the public-facing project description.
3. Read `PRD.md` for content requirements and target audience.
4. Read `STANDARDS.md` for all design and technical rules — they are binding.
5. Do not change the folder structure or file naming conventions without discussion.
6. Follow all conventions listed in the Conventions section exactly.
7. Do not suggest any approach listed in "What Was Tried and Rejected."
8. Ask clarifying questions before making large structural changes.
9. This project was built with AI assistance (Replit Agent). Refactor conservatively — do not restructure working code without a clear reason.

---

## Current State

**Last Updated:** 2026-03-23

This is a completed single-page portfolio site. All five sections are built, styled, and responsive. Content is finalized with the correct copy. No placeholder text exists anywhere in the codebase. The site is running on a local Python HTTP server on port 5000.

### What Is Working

- [x] Sticky, scroll-aware navigation (transparent → blurred dark on scroll)
- [x] Hero section with Chicago skyline background, dark cinematic overlay
- [x] Hero text (name, eyebrow label, tagline) with readable contrast and text-shadow
- [x] Large rounded-square headshot in hero
- [x] About section with two-column layout (text left, Kinnick Stadium photo right)
- [x] Kinnick Stadium photo with caption ("Go Hawks / October 18, 2025")
- [x] Skills section — four category cards with icons, equal height, hover lift
- [x] Projects section — three cards with titles, tool labels, bullet points, hover lift
- [x] Contact section — horizontal row of icon+text buttons (Email, LinkedIn, GitHub)
- [x] Dark theme throughout using CSS custom properties
- [x] Inter font via Google Fonts
- [x] Fully responsive from 320px — mobile stacks correctly, nav collapses name
- [x] All external links use `target="_blank" rel="noopener noreferrer"`
- [x] No inline styles anywhere — all styles in `css/stylesheet.css`
- [x] No `<style>` tags in HTML
- [x] Semantic HTML5 elements used throughout

### What Is Partially Built

- [ ] `js/scripts.js` — only contains the scroll nav listener; placeholder file otherwise

### What Is Not Started

- [ ] Favicon (browser requests `/favicon.ico` and receives a 404 — harmless but unresolved)
- [ ] Deployment / publishing to production domain

---

## Current Task

**What I was working on when I last stopped:**
Final content and polish pass. Updated the About section text to the approved copy, replaced the Tigerhawk logo in the About section with a Kinnick Stadium photo (converted from HEIC to JPEG), and added a subtle caption below the image. Also updated README.md and generated this WORKING_NOTES.md file.

**The very next step is:**
Deploy the site using Replit's publish feature, or add a favicon to resolve the only remaining 404.

---

## Architecture and Tech Stack

| Technology | Version | Why It Was Chosen |
|---|---|---|
| HTML5 | — | Required by STANDARDS.md; semantic elements throughout |
| CSS3 | — | Required by STANDARDS.md; no frameworks allowed |
| Vanilla JavaScript | ES6 | Minimal interactivity needed; no framework justified |
| Inter (Google Fonts) | Variable | Specified in STANDARDS.md for clean, modern typography |
| Python `http.server` | 3.x | Zero-config static file server; no build step needed |
| ImageMagick | 7.1.2 | Used once to convert `kinnick.HEIC` to `kinnick.jpg` |

---

## Project Structure Notes

```
/
├── index.html                          # Single-page site — all sections here
├── css/
│   └── stylesheet.css                  # All styles — no inline styles anywhere
├── js/
│   └── scripts.js                      # Scroll-aware nav only
├── images/
│   ├── seandoyle-headshot.jpeg         # Hero headshot
│   ├── chicago-skyline-linkedIn-background.jpg  # Hero background
│   ├── kinnick.jpg                     # About section photo (converted from HEIC)
│   ├── kinnick.HEIC                    # Original file — can be deleted if repo size matters
│   └── Tigerhawk-gold on black@2x-2.png  # No longer used — kept in case
├── PRD.md                              # Product requirements — do not modify without discussion
├── STANDARDS.md                        # Design and technical rules — binding
├── README.md                           # Public-facing project description
├── WORKING_NOTES.md                    # This file
└── Sean Doyle Resume.pdf               # Source material — do not link from site (per STANDARDS.md)
```

**Non-obvious decisions:**
- `css/stylesheet.css` is the single source of truth for all visual styles. Never add `style=""` attributes or `<style>` blocks anywhere.
- `js/scripts.js` exists to satisfy the folder structure in STANDARDS.md even though it currently contains only the nav scroll listener.
- `kinnick.HEIC` is the original photo file. Browsers cannot render HEIC natively, so `kinnick.jpg` is the converted version that is actually used.
- `Tigerhawk-gold on black@2x-2.png` is no longer referenced in the HTML. Kept in `/images/` but not used.
- `Sean Doyle Resume.pdf` must not be linked from the site per STANDARDS.md.

---

## Data / Database

This project has no persistent data layer. It is a fully static site with no backend, no database, and no API calls. All content is hard-coded in `index.html`.

---

## Conventions

### File and Class Naming
- HTML file: `index.html` (lowercase, single file)
- CSS file: `css/stylesheet.css` (per STANDARDS.md)
- JS file: `js/scripts.js` (per STANDARDS.md)
- CSS class names use hyphen-separated lowercase: `.hero-content`, `.project-card`, `.contact-link`
- Section IDs match nav anchor targets: `#hero`, `#about`, `#skills`, `#projects`, `#contact`

### CSS Conventions
- All color, shadow, radius, and transition values are defined as CSS custom properties in `:root` at the top of `stylesheet.css`
- Variable naming: `--bg`, `--bg-card`, `--border`, `--purple`, `--purple-light`, `--text-primary`, `--text-secondary`, `--text-muted`
- Never hardcode a color value outside of `:root` unless it is a one-off tweak (e.g., `#171722` for slightly darker cards)
- Section alternation (light/dark bg) is controlled via `section:nth-of-type(odd/even)` — do not add inline backgrounds to sections directly unless overriding (like `#hero` and `#contact`)

### HTML Conventions
- Use semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- All images must have descriptive `alt` text
- All external links must include `target="_blank" rel="noopener noreferrer"`
- No inline `style=""` attributes anywhere
- No `<style>` blocks anywhere in HTML

### Heading Hierarchy
- `h1`: Page title only (hero section)
- `h2`: Section titles (About Me, Skills, Projects, Contact)
- `h3`: Sub-items (skill card categories, project titles)

### Git Commit Style
Descriptive sentence-case messages describing what changed, not why:
- "Add Kinnick Stadium photo to About section"
- "Fix hero text contrast with darker overlay and text-shadow"

---

## Decisions and Tradeoffs

- **Dark theme chosen:** Requested by the user to feel sleek, urban, and premium. The purple accent is intentionally restrained — used only for section titles, hover states, card borders, and key labels. Do not suggest reverting to a light theme.
- **No framework used:** STANDARDS.md explicitly prohibits frameworks. Vanilla HTML and CSS only. Do not suggest adding React, Tailwind, Bootstrap, or any other library.
- **Python `http.server` for local dev:** Zero configuration required; serves static files from the project root over port 5000. No Node.js, npm, or build step needed. Do not suggest switching to a different dev server.
- **Single `index.html` file:** Required by STANDARDS.md. All content is on one page. Do not suggest splitting into multiple HTML pages.
- **CSS custom properties for the design system:** All tokens (colors, shadows, radius, transitions) live in `:root`. This makes future theme changes straightforward without hunting through the stylesheet.
- **Chicago skyline as hero background:** The user's visual identity is Chicago-based. The overlay gradient is intentionally dark enough to keep text readable while preserving the cinematic look.
- **Kinnick Stadium photo cropped to 240×300px:** Portrait crop proportional to the About section text block. `object-fit: cover` handles the crop automatically.
- **HEIC converted to JPEG:** Browsers do not natively support HEIC. ImageMagick (`magick` / `convert`) was used in-environment to produce `kinnick.jpg`. The original `.HEIC` remains in the repo.

---

## What Was Tried and Rejected

- **Tigerhawk logo as the About section image:** Used initially, then replaced by the user with the Kinnick Stadium photo. Do not reintroduce the Tigerhawk image unless the user requests it.
- **Original three-paragraph bio:** The first About section text ("I'm a Business Analytics and Information Systems student...") was revised twice. The current copy begins with "My name is Sean Doyle. I am a Business Analytics..." — use this version.
- **Short one-sentence About text ("My name is Sean Doyle. I'm from the Chicago suburbs..."):** Was used temporarily, then replaced with the full three-paragraph version. Do not revert to the single sentence.
- **Linking the headshot as `images/headshot.jpg`:** The actual filename is `seandoyle-headshot.jpeg`. Do not alias or rename it.

---

## Known Issues and Workarounds

- **Favicon 404:** The browser automatically requests `/favicon.ico` on every page load. No favicon file exists, so the server returns a 404. This has no visual impact on the site and does not affect functionality. **No workaround needed** — it is intentionally deferred. Do not add error handling that suppresses this without also adding a real favicon.

---

## Browser / Environment Compatibility

**Target browsers:** Chrome, Safari, Firefox (per STANDARDS.md)  
**Mobile:** Fully usable at 375px and wider (per STANDARDS.md); tested at 320px, 480px, 720px, and desktop breakpoints  
**Environment:** Replit, NixOS container, Python 3.x  
**Known incompatibilities:** None identified. `backdrop-filter` (used for the scrolled nav blur) is supported in all target browsers. `100svh` (used for hero height) has broad support but falls back gracefully.

---

## Open Questions

- Should a favicon be added before the site is published?
- Should the GitHub link in the Contact section point to a specific pinned repository or remain as a profile link?
- Should the Projects section ever include live links once projects are hosted publicly?

---

## Session Log

### 2026-03-23
- Built the complete site from scratch: hero, about, skills, projects, contact, footer
- Redesigned to dark Chicago-inspired theme with skyline hero background
- Added Kinnick Stadium photo to About section (converted from HEIC to JPEG)
- Refined hero text contrast (darker overlay, text-shadow on name and labels)
- Replaced Tigerhawk image with Kinnick Stadium photo; added "Go Hawks / October 18, 2025" caption
- Updated About Me text to final approved three-paragraph version
- Updated README.md to full public-facing description
- Generated WORKING_NOTES.md
- Left incomplete: favicon, deployment
- Next step: publish site or add favicon

---

## Useful References

- [Inter font on Google Fonts](https://fonts.google.com/specimen/Inter)
- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [CSS Grid (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- [backdrop-filter browser support (Can I Use)](https://caniuse.com/css-backdrop-filter)
- [Python http.server docs](https://docs.python.org/3/library/http.server.html)
- **AI usage note:** This project was built entirely with Replit Agent (AI-assisted). All HTML, CSS, and JS were generated or heavily modified by the AI based on PRD.md, STANDARDS.md, and iterative user prompts. Content (bio text, project descriptions) was provided by the user and placed verbatim by the AI.
