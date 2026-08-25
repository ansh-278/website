import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Layout";
import { MathematicsMark } from "@/components/ui/HeaderVisuals";
import { Reveal } from "@/components/ui/Reveal";
import { FieldItemCard } from "@/components/cards/FieldItemCard";
import { getFieldItems } from "@/lib/aggregate";

function itemDate(item: ReturnType<typeof getFieldItems>[number]) {
  return item.entry.date;
}

export function Mathematics() {
  const items = getFieldItems("Mathematics").sort((a, b) => itemDate(a).localeCompare(itemDate(b)));

  return (
    <Container>
      <PageHeader
        eyebrow="Field"
        title="Mathematics"
        description="Equations, analytical methods, and mathematical structure — read here in sequence, like consecutive notebook pages."
        visual={<MathematicsMark />}
      />
      {items.length === 0 ? (
        <p className="pb-24 text-text-tertiary">
          [Placeholder — no Mathematics-tagged entries yet. Research, Projects, and Notes tagged
          Mathematics will appear here automatically, in order.]
        </p>
      ) : (
        <div className="mx-auto max-w-[68ch] pb-24">
          {items.map((item, i) => (
            <Reveal key={`${item.kind}-${item.entry.id}`} delay={i * 30} className="mb-4">
              <FieldItemCard item={item} />
            </Reveal>
          ))}
        </div>
      )}
    </Container>
  );
}
