# Professional CV Website - Moubarka Djamel Eddine

The goal is to create a professional, modern CV website for Moubarka Djamel Eddine based on the provided PDF details. The user specifically requested correcting the English surname to "Mebarka" and presenting different versions or a clear, high-quality presentation.

## Scope Summary
- Create a high-end, responsive CV/Portfolio website.
- Sections: Personal Info, Professional Summary, Work Experience, Education, Skills, and Languages.
- Correct the surname to **Mebarka** (from the PDF's "Moubarka").
- Provide a clear UI with a clean layout, potentially with a downloadable PDF option (print-friendly CSS).
- Language: English (primary) with professional Arabic styling if requested (UI will support RTL if needed, but the content will be in English as per the "correct the surname in English" hint).

## Assumptions
- The user wants a web-based "professional version" of their CV.
- "كل نسخة وحدها" (each version alone) suggests either distinct layouts or a very clean, segmented presentation of his roles/education. I will interpret this as a high-quality, sectioned layout.
- The surname "Mebarka" replaces "Moubarka".

## Affected Areas
- `src/App.tsx`: Main entry point and layout.
- `src/components/CV/`: New components for sections (Hero, Experience, Education, Skills).
- `src/index.css`: Typography and print-friendly styles.

## Phases

### Phase 1: Data Structuring & Setup
- Extract data from the provided context (PDF text).
- Create a data file `src/data/cv-data.ts` to store the structured information (correcting the name).

### Phase 2: Core Components
- Build the `Header/Hero` section with contact info and the corrected name.
- Build the `Experience` section (Professional experience).
- Build the `Education` and `Skills` sections.
- Ensure the layout is "Professional" (Clean, high contrast, good typography).

### Phase 3: "Versions" / Layout Polish
- Ensure the UI looks like a "Modern CV".
- Implement a "Print" button or CSS `@media print` rules so the user can save it as a high-quality PDF directly from the browser.

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Implementation of the full CV website.

**Per-agent instructions:**
### 1. frontend_engineer
- **Phases:** 1, 2, 3
- **Scope:** Create a complete CV website.
- **Data (From PDF):**
    - Name: Mebarka Djamel Eddine (Note: Corrected surname)
    - Professional Title: [From PDF]
    - Experience: [From PDF]
    - Education: [From PDF]
    - Skills: [From PDF]
- **Files:** 
    - `src/data/cv-data.ts` (JSON/Object storage for CV content)
    - `src/components/Resume.tsx` (Main resume container)
    - `src/App.tsx`
- **Acceptance criteria:**
    - Correct spelling: **Mebarka**.
    - Professional, clean design using Tailwind/Lucide icons.
    - Responsive mobile view.
    - Print-friendly layout (looks good when using Cmd+P).
    - Modern "Professional CV" aesthetic.

**Do not dispatch:**
- supabase_engineer (No database required).
