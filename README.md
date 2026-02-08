# ThaBarWa International Foundation — Landing Page

A minimal, accessible landing page for **ThaBarWa International Foundation**, so new contacts can quickly learn about the organisation and find ways to engage.

**License:** [GNU AGPL v3](LICENSE)

## Purpose

- **About** — History and activities (ThaBarWa House, vision of Sayadaw Ashin Ottamathara).
- **Photos & videos** — Examples of centre life and teachings.
- **News** — Major events (new land, new centre openings).
- **Sayadaw schedule** — Updates for Master Sayadaw’s teachings and visits.
- **Plans & needs** — Regional development, property, materials, people.
- **Success stories** — Healing, recovery, overcoming challenges.
- **Donate** — Link to PayPal and project choice (100% to chosen cause).

## Tech

- Plain **HTML**, **CSS**, and **JavaScript** (no build step).
- **Accessibility**: WCAG 2.1 AA–oriented (semantic HTML, skip link, focus styles, contrast, reduced motion). See [accessibility.html](accessibility.html).

## Run locally

Open `index.html` in a browser, or use a simple server:

```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000`.

## Deploy

Upload the repo (or just `index.html`, `accessibility.html`, `styles.css`, and `main.js`) to any static host (Netlify, Vercel, GitHub Pages, etc.).

## Content

Replace placeholders with real content:

- **Media** — Swap placeholder blocks for real images/videos and add proper `alt` text.
- **News** — Add real items and dates.
- **Schedule** — Update with current Sayadaw schedule.
- **Plans & needs** — List actual priorities and contact routes.
- **Success stories** — Add short, consent-based stories.

## Links

- Main site: [stigthai.wixsite.com/thabarwa](https://stigthai.wixsite.com/thabarwa)
- Donate: [paypal.me/thabarwacenter](https://www.paypal.me/thabarwacenter)
