# Doerr Street Rail Co

Static site. No build step, no dependencies, no framework. Every page is a
plain HTML file you can open, edit and ship as-is.

To work on it, serve the folder rather than opening files directly — the pages
use relative paths and a couple of things (fonts, the JSON-LD) behave better
over HTTP:

    npx serve .

---

## Files

    index.html            Home
    services.html         Services + the process band
    about.html            History, timeline, credentials
    team.html             The four entries
    journal.html          Field Notes index
    note-*.html           The four articles
    contact.html          Contact details + the request form
    privacy.html          Privacy policy (draft — see below)

    styles.css            Everything. One file, sectioned with banner comments.
    app.js                Everything. One file, one IIFE per feature.
    fonts/                Self-hosted, latin subset, base64-inlined
    assets/               Logo, photos, map, favicon, og.png
    _src/og-card.html     Source for the social preview image

`_src/` is not part of the site. It's excluded in `robots.txt`.

---

## Editing

**Header, footer and nav are duplicated in each page.** There were eleven
pages and no templating language, so a change to the masthead means eleven
edits. That was a deliberate trade for having no toolchain — if the page count
grows much past this, it's the first thing worth revisiting.

**`styles.css` is ordered to match the page**, top to bottom: tokens, type
primitives, buttons, load sequence, scroll reveals, masthead, then each
section in the order it appears, then the footer, then responsive. Find the
section banner and you're in the right place.

**`app.js` is one IIFE per feature**, each guarded so it no-ops on pages that
don't have its markup (`const svg = $('#axo'); if (!svg) return;`). That's why
the same script runs on all eleven pages without erroring.

Bump the `?v=` on the stylesheet link when you deploy CSS changes, or the
browser will serve a stale copy. It's currently `?v=12` on every page.

---

## Design tokens

All in `:root` at the top of `styles.css`.

    --con / --con-hi / --con-lo    the dominant ground, three tones
    --gra                          graphite green, dark sections + masthead
    --pale                         cream, type on dark
    --sig                          oxide red — the only accent

**The oxide is a signal colour, not decoration.** It marks defects, the
one thing on a plate that matters, and nothing else. If it starts appearing
on borders and hover states it stops meaning anything.

    --d   Big Shoulders Display    display only
    --b   Barlow                   body
    --c   Barlow Condensed         labels, annotations, meta
    --serif                        pull quotes, article body

    --s1 … --s11                   8px scale. Every gap is one of these.

---

## The plates

Five technical drawings, hand-built SVG, numbered I–V:

    I     index.html      the track panel (scroll-driven, built in app.js)
    II    about.html      rail section, dimensioned
    III   services.html   finding → report → repair
    IV    services.html   turnout anatomy
    V     services.html   plan of a plant lead

Conventions they all share:

- **Geometry is real.** Plate IV's frog sits where the diverging rail actually
  crosses the through rail (x=387.1, from a 60-unit gauge and a 0.32 fall). If
  you move a rail, move the frog. The maths is in the comment above each SVG.
- **Every drawn path carries `pathLength="1"`**, which normalises it so the
  animation timings in CSS can be declared rather than measured.
- **Each element's `--t` (start) and `--dur` live in the markup**, next to the
  geometry, so a drawing's timing is readable in one place.
- **Multi-stroke marks fade, single strokes draw.** A path with several
  subpaths animates one after another and reads as a stutter.
- **Every plate has a reduced-motion escape.** The drawn state *is* the
  artwork — without it the plate renders as an empty box. Test it.
- **Drawings are width-capped** so their annotations stay near page scale, and
  scroll inside `.plate-scroll` on a phone rather than shrinking to 6px type.

---

## Motion

One `IntersectionObserver` in `app.js` adds `.in` to anything with
`[data-anim]`. All the choreography is CSS from there. Nothing is withheld
for longer than it takes to read.

Everything has a `prefers-reduced-motion` escape. Note that **a running
transition outranks author `!important`** in the cascade — setting the final
value isn't enough, you have to cancel the transition too. That bit us twice.

---

## Before this goes live

- [ ] **The request form posts nowhere.** `app.js` intercepts submit and shows
      "Request received" for 2.2s. Wire it to a real endpoint or change the
      copy — as written it tells people their inquiry was sent when it wasn't.
- [ ] **Contrast.** Oxide on graphite is 1.91:1 — the eyebrow labels on every
      interior page hero. WCAG AA wants 4.5:1. Needs a lighter oxide for dark
      grounds, keeping the current one on cream.
- [ ] **Footer tap targets** are 23px on mobile; the guideline is 44px.
- [ ] **No skip link, no 404 page.**
- [ ] **Confirm the track class speeds** on `about.html` against §213.9.
- [ ] **Privacy policy is a draft** and says so on its face. Needs a lawyer,
      particularly the inspection-record retention clause.
- [ ] Point `sitemap.xml`, `robots.txt` and the canonical/OG URLs at the real
      domain if it isn't `trackinspections.com`.

---

## Regenerating the social image

`assets/og.png` is rendered from `_src/og-card.html` at 1200×630. Edit the
HTML, then:

    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
      --headless=new --window-size=1200,630 --force-device-scale-factor=1 \
      --screenshot=assets/og.png "file://$PWD/_src/og-card.html"
