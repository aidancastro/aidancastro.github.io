# Aidan — personal site

A four-page static site for graduate-school recruiting with a parallel music section.
Built with plain HTML/CSS — no build step, no frameworks, no JS dependencies. Deploys to GitHub Pages in under five minutes.

## Files

```
.
├── index.html       # landing / about + dual-identity overview
├── research.html    # RF, antenna, radar imaging projects (with figure slots)
├── music.html       # recital videos + repertoire
├── cv.html          # publications, CV download, contact links
└── assets/
    └── style.css    # all styling (shared across pages)
```

## Deploy to GitHub Pages — three options

### Option A — user/organization site (recommended, lives at `yourusername.github.io`)

1. Create a new public repo named **exactly** `yourusername.github.io` (replace with your real GitHub username).
2. Upload everything in this folder to the repo root (drag-and-drop in the GitHub UI works, or use `git`).
3. Repo **Settings → Pages**: set Source to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
4. Wait ~1 minute. Site is live at `https://yourusername.github.io`.

### Option B — project site (lives at `yourusername.github.io/repo-name`)

1. Create any-named public repo (e.g. `personal-site`).
2. Upload these files.
3. Settings → Pages → branch `main`, `/ (root)`. Save.
4. Live at `https://yourusername.github.io/personal-site/`.

### Option C — custom domain

After either A or B works, add a `CNAME` file at the repo root containing your domain (e.g. `aidan.engineering`), then point your domain's DNS to GitHub Pages per [their docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Before you deploy — fill in the placeholders

Search the codebase for the ↳ arrow comments (rendered in mono font on the live pages too, so you'll see them). Specifically:

| File | What to replace |
|---|---|
| all pages | `aidan@example.edu` → your real email |
| `cv.html` | GitHub handle, LinkedIn URL, ORCID ID |
| `cv.html` | Drop your CV PDF at `assets/aidan_cv.pdf` |
| `music.html` | Replace each `<iframe src="about:blank">` with your YouTube embed URL (`https://www.youtube.com/embed/VIDEO_ID`) |
| `research.html` | Drop figure images at `assets/pifa.png`, `assets/lna_bfp420.png`, `assets/radar_recon.png` and replace the `.placeholder` divs with `<img src="assets/pifa.png" alt="...">` |
| all pages | Replace "Aidan" with your full name in the page `<title>` and the hero `<h1>` if you want your surname displayed |

## Adding a project figure

Replace:

```html
<figure class="project">
  <div class="placeholder">[ HFSS geometry & S₁₁ plot — drop image here: assets/pifa.png ]</div>
  <figcaption>Fig. 1 — ...</figcaption>
</figure>
```

with:

```html
<figure class="project">
  <img src="assets/pifa.png" alt="PIFA HFSS geometry and S11 plot" style="width:100%; display:block;">
  <figcaption>Fig. 1 — ...</figcaption>
</figure>
```

## Adding a new project entry

Copy any `<div class="entry">…</div>` block in `research.html` and edit the side date, title, meta line, paragraph, and tags. Tags use `<span class="tag">name</span>`.

## Design notes

- **Palette**: warm paper `#f5f1e8`, engineering ink `#14213d`, music burgundy `#7a2e2e`, copper accent `#b8843d`. All defined as CSS variables in `:root` — change once, propagates everywhere.
- **Type**: EB Garamond (serif display), Inter Tight (UI sans), JetBrains Mono (technical accents). Loaded from Google Fonts.
- **No JS required**. Everything is HTML + CSS. Animations are pure CSS keyframes.
- **Sticky header** with subtle backdrop blur. **Subtle paper grain** via radial-gradient pattern.

## Local preview

Any of these works from the project root:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

or just double-click `index.html` to open in a browser.

## License

Your site, your content. The HTML/CSS scaffolding is yours to modify freely.
