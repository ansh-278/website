export function EmptyState({ label = "Pending", message }: { label?: string; message: string }) {
  return (
    <div className="border border-border px-4 py-4">
      <p className="mb-1 font-mono text-xs uppercase tracking-wider text-text-tertiary">
        {label}
      </p>
      <p className="text-sm text-text-tertiary">{message}</p>
    </div>
  );
}
