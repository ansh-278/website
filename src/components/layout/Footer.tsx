import { Link } from "react-router-dom";

const QUICK_LINKS = [
  { to: "/research", label: "Research" },
  { to: "/notes", label: "Notes" },
  { to: "/resume", label: "Resume / CV" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border-strong bg-bg-primary">
      <div className="mx-auto max-w-[1120px] px-5 py-12 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <Link to="/" className="font-mono text-xs text-text-tertiary">
            STAR RESEARCH LAB
          </Link>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {QUICK_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="font-mono text-xs uppercase tracking-wider text-text-secondary underline decoration-transparent underline-offset-4 hover:text-text-primary hover:decoration-current"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 font-mono text-xs text-text-tertiary">
          Set in Source Serif&nbsp;4 and IBM&nbsp;Plex&nbsp;Mono. Reference format SRL·YYYY·FIELD·NNN.
        </p>
      </div>
    </footer>
  );
}
