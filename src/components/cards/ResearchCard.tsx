import { Link } from "react-router-dom";
import type { ResearchEntry } from "@/types/content";
import { ChipRow } from "@/components/ui/Chip";
import { StageIndicatorCompact } from "@/components/ui/StatusIndicators";

export function ResearchCard({ entry, code }: { entry: ResearchEntry; code: string }) {
  return (
    <Link
      to={`/research/${entry.id}`}
      className="group block border border-border bg-surface p-4 transition-all duration-200 hover:border-border-strong hover:shadow-[0_0_24px_-4px_rgba(74,144,194,0.22)]"
    >
      <div className="mb-3 h-0.5 w-full bg-border transition-colors duration-150 group-hover:bg-accent" />
      <p className="mb-2 font-mono text-xs text-accent">{code}</p>
      <h3 className="mb-2 font-serif text-xl font-semibold leading-snug text-text-primary">
        {entry.title}
      </h3>
      <p className="mb-4 text-sm text-text-secondary">{entry.abstract}</p>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <StageIndicatorCompact stage={entry.status} />
        <span className="font-mono text-xs text-text-tertiary">{entry.category}</span>
        <span className="font-mono text-xs text-text-tertiary">{entry.date}</span>
      </div>
      {entry.tags.length > 0 && (
        <div className="mt-3">
          <ChipRow items={entry.tags} />
        </div>
      )}
    </Link>
  );
}
