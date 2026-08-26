import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Layout";

export function About() {
  return (
    <Container>
      <PageHeader eyebrow="About" title="About" spacingClass="pb-8" />
      <div className="mx-auto max-w-[58ch] pb-24">
        <p className="mb-6 text-text-primary">
          This is a record of my ongoing exploration of physics, mathematics,
          and computation; from working through fundamental ideas to building models
          and numerical experiments.
          I enjoy taking a physical question apart until its mathematical structure becomes visible.
          From analytical derivations to numerical simulations, I use computation as a way to experiment with ideas and physics as a way to understand them.
           I use this space to document questions, approaches,observations and results.
        </p>
        <p className="font-mono text-xs text-text-tertiary">
          Undergrad at S.K.C.G College, Paralakhemundi, Odisha · B.Sc. Physics · 2025–2028
        </p>
      </div>
    </Container>
  );
}
