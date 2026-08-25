import type { Figure, Reference } from "@/types/content";

/** Figure Block — image/plot/diagram with a numbered mono caption. */
export function FigureBlock({ figure, index }: { figure: Figure; index: number }) {
  return (
    <figure className="my-6">
      {figure.image && (
        <img
          src={figure.image}
          alt={figure.caption}
          loading="lazy"
          className="w-full border border-border"
        />
      )}
      <figcaption className="mt-2 font-mono text-xs text-text-tertiary">
        Fig. {index + 1} — {figure.caption}
      </figcaption>
    </figure>
  );
}

/**
 * Equation Block — set in the STIX Two Math font role (Phase 2).
 * Renders plain/unicode mathematical text today; when real LaTeX content
 * is supplied, a renderer (e.g. KaTeX) can be dropped in here without
 * changing anywhere this component is used — deliberately not added yet
 * since there's no real equation content to justify the dependency.
 */
export function EquationBlock({ content, number }: { content: string; number?: string }) {
  return (
    <div className="my-6 flex items-center justify-center gap-4">
      <p className="font-math text-lg text-text-primary">{content}</p>
      {number && <span className="font-mono text-xs text-text-tertiary">({number})</span>}
    </div>
  );
}

/** Code Block — deliberately monochrome, never syntax-highlighted, to preserve the single-accent rule. */
export function CodeBlock({ code, language }: { code: string; language?: string }) {
  return (
    <pre className="my-6 overflow-x-auto border-l-2 border-accent bg-surface p-4 font-mono text-sm text-text-primary">
      {language && <span className="mb-2 block text-xs text-text-tertiary">{language}</span>}
      <code>{code}</code>
    </pre>
  );
}

/** Reference List — formal numbered citations. Never fabricated (Phase 6). */
export function ReferenceList({ references }: { references: Reference[] }) {
  return (
    <ol className="space-y-2">
      {references.map((ref, i) => (
        <li key={i} className="flex gap-3 text-sm text-text-secondary">
          <span className="font-mono text-text-tertiary">[{i + 1}]</span>
          {ref.url ? (
            <a href={ref.url} target="_blank" rel="noreferrer noopener" className="hover:text-accent">
              {ref.text}
            </a>
          ) : (
            <span>{ref.text}</span>
          )}
        </li>
      ))}
    </ol>
  );
}
