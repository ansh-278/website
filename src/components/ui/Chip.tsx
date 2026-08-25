export function Chip({ children }: { children: string }) {
  return (
    <span className="rounded-chip bg-accent-subtle px-2 py-1 font-mono text-xs text-text-secondary">
      {children}
    </span>
  );
}

export function ChipRow({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Chip key={item}>{item}</Chip>
      ))}
    </div>
  );
}
