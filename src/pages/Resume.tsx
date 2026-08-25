import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Layout";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";

// No CV file has been uploaded yet — the download action shows an honest
// pending state rather than linking to a file that doesn't exist.
const CV_FILE_URL: string | null = null;

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-border py-3 sm:flex-row sm:justify-between">
      <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary">
        {label}
      </span>
      <span className="text-sm text-text-secondary sm:text-right">{value}</span>
    </div>
  );
}

export function Resume() {
  return (
    <Container>
      <PageHeader eyebrow="Record" title="Resume / CV" spacingClass="pb-6" />

      <div className="mb-10">
        {CV_FILE_URL ? (
          <Button href={CV_FILE_URL}>Download CV</Button>
        ) : (
          <EmptyState label="Not yet uploaded" message="A downloadable CV file will be added here." />
        )}
      </div>

      <div className="max-w-[68ch] space-y-10 pb-24">
        <div>
          <h2 className="mb-2 font-mono text-xs uppercase tracking-wider text-text-tertiary">
            Education
          </h2>
          <Row label="Institution" value="S.K.C.G College, Paralakhemundi, Odisha" />
          <Row label="Program" value="B.Sc. Physics" />
          <Row label="Duration" value="2025–2028" />
        </div>

        <div>
          <h2 className="mb-2 font-mono text-xs uppercase tracking-wider text-text-tertiary">
            Coursework
          </h2>
          <EmptyState message="[Placeholder — list current or completed coursework once supplied.]" />
        </div>

        <div>
          <h2 className="mb-2 font-mono text-xs uppercase tracking-wider text-text-tertiary">
            Skills
          </h2>
          <EmptyState message="[Placeholder — list skills once supplied. Nothing here is inferred or invented.]" />
        </div>
      </div>
    </Container>
  );
}
