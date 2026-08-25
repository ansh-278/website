import { useEffect, useRef, useState } from "react";

/**
 * Fade-up scroll reveal (Phase 2 motion vocabulary: 8–12px, ~300ms,
 * ease-out). Fires once per element, then disconnects — this is a
 * restrained reveal, not a repeating scroll effect.
 */
export function useReveal<T extends HTMLElement>(): {
  ref: React.RefObject<T | null>;
  visible: boolean;
} {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}
