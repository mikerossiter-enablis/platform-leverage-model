# Enablis Design System

A working design system for **Enablis** — a strategic technology consultancy. Codified from the official **Brand Guidelines (April 2026)** and the live website (enablis.co).

> Profit from ideas. We don't take over — we take your business further, faster.

---

## Index

| Folder / file | What's in it |
|---|---|
| `README.md` | This file — full guidelines, content + visual foundations, iconography |
| `SKILL.md` | Cross-compatible skill manifest for use inside Claude Code |
| `colors_and_type.css` | The single source of truth for tokens (colors, type, spacing, motion) |
| `assets/` | Logos, brandmark, gradient samples |
| `assets/icons/` | The 22 brand line icons (PNG, cropped from brand book) |
| `uploads/` | Original brand book PDF + page renders (source of truth) |
| `preview/` | Design-system cards (Type, Colors, Spacing, Components, Brand) |
| `ui_kits/website/` | UI kit recreating the marketing website (Hero, Stats, ServicesGrid, CaseCard, Approach, Footer + `index.html`) |

### Sources referenced
- **Brand book**: `uploads/Enablis_Brand guidelines - APR 26.pdf` (rendered to `uploads/page-NN.png`)
- **Live site**: https://enablis.co
- **GitHub repo**: `enablis-co/enablis-site` — *not accessible to this workspace at time of writing* (private / not installed)

---

## What Enablis stands for

**Vision** — To help organisations achieve more of what matters.
**Mission** — We combine expertise, energy and collaboration to turn complex technology goals into real-world results.
**Value proposition** — We partner with clients to turn complex technology goals into faster, smarter, lasting results.

### Enablis IS / Enablis IS NOT
| Is | Is not |
|---|---|
| Straight-talking | Over-complicated |
| Collaborative | Dictatorial |
| Pragmatic | Idealistic |
| Proactive | Waiting to be told |
| Outcome-focused | Obsessed with process |
| Curious & energetic | Passive or complacent |
| Dependable & trusted | Flaky or a 'yes' team |
| A true partner | Temporary help |

### Values
- **Dynamic** — full of energy, always learning, always adapting.
- **Impactful** — upfront, accountable, focused on what matters.
- **Straightforward** — no fluff, no facade.
- **Together** — knowledge-sharing, mutual support, shared wins.

---

## CONTENT FUNDAMENTALS

Enablis writes the way a trusted colleague talks: **direct, grounded, confident without being arrogant.** What we *do* is complex (AI-native delivery, embedded engineering, real transformation) — how we *talk about it* never is.

### Voice principles
1. **Straight-talking.** Get to the point. If something is hard, say so. If we can fix it, say that too.
   - ✅ "We found 12 critical issues. Here's what to do next."
   - ❌ "Following a comprehensive assessment, several areas of potential risk have been identified that may warrant further consideration."
2. **Confident, not loud.** Bold claims backed by results, numbers and names.
   - ✅ "93% customer CSAT. Not because we chase scores — because we actually deliver."
   - ❌ "We're proud to be one of the leading providers of cutting-edge technology solutions…"
3. **Impact-first.** Lead with the outcome, explain the how second.
   - ✅ "Two months of backlog cleared in under a week."
   - ❌ "Through the application of agile principles and iterative delivery frameworks, significant efficiency gains were realised."
4. **Human, not corporate.** Use **"we"** and **"you"** — not "the organisation" or "stakeholders". Warm without being casual; professional without being stiff.
   - ✅ "We don't take over. We take your business further, faster."
5. **Forward-thinking.** AI is how we work, not a buzzword bolted on. Be specific about new approaches.
   - ✅ "AI is embedded in every layer of how we deliver — from how we assess your landscape to how we write, test and deploy code."

### Writing rules
**Do**
- Short sentences for impact (but not every sentence)
- Active verbs — we *do* things, things don't *happen to* us
- Real numbers over vague claims
- Lead with the outcome, not the process
- Write to a person, not a company

**Don't**
- No jargon without explanation
- No hedging: "potentially", "may", "could"
- No consultant-speak: "leverage", "synergy", "holistic"
- No fluff openers: "In today's fast-paced world…"

### Casing & details
- **Sentence case** is the default for headings on the website ("Your teams, amplified.", "Onshore talent. Small team. Big impact.").
- **JetBrains Mono UPPERCASE** is the *only* place we use all-caps — for eyebrows (`OUR APPROACH`), CTAs (`LET'S TALK`, `SEE WHAT WE DELIVER`), section labels (`AI-NATIVE`, `OUR SERVICES`), and stat captions (`CONSULTANTS DEPLOYED`).
- **Periods after headlines** are part of the identity — they echo the brandmark's "full stop" and they signal certainty. Use them.
- **No emoji.** Ever. Tick / cross marks (`✓` `✕`) appear in the brand book *as content* (the IS / IS NOT table) but are not used as decoration.
- British English ("colour", "organisation", "realised") — the brand guide and most copy are British.
- Numbers in copy: stats are bold and concrete (`150+`, `20+`, `93%`, `6+`, `60%`, `15/16`). Use them.

---

## VISUAL FOUNDATIONS

### Palette
Six colours, zero deviations. Used as flat blocks **except Lavender**, which only appears inside the brand gradient — never as a standalone block.

| Name | Hex | Role |
|---|---|---|
| Coral Beach | `#EB5160` | Primary accent. The "full stop". Buttons, eyebrows, gradient anchor. |
| Sea Green | `#5BC0BE` | Secondary accent. Section labels, "ACCESS / ACCELERATE" tabs, callout boxes. |
| Lavender | `#7989F3` | **Gradient only.** Middle stop of the brand gradient. |
| Black | `#000000` | Primary surface. The brand defaults to a black canvas. |
| Grey | `#F1F1F1` | Light surface, light-mode body bg. |
| Stark White | `#FFFFFF` | Type on black, light surface. |

Tints (20 / 40 / 60 / 80%) are allowed for depth.

### Gradient system
The brand gradient is **Coral Beach → Lavender → Sea Green**, equal stops, primarily at **45°**.

Two ways it appears:
1. **As text fill** — for the signature word in a hero ("amplified.", "real delivery", "drive outcomes", "speak louder"). This is the *only* place the gradient is used in its "normal" state.
2. **As a background** — never the raw gradient. It's a stack: a solid dark gradient + the brand gradient overlaid with a 'hue'/blend effect, so the result is a *darker, atmospheric* version. In CSS this is approximated as stacked radial gradients on a near-black base — see `--gradient-bg` in `colors_and_type.css`.

### Typography
- **Open Sans** — primary. Bold for titles (tracking reduced inline with point size — `-25` at 40pt, `-50` at 170pt; modelled as `letter-spacing: -0.04em` for display). ExtraBold for pull-out stats. Light with variable-font weight set to **330** for body copy.
- **JetBrains Mono** — accent. Used ALL CAPS for CTAs, eyebrows, occasional titles, highlighted labels. Tracking 0.12em.
- Both are available on Google Fonts and loaded by `colors_and_type.css`. No font files needed — flagged to user only if they want to ship locally.

### Brand shape
The "full stop" of the logo is a **quarter-circle** — flat top, flat left, curve on bottom-right. It echoes through the system as:
- The dot in the wordmark and brandmark
- A graphical accent or content container
- Flipped on the 90°/180°/270°/360° axes only — never angled

### Graphic elements
- **Dotted wave shapes** — minimal use, always Coral Beach OR Sea Green. Used as dividers or accents. Visible at the top of PowerPoint master pages as a dotted-arc band.
- **Vertical dot patterns** — appear on the website (Approach section) as background texture.

### Photography
- **Always our own photography. Never stock.**
- A **black radial gradient with 'multiply' blend** is overlaid on standalone images — darkens edges, mutes colour, makes images sit on dark backgrounds without competing.
- Brightly coloured photography is off-brand.

### Layout rules
- Logo lives in **top or bottom corner**, not centred.
- Always on a clear or gradient background, never on a busy image where the coral dot blends.
- Black is the default canvas for premium pieces; white is used for utilitarian / printed material.

### Borders, radii, shadows
- **Hard edges by default.** Borders are mostly hairlines (`rgba(255,255,255,0.10)` on dark).
- **Small radii** — 4–8px for buttons / cards. The big radius is the **quarter-circle brand shape** itself, used sparingly.
- **Shadows are subtle** on dark — the brand is flat. Use ambient depth (`0 24px 60px rgba(0,0,0,0.55)`) on cards.

### Motion
- The brand book doesn't prescribe motion. Default: short (140–220ms), `cubic-bezier(0.2, 0.7, 0.2, 1)`. Fades and y-translates only. No bounces.

### Hover / press
- On dark: hover lifts opacity / lightens by ~6% (`rgba(255,255,255,0.10)` surface).
- Coral button hover: opacity 0.9 / slight saturation lift. **No press-shrink** — the brand reads as upright and confident.
- Links underline on hover; coral is the link-hover colour on dark surfaces.

### Transparency / blur
- Cards on dark are translucent (`rgba(255,255,255,0.04–0.07)`) with hairline borders — gives the "deep gradient peeks through" effect seen on the homepage.
- Avoid heavy backdrop blur — the brand background is already atmospheric; over-blurring kills the gradient.

### Imagery vibe
- **Cool, low-saturation, deep blue/violet** when photographed on-brand.
- B&W or near-mono is preferred over warm/sunny.
- Architectural / abstract / people-in-context — not isolated objects.

---

## ICONOGRAPHY

Enablis uses a **custom curved-line icon set** — outline-only, single weight, with the **brand gradient applied as a stroke** (Coral → Lavender → Sea Green at 45°). Icons can also be drawn in any single brand colour.

- **Style**: outline, 2px stroke, round caps/joins, generous rounded corners. No fills. Slightly geometric.
- **Set**: 22 named icons from the brand book — see `assets/icons/`:
  `ai · cloud-platform · data · digital-strategy · dynamic · impactful · straight-forward · together · engineering · product-delivery · onshore · teams · ai-enabled-delivery · talent · whitepaper · blog · company-news · tick · flexible-hybrid-working · inclusive-hiring · salary-transparency · diverse-interview`
- **No icon font.** No emoji. No unicode-as-icon (apart from the tick `✓` and cross `✕` used in the IS / IS NOT brand-positioning table).
- **PNG** for the 22 brand icons because they were extracted from the brand PDF. Cropped at high resolution — fine for ≤96px usage. **If you need vector**, recreate following the curved-line style and the gradient stroke.
- **Additional icons** can be created in the same curved-line style. When a brand icon doesn't exist, fall back to a **Lucide** glyph (`https://unpkg.com/lucide-static`) styled with the brand gradient — closest stroke weight and rounded-cap style available on a CDN. This is a substitution and should be flagged in the design.

---

## How to use this system
1. Drop `colors_and_type.css` into your `<head>`.
2. Use the variables — never invent a new colour, weight or radius.
3. Lay things out on the **black canvas** by default. Lean on the gradient sparingly: one signature gradient word per screen, max.
4. Type pairings: Open Sans Bold display + Open Sans Light (wght 330) body + JetBrains Mono caps eyebrow. That's the recipe.
5. Pull from `assets/icons/` for offering / USP iconography. Don't draw your own SVGs in chat — use what's here.
6. When you need a hero CTA: solid Coral Beach button, JetBrains Mono caps label, small radius (4px). That's it.

---

## Caveats
- **The `enablis-co/enablis-site` repository is not accessible to this workspace** (404 — likely private / GitHub App not installed on the org). Visual references for the website UI kit came from the brand book's "Brand in action" pages and the live enablis.co site description fetched at build time. Re-attach the repo if you'd like component-level fidelity.
- The logo wordmark in `assets/` is an **SVG reconstruction** (Open Sans Bold + the brand quarter-circle), *not* the official outlined wordmark — the brand book PDF embeds it as paths and a crop produced lossy results. Use the official wordmark from the brand team for production work.
- The 22 icons are **PNG raster crops from the brand book**. They're sharp at small sizes but vector originals would be better — ask the brand team for the source SVGs.
