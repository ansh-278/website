import { Link } from "react-router-dom";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Layout";
import { Reveal } from "@/components/ui/Reveal";
import { ResearchCard } from "@/components/cards/ResearchCard";
import { StageIndicatorCompact } from "@/components/ui/StatusIndicators";
import { researchEntries } from "@/content/research";
import { researchCodes } from "@/lib/codes";
import { RESEARCH_STAGES, STAGE_LABEL, type ResearchStage } from "@/types/content";

// Most-advanced stage first — surfaces the most evidence-rich work first,
// per the archival/evidence-driven character (Phase 5/6).
const STAGE_ORDER: ResearchStage[] = [...RESEARCH_STAGES].reverse();

export function ResearchIndex() {
  const sortedByUpdated = [...researchEntries].sort((a, b) => b.updated.localeCompare(a.updated));
  const featured = sortedByUpdated[0];
  const rest = researchEntries.filter((e) => e.id !== featured?.id);

  return (
    <Container>
      <PageHeader
        eyebrow="Archive"
        title="Research"
        description="Current and past independent investigations — what's being asked, what stage it's at, and what evidence exists so far."
        metadata={
          <p className="font-mono text-xs text-text-tertiary">
            {researchEntries.length} {researchEntries.length === 1 ? "entry" : "entries"} on record
          </p>
        }
      />

      {featured && (
        <Reveal className="mb-16 border border-border bg-surface p-6">
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-text-tertiary">
            Most Recent
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="mb-2 font-mono text-xs text-accent">{researchCodes[featured.id]}</p>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-text-primary">
                <Link to={`/research/${featured.id}`} className="hover:text-accent">
                  {featured.title}
                </Link>
              </h2>
              <p className="text-text-secondary">{featured.abstract}</p>
            </div>
            <div className="space-y-3 font-mono text-xs md:col-span-5">
              <div className="flex justify-between">
                <span className="text-text-tertiary">Status</span>
                <StageIndicatorCompact stage={featured.status} />
              </div>
              <div className="flex justify-between">
                <span className="text-text-tertiary">Field</span>
                <span className="text-text-secondary">{featured.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-tertiary">Updated</span>
                <span className="text-text-secondary">{featured.updated}</span>
              </div>
            </div>
          </div>
        </Reveal>
      )}

      <div className="space-y-14 pb-24">
        {STAGE_ORDER.map((stage) => {
          const group = rest
            .filter((e) => e.status === stage)
            .sort((a, b) => b.updated.localeCompare(a.updated));
          if (group.length === 0) return null;
          return (
            <div key={stage}>
              <p className="mb-4 font-mono text-xs uppercase tracking-wider text-text-tertiary">
                {STAGE_LABEL[stage]}
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {group.map((entry, i) => (
                  <Reveal key={entry.id} delay={i * 40}>
                    <ResearchCard entry={entry} code={researchCodes[entry.id]} />
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
