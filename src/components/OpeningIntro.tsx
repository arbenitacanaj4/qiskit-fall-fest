import { useCallback, useEffect, useRef, useState } from "react";
import qiskitMark from "@/assets/qiskit_black.png";

const INTRO_SIZE_DESKTOP = 92;
const INTRO_SIZE_MOBILE = 72;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function OpeningIntro() {
  const logoRef = useRef<HTMLImageElement>(null);
  const [active, setActive] = useState(true);

  const finishIntro = useCallback(() => {
    document.documentElement.classList.remove("intro-running", "intro-reduced");
    document.documentElement.classList.add("intro-complete");
    setActive(false);
  }, []);

  useEffect(() => {
    const target = document.querySelector<HTMLElement>("[data-intro-logo-target]");
    const root = document.documentElement;

    if (!target) return;

    if (prefersReducedMotion()) {
      root.classList.add("intro-reduced");
      const reducedTimer = window.setTimeout(() => {
        finishIntro();
      }, 280);

      return () => {
        window.clearTimeout(reducedTimer);
        root.classList.remove("intro-reduced");
      };
    }

    let frame = 0;
    let finishTimer = 0;
    let failSafeTimer = 0;

    const prepare = () => {
      const introSize = window.innerWidth < 768 ? INTRO_SIZE_MOBILE : INTRO_SIZE_DESKTOP;
      const targetRect = target.getBoundingClientRect();
      const targetCenterX = targetRect.left + targetRect.width / 2;
      const targetCenterY = targetRect.top + targetRect.height / 2;
      const centerX = document.documentElement.clientWidth / 2;
      const centerY = document.documentElement.clientHeight / 2;
      const scale = targetRect.width / introSize;
      const logo = logoRef.current;

      if (!logo || !targetRect.width || !targetRect.height) {
        root.classList.add("intro-complete");
        setActive(false);
        return;
      }

      logo.style.setProperty("--intro-size", `${introSize}px`);
      logo.style.setProperty("--intro-x", `${targetCenterX - centerX}px`);
      logo.style.setProperty("--intro-y", `${targetCenterY - centerY}px`);
      logo.style.setProperty("--intro-scale", `${scale}`);

      root.classList.add("intro-running");

      finishTimer = window.setTimeout(() => {
        finishIntro();
      }, 1480);
    };

    frame = window.requestAnimationFrame(prepare);

    failSafeTimer = window.setTimeout(() => {
      finishIntro();
    }, 2200);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.clearTimeout(finishTimer);
      window.clearTimeout(failSafeTimer);
      root.classList.remove("intro-running", "intro-reduced");
    };
  }, [finishIntro]);

  return (
    <div
      className={`opening-intro ${active ? "opening-intro--active" : ""}`}
      aria-hidden="true"
      onAnimationEnd={(event) => {
        if (event.currentTarget === event.target) finishIntro();
      }}
    >
      <img ref={logoRef} src={qiskitMark} alt="" className="opening-intro__mark" />
    </div>
  );
}
