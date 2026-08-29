import { useEffect, useRef, useState } from "react";
import cloud01 from "@/assets/cloud-01.png";
import cloud02 from "@/assets/cloud-02.png";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function useIsDesktop() {
  const [desktop, setDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setDesktop(mq.matches);
    const onChange = () => setDesktop(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return desktop;
}

type CloudProps = {
  /** visual depth: 1 = closest / fastest, 3 = distant / slowest */
  depth?: 1 | 2 | 3;
  variant?: 1 | 2;
  className?: string | undefined;
  /** hidden below lg — use for extra desktop-only layers */
  desktopOnly?: boolean | undefined;
  opacity?: number | undefined;
  flip?: boolean | undefined;
};

/**
 * One atmospheric cloud layer. Purely decorative, never above text
 * (all clouds sit at -z / low opacity behind content).
 */
export function Cloud({
  depth = 2,
  variant = 1,
  className = "",
  desktopOnly = false,
  opacity,
  flip = false,
}: CloudProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const desktop = useIsDesktop();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced || !desktop) return;
    const speed = depth === 1 ? 0.12 : depth === 2 ? 0.06 : 0.025;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = el.getBoundingClientRect();
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -speed;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [depth, reduced, desktop]);

  const base = opacity ?? (depth === 1 ? 0.5 : depth === 2 ? 0.32 : 0.2);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 select-none will-change-transform ${
        desktopOnly ? "hidden lg:block" : ""
      } ${className}`}
    >
      <div ref={ref}>
        <img
          src={variant === 1 ? cloud01 : cloud02}
          alt=""
          loading="lazy"
          decoding="async"
          width={1536}
          height={variant === 1 ? 896 : 768}
          className="h-auto w-full"
          style={{
            opacity: base,
            filter: `blur(${depth === 1 ? 6 : depth === 2 ? 14 : 26}px) saturate(${depth === 3 ? 0.6 : 1})`,
            transform: flip ? "scaleX(-1)" : undefined,
          }}
        />
      </div>
    </div>
  );
}

/** Reveal-on-enter wrapper: one subtle, editorial motion primitive. */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  as?: React.ElementType | undefined;
  delay?: number | undefined;
  className?: string | undefined;
}) {
  const ref = useRef<HTMLElement>(null);
  const [seen, setSeen] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: "-8% 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={
        reduced
          ? undefined
          : {
              opacity: seen ? 1 : 0,
              transform: seen ? "none" : "translateY(18px)",
              transition: `opacity 700ms cubic-bezier(.16,1,.3,1) ${delay}ms, transform 700ms cubic-bezier(.16,1,.3,1) ${delay}ms`,
            }
      }
    >
      {children}
    </Tag>
  );
}

/** |0⟩ → |1⟩ easter egg. */
export function Qubit({ className = "" }: { className?: string | undefined }) {
  const [one, setOne] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOne((v) => !v)}
      onMouseEnter={() => setOne(true)}
      onMouseLeave={() => setOne(false)}
      aria-label={`Qubit state ${one ? "one" : "zero"} — toggle`}
      className={`font-mono tabular-nums text-ink/60 transition-colors hover:text-pink ${className}`}
    >
      {one ? "|1⟩" : "|0⟩"}
    </button>
  );
}
