# Nikhil Modi — Developer Portfolio

A single-page portfolio for Nikhil Modi, a B.Sc. IT student focused on Python, Django REST APIs, backend development and full-stack applications. It presents two projects: **Velora 2**, a QR-based café ordering platform (private, commercial), and **Hunter System**, a gamified Python-learning platform (public source).

Plain HTML, CSS and a little JavaScript: no framework, build step, package manager, backend, analytics or third-party requests.

> **Status:** Phases 1–6 complete and ready to publish at **https://nikhil9638.github.io/** (repository `Nikhil9638.github.io`). Not deployed yet.

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

## Site address and metadata

The site is configured for the GitHub Pages **user site** `https://nikhil9638.github.io/`, published from the repository **`Nikhil9638.github.io`**.

Only four tags in the `<head>` of `index.html` use absolute URLs, because link previews and search engines require them:

| Tag | Value |
|---|---|
| `link rel="canonical"` | `https://nikhil9638.github.io/` |
| `og:url` | `https://nikhil9638.github.io/` |
| `og:image` | `https://nikhil9638.github.io/public/assets/og/og-image.png` |
| `twitter:image` | `https://nikhil9638.github.io/public/assets/og/og-image.png` |

Every other path (styles, script, fonts, icons, screenshots) is relative, so the site also previews correctly from a local server. If the address ever changes, update those four values and nothing else.

## Deploying to GitHub Pages

Nothing has been pushed or published yet. When you are ready:

1. **Create the repository.** On GitHub, signed in as `Nikhil9638`, create a new **public** repository named exactly `Nikhil9638.github.io`. Leave "Add a README", ".gitignore" and "licence" unticked; this folder already has its files.
2. **Push this folder** (it already has the commits; `prompt.md` and `brag.mp4` are ignored and will not be uploaded):
   ```bash
   git remote add origin https://github.com/Nikhil9638/Nikhil9638.github.io.git
   git push -u origin main
   ```
3. **Turn on Pages.** In the repository: **Settings → Pages → Build and deployment**. Set **Source** to **Deploy from a branch**, **Branch** to **`main`** and the folder to **`/ (root)`**, then **Save**.
4. **Wait for the build.** The **Actions** tab shows a "pages build and deployment" run; when it is green (usually one or two minutes), open <https://nikhil9638.github.io/>.
5. **Check the live site:**
   - The page, fonts and screenshots load, and the address bar shows HTTPS. If **Settings → Pages** offers **Enforce HTTPS**, turn it on.
   - On a phone: the Menu button opens and closes, and each link reaches its section.
   - Both contact buttons and "Discuss this project" open an email to `nikhilmodi9638@gmail.com`; the GitHub, LinkedIn and Hunter System links open the right pages.
   - <https://nikhil9638.github.io/public/assets/og/og-image.png> shows the preview image.
   - Paste the site address into LinkedIn's [Post Inspector](https://www.linkedin.com/post-inspector/) to confirm the title, description and image.

### Updating the site later

Edit the files, preview locally, then commit and push to `main`; GitHub Pages republishes automatically within a few minutes.

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
