# Code Travel

A responsive React travel-themed website that presents the evolution,
history and ecosystems of eight programming languages.

## Live demos
1. Netlify: https://code-travel.netlify.app/
2. GitHub Pages: https://acohon53114.github.io/code-travel/
3. Vercel: https://code-travel-opal.vercel.app/

## Highlights
- Three.js 3D rotating globe
- Desktop drag interaction; tablet/mobile auto-rotation
- Traditional Chinese, Simplified Chinese and English
- Eight language destinations and framework official links
- Responsive navigation and layouts
- GitHub Actions CI: lint → build → deploy

## Pages
1. Home — 3D globe and project overview
2. Destinations — eight programming-language destinations
3. Language Detail — history, official website and frameworks
4. Evolution Route — language timeline
5. About — project concept

## Tech stack
- React + Vite
- React Router
- Three.js
- CSS
- ESLint
- GitHub Actions / GitHub Pages
- Vercel / Netlify

## Project structure

src/
├── assets/
├── components/
│   ├── CodePlanet.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── PageIntro.jsx
│   └── ScrollToTop.jsx
├── data/
├── hooks/
├── pages/
├── styles/
│   ├── base.css
│   ├── home-responsive.css
│   ├── navigation-home.css
│   ├── pages-responsive.css
│   ├── pages.css
│   └── refinements.css
└── utils/

## Run locally

npm install
npm run dev

## Quality checks

npm run lint
npm run build