import type { FieldItem } from "@/lib/aggregate";
import { ResearchCard } from "@/components/cards/ResearchCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { NotebookEntryRow } from "@/components/cards/NotebookEntryRow";
import { researchCodes, projectCodes } from "@/lib/codes";

export function FieldItemCard({ item }: { item: FieldItem }) {
  if (item.kind === "research") {
    return <ResearchCard entry={item.entry} code={researchCodes[item.entry.id]} />;
  }
  if (item.kind === "project") {
    return <ProjectCard entry={item.entry} code={projectCodes[item.entry.id]} />;
  }
  return <NotebookEntryRow entry={item.entry} />;
}
