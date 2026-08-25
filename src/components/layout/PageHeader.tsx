import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  metadata?: ReactNode;
  visual?: ReactNode;
  spacingClass?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  metadata,
  visual,
  spacingClass = "pb-12",
}: PageHeaderProps) {
  return (
    <div className={`grid grid-cols-1 gap-8 pt-16 md:grid-cols-12 ${spacingClass}`}>
      <div className="md:col-span-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-wider text-text-tertiary">
          {eyebrow}
        </p>
        <h1 className="mb-6 font-serif text-[28px] font-bold leading-tight text-text-primary md:text-[40px]">
          {title}
        </h1>
        {description && (
          <p className="max-w-[60ch] text-text-secondary">{description}</p>
        )}
        {metadata && <div className="mt-4">{metadata}</div>}
      </div>
      {visual && (
        <div className="hidden items-center justify-center md:col-span-4 md:flex">{visual}</div>
      )}
    </div>
  );
}
