import { useParams, Link } from "react-router-dom";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Layout";
import { SectionBlock } from "@/components/ui/SectionBlock";
import { EmptyState } from "@/components/ui/EmptyState";
import { ReferenceList, FigureBlock } from "@/components/ui/ContentPrimitives";
import { ChipRow } from "@/components/ui/Chip";
import { StageIndicatorFull } from "@/components/ui/StatusIndicators";
import { researchEntries } from "@/content/research";
import { researchCodes } from "@/lib/codes";
import { STAGE_LABEL } from "@/types/content";

export function ResearchDetail() {
  const { id } = useParams();
  const entry = researchEntries.find((e) => e.id === id);

  if (!entry) {
    return (
      <Container>
        <div className="py-24 text-center">
          <p className="mb-4 text-text-secondary">No research entry found at this reference.</p>
          <Link to="/research" className="font-mono text-xs uppercase tracking-wider text-accent">
            → Back to Research
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <PageHeader
        eyebrow={researchCodes[entry.id]}
        title={entry.title}
        description={entry.abstract}
        metadata={
          <div className="space-y-3">
            <StageIndicatorFull stage={entry.status} />
            <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-text-tertiary">
              <span>Field: {entry.category}</span>
              <span>Started: {entry.date}</span>
              <span>Updated: {entry.updated}</span>
            </div>
            <ChipRow items={entry.tags} />
          </div>
        }
      />

      <div className="max-w-[880px] pb-24">
        <SectionBlock eyebrow="Research Question">
          <div className="border border-border p-5">
            <p className="font-serif text-xl text-text-primary">{entry.question}</p>
          </div>
        </SectionBlock>

        <SectionBlock eyebrow="Context / Background">
          <p className="text-text-primary">{entry.background}</p>
        </SectionBlock>

        <SectionBlock eyebrow="Literature">
          {entry.references.length > 0 ? (
            <ul className="space-y-2">
              {entry.references.map((ref, i) => (
                <li key={i} className="text-sm text-text-secondary">
                  {ref.text}
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState message="No related literature has been added yet." />
          )}
        </SectionBlock>

        <SectionBlock eyebrow="Mathematical Framework">
          {entry.mathematicalFramework ? (
            <p className="text-text-primary">{entry.mathematicalFramework}</p>
          ) : (
            <EmptyState message="No mathematical framework documented yet." />
          )}
        </SectionBlock>

        <SectionBlock eyebrow="Method">
          <p className="text-text-primary">{entry.methods}</p>
        </SectionBlock>

        <SectionBlock eyebrow="Computation">
          {entry.computationalApproach ? (
            <p className="text-text-primary">{entry.computationalApproach}</p>
          ) : (
            <EmptyState message="No computational approach documented yet." />
          )}
        </SectionBlock>

        <SectionBlock eyebrow="Observations">
          {entry.observations ? (
            <>
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-text-tertiary">
                Interim
              </p>
              <p className="text-text-primary">{entry.observations}</p>
            </>
          ) : (
            <EmptyState message="No observations recorded yet." />
          )}
        </SectionBlock>

        <SectionBlock eyebrow="Results">
          {entry.results ? (
            <p className="text-text-primary">{entry.results}</p>
          ) : (
            <EmptyState message="Results will be added once available." />
          )}
        </SectionBlock>

        <SectionBlock eyebrow="Visualizations">
          {entry.figures.length > 0 ? (
            entry.figures.map((fig, i) => <FigureBlock key={i} figure={fig} index={i} />)
          ) : (
            <EmptyState message="No figures or visualizations have been added yet." />
          )}
        </SectionBlock>

        <SectionBlock eyebrow="Limitations">
          {entry.limitations ? (
            <p className="text-text-secondary">{entry.limitations}</p>
          ) : (
            <EmptyState message="Limitations will be documented as the investigation progresses." />
          )}
        </SectionBlock>

        <SectionBlock eyebrow="References">
          {entry.references.length > 0 ? (
            <ReferenceList references={entry.references} />
          ) : (
            <EmptyState message="No references have been added yet." />
          )}
        </SectionBlock>

        <SectionBlock eyebrow="Research Log" last>
          <ol className="space-y-6">
            {[...entry.researchLog]
              .sort((a, b) => b.date.localeCompare(a.date))
              .map((log, i) => (
                <li key={i} className="grid grid-cols-1 gap-2 border-b border-border pb-6 last:border-b-0 md:grid-cols-12">
                  <div className="font-mono text-xs text-text-tertiary md:col-span-3">
                    <p>{log.date}</p>
                    <p className="text-accent">{STAGE_LABEL[log.stage]}</p>
                  </div>
                  <div className="md:col-span-9">
                    <p className="mb-1 text-sm text-text-primary">{log.whatChanged}</p>
                    <p className="mb-1 text-sm text-text-secondary">{log.whatWasLearned}</p>
                    {log.nextStep && (
                      <p className="text-sm text-text-tertiary">Next: {log.nextStep}</p>
                    )}
                  </div>
                </li>
              ))}
          </ol>
        </SectionBlock>
      </div>
    </Container>
  );
}
