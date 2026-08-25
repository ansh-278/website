import type { ReactNode } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-bg-primary">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-wider focus:text-bg-primary"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" className="flex-1">
        {/* Keyed on pathname so each route entry runs the fade/rise-in
            animation once — a restrained cross-fade, matching the same
            8–12px / ease-lab motion vocabulary used by Reveal. */}
        <div key={pathname} className="animate-page-in">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function Container({
  children,
  className = "",
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`mx-auto px-5 md:px-8 ${wide ? "max-w-[1320px]" : "max-w-[1120px]"} ${className}`}
    >
      {children}
    </div>
  );
}

export function Section({
  children,
  tone = "primary",
  className = "",
}: {
  children: ReactNode;
  tone?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <section className={`${tone === "secondary" ? "bg-bg-secondary" : "bg-bg-primary"} py-16 md:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
