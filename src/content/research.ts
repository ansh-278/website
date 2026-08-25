import type { ResearchEntry } from "@/types/content";

// No research content has been supplied yet. This single placeholder entry
// exists only to demonstrate every section of the Research template —
// including its empty/pending states — end to end. Replace it with a real
// entry (or add more alongside it) by following this exact shape; no
// component needs to change when you do.
export const researchEntries: ResearchEntry[] = [
  {
    id: "placeholder-research-entry",
    title: "[Placeholder — add your research title]",
    category: "Physics",
    status: "formulation",
    date: "2026-01-01",
    updated: "2026-01-01",
    abstract:
      "[Placeholder abstract. Replace with a short, plain-language summary of the question this entry investigates.]",
    question:
      "[Placeholder — state the specific question being investigated.]",
    background:
      "[Placeholder — explain the scientific or mathematical context around the question: what's already understood, and what gap this investigation addresses.]",
    methods:
      "[Placeholder — describe the approach being used to investigate the question.]",
    mathematicalFramework:
      "[Placeholder — document the equations, structures, or assumptions relevant to this investigation, once available.]",
    computationalApproach:
      "[Placeholder — document algorithms, numerical methods, or tools, once applicable.]",
    observations:
      "[Placeholder — interim observations go here as they occur. Marked INTERIM in the UI, never conflated with confirmed results.]",
    // `results` intentionally left undefined — the Results section renders
    // its Empty/Pending State rather than fabricating a finding.
    results: undefined,
    limitations:
      "[Placeholder — note assumptions, constraints, or open questions once the investigation is far enough along to identify them.]",
    references: [],
    researchLog: [
      {
        date: "2026-01-01",
        stage: "formulation",
        whatChanged: "[Placeholder — describe what changed in this update.]",
        whatWasLearned: "[Placeholder — describe what was learned.]",
        nextStep: "[Placeholder — describe the next documented step, if any.]",
      },
    ],
    tags: [],
    figures: [],
  },
];
