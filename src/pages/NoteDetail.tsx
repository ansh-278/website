import { useParams, Link } from "react-router-dom";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Layout";
import { ChipRow } from "@/components/ui/Chip";
import { readingTime } from "@/lib/readingTime";
import { noteEntries } from "@/content/notes";
import { researchEntries } from "@/content/research";
import { projectEntries } from "@/content/projects";

export function NoteDetail() {
  const { id } = useParams();
  const entry = noteEntries.find((e) => e.id === id);

  if (!entry) {
    return (
      <Container>
        <div className="py-24 text-center">
          <p className="mb-4 text-text-secondary">No note found at this reference.</p>
          <Link to="/notes" className="font-mono text-xs uppercase tracking-wider text-accent">
            → Back to Notes
          </Link>
        </div>
      </Container>
    );
  }

  const related = entry.relatedWork
    .map((relId) => {
      const r = researchEntries.find((e) => e.id === relId);
      if (r) return { title: r.title, href: `/research/${r.id}` };
      const p = projectEntries.find((e) => e.id === relId);
      if (p) return { title: p.title, href: `/projects/${p.id}` };
      const n = noteEntries.find((e) => e.id === relId);
      if (n) return { title: n.title, href: `/notes/${n.id}` };
      return null;
    })
    .filter((x): x is { title: string; href: string } => x !== null);

  return (
    <Container>
      <PageHeader
        eyebrow="Note"
        title={entry.title}
        description={entry.summary}
        metadata={
          <div className="space-y-3">
            <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-text-tertiary">
              <span>{entry.date}</span>
              <span>{readingTime(entry.content)}</span>
              <span className="text-accent">{entry.category}</span>
            </div>
            <ChipRow items={entry.tags} />
          </div>
        }
      />

      <div className="max-w-[68ch] break-words pb-16">
        <p className="whitespace-pre-line text-text-primary">{entry.content}</p>
      </div>

      {related.length > 0 && (
        <div className="max-w-[68ch] border-t border-border pb-24 pt-8">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-text-tertiary">
            Related
          </p>
          <ul className="space-y-2">
            {related.map((r) => (
              <li key={r.href}>
                <Link to={r.href} className="text-sm text-text-secondary hover:text-accent">
                  → {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
}
