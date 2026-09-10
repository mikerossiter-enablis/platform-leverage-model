## 01 Title
- Five parts: how we got here · how the platform layer got left out of the measuring · a model to bring it back · the model on real work · a habit to take home.
- What it is: a way to think about, and measure, the people who look after the platform, so the research makes sense from where we stand.
- Some might call DevOps broken. Its measuring tape was built watching app teams ship features. But DORA's own 2025 report says AI only pays off on a solid platform. The base layer is back in fashion. Nobody told the base layer.

## 02 About me
- Mike Rossiter, platform & DevOps consultant, Enablis, Leeds.
- Popular music degree at Leeds. Taught guitar, played in a lot of bands, acted for a few years, did the Fringe. So: guitars, then Kubernetes.
- Moved into IT. Support for the Army and charities, then Wren Kitchens · Morses Club · Sopra Steria at the Home Office · NRS (the retired nuclear estate) · Enablis, with TransUnion and StepChange locally.
- MSc apprenticeship in DevOps with Sopra at Northumbria, finished last year with distinction.
- The master's sent me deep into how this industry measures itself. I came back with a question I couldn't put down.
- QR: LinkedIn.

## 03 About Enablis
- Enablis. I work there.
- Technology consultancy: engineers building inside a lot of client teams, see the list. AI-native.
- Why it matters tonight: none of this comes from one job. Lots of estates in lots of states of repair.
- Free DevOps health check, or a full assessment: enablis.co/devops or the QR. End of advert.

## 04 The Three Ways
- The bedrock. Show of hands: who can name them?
- Flow → out to the customer. Feedback ← back the other way. Continual learning ⇄ everywhere; I file it as Findings.
- Three Fs: flow, feedback, findings.
- I have these in the back of my mind most days. Most of my work maps onto them. So would most work, tech or not.
- Everything tonight stays loyal to them. I can't fault them, and they're the start of the journey.

## 05 Where I started
- Three books. The Phoenix Project: a DevOps novel! One character should remind you of yourself.
- The DevOps Handbook: the how, where and when. Where the Three Ways are written up properly (they're in Phoenix too).
- Platform Engineering: Camille Fournier & Ian Nowland, 2024. Their definition: manage complexity to deliver leverage to the business. More on that word later.
- Before that book we borrowed everyone else's vocabulary: ops, "the infra guys", whatever the org chart had spare. Now "platform engineer" is a title you can say. Beats DevOps Engineer or Cloud Engineer.
- This is the canon. What follows is what happened when I took it more seriously.

## 06 The first crack
- Master's rabbit hole: Accelerate and DORA. Rigorous, academic, peer-reviewed. I loved it. Forsgren knows her onions.
- Then she moved on to SPACE, with Microsoft Research, and the nagging started once the focus shifted to developer experience alone.
- Platform teams have had to borrow metrics built for DevEx and apply them to platform work. There is no PlatEx. (CompanyEx? OrgEx?) Either way we end up back at the three Fs.
- Some roles I've had had no developers to build for at all: a data pipeline, a network, servers to stand up.
- There are gaps between the research and the real world. I'm afraid so.

## 07 The DORA metrics
- We've all heard of DORA? Used it at work? I haven't!
- Five metrics. Accelerate is plain about what they measure: software delivery performance. A code change leaving a developer for production. The layer it happens on isn't really considered.
- Delivery performance is the end goal for some orgs, fine. But there's always a base layer underneath, and flow has to be matched by feedback. Three Ways again.
- BUT the DORA website itself tells platform teams to measure themselves with the same yardstick made for devs.
- The same page says use a balanced scorecard: the delivery metrics AND developer satisfaction (CSAT/NPS surveys) AND adoption and retention via HEART, how many teams onboard, how many keep using it. So the same yardstick, but not only that yardstick. Hold that thought.

## 08 Every company is a tech company
- Every company is a tech company. My brother-in-law is a joiner: social media, a website, and an unwritten SLA with the platforms he relies on. His work suffers without tech.
- DevEx matters. This isn't a dig at improving developers' lives. But there's a whole world closer to the metal, and platform, infra, cloud is the part most often left out. So we appear on bad days only.
- The research reaches us, but not as ourselves.
- SPACE: one ops section, a sidebar, SREs handling incidents, plus infrastructure utilisation as something to count. DORA's capability catalogue: flexible infrastructure, monitoring, failure notification. Capabilities we provide, not the people who build and maintain them.
- Most of us are SRE-shaped and we keep all of that. But SRE only tells you how to keep things up; it never gave us a way to measure what we built.
- Remember the ordinary Tuesday when nothing happened. It comes back.

## 09 The org chart nobody draws
- Team Topologies draws the platform as a grey slab at the bottom. Organisations read it as the bottom rung: the afterthought.
- How it feels: product teams in the sunshine, platform under the waterline.
- Flow Engineering (Pereira & Davis): a supportive value stream. Internal customers, enabling the outward-facing streams. Further from the paying customer, so less measured.
- Down there: big-iron networking veterans, Windows people, cloud engineers, the platform infra guys. The most fun rooms I've worked in.
- TT's three interaction modes are on the chart. Say a stream-aligned team is shipping a checkout to paying customers. Collaboration: we sit with them while they work out what they need from us, a database, a queue. X-as-a-Service: once it's stable they self-serve it and we get out of the way; they shouldn't have to talk to us at all. Facilitating: an enabling team coaching them through something new, then leaving. Most platform work should end up as the service.
- Tonight's aim: make what happens under the waterline visible, without killing what makes those rooms good to work in.

## 10 The people and legacy skills
- So, platforms. There's a wealth of experience in that creepy basement.
- A lot of the best infra knowledge sits with whoever runs the legacy kit: on-prem, networks, the stuff everyone's slightly frightened of.
- They know where the bodies are buried, which cable you don't touch, why the batch job runs at four in the morning.
- But we have to build learning in (third F) or the veterans struggle with the new tech, or worse, the knowledge leaves with them.
- Kubernetes is great. It's a tool you learn, not a club you join.
- The model is meant to help here: it gives the new cloud engineers and the legacy staff who are new to automation the same five questions to work from, so they become one team rather than two camps.
- If they don't want to learn, what can you do? Raise a ticket. Escalate to your manager. I don't know.

## 11 A good day is a quiet day
- For us a good day is a quiet one. No incidents; room to learn, maintain, build. Trying not to mention the third F again.
- Before someone corrects me at the bar: yes, we deploy fast and often, or should. Pipelines can live anywhere, with us or with the product teams; if they're ours, the test is that a team can ship through them without asking us. We're responsible for the layer underneath, and whatever project we're on.
- The difference is what the speed is for: leverage for other teams, and recovery when things break. Not features out the door.

## 12 Drawing the line
- As the Platform Engineering book puts it: if you're not doing any software engineering, you're just doing operations with a high level of customer empathy. (Software engineering meaning the method, not the product. For us it's usually infrastructure as code.)
- App support answers the same question forever. A platform team writes the code that deletes the question.
- Bone of contention: the books say let app teams step off the path and own what they build. That's the ideal, invisible-platform, elite-performing org. Not always practical. Project teams leave, people leave, contractors leave; the off-path stuff lands on us later, when nobody remembers how it works. So curation is deciding today what we're willing to inherit.
- Curated product approach: Fournier & Nowland's first pillar. Deciding what the platform offers is our call, made with the teams who use it, not handed up the chain. It's an offer, not a rule.

## 13 Two altitudes
- Two heights to bear in mind. Top: values, why we work this way. Three Ways → CALMS: culture, automation, lean, measurement, sharing.
- Below: the model, what good looks like on the work in front of you.
- Not a scoring scheme. You don't run it over last quarter's numbers; you run it over the ticket in your hand and the work coming next.
- The model is the M, and each reading points at a letter: toil high, automate; load high, go lean, take steps and waiting out; reach or depth low, share it, docs and paved paths. Culture is the precondition: it only works if honest numbers are safe to report.
- Why the model exists: the confusion. Infra engineers get handed three rulebooks that aren't the same kind of thing. DORA and Accelerate are academically rigorous: survey research, published method, peer-reviewed. SRE is a report of what Google did, written by Google. ITIL is a committee framework, and its change advisory boards are directly contradicted by the research: Accelerate found heavyweight external approval slows delivery without improving stability. Three sources, three levels of evidence, one engineer told to follow all of them. The model is what came out of trying to reconcile that.
- Same problem again for load on slide 18.

## 14 The model — the reveal
- Leverage is the point of a platform team: a few multiplying the many. Four things, gated by a fifth.
- Reach: how many teams actually use it. Depth: how much more a team can do because it exists. Multiplied, because if either is zero you have nothing.
- Subtract the friction. Cognitive load: what anyone has to hold in their head to get the thing done, them to use it, us to run it. Toil: the manual grind on our side.
- Multiply by reliability, 0 to 1. If trust goes, everything drags to zero.
- Why reliability is the gate: DORA measures how well teams ship code. Staying up got moved into its own box, labelled operational performance. That box is our job. So in my model staying up isn't one metric among five; it's the gate the other four pass through.
- A month of work that moves none of the four is evidence: the case for a platform in words the org understands.
- This is for every engineer, at every level, on every ticket. Before touching a keyboard, five bases: who else is going to need this (reach) · what will it let them do that they couldn't before (depth) · how much will anyone have to hold in their head, them or us (load) · what's left for us to do by hand next time (toil) · does it stay trustworthy (reliability). Carry the model and every ticket becomes proactive work.
- Remember: leverage is a few engineers reducing the work of the many. A platform nobody trusts is worth nothing.
- Grow two, shrink two, never breach the floor. Third F: findings, what each request teaches you, fed back in.

## 15 The five things
- For each engineer on the team to carry.
- Reach: how many teams actually use the thing, and it only counts if they had a choice. Teams building on top of you is the goal. Teams building copies of you because yours is too slow is reach draining away, and it's the most honest signal you'll get.
- Depth: how much more a team can do because you exist. The prize. Setting up a new service used to take six weeks and favours from three teams; now it takes an afternoon. The six weeks isn't the point. When starting something costs almost nothing, people start ten times as many things, and that's where the organisation's value comes from.
- Cognitive load: what anyone has to hold in their head to get the thing done: the steps, the forms, the tickets for them; the tools, the exceptions, the "ask Dave" for us. Count the steps, don't survey the feelings. Both sides shrink the same way: put it in code and on a page so the platform remembers instead of a person. Our side is the one we're accountable for. Lineage: an education researcher named it in 1988 (Sweller), Team Topologies made it a rule for designing teams in 2019, and the 2023 DevEx paper (Forsgren of Accelerate, with Storey, Noda and Greiler) made it one of the three things that decide whether developers are productive, with fast feedback and uninterrupted time. Borrowing, not inventing.
- Toil: the repetitive work you do by hand on your own side. Google's SRE rule: under half the team's working time, so at least half is left for building the things that get rid of it.
- Reliability: the multiplier, 0 to 1. Can people trust it? DORA 2024: teams using an internal platform got more done but had 14% more failed changes. A platform raises what's possible and, if you're careless, weakens what's underneath.
- It can go negative. If the thinking you cause and the toil you carry outweigh the value you add, the platform is a net cost. Don't be that.

## 16 A lens not a target
- Friendly reminder. Read the slide.
- Accelerate's own caveat: in fear-driven cultures measurement becomes control and people hide the bad news. As Deming put it, whenever there is fear, you get the wrong numbers.
- The moment a measure becomes a target, people work the number instead of the work. Chase a toil percentage and you'll hit it without anything getting easier. Goodhart's law.
- DORA say the same of their own metrics: per service, to see if your own team is improving over time, never to compare teams.
- Honestly: this is a way of thinking, not an instrument. Nobody has published a tested measure for platform teams. I looked, and so did the first review of the whole field this year: fewer than a dozen proper studies, the popular platform metrics untested, and a proper measure named as one of the two biggest gaps. Treat it as a lens. Don't hand me a decimal.

## 17 The IDP ladder
- A quick detour, and it's here because the model will sometimes tell you the work isn't moving anything, and "we need a platform" is a useless sentence. This is what you ask for instead, and where to start.
- Six shapes, thinnest first. CNCF and TT: every org already has a platform, even if it's only docs on third-party services. The pattern is the middle column: a person, replaced by a template, then a pipeline, then a button, then a product, then nothing.
- 01 Docs & runbooks. You ask a person. One page: what we use, how to get access, how to deploy, who to ask, how quickly they'll answer, with a chat channel behind it. Nothing automated, but nobody has to guess. Team Topologies calls this the thinnest viable platform and says it can literally be a wiki page.
- 02 Templates & modules. You copy a template. Ready-made infrastructure modules, base images, a starter repo with a working pipeline. Teams take a copy, fill in the blanks, run it themselves. Most infra teams' first real step. The catch: once teams have their own copy, it drifts.
- 03 Pipelines & policy. You raise a pull request. What you want is a file in a repo; automatic checks make sure it follows the rules; a pipeline builds it. No ticket, no waiting for a person. Landing zones, Argo CD and Flux live here. So does our Terraform version fix.
- 04 Self-service. You press a button. A site lists every service, owner, docs and dashboards, and lets you create a new one from a template. Behind the button it's still rung 3. For us it's one more application to keep running.
- 05 Platform as product. You describe what you need. Developers say "a database, a queue, a public address" and the platform works out how to provide it in each environment; Crossplane is one way. A proper product: a team, a roadmap, service levels. It's also where DORA's definition of a platform begins, an internal product for developers. Fournier & Nowland would draw the line lower, at rung 2: no software, no platform. TT and CNCF count rung 1. TT is kind to us here.
- 06 Invisible platform. You ask for nothing. Push code and build, deployment, scaling, monitoring, certificates, secrets, cost and compliance just happen. Very large companies build this in-house; others assemble it from OpenShift, Cloud Foundry, or Kubernetes plus everything above. Big team, big bill, and the rigidity DORA's 2024 data warned about.
- Most estates I've worked on live on rungs 1 to 3 and do real leverage there. The 2026 review found the same: most organisations sit on the first two levels of automation. We all know the top isn't always possible.
- Every rung costs more to run; the top isn't the goal, so say the CNCF. Climb when this rung keeps failing the test, not when the next looks impressive (DORA: minimum viable platform).

## 18 Whose load is it anyway
- DORA's own advice is to "shift down": move the Kubernetes, the networking, the security policy out of developers' heads and into the platform. Fine. DevEx then measures the developers' load going down. Nobody measures where it went.
- Paula Kennedy, co-founder and COO of Syntasso, asked at PlatformCon 2022 whose load it is anyway (I saw her at State of Open Con in 2023) and warned that shifting all of it onto the platform team isn't reducing cognitive load. Team Topologies is the only book that even notices: it says the platform team's own load has to be bounded too, which is the whole point of the thinnest viable platform. But it doesn't measure it either.
- So put the load somewhere that isn't a person: in code and on a page. The field counts the relief. This model counts the weight.
- ITIL, SRE and DORA: none of them describe how infrastructure engineers work day to day with the developers they support. Each abstracts the base layer away, blurs it out, and leaves the engineers in it unsure how they're meant to work. The hope: this model gives lower-level engineers a way to apply the research to the work in front of them. (If heckled: the SRE book has an engagement-model chapter and TT has the interaction modes. It's the measuring that's missing.)
- Weight of evidence, as on slide 13: DORA and Accelerate rigorous; SRE is Google's report on Google; ITIL's change advisory is contradicted by the DORA research. Lean hardest on DORA.

## 19 Close
- Every organisation has an infrastructure layer, whatever it calls it.
- It deserves more than DORA and Accelerate applied after the fact. We're rarely in the room when ways of working are set; we pick up the crumbs of best practice and make them fit.
- The work is wide-ranging: sometimes devs, often not.
- Legacy knowledge meeting a world that changes faster than the estate. Keep pace with both.
- Use the model as a start. Not a finish line, not a target.
- And that ordinary Tuesday, the one the research never photographed? It's tomorrow. Go and have a quiet one.
- Grow two. Shrink two. Never breach the floor. Questions, heckles, war stories.
