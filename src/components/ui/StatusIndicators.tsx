import { clsx } from "clsx";
import { RESEARCH_STAGES, STAGE_LABEL, type ResearchStage, type ProjectStatus } from "@/types/content";

/**
 * Full five-node Stage Indicator — Research Detail header only.
 * Only the CURRENT stage is marked in accent; every other stage, past or
 * future, renders identically in text-tertiary. Distinguishing "done"
 * stages from "not yet" stages would make this read as a progress bar,
 * which the brief explicitly prohibits — so this deliberately doesn't.
 */
export function StageIndicatorFull({ stage }: { stage: ResearchStage }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs">
      {RESEARCH_STAGES.map((s, i) => (
        <span key={s} className="flex items-center gap-2">
          <span
            className={clsx(
              "uppercase tracking-wide",
              s === stage ? "font-medium text-accent" : "text-text-tertiary"
            )}
          >
            {STAGE_LABEL[s]}
          </span>
          {i < RESEARCH_STAGES.length - 1 && (
            <span className="text-text-tertiary" aria-hidden="true">
              →
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

/** Compact form — Research Card metadata row. Current stage name only. */
export function StageIndicatorCompact({ stage }: { stage: ResearchStage }) {
  return (
    <span className="font-mono text-xs uppercase tracking-wide text-accent">
      Stage: {STAGE_LABEL[stage]}
    </span>
  );
}

const STATUS_LABEL: Record<ProjectStatus, string> = {
  ongoing: "Ongoing",
  paused: "Paused",
  complete: "Complete",
};

/** Project status-curve glyph — unchanged three-state system (Phase 4/6). */
export function StatusGlyph({ status }: { status: ProjectStatus }) {
  const colorClass =
    status === "ongoing"
      ? "text-accent"
      : status === "complete"
        ? "text-text-secondary"
        : "text-text-tertiary";

  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-text-tertiary">
      <svg width="14" height="10" viewBox="0 0 14 10" className={colorClass} aria-hidden="true">
        {status === "ongoing" && (
          <path d="M0.5 9 C 4 9, 5 1, 13.5 1" fill="none" stroke="currentColor" strokeWidth="1.3" />
        )}
        {status === "complete" && (
          <path d="M0.5 8 C 4 8, 5 2, 9 2 L 13.5 2" fill="none" stroke="currentColor" strokeWidth="1.3" />
        )}
        {status === "paused" && <line x1="0.5" y1="5" x2="13.5" y2="5" stroke="currentColor" strokeWidth="1.3" />}
      </svg>
      <span className={colorClass}>{STATUS_LABEL[status]}</span>
    </span>
  );
}
