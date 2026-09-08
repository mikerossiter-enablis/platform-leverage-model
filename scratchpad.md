# The Platform Leverage Model — deck plan

**Audience:** Yorkshire DevOps meetup, Leeds, Sept 2026 — DevOps-literate practitioners (infra/platform/SRE).
**Duration:** ~30 min talk. 19 slides + 1 backup. NARRATIVE/talk deck: sparse on-slide lines, the talking carries it; full spoken words live in `data-speaker-notes`.
**Output:** present live in browser. Speaker notes (verbatim spoken beats) on every slide.

> Rebuilt 2026-06 to match the user's talk notes (personal-journey arc). Previous "decision-aid" version preserved as `Platform Leverage Model (decision-aid version).dc.html`.
> 2026-07-01 Slide 15 now cites Farley's Cynefin video (header link chip + speaker-note callback to slide 3) and honestly flags the 5th domain (disorder) in the footer caveat. Added slide 20 (backup, not in main flow): reconciles Farley's video claiming ALL software dev is Complex against slide 15's per-ticket triage — resolution is altitude (creative/novel engineering vs running-the-system ops work), grounded in Snowden & Boone 2007 + IT Revolution's "agile-created, lean conveyor belt" (Jon Smart) — faithful 2×2+disorder diagram with ops-scoped concrete examples, not app-dev examples, to avoid re-triggering the objection.
> 2026-06-30 MAJOR revision to new talk notes. Old 16-slide version (with the Adoption-based formula) preserved as `Platform Leverage Model (v1 — Adoption formula).dc.html`. Key changes this pass:
>   - **Formula changed.** Leverage is now the OUTPUT, not an input: `Leverage = Reliability × [ Reach × Depth − (Cognitive Load + Toil) ]`. "Adoption" dropped; "Reach" + "Depth" are the two value terms. Subtraction (can go NEGATIVE) replaces division.
>   - **Three-altitude spine:** Values (why) → Model (what good looks like) → Triage (what to do Monday). New slide 10 introduces it.
>   - **5 new slides:** 10 three-altitudes, 11 Values/CALMS (model = the M), 15 Triage/Cynefin (sort by nature, drag leftward), 16 starting-from-legacy (compass not finish line), 17 be-honest (IS/IS-NOT, Anjum review + Fournier & Nowland).
>   - **Removed as standalone:** old "Lean & TPS" (folded into 11) and "A tool you can take upward" (folded into close notes).

## System (Enablis) — unchanged
- Canvas: pure black `--bg`. Atmospheric `--gradient-bg` on the 3 pillars only: title (1), reveal (12), close (19).
- Type: Open Sans Bold/ExtraBold display (periods after headlines), Light wght 330 body, JetBrains Mono UPPERCASE eyebrows/labels/chips.
- `--gradient-text` signature words: Leverage (1 + 12), 2 of 5 (7), Quiet is winning (8), the M (11), floor (19).
- Coral = "shrink" / friction / floor / action. Sea-green = "grow" / value / measure.
- Quarter-circle "full stop" brandmark beside `enablis` in every header. Hairline cards (full border). Hard edges, small radii. No icons, no emoji. Everything >=24px (chips/sublabels 21-22px mono is the floor).

## Eyebrow / act scheme
- 02–04 `Act I · The canon` · 05–09 `Act II · The mismatch`
- 10 `Act III · The answer` (three altitudes)
- 11 `Altitude 1 · Values` · 12 `Altitude 2 · Model — the reveal` · 13 `Altitude 2 · Model` · 14 `Altitude 2 · Model`
- 15 `Altitude 3 · Triage` · 16 `Coda · Starting from legacy` · 17 `Coda · Be honest`
- 18 `In practice` · 19 close (eyebrow = "The Platform Leverage Model")

## Slide list (19)
1. Title — gradient hero.
2. The Three Ways — audience check; Flow/Feedback/Continual learning.
3. Where I started — Phoenix Project / DevOps Handbook / Continuous Delivery.
4. The first crack — Accelerate·DORA → SPACE.
5. Every company is a tech company — DevEx matters, not the whole picture.
6. The people / legacy skills — build on it.
7. Where DORA diverges — "2 of 5" reward activity.
8. A good day is a quiet day — poster beat; "Quiet is winning".
9. SRE-shaped, moved on — keep best of SRE + platform mindset; "So I did."
10. Three altitudes — Values/Model/Triage stacked (top→bottom).
11. Values / CALMS — model is the M; CALMS columns, M highlighted.
12. The model — the reveal (gradient). Equation + 3 chips + mantra.
13. The five things — Reach·Depth·CogLoad·Toil·Reliability (5-col); footer warns "it can go negative".
14. A lens, not a target — Goodhart's Law.
15. Triage / Cynefin — Clear/Complicated/Complex/Chaotic cards + "drag leftward".
16. Starting from legacy — compass not finish line; pain→one-step→force rows; "start where you are".
17. Be honest — IS / IS-NOT (brand device); Anjum review, Fournier & Nowland.
18. Case study — PLACEHOLDER (dashed cards): situation / changed / improved / lesson.
19. Close — gradient hero; mantra + three-altitude recap.
20. (Backup, not in main flow) Cynefin, in full — reconciles Farley's "all software dev is Complex" against slide 15's triage; faithful 2×2+disorder diagram, ops-scoped examples.

## Equation (slide 12, gradient-bg)
Line 1: **Leverage** (gradient) = **Reliability** (white) ×
Line 2: [ **Reach** × **Depth** (sea) − ( **Cognitive Load** + **Toil** (coral) ) ]
Chips: GROW↑ Reach×Depth (sea) · SHRINK↓ Load+Toil (coral) · THE FLOOR Reliability 0→1 (white).
Mantra: "Grow two. Shrink two. Never breach the floor." Caption: mental model, not a sum.


## 2026-07-03 changes
- +Slide 02 About me (Mike Rossiter, photo via image-slot, MSc Digital & Technology Specialist (DevOps), Northumbria, Distinction) and 03 About Enablis (stats, clients, why-Enablis, QR -> enablis.co/devops). All later slides renumbered +2.
- Three Ways third F renamed: Continual learning -> **Findings** ("three Fs: flow, feedback, findings"); canonical name kept as caption.
- **Cynefin/Triage slide REMOVED by user** (archived at archive/cynefin-slide-removed-2026-07-03.html). Slides after it renumbered -1 (now 20 slides). Backup-slide refs + empty backup comment purged.
- Team Topologies (Skelton & Pais) credited for cognitive load on the five-things slide + Leeds line in its notes.
- Cynefin references removed from live deck + notes doc (no scope for it in this talk). "Triage" survives as the plain third altitude; archive/ copy keeps the original slide.

- +Slide 08 "The org chart nobody draws": original strata diagram (devs sunlit sea-green band, platform a fogged dark void, HERE BE DRAGONS, outlaw dots) + honest-truths column. NOT the TT figure (copyright; no yellow in palette). Slides 08-20 renumbered to 09-21 (21 slides). Notes carry trope ammo: IT Crowd basement, iceberg meme, xkcd 2347, BOFH.

## 2026-08-24 copy strip + memes
- Slide prose cut to fragments across all 21 slides; full spoken versions live in the notes (Speaker Notes.dc.html regenerated). Pre-strip deck archived at archive/Platform Leverage Model (pre-copy-strip 2026-08-24).dc.html.
- 5 drop-in meme/GIF slots added (image-slot, drag to fill): meme-06 (the disparity), meme-10 (deployment frequency), meme-11 (quiet day), meme-12 (SRE -> platform), meme-17 (Goodhart). Placeholder text carries a suggested format for each.
- Slides 11, 12, 17 restructured to 2-col to make room for the meme; no layout overflow.

- 2026-08-24 Slide 19 "Be honest about what this is" REMOVED (user disliked it); its speaker notes moved onto the case-study slide, flagged "THEN, BE HONEST ABOUT WHAT THIS IS". Archived at archive/be-honest-slide-removed-2026-08-24.html. Deck now 20 slides (case study = 19, close = 20).
- Case study slide reframed for the Step Change DevOps maturity assessment (four dashed cards still to fill).
- Meme slots set to fit="contain" so captions survive; meme-06 enlarged to 400x225.

- 2026-08-24 Research-gap sharpening: slide 07 reframed to "We appear in the research on our worst days only" (SPACE's single ops section, Forsgren et al. 2021 = incident response; nothing on build/maintain). Slide 10 + SPACE files deployment frequency under Activity. Slide 12 + "absorbed, not rejected — never gave us a way to measure what we built". Slide 16 + team-level, no job titles, Windows/network -> Terraform/AWS.

## 2026-08-24 Radio 4 pass + coda (21 slides)
- User removed the triage/Monday slide AND the "Showing the working" slide (direct edits). Deck re-stitched: 13 is now "Two altitudes" (Values + Model only), close no longer promises "what you do Monday".
- +NEW slide 19 "An open letter": left card = thank-you to Fournier & Nowland (named the field, gave it leverage as a goal); right card = request to DORA/Forsgren ("measure the people who build the platform, not only the ones who mop up after it" / "study us on an ordinary Tuesday" — callback to slide 07). Close = 20, References = 21.
- ALL notes rewritten in a Radio 4 register (warm, wry, full sentences), grounded in the CV (uploads/Mike_Rossiter_CV_Catawiki-1.docx): Leeds popular-music degree → "guitars, then Kubernetes"; kitchens/lending/Home Office/nuclear estate/credit bureau/debt charity; 40% deployment-time cut on the government programme; nuclear estate as the anti-deployment-frequency example; IT Cafe volunteering as the plainest version of cognitive load; "blame Northern Rail".
- Slide 07 gained a mono sector line (kitchens · lending · Home Office · nuclear · credit bureau · debt charity).
- Anecdote specifics are inferred from the CV — user to sanity-check before delivery.

## 2026-08-24 book re-check + voice pass (22 slides)
- Re-read Fournier & Nowland (uploads PDF, text cached at archive/platform-engineering-book.txt). Findings used:
  - Definition: "manage overall system complexity in order to deliver leverage to the business"; leverage = "the work of a few engineers... reduces the work of the greater organization", achieved TWO ways — app engineers more productive + org more efficient by eliminating duplicate work. That maps exactly onto Depth and Reach → now the stated derivation.
  - "Be careful about using adoption as anything other than a secondary metric" (100% adoption only means something with a real choice; captive audience). Validates v1's dropped Adoption term — now the on-stage wrong turn.
  - "Metrics don't help ... platform teams at best have loose metrics" → folded into the Goodhart slide notes.
  - Four pillars (Product, Development, Breadth, Operations) noted, not used on a slide.
- +NEW slide 15 "Showing the working" (4 rows: adoption cut · leverage is two things · friction off the total · trust multiplies). Old 15–20 renumbered 16–21.
- +NEW slide 22 "Check my homework" — references (books / papers / also cited) + contact + enablis.co/devops. Deck is now 22 slides.
- Slide 19 (triage) gained an explicit 4-step process strip: rate the five → pick the worst → one step this month → rate again.
- ALL speaker notes rewritten for spoken voice (plain English, longer breaths, jokes kept dry). Speaker Notes.dc.html regenerated from the same source arrays (fixes the old naive sentence-split mangling on slide 03).
- Anjum review citation REMOVED from the case-study note — could not verify it; flagged to user for a full citation before it goes on the references slide.

- 2026-08-24 Slide 10 rebuilt to the user's own notes: all five DORA metrics listed (deployment frequency flagged "the misfit", reliability flagged "added later"), DORA logo drop-slot (id dora-logo), "Solid beats frequent." close, meme-10 kept. SPACE reference removed from this slide at the user's request.

## 2026-09-07 stats check + kanban slide + slide 13 visual (22 slides)
- Slide 03 stats verified against live enablis.co homepage (150+ consultants deployed, 20+ active projects, 93% customer CSAT, 6+ years of impact; all seven "Trusted by" names on the site's logo strip). No change needed.
- User deleted slide 19 "The load paradox" (direct edit). Gap filled with NEW slide 19 "No sprints. A board." (Part four): 3-col × 4-row table — what we do / Fournier & Nowland / the model — footer "The board is where the model's numbers come from." Book grounding (archive/platform-engineering-book.txt): Ch3 lightweight processes (ticket system, don't fuss over sprints, track ratio of new dev to support), Ch6 support stages (categorise tickets; >a few/week → investigate; op load >50% kills improvement; business-hours support rotation), Ch7 planning (work too complex for a sprint; KTLO ≤40%; improvements ≤3 dev-months; biweekly Wins and Challenges), Ch2 failure mode (op load not on roadmap → features "reactively deprioritized"). Client kept anonymous on-slide ("the team I'm in now").
- Slide 13 "Two altitudes" rebuilt as a visual: band 1 Three Ways (→ Flow, ← Feedback, ⇄ Findings) → then → CALMS tiles (M = gradient letter, the one gradient word on the slide); connector "the model is the M"; band 2 the equation with CALMS chip + Way tag under each term (Leverage=M/Findings, Reliability=C/Feedback, Reach×Depth=S/Flow, Load=L, Toil=A). Notes updated to read the tags.
- Speaker Notes.dc.html still stale (pre-dates slides 18/19/13 changes).

## 2026-09-07 (later) claim checks + slides 14/15/16/19/20
- 14 note: user's "reliability dropped?" corrected — DORA's metrics-history page says the 2021 report was inaccurate to call reliability a fifth metric; it's operational performance, self-reported vs own targets. Not dropped, filed elsewhere. (Deployment rework rate is DORA's actual fifth delivery metric; slide 10 already has it.)
- 15 rebuilt as 5 rows of full sentences (user: "stunted, not human"). DevEx 2023 claim verified (Noda, Storey, Forsgren, Greiler; three dimensions feedback loops / cognitive load / flow state); lineage added Sweller 1988 → Team Topologies 2019 → DevEx 2023. Dropped unverified "2025 saw the same wobble" from notes.
- 16: + strip "DORA say the same of their own five" (dora.dev four-keys guide: apply per application/service; improve your own team over time; not competing) + "This one is for every day" (every ticket/card, not the monitoring dashboard). "No peer-reviewed platform model" claim now backed by Anjum 2026, Frontiers in Computer Science (first MLR of PE: <12 peer-reviewed papers; PE-specific metrics unvalidated; PE-specific measurement instrument = top research gap). Added to References. h1 108→96px.
- 19 shortened to 3 rows (intake / the book agrees / the board is the scoreboard); notes unchanged.
- 20 "Findings" REPLACED by "When a team asks you for something." — five plain questions (Reach/Depth/Load/Toil/Floor) + answers; eyebrow Part five · The habit. "Third F, as promised" gone; the setup line in slide 04 notes ("hold onto Findings…") and the title-slide parts list updated to match. Old Findings content lives only in git history/this note: field stopped prescribing; somebody else is us; people left out; code is cheap/judgement.

## 2026-09-07 (evening) deck now 21 slides
- User deleted slide 19 (kanban/board) as off piste. Habit slide is now 19 "When anyone asks you for something." — eyebrow Part five · The takeaway; subtitle "We work in response to everyone else… The request is reactive. The answer needn't be."; five questions; new footer grid "Where each part comes from" (Reach×Depth ← F&N leverage def + adoption caveat; Load ← TT/DevEx; Toil ← F&N 40% + SRE; Floor ← F&N trust + DORA). Notes rewritten around: reactive request → proactive answer; model = F&N + TT + SRE + DORA in one head-sized place. Close = 20, References = 21.
- Earlier today: slide 10 Reliability row removed (moved to slide 14 notes); slide 13 model band replaced by "The Platform Leverage Model." + reframed away from "the M" (not a scorecard; applied before/during, not after); slide 8 right column = TT-style sketch (grey slab platform) replacing the checklist; slide 9 reworked (legacy skills + third F, "Kubernetes is a tool you learn"); slide 6 SPACE expansion; slide 2 LinkedIn QR (assets/qr-linkedin.png, generated in-house — user to test-scan) + eyebrow "A word from our sponsor"; "no platform team/portal/budget" softened to "nothing new needed".

## 2026-09-07 (night) bullet notes + de-texting
- ALL speaker notes rewritten as "• " talking points (user riffs; no script). User's "keep:" reminders folded in and removed.
- Text cut, detail moved to notes: 03 (Why Enablis grid gone), 07/12/13/16/20 shortened, 08 one footer line, 09 rebuilt (+ meme-09 slot), 15 rebuilt as 5 one-liners (+ meme-15 slot), 17 rungs without prose, 19 questions only. 18 table left as the user's verbatim text.
- Meme slots now: meme-06, meme-09, meme-10, meme-11, meme-15, meme-17 (+ dora-logo, headshot). Pre-change copy archived: archive/Platform Leverage Model (pre-bullet-notes 2026-09-07).dc.html.
- De-texting pass 2: 02 (name/role/one line + photo), 03 (headline, stats, trusted-by, QR), 04 (three arrows + meme-04), 05 (three book-cover slots cover-05a/b/c), 06 captions gone, 07 (three tags + meme-07), 10/11/13 trimmed, 12 (quote + meme-12 + three mono tags), 16 strip gone, 20 (headline, one line, mantra, photo-20 slot, Any questions?). Words live in the bullet notes.
