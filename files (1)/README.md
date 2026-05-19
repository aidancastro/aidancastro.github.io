# Aidan Castro — personal site v2

Major redesign based on references to **empossible.net / raymondrumpf.com** (destination tiles, project card grid) and **robertavaltorta.com** (banner + circular headshot + identity strip, scrollable in-page CV).

## Files

```
.
├── index.html       # Hero with headshot, tagline, destination tiles, research statement, news
├── research.html    # Project tile grid (Rumpf-style) + anchored full writeups + scroll-strip gallery
├── music.html       # Statement + scrolling recital photos + video embeds + repertoire
├── cv.html          # Sticky left-nav with scrolling sections (NO PDF as primary)
├── 404.html
└── assets/
    └── style.css    # Updated palette + new components
```

## What changed from v1 (before / after)

### Palette
**Before:** burgundy `#7a2e2e` did double duty as music accent AND primary CTA color on engineering pages.
**After:** copper `#b8843d` / `#8f6529` is now the engineering accent (CTAs, links, hover, eyebrow text on research/CV pages). Burgundy stays exclusive to music. This separates the two disciplines visually instead of having them compete for the same accent.

```diff
- a { color: var(--burgundy); }
+ a { color: var(--copper-deep); }
+ a.music-link { color: var(--burgundy); }
```

### Hero (index.html)
**Before:** Two-column hero with custom SVG glyph (radiation pattern + treble clef).
**After:** Banner band → overlapping circular headshot → name / role / affiliation / social-icon strip (Valtorta pattern). The SVG glyph is gone. Headshot goes at `assets/headshot.jpg` (600×600 recommended).

### Homepage body
**Before:** Two equal-weight "Engineering | Music" comparison cards.
**After:** Three Rumpf-style destination tiles (Research / Music / CV) each with image slot, then a dedicated **Research statement** section, then a **News feed** with 4 dated items.

### Research page
**Before:** Vertical list of entries, each with a placeholder figure.
**After:**
1. **Project tile grid at the top** — 6 cards, each links to an anchor below
2. **Full writeups below** with figures, anchored from the tiles
3. **Engineering gallery scroll-strip** at the bottom — horizontal scroll-snap of result images (HFSS, MATLAB outputs)

### Music page
**Before:** Just video embed slots + repertoire.
**After:**
1. **Statement** ("Why both") that mirrors the research statement structure on the home page
2. **Scrolling recital photo strip** (6-card horizontal scroll-snap)
3. Video embed grid (preserved)
4. Repertoire table (preserved)

Mirrors the research-statement / projects-grid / detail pattern so music reads as a real second discipline, not "and also videos."

### CV page
**Before:** Multiple sections, primary CTA was "Download PDF".
**After:**
- Left rail sticky nav with 8 sections (Education / Research / Publications / Skills / Music / Awards / Mentors / Contact)
- Content scrolls in the right column
- Active section highlights in the sticky nav as you scroll (small JS at bottom of cv.html)
- PDF download moved to the **Contact** section as a secondary action
- Includes a **Mentors** section (Dr. Mumcu listed) — this is something admissions committees actually look for

## Drop-in assets

The site has placeholder slots throughout. Drop real images at these paths and the placeholders auto-replace:

| File path | What it is | Recommended size |
|---|---|---|
| `assets/headshot.jpg` | Hero headshot | 600×600 square |
| `assets/dest_research.jpg` | Homepage research tile | 800×600 |
| `assets/dest_music.jpg` | Homepage music tile | 800×600 |
| `assets/dest_cv.jpg` | Homepage CV tile | 800×600 |
| `assets/proj_pifa.png` | PIFA tile + detail | 1200×675 |
| `assets/proj_radar.png` | Radar tile + detail | 1200×675 |
| `assets/proj_lna2.png` | BFP420 LNA tile + detail | 1200×675 |
| `assets/proj_lna1.png` | PBR941 LNA tile | 1200×675 |
| `assets/proj_patch.png` | Patch antenna tile | 1200×675 |
| `assets/proj_array.png` | Linear array tile | 1200×675 |
| `assets/recital_1.jpg` … `recital_5.jpg` | Recital photos | 800×600 |
| `assets/chamber_1.jpg` | Chamber rehearsal photo | 800×600 |
| `assets/aidan_cv.pdf` | Downloadable CV | — |

For each `<div class="placeholder">…</div>` once you have the image, replace with:

```html
<img src="assets/proj_pifa.png" alt="PIFA HFSS geometry and S11 plot">
```

## Once-over before deploy

Search and replace these:
- `aidan@example.edu` → real email
- `https://github.com/aidancastro-ee` → real GitHub URL
- `https://linkedin.com/in/aidancastro` → real LinkedIn
- `https://scholar.google.com/` → your Scholar profile (or remove if you don't have one yet)
- `https://orcid.org/` → your ORCID (or remove)
- `[Radar / RF advisor]` in `cv.html` mentors section → real name

## Deploy

Same as before — drop all files into your `aidancastro.github.io` repo, Settings → Pages → branch `main`, folder `/(root)`. Live in ~1 minute.

## Files to update in your existing repo

Replace these 5 files in your `aidancastro.github.io` repo with the v2 versions:
1. `assets/style.css`
2. `index.html`
3. `research.html`
4. `music.html`
5. `cv.html`
6. `404.html`

The `README.md` you have can stay or be replaced with this one.
