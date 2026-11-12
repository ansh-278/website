import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Layout";
import { Button } from "@/components/ui/Button";

const EMAIL = "shresthansh278@gmail.com";

const rows: { label: string; value: string; href?: string }[] = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  {
    label: "GitHub",
    value: "github.com/ansh-278",
    href: "https://github.com/ansh-278",
  },
    {
    label: "LinkedIn",
    value: "linkedin.com/in/shresthansh-nayak-",
    href: "https://www.linkedin.com/in/shresthansh-nayak-",
  },
  { label: "Based in", value: "Odisha, India" },
];

export function Contact() {
  return (
    <Container>
      <PageHeader eyebrow="Contact" title="Contact" spacingClass="pb-8" />
      <div className="max-w-[58ch] pb-24">
        <p className="mb-8 text-text-primary">
          For questions about my work, collaboration on physics or computation
          projects, or just to discuss an idea, email is the best way to reach me.
        </p>

        <dl className="mb-10 border-t border-border">
          {rows.map((r) => (
            <div
              key={r.label}
              className="grid grid-cols-[6rem_1fr] gap-4 border-b border-border py-4"
            >
              <dt className="font-mono text-xs uppercase tracking-wider text-text-tertiary">
                {r.label}
              </dt>
              <dd className="break-words text-text-primary">
                {r.href ? (
                  <a
                    href={r.href}
                    target={r.href.startsWith("http") ? "_blank" : undefined}
                    rel={r.href.startsWith("http") ? "noreferrer" : undefined}
                    className="underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current"
                  >
                    {r.value}
                  </a>
                ) : (
                  r.value
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-wrap gap-3">
          <Button href={`mailto:${EMAIL}`}>Send an email</Button>
          <Button to="/resume" variant="secondary">
            View CV
          </Button>
        </div>
      </div>
    </Container>
  );
}
