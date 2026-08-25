import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Layout";
import { ComputationMark } from "@/components/ui/HeaderVisuals";
import { Reveal } from "@/components/ui/Reveal";
import { FieldItemCard } from "@/components/cards/FieldItemCard";
import { getFieldItems, type FieldItem } from "@/lib/aggregate";

const CLUSTERS: { key: FieldItem["kind"]; label: string }[] = [
  { key: "project", label: "Projects" },
  { key: "research", label: "Research" },
  { key: "note", label: "Notes" },
];

export function Computation() {
  const items = getFieldItems("Computation");

  return (
    <Container>
      <PageHeader
        eyebrow="Field"
        title="Computation"
        description="Numerical exploration, simulation, visualization, and experimentation — the tools used to test physical and mathematical models."
        visual={<ComputationMark />}
      />
      <div className="space-y-16 pb-24">
        {CLUSTERS.map((cluster) => {
          const clusterItems = items.filter((i) => i.kind === cluster.key);
          if (clusterItems.length === 0) return null;
          return (
            <div key={cluster.key}>
              <p className="mb-4 font-mono text-xs uppercase tracking-wider text-text-tertiary">
                {cluster.label}
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {clusterItems.map((item, i) => (
                  <Reveal key={`${item.kind}-${item.entry.id}`} delay={i * 50}>
                    <FieldItemCard item={item} />
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
        {items.length === 0 && (
          <p className="text-text-tertiary">
            [Placeholder — no Computation-tagged entries yet. Research, Projects, and Notes
            tagged Computation will appear here automatically, clustered by type.]
          </p>
        )}
      </div>
    </Container>
  );
}
