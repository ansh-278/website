import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Layout";

export function About() {
  return (
    <Container>
      <PageHeader eyebrow="About" title="About" spacingClass="pb-8" />
      <div className="mx-auto max-w-[58ch] pb-24">
        <p className="mb-6 text-text-primary">
          [Placeholder — 2–3 sentence present-tense introduction: present academic context and
          current interests within physics, mathematics, and computation. Written in the first
          person, present tense only — no future plans, target degrees, or career ambitions,
          per the site's privacy constraint.]
        </p>
        <p className="font-mono text-xs text-text-tertiary">
          S.K.C.G College, Paralakhemundi, Odisha · B.Sc. Physics · 2025–2028
        </p>
      </div>
    </Container>
  );
}
