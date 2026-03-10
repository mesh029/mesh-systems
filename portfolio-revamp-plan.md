## Purpose

This document is the **single source of truth** for revamping `meshreallycodes.online` into a practitioner-led portfolio and living CV.  
It tracks:

- What the site should contain (sections, pages, and content).
- What needs to be written or refined.
- How the same data will later generate a **downloadable CV/PDF** that stays in sync with the site.

---

## 1. Positioning & Voice

- **Identity**: Single practitioner – *“I”*, not “we”.
- **Title**: Systems Engineer and HIS Practitioner
- **Core identity line (draft)**:  
  > I design, secure, and operate systems for healthcare programs, NGOs, and organizations that rely on their infrastructure every day.
- **Domains**:
  - Systems engineering & infrastructure
  - Health information systems (KenyaEMR, OpenMRS, TaifaCare, Tibabu)
  - IT administration & networking (Cisco Meraki, multi-site infra, remote support)
  - Backend & internal tools development (HR, inventory, booking, APIs)
  - Security-aware engineering (OWASP, pentesting, VA, CCNA)
  - NGO program support (M&E, data pipelines, EMR rollout, PRISM, NDW)
  - AI & LLM integration (ChatGPT, Claude, Cursor, generative AI for content and design workflows)

**Voice rules**

- Use **first person singular** (“I”, “my work”) in descriptive text.
- Calm, professional, technically specific.
- No marketing fluff, no fake scale.
- Focus on: systems, constraints, responsibilities, and outcomes.

**Status**

- [x] Agreed to use first person.
- [ ] Finalize one-sentence identity line.

---

## 2. Site Structure (Pages & Sections)

### 2.1 Home

**Sections**

- **Hero**
  - Short identity + what you actually do.
  - Example (to refine):  
    > I design and operate production systems for healthcare programs, NGOs, and organizations.
  - Sub-line: mention key areas (systems engineering, HIS, security, NGO support).
  - CTAs:
    - “View My Work” → work/practice areas section on the same page.
    - “Download CV” → CV PDF (future).

- **My Work (grid of practice areas)**
  - 5–6 tiles:
    - Systems Engineering & Infrastructure
    - Health Information Systems
    - Security & Networking
    - Backend & Internal Tools
    - AI & LLM Integration
    - NGO & Program Support

- **Highlights / Impact**
  - A few short, hard facts:
    - EMR infrastructure rollout across **~180 facilities**.
    - County-level HIS pilots (Nyamira – Tibabu, TaifaCare).
    - Migration of on-prem servers to cloud.
    - Hackathons & CTFs (NRF 2024, Cyberise 2024, HTB, ICP Blockchain 2025).

**Status**

- [ ] Rewrite hero text to first-person with final identity line.
- [ ] Rename “Our Work” cards to fit your domains exactly.
- [ ] Add 3–4 bullet “impact highlights” under the grid.

---

### 2.2 Practice Area Pages (currently “capability” pages)

Each existing detail page becomes a **practice area** page written in first person. Draft mapping:

1. **Systems Engineering & Infrastructure**
   - Content:
     - I design and maintain on-prem and cloud infrastructure.
     - I set up and manage networks (incl. Cisco Meraki dashboards for multiple offices).
     - I migrate on-prem servers to cloud and maintain them.
     - I use GitHub workflows/CI for internal services and APIs.
   - Systems:
     - EMR application servers, DB servers.
     - VPNs, APN-based connectivity for sites.
   - Outcomes:
     - Less downtime, easier maintenance, clearer SOPs.

2. **Health Information Systems & EMR Work**
   - Content:
     - I support KenyaEMR / OpenMRS / TaifaCare / Tibabu deployments.
     - I configure biometrics, access management, and EMR infrastructure for facilities.
     - I oversee EMR infrastructure rollout (e.g., ~180 facilities).
   - NGO / program context:
     - Monitoring and Evaluation, data collection, reporting to PRISM and national data warehouse.
     - Ticketing system for HIS issues.
   - Outcomes:
     - Better data availability, fewer system outages, smoother reporting.

3. **Security, Networks & Operations**
   - Content:
     - I apply OWASP practices to backend and API work.
     - I do pentesting, vulnerability assessment, network troubleshooting.
     - I participate in hackathons and CTFs (NRF, Cyberise, HTB, ICP) to sharpen real skills.
   - Outcomes:
     - Harder-to-abuse systems, improved auth flows, better logging and monitoring.

4. **Backend Systems & Internal Tools**
   - Content:
     - I build backend systems and APIs (e.g., podcasting API with GitHub Marketplace workflows).
     - I build internal tools like Boardroom Booking, HR, Inventory Management.
     - I integrate payment APIs and other external services.

5. **AI & LLM Integration**
   - Content:
     - I use LLMs (ChatGPT, Claude) and AI coding assistants (Cursor) to accelerate development, generate high-quality content, and improve design workflows.
     - I apply generative AI to produce documentation, design assets, and automate repetitive tasks.
     - I integrate AI tools into my development process to improve efficiency and output quality.
   - Tools & Context:
     - ChatGPT, Claude for content generation and problem-solving.
     - Cursor for AI-assisted coding and development workflows.
     - Generative AI for design and content creation.
   - Outcomes:
     - Faster development cycles, higher-quality documentation, more efficient workflows.

6. **Mobile & Cross-Platform Apps**
   - Content:
     - I build mobile apps with Flutter (and React Native if you want that noted) for internal tools or data collection.
     - I integrate apps with existing APIs, handle auth, offline usage, and deployment to stores.

**Status**

- [ ] For each page, write a **1-paragraph summary** in first person.
- [ ] For each page, list **3–8 “What I do here” bullets**.
- [ ] For each page, list **2–3 concrete systems/projects** as examples.
- [ ] Update the existing capability data (`lib/capabilities.ts`) to match this structure and voice.

---

### 2.3 Journey / Timeline Page

**Goal**: Show your path, not just job titles.

- **Roles (confirmed with locations)**:
  - ICT Associate at PATH – 2023 April – 2023 December
    - Base stations: Kisumu, Homabay
    - Counties covered: Homabay, Nyamira, Kisumu, Migori, Vihiga, Kakamega
  - ICT Officer at PATH – 2024 January – 2025 March
    - Base stations: Kisumu, Kakamega
    - Counties covered: Homabay, Nyamira, Kisumu, Migori, Vihiga, Kakamega
  - HMIS (Health Management Information Systems) at PATH – 2025 March – present
    - Base stations: Nyamira, Kisumu
    - Counties covered: Homabay, Nyamira, Kisumu, Migori, Vihiga, Kakamega

- **For each role**:
  - Organization (to be filled in).
  - Location (County / Country).
  - Dates (Month/Year – Month/Year).
  - 3–6 bullets:
    - Systems you touched (EMR infra, networks, servers).
    - Scale (no. of facilities / offices).
    - Responsibilities (deploy, monitor, support, plan).

- **Education**
  - BSc Applied Computing (2023), major in Forensics and Cyber Security.
  - Key modules: AI, DB Management, HCI, Data Analysis, Business Process Engineering, Web Development.

- **Certifications**
  - GitHub & Microsoft Career Essentials in Data Analysis.
  - Google IT Support.
  - CCNA.
  - GitHub Professional.
  - Azure Fundamentals.

**Status**

- [x] Role titles, organizations, and dates confirmed:
  - ICT Associate at PATH – 2023 April – 2023 December
  - ICT Officer at PATH – 2024 January – 2025 March
  - HIS Officer at PATH – 2025 March – present
- [ ] Draft bullet points per role in first person ("I led…", "I supported…").
- [ ] Confirm/correct list of certifications and years (if you want them shown).
- [ ] Confirm location (County/Country) for PATH roles.

---

### 2.4 Projects / Case Studies

We will pick **3–6 strong case studies** and give each:

- Title
- Context (who/where, rough scale)
- Your role
- Tech & systems
- What you actually did
- Outcome

**Selected Case Studies (3-6 focus areas)**

1. **Hackathons: Security & Innovation in HIS**
   - Context: Participated in NRF 2024, Cyberise Hackathon 2024, ICP Blockchain Hackathon 2025
   - Focus: Improving security in systems and HIS, exploring AI innovations
   - Partners: Safaricom, Microsoft, and others
   - What I did: Competed and learned from practical experience, applied security practices to healthcare systems
   - Outcomes: Gained hands-on experience with cutting-edge security practices, explored AI applications in healthcare

2. **EMR Infrastructure Rollout across ~180 Facilities**
   - Context: Overseeing rollout of EMR infrastructure across multiple healthcare facilities
   - Systems: KenyaEMR, TaifaCare, Tibabu
   - What I did: Infrastructure planning, deployment, configuration, and ongoing support
   - Outcomes: Improved data availability, reduced system outages, better reporting capabilities

3. **County HIS Pilots: Nyamira (Tibabu, TaifaCare)**
   - Context: Piloting county-level HIS systems rollout
   - What I did: System configuration, vendor coordination, infrastructure setup, user training
   - Outcomes: Successful pilot deployments, improved workflows, data collection improvements

4. **Security Improvements in HIS Systems**
   - Context: Applying OWASP practices, pentesting, vulnerability assessment to healthcare systems
   - What I did: Security hardening, access management (biometrics), ticketing systems for HIS security issues
   - Outcomes: More secure systems, better access controls, improved incident response

5. **AI & LLM Integration in Development & HIS Workflows**
   - Context: Using AI tools (ChatGPT, Claude, Cursor) to improve efficiency and explore future of HIS
   - What I did: Applied generative AI for content creation, design workflows, development acceleration
   - Outcomes: Faster development cycles, improved documentation, exploration of AI applications in healthcare

6. **Migration of On-Prem Servers to Cloud**
   - Context: Moving infrastructure from on-premise to cloud environments
   - What I did: Planning, execution, data migration, infrastructure setup
   - Outcomes: Improved scalability, reduced maintenance overhead, better reliability

**Status**

- [x] Selected 6 case studies focused on: hackathons, security improvements, AI innovations, HIS infrastructure
- [ ] For each, expand with detailed bullets for:
  - Context (who/where, scale)
  - Actions (what you implemented)
  - Tech & systems used
  - Outcomes (measurable or qualitative results)

---

### 2.5 Contact & Links

- Email: `aririmeshack@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/meshack-ariri/`
- Portfolio: `https://meshreallycodes.online`
- GitHub: `https://github.com/mesh029`

**Status**

- [x] Email and LinkedIn updated in site.
- [ ] Confirm preferred GitHub handle and add clearly.

---

## 3. CV / PDF Plan (Living CV)

We want **one data source** that powers:

- The **website content** (practice areas, journey, projects).
- A **downloadable PDF CV** that always reflects the latest info.

### 3.1 Draft Data Model (to implement in TypeScript later)

```ts
// lib/profile.ts (future)

export interface Role {
  title: string;
  organization: string;
  location?: string;
  start: { month: number; year: number };
  end?: { month: number; year: number } | "present";
  bullets: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location?: string;
  graduationYear: number;
  bullets: string[]; // key topics / focus areas
}

export interface Certification {
  name: string;
  issuer: string;
  year?: number;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  role?: string;
  context: string;
  tech: string[];
  actions: string[];   // what you actually did
  outcomes: string[];  // results, measurable or qualitative
  tags?: string[];     // e.g. ["HIS", "Security", "Infra"]
}

export interface Profile {
  name: string;
  title: string;        // e.g. "Systems Engineer & HIS Practitioner"
  location?: string;
  summary: string;      // 2–3 sentences, first person
  links: {
    website?: string;
    github?: string;
    linkedin?: string;
    email: string;
  };
  roles: Role[];
  education: EducationEntry[];
  certifications: Certification[];
  projects: ProjectCaseStudy[];
}
```

**Status**

- [ ] Confirm this model matches what you want in your CV.
- [ ] Fill in actual values for roles, education, certifications, and projects.
- [ ] Implement `lib/profile.ts` in codebase (later).
- [ ] Build a CV page and PDF export that read from this data.

---

## 4. Checklists for CV Completeness

We’ll use this as a **manual checklist** before generating the PDF:

- **Profile**
  - [ ] Name correct.
  - [ ] Title concise and accurate.
  - [ ] Location added (if you want).
  - [ ] Summary: 2–3 sentences, first person, focused on systems you work on.

- **Experience**
  - [ ] All major roles added with correct dates.
  - [ ] Each role has 3–6 bullets that mention:
    - Systems
    - Scale
    - Responsibilities
    - Outcomes

- **Projects / Case Studies**
  - [ ] At least 3 strong case studies fully written.
  - [ ] Each includes actions + outcomes, not just tools.

- **Education**
  - [ ] BSc Applied Computing added with graduation year.
  - [ ] Key topics listed (AI, DB, HCI, etc.).

- **Certifications**
  - [ ] All key certs added with issuer and year (if known).

- **Skills (optional CV section)**
  - [ ] Core technical skills grouped (e.g. Infra, Security, Backend, Mobile, HIS).

---

## 5. Implementation Order (High-Level)

### Phase Implementation Plan (no “basic” CV)

This revamp will be delivered in phases, but the end state is a **fully comprehensive, print-ready CV/PDF** that stays synchronized with the site’s data.

#### Phase 0 — Content inventory & truth check (foundation)
- [x] Confirm location (County/Country) for PATH roles:
  - Counties: Homabay, Nyamira, Kisumu, Migori, Vihiga, Kakamega
  - Base stations per role documented
- [x] Detailed role descriptions provided:
  - HMIS (March 2025 - Present) - complete
  - ICT Associate (Jan 2024 - March 2025) - complete
  - ICT Officer (Jan 2024 - March 2025) - drafted and added to profile.ts
  - ICT Associate (April 2023 - Dec 2023) - drafted and added to profile.ts
- [x] Created `lib/profile.ts` with comprehensive data structure including:
  - All 4 roles with detailed bullets, locations, base stations, counties
  - Education with focus areas
  - Certifications
  - Profile metadata (name, title, links, summary)
- [ ] Confirm which stacks you want listed explicitly (e.g., Linux, Docker, Meraki, KenyaEMR/OpenMRS, Flutter, etc.).
- [ ] For each selected case study, add:
  - [ ] Context + scope
  - [ ] Your responsibilities
  - [ ] Systems/stack
  - [ ] Outcomes
- [ ] Normalize spelling of systems/programs (TaifaCare, Tibabu, PRISM, NDW, DREAMS, etc.).

#### Phase 1 — Site content revamp (high impact, fast)
- [ ] Home:
  - [ ] Finalize identity line and hero copy (first-person).
  - [ ] Ensure “My Work” tiles match the practice areas exactly (incl. AI & LLM Integration).
  - [ ] Add concise “highlights” (180 facilities rollout, county pilots, cloud migration, etc.).
- [ ] Practice area pages:
  - [ ] Rewrite each summary in first person (no fluff).
  - [ ] Ensure each page lists concrete systems and examples.
- [ ] Journey/Timeline page:
  - [ ] Add PATH roles with dates and strong bullets.
- [ ] Projects/Case Studies:
  - [ ] Add 3–6 case studies with consistent structure.

#### Phase 2 — Single data source (site + CV stay in sync)
- [x] Implement `lib/profile.ts` as the authoritative data store with comprehensive role data.
- [ ] Refactor site pages to render from this data (no duplicated text).
- [ ] Add a "CV" route that renders the complete CV from data with **selective section inclusion**:
  - [ ] Checkbox interface to select which sections to include:
    - [ ] Roles (select specific roles or all)
    - [ ] Projects/Case Studies (select specific projects or all)
    - [ ] Certifications (select specific certs or all)
    - [ ] Education
    - [ ] Skills/Tools
    - [ ] Hackathons/CTFs
  - [ ] Real-time preview of selected CV
  - [ ] Save selection preferences (localStorage or URL params)

#### Phase 3 — Comprehensive CV layout (screen + print)
- [ ] Design a CV layout that is:
  - [ ] 1–2 page mode (recruiter view)
  - [ ] Full mode (comprehensive, multi-page)
  - [ ] Print-optimized typography, spacing, and page breaks
- [ ] CV sections (comprehensive):
  - [ ] Header (name, title, location, links)
  - [ ] Summary (2–3 lines, first person)
  - [ ] Core skills (grouped: HIS, Infra, Security, Backend, Mobile, AI/LLMs)
  - [ ] Experience (PATH roles)
  - [ ] Case studies (3–6, structured)
  - [ ] Education
  - [ ] Certifications
  - [ ] Community / Hackathons / CTFs
  - [ ] Tools & platforms (Meraki, GitHub Actions, ODK, PRISM/NDW workflows, etc.)

#### Phase 4 — Downloadable PDF (comprehensive, selective, beautiful)
- [ ] Choose PDF generation approach:
  - Option A: **Print-to-PDF** from a dedicated `/cv/print` page with CSS print rules.
  - Option B: **react-pdf** or `@react-pdf/renderer` for deterministic output.
- [ ] Implement "Download CV (PDF)" button that:
  - [ ] Uses current section selections from Phase 3 interface
  - [ ] Generates PDF with only selected sections/roles/projects
  - [ ] Ensures PDF is comprehensive enough that user doesn't need to create new CVs for different applications
- [ ] PDF includes:
  - [ ] Selected roles only (filtered by user selection)
  - [ ] Selected projects/case studies only
  - [ ] Selected certifications only
  - [ ] All other sections (Education, Skills, etc.) or selective based on user choice
- [ ] Add versioning/date stamp (optional) so you can track revisions.
- [ ] Ensure the PDF always regenerates from the same data used by the site.
- [ ] Test PDF output for readability, formatting, and completeness with various section combinations.

---

## 6. What I Need From You Next

- Confirm:
  - [x] Your preferred **short title**: "Systems Engineer and HIS Practitioner"
  - [x] Correct **timeline of roles**:
    - ICT Associate at PATH – 2023 April – 2023 December
    - ICT Officer at PATH – 2024 January – 2025 March
    - HIS Officer at PATH – 2025 March – present
  - [x] Selected **6 case studies** focused on: hackathons, security, AI innovations, HIS infrastructure
  - [x] Your primary **GitHub username/profile URL**: `https://github.com/mesh029`

Once you confirm or adjust these, we’ll:

1. Fill in this doc with concrete role + project details.
2. Then start implementing the `Profile` data model and wiring it into the site and future CV export.

