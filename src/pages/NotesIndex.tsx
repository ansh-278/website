import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Layout";
import { Reveal } from "@/components/ui/Reveal";
import { NotebookEntryRow } from "@/components/cards/NotebookEntryRow";
import { noteEntries } from "@/content/notes";

function monthLabel(iso: string) {
  const date = new Date(iso);
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" }).toUpperCase();
}

export function NotesIndex() {
  const sorted = [...noteEntries].sort((a, b) => b.date.localeCompare(a.date));
  const groups = new Map<string, typeof sorted>();
  for (const note of sorted) {
    const key = monthLabel(note.date);
    groups.set(key, [...(groups.get(key) ?? []), note]);
  }

  return (
    <Container>
      <PageHeader
        eyebrow="Notes"
        title="Notes"
        description="Shorter, working-out-loud write-ups — derivations, problem-solving, and concept explorations."
        spacingClass="pb-8"
      />

      {sorted.length === 0 ? (
        <p className="pb-24 text-text-tertiary">[Placeholder — no notes published yet.]</p>
      ) : (
        <div className="mx-auto max-w-[76ch] space-y-12 pb-24">
          {[...groups.entries()].map(([month, notes]) => (
            <div key={month}>
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-text-tertiary">
                {month}
              </p>
              <div>
                {notes.map((entry, i) => (
                  <Reveal key={entry.id} delay={i * 30}>
                    <NotebookEntryRow entry={entry} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}
