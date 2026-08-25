import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Layout";
import { PhysicsMark } from "@/components/ui/HeaderVisuals";
import { Reveal } from "@/components/ui/Reveal";
import { FieldItemCard } from "@/components/cards/FieldItemCard";
import { getFieldItems } from "@/lib/aggregate";

export function Physics() {
  const items = getFieldItems("Physics");
  // Exploratory / visual: entries with a figure attached lead — visual
  // content is sequenced first (Phase 5).
  const withFigures = items.filter((i) => i.kind !== "note" && i.entry.figures.length > 0);
  const rest = items.filter((i) => !withFigures.includes(i));
  const ordered = [...withFigures, ...rest];

  return (
    <Container>
      <PageHeader
        eyebrow="Field"
        title="Physics"
        description="Physical questions and models — the starting point for the work documented across this site."
        visual={<PhysicsMark />}
      />
      {ordered.length === 0 ? (
        <p className="pb-24 text-text-tertiary">
          [Placeholder — no Physics-tagged entries yet. Research, Projects, and Notes tagged
          Physics will appear here automatically.]
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 pb-24 md:grid-cols-2">
          {ordered.map((item, i) => (
            <Reveal key={`${item.kind}-${item.entry.id}`} delay={(i % 6) * 50}>
              <FieldItemCard item={item} />
            </Reveal>
          ))}
        </div>
      )}
    </Container>
  );
}
