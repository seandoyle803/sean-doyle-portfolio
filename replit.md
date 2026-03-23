# Sean Doyle Personal Landing Page

## Overview
A one-page professional portfolio site for Sean Doyle, a Business Analytics and Information Systems student at the University of Iowa. Designed for recruiters and hiring managers seeking Data Analyst Intern and Business Analyst Intern candidates.

## Project Structure
```
/
├── index.html           # Main single-page site
├── css/
│   └── stylesheet.css   # All styles (no inline styles anywhere)
├── js/
│   └── scripts.js       # JS placeholder (currently empty)
├── images/
│   └── seandoyle-headshot.jpeg
├── PRD.md
├── STANDARDS.md
├── README.md
└── Sean Doyle Resume.pdf
```

## Setup & Running
- **Runtime**: Python's built-in HTTP server
- **Command**: `python3 -m http.server 5000 --bind 0.0.0.0`
- **Port**: 5000

## Architecture
- Pure static HTML5 + CSS3, no frameworks, no build step
- Single `index.html` with semantic elements: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`
- All styles in `css/stylesheet.css` — no inline styles or `<style>` tags
- Inter font via Google Fonts

## Design
- Color palette: background `#F7F7FA`, text `#1F2430`, accent `#5B4B8A`, cards `#FFFFFF`
- Responsive: single column on mobile, two-column project grid on desktop (640px+)
- Max content width: 800px, centered
- Sticky navigation with anchor links

## Sections
1. Hero — headshot, name, tagline
2. About — bio paragraph
3. Skills — core (purple pills) + secondary (neutral pills)
4. Projects — three cards (Unicorn DB, MLB Analytics, College Rating Analysis)
5. Contact — email, LinkedIn, GitHub
