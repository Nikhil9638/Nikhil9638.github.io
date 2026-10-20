# Nikhil Modi — Developer Portfolio

A static, single-page portfolio for Nikhil Modi, a B.Sc. IT student and Python / full-stack developer. Built with plain HTML, CSS and JavaScript: no framework, no build step, no package manager, no backend.

> **Status:** in progress (Phases 1–4 of 6 complete: all sections built; polish, QA and deployment guide remain).

## Files

```
.
├── index.html            Single page: hero, work, skills, about, education, services, contact
├── styles.css            Design tokens, base styles, components
├── script.js             Progressive enhancement only (the page works without it)
├── favicon.svg           "NM" monogram
├── .nojekyll             Tells GitHub Pages to serve files as-is
└── public/assets/
    ├── fonts/            Self-hosted WOFF2 fonts + their OFL licences
    └── projects/
        ├── velora/       Real Velora 2 screenshots (cropped, WebP)
        └── hunter/       Reserved for clean Hunter System screenshots
```

All paths are relative, so the site works from a GitHub Pages project URL (`https://<user>.github.io/<repo>/`) as well as a custom domain.

## Preview locally

Any static file server works. With Python (already installed):

```bash
cd path/to/Portfolio
python -m http.server 8000
```

Then open <http://localhost:8000>. Opening `index.html` directly also works, but a server matches how GitHub Pages serves the site.

## Assets

- **Fonts:** [Bricolage Grotesque](https://github.com/ateliertriay/bricolage) (headings) and [IBM Plex Sans](https://github.com/IBM/plex) (body), both under the SIL Open Font License 1.1. Latin subsets are served locally, so the site makes no third-party font requests.
- **Velora 2 screenshots:** genuine screenshots of the application with local test data. The internal order ID has been cropped out. The Velora source code is private and is not linked or included.
- **Hunter System:** no screenshots yet. Only clean captures (test data, no third-party character artwork) will be added.
- **Not used:** generated promotional video (`brag.mp4`) is ignored by Git and is not presented as an application demo.

## Deploying to GitHub Pages

Full step-by-step instructions are added in Phase 6.
