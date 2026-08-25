import type { ReactNode } from "react";
import { useReveal } from "@/lib/useReveal";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in ms — used for lists of cards/rows entering together. */
  delay?: number;
  className?: string;
  as?: "div" | "li";
}

export function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: `opacity 300ms var(--ease-lab), transform 300ms var(--ease-lab)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
