import { Link } from "react-router-dom";
import type { ProjectEntry } from "@/types/content";
import { ChipRow } from "@/components/ui/Chip";
import { StatusGlyph } from "@/components/ui/StatusIndicators";
import { IconButton } from "@/components/ui/IconButton";
import { RepoIcon, ExternalLinkIcon } from "@/components/ui/Icons";

export function ProjectCard({ entry, code }: { entry: ProjectEntry; code: string }) {
  return (
    <div className="group relative border border-border bg-surface p-4 transition-[color,background-color,border-color,transform] duration-200 ease-[var(--ease-lab)] hover:-translate-y-0.5 hover:border-border-strong">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-border transition-colors duration-150 group-hover:bg-accent" />
      <p className="mb-2 font-mono text-xs text-accent">{code}</p>
      <h3 className="mb-2 font-serif text-xl font-semibold leading-snug text-text-primary">
        <Link to={`/projects/${entry.id}`} className="static after:absolute after:inset-0">
          {entry.title}
        </Link>
      </h3>
      <p className="mb-4 text-sm text-text-secondary">{entry.description}</p>
      <ChipRow items={entry.technologies} />
      <div className="relative z-10 mt-4 flex flex-wrap items-center justify-between gap-3">
        <StatusGlyph status={entry.status} />
        <div className="flex gap-2">
          {entry.github && (
            <IconButton href={entry.github} label={`${entry.title} repository`}>
              <RepoIcon />
            </IconButton>
          )}
          {entry.demo && (
            <IconButton href={entry.demo} label={`${entry.title} demo`}>
              <ExternalLinkIcon />
            </IconButton>
          )}
        </div>
      </div>
    </div>
  );
}
