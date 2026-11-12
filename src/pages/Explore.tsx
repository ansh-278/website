import { Link } from "react-router-dom";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Layout";

const GROUPS = [
  {
    heading: "Work",
    items: [
      { label: "Research", to: "/research", text: "Independent investigations" },
      { label: "Projects", to: "/projects", text: "Simulations and code on GitHub" },
      { label: "Notes", to: "/notes", text: "Derivations and write-ups" },
    ],
  },
  {
    heading: "Fields",
    items: [
      { label: "Physics", to: "/physics", text: "Physical theory" },
      { label: "Mathematics", to: "/mathematics", text: "Methods and structures" },
      { label: "Computation", to: "/computation", text: "Numerical models" },
    ],
  },
  {
    heading: "About me",
    items: [
      { label: "About", to: "/about", text: "Who I am and what I study" },
      { label: "Resume / CV", to: "/resume", text: "Read online or download" },
      { label: "Contact", to: "/contact", text: "Email, GitHub, LinkedIn" },
    ],
  },
];

export function Explore() {
  return (
    <Container>
      <PageHeader eyebrow="Explore" title="Explore the Lab" spacingClass="pb-8" />
      <div className="space-y-10 pb-24">
        {GROUPS.map((g) => (
          <section key={g.heading}>
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-text-tertiary">
              {g.heading}
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {g.items.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group block border border-border bg-surface p-5 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent"
                >
                  <span className="block font-mono text-sm uppercase tracking-wider text-text-primary">
                    {item.label}
                  </span>
                  <span className="mt-2 block text-sm text-text-secondary">
                    {item.text}
                  </span>
                  <span className="mt-4 block font-mono text-xs text-accent transition-transform duration-150 group-hover:translate-x-0.5">
                    → Open
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
