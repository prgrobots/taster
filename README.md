# NMTafe Career Taster Site

A one-day STEAM taster day guide for 12–14 year olds at NMTafe Joondalup.
Covers 3D printing (TinkerCad → Cura → Ender 3 SE) and robotics (Maqueen + MakeCode).

Built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).

---

## Local development

```bash
# Install
pip install -r requirements.txt

# Serve locally (live reload)
mkdocs serve

# Then open http://127.0.0.1:8000
```

## Edit content

All pages are in `docs/` as `.md` files. Edit them in any text editor.

```
docs/
  index.md                    ← Day schedule / homepage
  3d-printing/
    index.md                  ← What is 3D printing?
    tinkercad.md              ← Step 1: Design
    export.md                 ← Step 2: Export STL
    slicing.md                ← Step 3: Slice in Cura
    printing.md               ← Step 4: Print
  robotics/
    index.md                  ← Meet Maqueen + setup
    challenge-1.md            ← Make it move
    challenge-2.md            ← Avoid obstacles
    challenge-3.md            ← Follow a line
  free-time.md                ← Free choice activities
```

## Deploy

Push to `main` → GitHub Actions builds → Netlify deploys automatically.

You'll need two GitHub secrets set:
- `NETLIFY_AUTH_TOKEN` — from your Netlify account settings
- `NETLIFY_SITE_ID` — from your Netlify site settings

## Customise colours

Edit `docs/stylesheets/extra.css`. The three activity colours are CSS variables at the top:
- `--color-3d` — blue, used for all 3D printing pages
- `--color-robot` — green, used for all robotics pages  
- `--color-free` — amber, used for free choice

## Print / laminate

Each page has a print stylesheet built in. Open any page in Chrome and use
**File → Print** (or Ctrl+P). Nav, sidebars, and footer are hidden automatically.
Colour coding is preserved in print.


<iframe width="640px" height="480px" src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=6IGIIa0HQkGH1_a5DRcAm923lwmm0PxDtiaN5px8NN9URE0zQ01UVUhEQUozR1U1OVVKMEQxR0hMSy4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
