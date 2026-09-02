import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { AxisDivider } from "@/components/ui/HeaderVisuals";
import { ThreeDisciplinesFlow } from "@/components/ui/ThreeDisciplinesFlow";
import { StageIndicatorCompact } from "@/components/ui/StatusIndicators";
import { NotebookEntryRow } from "@/components/cards/NotebookEntryRow";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Container, Section } from "@/components/layout/Layout";
import { researchEntries } from "@/content/research";
import { projectEntries } from "@/content/projects";
import { noteEntries } from "@/content/notes";
import { researchCodes, projectCodes } from "@/lib/codes";
import { useReveal } from "@/lib/useReveal";

const CURRENTLY = [
  { field: "Physics", href: "/physics" },
  { field: "Mathematics", href: "/mathematics" },
  { field: "Computation", href: "/computation" },
  { field: "Research", href: "/research" },
] as const;

function Hero() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden border-b border-border">
      <svg
        viewBox="0 0 400 300"
        className="pointer-events-none absolute right-0 top-0 h-full w-2/3 text-accent opacity-[0.05]"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M0 260 C 100 260, 140 40, 400 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          pathLength={1}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: visible ? 0 : 1,
            transition: "stroke-dashoffset 1.3s var(--ease-lab)",
          }}
        />
        <path
          d="M0 180 C 150 220, 220 60, 400 140"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          pathLength={1}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: visible ? 0 : 1,
            transition: "stroke-dashoffset 1.5s var(--ease-lab) 0.1s",
          }}
        />
      </svg>

      <Container wide className="relative">
        <div ref={ref} className="max-w-[52ch] md:max-w-none md:w-7/12">
          <p
            className="mb-4 font-mono text-xs uppercase tracking-wider text-text-tertiary"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(8px)",
              transition: "opacity 300ms var(--ease-lab), transform 300ms var(--ease-lab)",
            }}
          >
            STAR // RESEARCH LAB
          </p>
          <h1
            className="mb-4 font-serif text-4xl font-bold leading-tight text-text-primary md:text-[48px]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(8px)",
              transition: "opacity 300ms var(--ease-lab) 70ms, transform 300ms var(--ease-lab) 70ms",
            }}
          >
            SHRESTHANSH STAR
          </h1>
          <p
            className="mb-6 font-mono text-sm text-accent"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(8px)",
              transition: "opacity 300ms var(--ease-lab) 140ms, transform 300ms var(--ease-lab) 140ms",
            }}
          >
            Physics · Mathematics · Computation
          </p>
          <p
            className="mb-8 max-w-[50ch] text-text-secondary"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(8px)",
              transition: "opacity 300ms var(--ease-lab) 210ms, transform 300ms var(--ease-lab) 210ms",
            }}
          >
            An undergraduate Physics student exploring physical theory, mathematics, computation,
            and scientific research.
          </p>
          <div
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(8px)",
              transition: "opacity 300ms var(--ease-lab) 280ms, transform 300ms var(--ease-lab) 280ms",
            }}
          >
            <Button to="/research">Explore the Lab</Button>
            <Button variant="text" href="/resume">
              Download CV
            </Button>
          </div>
          <p className="mt-8 font-mono text-xs text-text-tertiary">
            Last updated: {researchEntries[0]?.updated ?? "—"}
          </p>
        </div>
      </Container>
    </section>
  );
}

function Currently() {
  return (
    <Section tone="secondary">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CURRENTLY.map((item, i) => (
          <Reveal key={item.field} delay={i * 50}>
            <a
              href={item.href}
              className="group block h-full border border-border bg-surface p-4 transition-all duration-200 hover:border-border-strong hover:shadow-[0_0_24px_-4px_rgba(74,144,194,0.22)]"
            >
              <div className="mb-3 h-0.5 w-full bg-border transition-colors duration-150 group-hover:bg-accent" />
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-accent">
                {item.field}
              </p>
              <p className="mb-4 text-sm text-text-secondary">
                [Placeholder — current focus in {item.field}]
              </p>
              <p className="font-mono text-xs text-text-tertiary transition-transform duration-150 group-hover:translate-x-0.5">
                → View field
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ThreeDisciplines() {
  return (
    <Section>
      <ThreeDisciplinesFlow />
    </Section>
  );
}

function FeaturedResearch() {
  const entry = researchEntries[0];
  if (!entry) return null;
  const codes = researchCodes;

  return (
    <Section tone="secondary">
      <Reveal>
        <p className="mb-6 font-mono text-xs uppercase tracking-wider text-text-tertiary">
          Featured Research
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="mb-2 font-mono text-xs text-accent">{codes[entry.id]}</p>
            <h2 className="mb-4 font-serif text-3xl font-semibold text-text-primary">
              {entry.title}
            </h2>
            <p className="mb-6 text-text-secondary">{entry.abstract}</p>
            <Button variant="text" to={`/research/${entry.id}`}>
              → Read the full entry
            </Button>
          </div>
          <div className="border border-border bg-surface p-4 md:col-span-5">
            <dl className="space-y-3 font-mono text-xs">
              <div className="flex justify-between gap-4">
                <dt className="text-text-tertiary">Status</dt>
                <dd>
                  <StageIndicatorCompact stage={entry.status} />
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-text-tertiary">Field</dt>
                <dd className="text-text-secondary">{entry.category}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-text-tertiary">Started</dt>
                <dd className="text-text-secondary">{entry.date}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-text-tertiary">Updated</dt>
                <dd className="text-text-secondary">{entry.updated}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function SelectedProjects() {
  const codes = projectCodes;
  return (
    <Section>
      <p className="mb-8 font-mono text-xs uppercase tracking-wider text-text-tertiary">
        Selected Projects
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projectEntries.map((entry, i) => (
          <Reveal key={entry.id} delay={i * 50}>
            <ProjectCard entry={entry} code={codes[entry.id]} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function RecentNotes() {
  return (
    <Section tone="secondary">
      <p className="mb-4 font-mono text-xs uppercase tracking-wider text-text-tertiary">
        Recent Notes
      </p>
      <div>
        {noteEntries.slice(0, 3).map((entry, i) => (
          <Reveal key={entry.id} delay={i * 40}>
            <NotebookEntryRow entry={entry} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function AboutTeaser() {
  return (
    <Section>
      <Reveal>
        <div className="mx-auto max-w-[60ch] text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-text-tertiary">
            About
          </p>
          <p className="mb-5 text-text-primary">
            [Placeholder — 2–3 sentence present-tense introduction: academic context and current
            interests.]
          </p>
          <p className="mb-5 font-mono text-xs text-text-tertiary">
            S.K.C.G College · B.Sc. Physics · 2025–2028
          </p>
          <Button variant="text" to="/about">
            → Read more
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}

function CvContact() {
  return (
    <section className="bg-bg-secondary/90 py-24">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[60ch] text-center">
            <h2 className="mb-8 font-serif text-3xl font-semibold text-text-primary">
              A working record — see the evidence, or get in touch directly.
            </h2>
            <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button to="/resume">Download CV</Button>
              <Button variant="text" to="/contact">
                Contact
              </Button>
            </div>
            <p className="font-mono text-sm text-accent">[Placeholder — email address]</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Home() {
  return (
    <>
      <Hero />
      <Currently />
      <div className="flex justify-center py-2">
        <AxisDivider />
      </div>
      <ThreeDisciplines />
      <div className="flex justify-center py-2">
        <AxisDivider />
      </div>
      <FeaturedResearch />
      <div className="flex justify-center py-2">
        <AxisDivider />
      </div>
      <SelectedProjects />
      <div className="flex justify-center py-2">
        <AxisDivider />
      </div>
      <RecentNotes />
      <AboutTeaser />
      <CvContact />
    </>
  );
}          strokeWidth="1.4"
          pathLength={1}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: visible ? 0 : 1,
            transition: "stroke-dashoffset 1.3s var(--ease-lab)",
          }}
        />
        <path
          d="M0 180 C 150 220, 220 60, 400 140"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          pathLength={1}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: visible ? 0 : 1,
            transition: "stroke-dashoffset 1.5s var(--ease-lab) 0.1s",
          }}
        />
      </svg>

      <Container wide className="relative">
        <div ref={ref} className="max-w-[52ch] md:max-w-none md:w-7/12">
          <p
            className="mb-4 font-mono text-xs uppercase tracking-wider text-text-tertiary"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(8px)",
              transition: "opacity 300ms var(--ease-lab), transform 300ms var(--ease-lab)",
            }}
          >
            STAR RESEARCH LAB
          </p>
          <h1
            className="mb-4  whitespace-nowrap font-serif text-[clamp(1.5rem,6.5vw,48px)] font-bold leading-tight text-text-primary"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(8px)",
              transition: "opacity 300ms var(--ease-lab) 70ms, transform 300ms var(--ease-lab) 70ms",
            }}
          >
            SHRESTHANSH NAYAK
          </h1>
          <p
            className="mb-6 font-mono text-sm text-accent"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(8px)",
              transition: "opacity 300ms var(--ease-lab) 140ms, transform 300ms var(--ease-lab) 140ms",
            }}
          >
            Physics · Mathematics · Computation
          </p>
          <p
            className="mb-8 max-w-[50ch] text-text-secondary"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(8px)",
              transition: "opacity 300ms var(--ease-lab) 210ms, transform 300ms var(--ease-lab) 210ms",
            }}
          >
            An undergraduate Physics student exploring physical theory, mathematics, computation,
            and scientific research.
          </p>
          <div
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(8px)",
              transition: "opacity 300ms var(--ease-lab) 280ms, transform 300ms var(--ease-lab) 280ms",
            }}
          >
            <Button to="/research">Explore the Lab</Button>
            <Button variant="text" href="/resume">
              Download CV
            </Button>
          </div>
          <p className="mt-8 font-mono text-xs text-text-tertiary">
            Last updated: {researchEntries[0]?.updated ?? "—"}
          </p>
        </div>
      </Container>
    </section>
  );
}

function Currently() {
  return (
    <Section tone="secondary">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CURRENTLY.map((item, i) => (
          <Reveal key={item.field} delay={i * 50}>
            <a
              href={item.href}
              className="group block h-full border border-border bg-surface p-4"
            >
              <div className="mb-3 h-0.5 w-full bg-border transition-colors duration-150 group-hover:bg-accent" />
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-accent">
                {item.field}
              </p>
              <p className="mb-4 text-sm text-text-secondary">
                [Placeholder — current focus in {item.field}]
              </p>
              <p className="font-mono text-xs text-text-tertiary transition-transform duration-150 group-hover:translate-x-0.5">
                → View field
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ThreeDisciplines() {
  return (
    <Section>
      <ThreeDisciplinesFlow />
    </Section>
  );
}

function FeaturedResearch() {
  const entry = researchEntries[0];
  if (!entry) return null;
  const codes = researchCodes;

  return (
    <Section tone="secondary">
      <Reveal>
        <p className="mb-6 font-mono text-xs uppercase tracking-wider text-text-tertiary">
          Featured Research
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="mb-2 font-mono text-xs text-accent">{codes[entry.id]}</p>
            <h2 className="mb-4 font-serif text-3xl font-semibold text-text-primary">
              {entry.title}
            </h2>
            <p className="mb-6 text-text-secondary">{entry.abstract}</p>
            <Button variant="text" to={`/research/${entry.id}`}>
              → Read the full entry
            </Button>
          </div>
          <div className="border border-border bg-surface p-4 md:col-span-5">
            <dl className="space-y-3 font-mono text-xs">
              <div className="flex justify-between gap-4">
                <dt className="text-text-tertiary">Status</dt>
                <dd>
                  <StageIndicatorCompact stage={entry.status} />
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-text-tertiary">Field</dt>
                <dd className="text-text-secondary">{entry.category}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-text-tertiary">Started</dt>
                <dd className="text-text-secondary">{entry.date}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-text-tertiary">Updated</dt>
                <dd className="text-text-secondary">{entry.updated}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function SelectedProjects() {
  const codes = projectCodes;
  return (
    <Section>
      <p className="mb-8 font-mono text-xs uppercase tracking-wider text-text-tertiary">
        Selected Projects
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projectEntries.map((entry, i) => (
          <Reveal key={entry.id} delay={i * 50}>
            <ProjectCard entry={entry} code={codes[entry.id]} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function RecentNotes() {
  return (
    <Section tone="secondary">
      <p className="mb-4 font-mono text-xs uppercase tracking-wider text-text-tertiary">
        Recent Notes
      </p>
      <div>
        {noteEntries.slice(0, 3).map((entry, i) => (
          <Reveal key={entry.id} delay={i * 40}>
            <NotebookEntryRow entry={entry} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function AboutTeaser() {
  return (
    <Section>
      <Reveal>
        <div className="mx-auto max-w-[60ch] text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-text-tertiary">
            About
          </p>
          <p className="mb-5 text-text-primary">
            [Placeholder — 2–3 sentence present-tense introduction: academic context and current
            interests.]
          </p>
          <p className="mb-5 font-mono text-xs text-text-tertiary">
            S.K.C.G College · B.Sc. Physics · 2025–2028
          </p>
          <Button variant="text" to="/about">
            → Read more
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}

function CvContact() {
  return (
    <section className="bg-bg-secondary py-24">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[60ch] text-center">
            <h2 className="mb-8 font-serif text-3xl font-semibold text-text-primary">
              A working record — see the evidence, or get in touch directly.
            </h2>
            <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button to="/resume">Download CV</Button>
              <Button variant="text" to="/contact">
                Contact
              </Button>
            </div>
            <p className="font-mono text-sm text-accent">[Placeholder — email address]</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Home() {
  return (
    <>
      <Hero />
      <Currently />
      <div className="flex justify-center bg-bg-primary py-2">
        <AxisDivider />
      </div>
      <ThreeDisciplines />
      <div className="flex justify-center bg-bg-secondary py-2">
        <AxisDivider />
      </div>
      <FeaturedResearch />
      <div className="flex justify-center bg-bg-primary py-2">
        <AxisDivider />
      </div>
      <SelectedProjects />
      <div className="flex justify-center bg-bg-secondary py-2">
        <AxisDivider />
      </div>
      <RecentNotes />
      <AboutTeaser />
      <CvContact />
    </>
  );
}
