import type { Field, ResearchEntry, ProjectEntry, NoteEntry } from "@/types/content";
import { researchEntries } from "@/content/research";
import { projectEntries } from "@/content/projects";
import { noteEntries } from "@/content/notes";

export type FieldItem =
  | { kind: "research"; entry: ResearchEntry }
  | { kind: "project"; entry: ProjectEntry }
  | { kind: "note"; entry: NoteEntry };

/**
 * Physics / Mathematics / Computation have no content files of their own —
 * they're computed views over Research + Projects + Notes, filtered by
 * category. See Phase 1 (IA) and Phase 7 ("Field / Subject Aggregation").
 */
export function getFieldItems(field: Field): FieldItem[] {
  const research: FieldItem[] = researchEntries
    .filter((e) => e.category === field)
    .map((entry) => ({ kind: "research" as const, entry }));

  const projects: FieldItem[] = projectEntries
    .filter((e) => e.category === field)
    .map((entry) => ({ kind: "project" as const, entry }));

  const notes: FieldItem[] = noteEntries
    .filter((e) => e.category === field)
    .map((entry) => ({ kind: "note" as const, entry }));

  return [...research, ...projects, ...notes];
}
