// Content schema — see Phase 7, "Content Architecture & Data Model".
// Components render content, they never contain it: every UI component
// in this codebase takes one of these shapes as input and renders it.
// Nothing entry-specific lives in a component.

export type Field = "Physics" | "Mathematics" | "Computation";

/** Research entries use a five-stage progression, not a percentage. */
export type ResearchStage =
  | "question"
  | "literature"
  | "formulation"
  | "implementation"
  | "analysis";

export const RESEARCH_STAGES: ResearchStage[] = [
  "question",
  "literature",
  "formulation",
  "implementation",
  "analysis",
];

export const STAGE_LABEL: Record<ResearchStage, string> = {
  question: "Question",
  literature: "Literature",
  formulation: "Formulation",
  implementation: "Implementation",
  analysis: "Analysis",
};

/** Projects keep the original three-state status (unchanged from Phase 4/6). */
export type ProjectStatus = "ongoing" | "paused" | "complete";

export interface Reference {
  text: string;
  url?: string;
}

export interface ResearchLogEntry {
  date: string; // ISO 8601
  stage: ResearchStage;
  whatChanged: string;
  whatWasLearned: string;
  nextStep?: string;
}

export interface Figure {
  /** Path or import for the image; may be omitted for a text-only figure note. */
  image?: string;
  caption: string;
}

export interface CodeSnippet {
  language: string;
  caption: string;
  code: string;
}

export interface ResearchEntry {
  id: string;
  title: string;
  category: Field;
  status: ResearchStage;
  date: string; // ISO — when the investigation started
  updated: string; // ISO — most recent substantive change
  abstract: string;
  question: string;
  background: string;
  methods: string;
  mathematicalFramework?: string;
  computationalApproach?: string;
  observations?: string;
  results?: string;
  limitations?: string;
  references: Reference[];
  researchLog: ResearchLogEntry[];
  tags: string[];
  figures: Figure[];
}

export interface ProjectEntry {
  id: string;
  title: string;
  category: Field | "Research" | "Other";
  description: string;
  technologies: string[];
  status: ProjectStatus;
  date: string;
  problem: string;
  approach: string;
  implementation: string;
  result?: string;
  github?: string;
  demo?: string;
  codeSnippets?: CodeSnippet[];
  figures: Figure[];
}

export interface NoteEntry {
  id: string;
  title: string;
  category: Field;
  date: string;
  summary: string;
  content: string;
  tags: string[];
  relatedWork: string[]; // ids of Research / Project / Note entries
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}
