import { Link } from "react-router-dom";
import type { NoteEntry } from "@/types/content";
import { readingTime } from "@/lib/readingTime";

export function NotebookEntryRow({ entry }: { entry: NoteEntry }) {
  return (
    <Link
      to={`/notes/${entry.id}`}
      className="group grid grid-cols-1 gap-2 border-b border-border py-6 last:border-b-0 md:grid-cols-12 md:gap-6"
    >
      <div className="flex gap-4 font-mono text-xs text-text-tertiary md:col-span-2 md:flex-col md:gap-1">
        <span>{entry.date}</span>
        <span>{readingTime(entry.content)}</span>
      </div>
      <div className="md:col-span-10">
        <p className="mb-1 flex items-center gap-3">
          <span className="font-serif text-lg font-semibold text-text-primary underline decoration-transparent underline-offset-4 transition-colors duration-150 group-hover:decoration-current">
            {entry.title}
          </span>
          <span className="font-mono text-xs text-accent">{entry.category}</span>
        </p>
        <p className="text-sm text-text-secondary">{entry.summary}</p>
      </div>
    </Link>
  );
}
