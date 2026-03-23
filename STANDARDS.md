# STANDARDS.md

## 1. Project Overview

This project is a one-page professional landing site for Sean Doyle, a Business Analytics and Information Systems student at the University of Iowa. The site is designed for recruiters and hiring managers seeking Data Analyst Intern and Business Analyst Intern candidates, showcasing Sean’s projects, skills, and ability to apply analytics in real-world scenarios.

A successful outcome is a clean, professional site that demonstrates tangible project work, clearly communicates technical skills, and helps convert visitors into interview opportunities.

---

## 2. Technical Standards

These rules apply to every file in this project without exception.

### Languages and versions

- HTML5 using semantic elements throughout: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`
- CSS3 only
- All styles must be written in `css/stylesheet.css`
- No inline `style=""` attributes
- No `<style>` tags in any HTML file
- HTML and CSS must pass validation

### Folder structure

```text
/your-website-project (Root Folder)
├── index.html
├── /css
│    └── stylesheet.css
├── /js
│    └── scripts.js
├── /images
│    └── headshot.jpg
```

### Framework

- No framework
- Vanilla HTML and CSS only

### Architecture

- Static site
- Single `index.html` file in the project root
- External stylesheet linked with a relative path
- All images stored locally in `/images/`
- Do not link to or embed the resume anywhere on the site

### Responsiveness

- Fully responsive from 320px and wider
- No horizontal scrolling at any screen size

### Accessibility

- All images must include descriptive `alt` text
- Maintain accessible color contrast
- Proper heading hierarchy: `h1` to `h2` to `h3`
- All links must have clear, descriptive text
- Page must include a descriptive `<title>`
- All links and interactive elements must be keyboard accessible

### Compatibility

- Must work correctly in Chrome, Safari, and Firefox
- Must be fully usable on mobile screens 375px and wider

### Security

- All external links open in a new tab using `target="_blank"` and `rel="noopener noreferrer"`

---

## 3. Design Standards

These rules define the visual and layout system for the site.

### Color palette

The site should feel professional first, with purple used as a controlled accent rather than the dominant color. Silver and cool neutrals should support the palette to keep it polished and modern.

| Role | Hex Code | Usage |
|------|----------|-------|
| Background | `#F7F7FA` | Main page background |
| Primary text | `#1F2430` | Body text and headings |
| Primary accent | `#5B4B8A` | Section headings, links, key accents |
| Accent hover | `#6C5FA7` | Hover states and subtle emphasis |
| Secondary background | `#E9EAF0` | Cards, section blocks, skill containers |
| Silver accent | `#C0C4CC` | Borders, dividers, subtle highlights |
| White | `#FFFFFF` | Cards, content surfaces |

Style direction:
- Clean and modern
- Professional, not flashy
- Purple should be present but restrained
- Silver should be subtle and used for polish, not shine

### Typography

- Font: Inter from Google Fonts
- Body size: 16px
- Line height: 1.6

Type scale:
- H1: 1.75rem, bold
- H2: 1.4rem, bold, primary accent color
- H3: 1.1rem, semi-bold
- Body: 1rem, regular

### Imagery

- Use only a professional headshot
- No stock photos
- No clip art
- No emojis

### Layout

- Maximum content width: 800px
- Content centered on the page
- One-page vertical layout
- Sticky top navigation with anchor links
- Section spacing: 60px top and bottom padding
- Mobile: single-column layout
- Desktop: simple two-column project layout is allowed
- Generous whitespace throughout

### Component styles

**Profile photo**
- Circular crop
- Approximately 160px diameter
- Centered in the hero section
- Thin silver or light neutral border allowed

**Skill tags**
- Rounded pill style
- Purple accent background with white text for core technical skills
- Light neutral or silver-toned background with dark text for secondary skills

**Project cards**
- Clean card layout
- White or very light neutral background
- Subtle silver border or soft shadow
- Include project title, tools used, and 2 to 3 bullets describing outcomes
- Include a link only when a project is ready to show

**Contact links**
- Must include email
- Should include LinkedIn
- Styled as clean text links or simple buttons
- Open in a new tab when external

**Navigation**
- Simple top navigation
- Anchor links to each section
- Purple hover or active state
- No overly decorative effects

### Tone

Desired feel:
- Professional
- Approachable
- Data-driven

Writing style:
- First person
- Clear and direct
- Confident without sounding exaggerated
- Avoid buzzwords and filler language

### Reference direction

Use portfolio sites with:
- Strong spacing
- Clean hierarchy
- Minimal clutter
- Clear sections
- Subtle, polished accent color use

---

_Remember: this document is a living artifact. Update it as your project evolves._
