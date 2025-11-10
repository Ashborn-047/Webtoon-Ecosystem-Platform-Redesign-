# **II. Research & Discovery**

### **UX Audit: Identifying Critical Failure Points**

#### **Audit Standards & Methodology**

Professional UX audits (2024–2025) are structured around **heuristic evaluation**, **quantitative analytics**, and **usability testing**.  
 This study employed:

**Frameworks**

* *Nielsen Norman’s 10 Heuristics* – Usability, error prevention, aesthetic minimalism

* *Google HEART Framework* – Happiness, Engagement, Adoption, Retention, Task Success

* *ISO 9241-210* – Human-Centered Design

**Metrics**

* Task success rate

* Time-on-task

* Net Promoter Score (NPS)

* Conversion and drop-off rate

* System Usability Scale (SUS)

*Sources:* City University of London, Django Stars (2025)  
 *Confidence Level:* High (\>85%)

**Interaction Architecture Failures**

#### **Loading Performance Crisis**

* Pop-up rendering delays: **5+ seconds** on initial load

* Sequential delay in subscription feed updates

* **Heuristic violation:** System status visibility (Nielsen)

* **Impact:** Critical first-interaction friction point

#### **Navigation Hierarchy Breakdown**

* Users report difficulty locating *Completed Series*

* *“I’m struggling to find the completed section... frustrating app.”* — Reddit, 2024 (600+ upvotes)

* Breakdown in **wayfinding logic** directly impacts task completion

#### **Content Density & Visual Hierarchy**

* **Poor content-to-chrome ratio:** excessive UI elements competing for attention

* Design prioritized **aesthetic novelty** over usability

* *“The old interface was warm and inviting — that’s gone now.”* (645-upvote Reddit post, 2024\)

* **Scrolling stutter:** 3-second freeze states → disrupted vertical flow, high cognitive load

**Observation:** For a content-consumption platform built on seamless vertical scroll, micro-latency compounds perceived friction — a major UX regression.

#### **Competitive Gap**

* Lower-funded rivals outperform Webtoon in **load speed**

* **Mobile web** now outperforms **desktop native** → symptom of fragmented development pipelines

###    **Discovery Mechanism Failures**

#### **Search Functionality Deficiencies**

* Delayed indexing: creator content takes hours to appear post-publication

* Case-sensitive and punctuation-sensitive queries limit discoverability

* Disadvantages new creators disproportionately

* *Impact:* artificial discovery barriers \+ trust erosion

#### **Algorithmic Visibility Crisis**

* Heavy bias toward high-engagement series → “winner-takes-all”

* Over **10M+ titles** published globally; new works rarely surface

* *Community sentiment:* “Visibility depends more on staff picks than quality.”

* Confirms algorithmic opacity and lack of fairness

#### **Shadow-Banning & Age Filters**

* Mature content hidden from search results (desktop)

* August 2024’s *Age Rating System* blocks 18+ series from default visibility

* Result: creators lose exposure; some label policy “predatory”

* *Sources:* Comics Beat (2024), YouTube “The TikTokification of Webtoon” (2025)

* *Confidence Level:* High (85%)

###     **User Behavior Analysis**

#### **Reading Pattern Research**

Two dominant patterns observed:

1. **Episodic Reading:** Weekly serialized engagement

2. **Binge Reading:** Post-completion marathons

*Sources:* City University of London Journal (2024), IJIRSS (2024)  
 *Confidence Level:* High (\>90%)

#### **Engagement Drivers**

* Emotionally charged narratives

* Cliffhanger suspense (suspense-maintenance theory)

* Social connection via comments

* Cognitive escape comparable to streaming patterns

#### **Critical Drop-off Points**

* Episodes **3–5** show steepest abandonment

* Often linked to pacing gaps or paywall entry

* *Supporting Evidence:* National Literacy Trust (2024) — frictionless discovery \= higher retention

#### **Reader Motivations**

* Quick entertainment & emotional release

* Social belonging via participatory culture

* Creator–fan connection

* Cognitive escape & storytelling immersion

### **Creator Pain Points**

#### **Monetization Inequality**

* Only **5–10%** of creators earn meaningfully

* “Fast Pass” model and ad rev skew toward top IPs

* Mid-tier creators struggle with **algorithmic favoritism**

* Attention economy rewards visibility, not quality

* *Sources:* Reddit r/WebtoonCanvas (2024–2025), AMT Lab (2025)

* *Confidence:* 75–85%

#### **Algorithmic Visibility Collapse**

* *“Discoverability is absolutely zero for Canvas now\!”* – Reddit, Jan 2024

* Staff-curated “Fresh Picks” and “Up & Coming” create limited rotation

* Lack of tagging/filtering tools → **rich-get-richer dynamic**

* *Impact:* creators rely on external social channels for traffic

#### **Community Interaction Gaps**

* No functional analytics (contrast: YouTube, Instagram)

* No in-app creator forums or collective feedback systems

* *“We can’t even discuss platform problems collectively.”* – Creator feedback, 2024

* Absence of **data transparency** prevents improvement cycles

### **Content Age Rating System: Policy Impact**

* August 2024 update introduced new maturity filters

* Mature-rated series restricted to 18+ users

* Direct impact on independent artists monetizing externally (e.g., Patreon)

* *Community sentiment:* “Webtoon is getting worse for creators.”

* Regular creator migration discussions documented across Reddit & YouTube

  **Competitor Benchmark Analysis**

#### **Comparative UX Framework**

| Platform | Audience | Homepage Structure | Personalization | Creator Discovery | Content Hierarchy | Monetization |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **Webtoon** | 200M+ users | Trending → categories → daily schedule | Advanced AI *(Project Nexus, My Universe)* | Staff-curated Canvas | Clear, multi-layered | Ads, coins, Fast Pass |
| **Tapas** | \~15M | Event-driven, indie-focused | Basic genre prefs | Direct creator–reader messaging | Dynamic, seasonal | Ad share, tips |
| **Manta** | 15M downloads | Netflix-style catalog | Limited | Curated, IP-based | Blurred sub vs. paid mix | $4.99 subscription |
| **Lezhin** | \~7M | Premium episodic | Minimal | None for indies | Paywall priority | Coins/tickets |
| **Tappytoon** | Smaller niche | Latest chapters emphasis | Minimal | None for indies | Chapter-first | Coins/tickets |

###   **Homepage Structure Analysis**

**Webtoon Strengths:**

* Trending/popular up top

* Genre tabs (Drama, Romance, Fantasy, etc.)

* Daily schedule fosters reading habits

* Prominent subscriber counts for credibility

**Webtoon Weaknesses:**

* Update tracking for subscribed titles difficult

* Excessive scroll depth to reach followed content

* *645-upvote Reddit thread* highlights layout fatigue

**Competitor Highlights:**

* **Tapas:** Event-driven engagement (creator contests, reading weeks)

* **Manta:** Subscription clarity; “binge-friendly” but lacks hierarchy

**Verdict:** Webtoon maintains **strong base architecture** but must rebalance discoverability vs. visual density.

### **Personalization: Webtoon’s Edge**

* **AI Systems:** Project Nexus & My Universe (2025) – analyze behavior (scroll speed, pause, dialogue tone, art style)

* **Outcomes:** Internal simulation \= \+22–28% session duration

* **Competitors:** Tapas \= genre-only personalization; others minimal

* *Verdict:* Webtoon leads in algorithmic intelligence but lacks transparency and creator-side analytics.

* *Source:* AInvest (2025), Prototypr Analysis

* *Confidence:* High (90%)

### **Creator Discoverability: Tapas Advantage**

* **Tapas Strengths:**

  * Direct reader–creator messaging

  * Forum and event spaces

  * Transparent analytics

  * Permanent ad revenue unlocks

* **Webtoon Updates (May 2025):**

  * New “Series Home” UI with sorting/filtering

  * Improved search and preview tabs

  * Still limited in analytics and creator visibility

**Verdict:** Tapas dominates community and discoverability; Webtoon remains reader-centric.

### **Platform-Specific Strengths**

**Webtoon**

* Mobile-first vertical scroll

* Serialized “wait-until-free” model fits mass audience

* Largest global readership ensures ecosystem momentum

**Tapas**

* Multimedia flexibility (GIFs, music integration)

* Community-first culture

**Manta**

* Subscription-first UX

* Value clarity for users

**Lezhin/Tappytoon**

* Mature niche quality but costly & slow

### **Social Sentiment Analysis (2024–2025)**

**Dominant Community Themes**

* **UX Decline:** “Webtoon used to be relaxing; now it’s chaotic.”

* **Monetization Fatigue:** Overreliance on Fast Pass, intrusive ads

* **Censorship Confusion:** Inconsistent 18+ filtering, shadow-bans

* **Creator Support Deficit:** Widespread sympathy for independent creators

* **AI Content Distrust:** “AI covers in top charts ruin trust”

*Sources:* Reddit (r/webtoons, r/WebtoonCanvas, May 2025, \>300 votes)  
 *Confidence:* 85–90%

### **Mobile App Interface Analysis (New Section)**

**What Works**

* Clean vertical scroll & intuitive navigation

* Clear genre sections & “Continue Reading” module

* Strong use of thumbnails & subscriber counts

**What Doesn’t**

* Visual clutter from badges & overlapping metadata

* No creator activity or “fan space”

* Basic personalization (“Perfect for You” only)

* No social/community hub

**Opportunity**

* Use app patterns as **UX baseline for web parity** (Phase 1\)

* Introduce **community & personalization depth** cross-platform (Phase 2\)

---

### **Summary**

The audit confirms Webtoon’s **mobile expertise** but exposes the **web platform’s structural decay**—especially in navigation, discoverability, and community design.  
 While competitors innovate around **community-driven engagement**, Webtoon’s advantage remains its **AI personalization and scale**. The transformation must bridge that gap by combining algorithmic power with emotional, creator-centered UX evolution.

