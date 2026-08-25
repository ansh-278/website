import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { clsx } from "clsx";
import { MenuIcon, CloseIcon } from "@/components/ui/Icons";

const NAV_LINKS = [
  { to: "/research", label: "Research" },
  { to: "/projects", label: "Projects" },
  { to: "/notes", label: "Notes" },
];

const FIELD_LINKS = [
  { to: "/physics", label: "Physics" },
  { to: "/mathematics", label: "Mathematics" },
  { to: "/computation", label: "Computation" },
];

const END_LINKS = [
  { to: "/resume", label: "Resume / CV" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  clsx(
    "border-b-2 pb-0.5 font-mono text-xs uppercase tracking-wider transition-colors duration-150",
    isActive
      ? "border-accent text-text-primary"
      : "border-transparent text-text-secondary hover:text-text-primary"
  );

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [fieldsOpen, setFieldsOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-border-strong bg-surface-raised">
      {/* Scroll-depth readout — a quiet nod to the lab-instrument visual
          language, tracking progress through the current page. */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-[-1px] h-[2px] overflow-hidden">
        <div
          className="h-full origin-left bg-accent transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
      <nav
        aria-label="Primary"
        className={clsx(
          "mx-auto flex max-w-[1120px] items-center justify-between px-5 transition-[padding] duration-200 md:px-8",
          scrolled ? "py-2" : "py-4"
        )}
      >
        <Link to="/" className="font-mono text-sm tracking-wider text-text-primary">
          STAR RESEARCH LAB
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            </li>
          ))}
          <li
            className="relative"
            onMouseEnter={() => setFieldsOpen(true)}
            onMouseLeave={() => setFieldsOpen(false)}
          >
            <button
              className="border-b-2 border-transparent pb-0.5 font-mono text-xs uppercase tracking-wider text-text-secondary transition-colors duration-150 hover:text-text-primary"
              aria-expanded={fieldsOpen}
              aria-haspopup="true"
              onClick={() => setFieldsOpen((v) => !v)}
            >
              Fields
            </button>
            {fieldsOpen && (
              <ul className="animate-menu-in absolute right-0 top-full w-40 border border-border bg-surface-raised py-1">
                {FIELD_LINKS.map((l) => (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      className="block px-3 py-2 font-mono text-xs uppercase tracking-wider text-text-secondary hover:bg-accent-subtle hover:text-text-primary"
                    >
                      {l.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {END_LINKS.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile trigger */}
        <button
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-primary transition-colors duration-150 md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? "Close" : "Menu"}
          <span
            className="inline-flex transition-transform duration-200"
            style={{ transform: mobileOpen ? "rotate(90deg)" : "none" }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </span>
        </button>
      </nav>

      {/* Mobile overlay — fades and rises in rather than popping. */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="animate-page-in absolute inset-x-0 top-full z-30 h-screen overflow-y-auto bg-bg-primary md:hidden"
        >
          <ul>
            {[...NAV_LINKS, ...FIELD_LINKS, ...END_LINKS].map((l, i) => (
              <li
                key={l.to}
                className="border-b border-border"
                style={{
                  animation: `menu-in 260ms var(--ease-lab) ${i * 30}ms both`,
                }}
              >
                <NavLink
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    clsx(
                      "block px-5 py-4 font-mono text-lg uppercase tracking-wider transition-colors duration-150",
                      isActive ? "text-accent" : "text-text-primary"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
