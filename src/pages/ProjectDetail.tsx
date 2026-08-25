import { useParams, Link } from "react-router-dom";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Layout";
import { SectionBlock } from "@/components/ui/SectionBlock";
import { EmptyState } from "@/components/ui/EmptyState";
import { FigureBlock } from "@/components/ui/ContentPrimitives";
import { ChipRow } from "@/components/ui/Chip";
import { StatusGlyph } from "@/components/ui/StatusIndicators";
import { IconButton } from "@/components/ui/IconButton";
import { RepoIcon, ExternalLinkIcon } from "@/components/ui/Icons";
import { projectEntries } from "@/content/projects";
import { projectCodes } from "@/lib/codes";

export function ProjectDetail() {
  const { id } = useParams();
  const entry = projectEntries.find((e) => e.id === id);

  if (!entry) {
    return (
      <Container>
        <div className="py-24 text-center">
          <p className="mb-4 text-text-secondary">No project found at this reference.</p>
          <Link to="/projects" className="font-mono text-xs uppercase tracking-wider text-accent">
            → Back to Projects
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <PageHeader
        eyebrow={projectCodes[entry.id]}
        title={entry.title}
        description={entry.description}
        metadata={
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-text-tertiary">
              <StatusGlyph status={entry.status} />
              <span>Category: {entry.category}</span>
              <span>{entry.date}</span>
            </div>
            <ChipRow items={entry.technologies} />
          </div>
        }
      />

      <div className="max-w-[880px] pb-24">
        <SectionBlock eyebrow="Problem">
          <p className="text-text-primary">{entry.problem}</p>
        </SectionBlock>

        <SectionBlock eyebrow="Approach">
          <p className="text-text-primary">{entry.approach}</p>
        </SectionBlock>

        <SectionBlock eyebrow="Implementation">
          <p className="text-text-primary">{entry.implementation}</p>
        </SectionBlock>

        <SectionBlock eyebrow="Results">
          {entry.result ? (
            <>
              <p className="mb-4 text-text-primary">{entry.result}</p>
              {entry.figures.map((fig, i) => (
                <FigureBlock key={i} figure={fig} index={i} />
              ))}
            </>
          ) : (
            <EmptyState message="Results will be added once available." />
          )}
        </SectionBlock>

        <SectionBlock eyebrow="Lessons">
          <EmptyState
            label="Not yet documented"
            message="Lessons and limitations will be added once there's enough distance on the work to reflect on them."
          />
        </SectionBlock>

        <SectionBlock eyebrow="Repository">
          {entry.github ? (
            <IconButton href={entry.github} label={`${entry.title} repository`}>
              <RepoIcon />
            </IconButton>
          ) : (
            <EmptyState message="No repository is linked yet." />
          )}
        </SectionBlock>

        <SectionBlock eyebrow="Demo" last>
          {entry.demo ? (
            <IconButton href={entry.demo} label={`${entry.title} demo`}>
              <ExternalLinkIcon />
            </IconButton>
          ) : (
            <EmptyState message="No demo is available yet." />
          )}
        </SectionBlock>
      </div>
    </Container>
  );
}
