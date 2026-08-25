import { useState } from "react";
import { clsx } from "clsx";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Layout";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { projectEntries } from "@/content/projects";
import { projectCodes } from "@/lib/codes";
import type { ProjectEntry } from "@/types/content";

const FILTERS = ["All", "Physics", "Mathematics", "Computation", "Research", "Other"] as const;
type FilterValue = (typeof FILTERS)[number];

const STATUS_WEIGHT: Record<ProjectEntry["status"], number> = {
  complete: 0,
  ongoing: 1,
  paused: 2,
};

export function ProjectsIndex() {
  const [filter, setFilter] = useState<FilterValue>("All");

  const filtered = projectEntries
    .filter((p) => filter === "All" || p.category === filter)
    .sort((a, b) => STATUS_WEIGHT[a.status] - STATUS_WEIGHT[b.status]);

  return (
    <Container>
      <PageHeader
        eyebrow="Archive"
        title="Projects"
        description="What's been built, how it was approached, and where the work can be inspected directly."
      />

      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by field">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={clsx(
              "border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors duration-150",
              filter === f
                ? "border-accent text-text-primary"
                : "border-border text-text-secondary hover:border-border-strong hover:text-text-primary"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="pb-24 text-text-tertiary">
          [Placeholder — no projects tagged {filter} yet.]
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 pb-24 md:grid-cols-2">
          {filtered.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 50}>
              <ProjectCard entry={entry} code={projectCodes[entry.id]} />
            </Reveal>
          ))}
        </div>
      )}
    </Container>
  );
}
