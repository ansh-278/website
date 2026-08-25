import type { ProjectEntry } from "@/types/content";

// No project content has been supplied yet. This placeholder demonstrates
// every section of the Project template, including its empty/pending
// states for a missing repository, demo, and result. Replace it with real
// projects following this exact shape.
export const projectEntries: ProjectEntry[] = [
  {
    id: "placeholder-project-entry",
    title: "[Placeholder — add your project title]",
    category: "Computation",
    description:
      "[Placeholder — one line on what this project is and what it does.]",
    technologies: [],
    status: "ongoing",
    date: "2026-01-01",
    problem:
      "[Placeholder — what problem, question, or objective does this project address?]",
    approach:
      "[Placeholder — explain the conceptual and technical approach taken.]",
    implementation:
      "[Placeholder — explain how the solution was actually built: architecture, methods, and technical decisions.]",
    // `result` intentionally left undefined — renders the Empty/Pending
    // State instead of an invented outcome.
    result: undefined,
    // `github` / `demo` intentionally left undefined for the same reason.
    github: undefined,
    demo: undefined,
    figures: [],
  },
];
