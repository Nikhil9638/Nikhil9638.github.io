# Nikhil Modi — Developer Portfolio

A single-page portfolio for Nikhil Modi, a B.Sc. IT student focused on Python, Django REST APIs, backend development and full-stack applications. It presents two projects: **Velora 2**, a QR-based café ordering platform (private, commercial), and **Hunter System**, a gamified Python-learning platform (public source).

Plain HTML, CSS and a little JavaScript: no framework, build step, package manager, backend, analytics or third-party requests.

> **Status:** Phases 1–5 complete (design, all sections, accessibility and QA). Not yet published: the GitHub Pages address still needs to be confirmed. See [Before you publish](#before-you-publish).

## Files

```
.
├── index.html                  The whole site: header, hero, work, skills, about, education, services, contact
├── styles.css                  Design tokens, then one numbered block per component
├── script.js                   Mobile menu only; the page works without JavaScript
├── favicon.svg                 "NM" monogram
├── .nojekyll                   Tells GitHub Pages to serve files as-is
├── .gitignore                  Keeps prompt.md and the generated promo video out of the repository
└── public/assets/
    ├── fonts/                  Bricolage Grotesque + IBM Plex Sans (WOFF2) and their OFL licences
    ├── icons/                  favicon-32.png, apple-touch-icon.png (180 × 180)
    ├── og/og-image.png         Link-preview image, 1200 × 630
    └── projects/velora/        Five real Velora 2 screenshots (WebP, cropped)
```

All asset paths are relative, so the site works at `https://<user>.github.io/` and at a project path such as `https://<user>.github.io/portfolio/`.

## Preview locally

From this folder, with Python (already installed on this machine):

```bash
python -m http.server 8000
```

Open <http://localhost:8000> and stop the server with `Ctrl+C`. Opening `index.html` directly also works, but a server matches how GitHub Pages serves the site.

## Before you publish

Link previews and canonical URLs need the site's absolute address, which is not confirmed yet. In `index.html`, find the comment that starts `PUBLISHING URL NOT CONFIRMED YET` and:

1. Replace every `SITE_URL` with the real address, keeping the trailing slash, e.g. `https://nikhil9638.github.io/`.
2. Move the four tags (`canonical`, `og:url`, `og:image`, `twitter:image`) out of the comment.
3. After publishing, paste the URL into LinkedIn's [Post Inspector](https://www.linkedin.com/post-inspector/) to check the preview image.

Everything else (title, description, Open Graph text, icons, robots) is already in place.

## Deploying to GitHub Pages

Planned address: `https://nikhil9638.github.io/`. That requires a repository named exactly **`Nikhil9638.github.io`** on the `Nikhil9638` account.

1. On GitHub, create a new **public** repository named `Nikhil9638.github.io`. Do not add a README, licence or `.gitignore` (this folder already has them).
2. Complete [Before you publish](#before-you-publish) and commit that change.
3. Connect this folder and push:
   ```bash
   git remote add origin https://github.com/Nikhil9638/Nikhil9638.github.io.git
   git push -u origin main
   ```
4. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch **`main`**, folder **`/ (root)`**, then **Save**.
5. Wait for the **pages build and deployment** run under the **Actions** tab to finish (usually a minute or two), then open the address.
6. Check the live site: the menu on a phone, each nav link, both email buttons, the GitHub and LinkedIn links, and the link preview.

To publish under a different repository name instead, the address becomes `https://nikhil9638.github.io/<repository-name>/`; use that as `SITE_URL`.

## Content and assets

- **Velora 2:** genuine screenshots from a local test run. The internal order ID and the order number are cropped out, and a test category with unprofessional wording was cropped from the mobile screenshot. The source code is private and not linked. Stripe online payments and production deployment are described as planned, not live.
- **Hunter System:** facts checked against the public repository (`Nikhil9638/Hunter-system`). No screenshots yet; only clean captures with test data and without third-party character artwork should be added, in `public/assets/projects/hunter/`.
- **Not used:** `brag.mp4` is a generated promotional animation, not a recording of the app. It is ignored by Git and never shown as a demo.
- **Fonts:** [Bricolage Grotesque](https://github.com/ateliertriay/bricolage) and [IBM Plex Sans](https://github.com/IBM/plex), SIL Open Font License 1.1, served from this repository.

## Maintaining the site

- **Text** lives in `index.html`, one `<section>` per nav item (`#work`, `#skills`, `#about`, `#education`, `#services`, `#contact`).
- **Colours, type sizes and spacing** are tokens at the top of `styles.css`. Text colours on the navy surfaces are WCAG AAA. Control borders use `--line-control` (3:1 minimum).
- **Adding a screenshot:** convert it to WebP, crop out personal data, give the `<img>` its real `width`, `height`, descriptive `alt` text and `loading="lazy"`.
- **When Velora 2 ships:** update its status line and the "What's next" block, and only then mention Stripe or a live address.
- **New semester results:** add another item to the Education results list and keep the label as SGPA.
