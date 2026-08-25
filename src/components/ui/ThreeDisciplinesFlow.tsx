import { useReveal } from "@/lib/useReveal";

const NODES = [
  { label: "Physics", phrase: "physical questions and models" },
  { label: "Mathematics", phrase: "equations, analytical methods, and mathematical structure" },
  { label: "Computation", phrase: "numerical exploration, simulation, visualization, and experimentation" },
];

export function ThreeDisciplinesFlow() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {NODES.map((node) => (
          <div key={node.label} className="text-center md:text-left">
            <h3 className="mb-2 font-serif text-xl font-semibold text-text-primary">{node.label}</h3>
            <p className="text-sm text-text-secondary">{node.phrase}</p>
          </div>
        ))}
      </div>

      <div className="my-8">
        <svg viewBox="0 0 100 6" preserveAspectRatio="none" className="h-3 w-full" aria-hidden="true">
          <line
            x1="17"
            y1="3"
            x2="83"
            y2="3"
            stroke="var(--color-accent)"
            strokeWidth="0.6"
            pathLength={1}
            style={{
              strokeDasharray: 1,
              strokeDashoffset: visible ? 0 : 1,
              transition: "stroke-dashoffset 1.1s var(--ease-lab) 0.15s",
            }}
          />
        </svg>
      </div>

      <p className="text-center font-serif text-base text-accent">→ deeper understanding</p>

      <p className="mx-auto mt-8 max-w-[62ch] text-center text-text-secondary">
        Physics provides the questions and physical models. Mathematics provides the language and
        framework for describing them. Computation provides a way to explore, visualize, and test
        those models beyond what can easily be done by hand.
      </p>
    </div>
  );
}
