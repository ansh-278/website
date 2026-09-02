import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  driftX: number;
  driftY: number;
  isAccent: boolean;
}

const STAR_COLOR = "242, 239, 231"; // text-primary, rgb
const ACCENT_COLOR = "74, 144, 194"; // accent, rgb

/**
 * A quiet, full-viewport star field behind every page. Ties directly into
 * the "Star" rebrand rather than being a generic effect — small drifting,
 * twinkling points in colors already in the palette (text-primary and
 * accent), nothing new. Density is low and motion is slow on purpose: this
 * sits behind reading content, so it needs to read as atmosphere, not
 * animation competing for attention.
 */
export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function seedStars() {
      // Roughly one star per ~9000px² of viewport — sparse, not a wallpaper.
      const count = Math.round((width * height) / 9000);
      const arr: Star[] = [];
      for (let i = 0; i < count; i++) {
        arr.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.1 + 0.3,
          baseOpacity: Math.random() * 0.35 + 0.12,
          twinkleSpeed: Math.random() * 0.6 + 0.15,
          twinklePhase: Math.random() * Math.PI * 2,
          driftX: (Math.random() - 0.5) * 0.008,
          driftY: (Math.random() - 0.5) * 0.008,
          isAccent: Math.random() < 0.08,
        });
      }
      stars = arr;
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedStars();
    }

    resize();
    window.addEventListener("resize", resize);

    let raf = 0;

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      for (const s of stars) {
        if (!reduceMotion) {
          s.x += s.driftX;
          s.y += s.driftY;
          if (s.x < -5) s.x = width + 5;
          if (s.x > width + 5) s.x = -5;
          if (s.y < -5) s.y = height + 5;
          if (s.y > height + 5) s.y = -5;
        }
        const twinkle = reduceMotion
          ? s.baseOpacity
          : s.baseOpacity + Math.sin(performance.now() * 0.001 * s.twinkleSpeed + s.twinklePhase) * 0.12;
        const opacity = Math.max(0, Math.min(0.55, twinkle));
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${s.isAccent ? ACCENT_COLOR : STAR_COLOR}, ${opacity})`;
        ctx!.fill();
      }
      if (!reduceMotion) {
        raf = requestAnimationFrame(draw);
      }
    }

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
                                 }
