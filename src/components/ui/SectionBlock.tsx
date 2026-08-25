import type { ReactNode } from "react";

interface SectionBlockProps {
  eyebrow: string;
  children: ReactNode;
  last?: boolean;
}

export function SectionBlock({ eyebrow, children, last = false }: SectionBlockProps) {
  return (
    <section className={last ? "py-8" : "border-b border-border py-8"}>
      <h2 className="mb-4 font-mono text-xs uppercase tracking-wider text-text-tertiary">
        {eyebrow}
      </h2>
      <div className="max-w-[68ch] break-words text-text-primary">{children}</div>
    </section>
  );
}
