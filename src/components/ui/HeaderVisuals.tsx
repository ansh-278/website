/** Physics — largest, boldest of the three subject marks (Phase 5: "exploratory / visual"). */
export function PhysicsMark() {
  return (
    <svg viewBox="0 0 200 140" className="h-32 w-full max-w-[220px] text-accent opacity-[0.14]" aria-hidden="true">
      <line x1="10" y1="120" x2="190" y2="120" stroke="currentColor" strokeWidth="1" />
      <line x1="10" y1="120" x2="10" y2="10" stroke="currentColor" strokeWidth="1" />
      <path d="M10 100 C 60 100, 70 20, 190 20" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 115 C 90 60, 110 60, 190 105" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

/** Mathematics — smallest, quietest of the three (Phase 5: "analytical / notebook-like"). */
export function MathematicsMark() {
  return (
    <svg viewBox="0 0 160 100" className="h-20 w-full max-w-[160px] text-accent opacity-[0.10]" aria-hidden="true">
      <path d="M10 80 C 50 80, 60 20, 150 20" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

/** Computation — medium scale, node/graph mark (Phase 5: "technical / systems-oriented"). */
export function ComputationMark() {
  return (
    <svg viewBox="0 0 180 110" className="h-24 w-full max-w-[190px] text-accent opacity-[0.12]" aria-hidden="true">
      <circle cx="20" cy="80" r="3" fill="currentColor" />
      <circle cx="90" cy="30" r="3" fill="currentColor" />
      <circle cx="160" cy="70" r="3" fill="currentColor" />
      <circle cx="90" cy="95" r="3" fill="currentColor" />
      <line x1="20" y1="80" x2="90" y2="30" stroke="currentColor" strokeWidth="1" />
      <line x1="90" y1="30" x2="160" y2="70" stroke="currentColor" strokeWidth="1" />
      <line x1="90" y1="30" x2="90" y2="95" stroke="currentColor" strokeWidth="1" />
      <line x1="90" y1="95" x2="160" y2="70" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

/** Coordinate-axis section divider — used between homepage sections (Phase 2/3). */
export function AxisDivider() {
  return (
    <svg viewBox="0 0 60 24" className="mx-auto h-6 w-14 text-text-tertiary opacity-40" aria-hidden="true">
      <line x1="4" y1="20" x2="56" y2="20" stroke="currentColor" strokeWidth="1" />
      <line x1="4" y1="20" x2="4" y2="4" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
