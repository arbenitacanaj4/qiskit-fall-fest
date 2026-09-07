import { useCallback, useEffect, useRef, useState } from "react";
import qiskitMark from "@/assets/qiskit_black.png";

const INTRO_SIZE_DESKTOP = 92;
const INTRO_SIZE_MOBILE = 72;
const INTRO_DURATION = 1480;
const FAILSAFE_DURATION = 2400;
type IntroPhase = "measuring" | "active" | "done";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isUsableRect(rect: DOMRect) {
  const viewportWidth = document.documentElement.clientWidth;
  const viewportHeight = document.documentElement.clientHeight;

  return (
    rect.width > 0 &&
    rect.height > 0 &&
    rect.right >= 0 &&
    rect.bottom >= 0 &&
    rect.left <= viewportWidth &&
    rect.top <= viewportHeight
  );
}

function getVisibleLogoTarget() {
  const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-intro-logo-target]"));

  return targets.find((target) => {
    const style = window.getComputedStyle(target);
    const rect = target.getBoundingClientRect();

    return style.display !== "none" && style.visibility !== "hidden" && isUsableRect(rect);
  });
}

function nextFrame() {
  return new Promise<void>((resolve) => window.requestAnimationFrame(() => resolve()));
}

export function OpeningIntro() {
  const logoRef = useRef<HTMLImageElement>(null);
  const [phase, setPhase] = useState<IntroPhase>("measuring");

  const finishIntro = useCallback(() => {
    document.documentElement.classList.remove(
      "intro-running",
      "intro-reduced",
      "intro-logo-landed",
    );
    document.documentElement.classList.add("intro-complete");
    setPhase("done");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("intro-complete");

    if (prefersReducedMotion()) {
      root.classList.add("intro-reduced");
      setPhase("active");
      const reducedTimer = window.setTimeout(() => {
        finishIntro();
      }, 280);

      return () => {
        window.clearTimeout(reducedTimer);
        root.classList.remove("intro-reduced");
      };
    }

    let finishTimer = 0;
    let failSafeTimer = 0;
    let cancelled = false;

    const revealImmediately = () => {
      root.classList.add("intro-complete");
      setPhase("done");
    };

    const prepare = async () => {
      await document.fonts?.ready;
      await nextFrame();
      await nextFrame();
      if (cancelled) return;

      const target = getVisibleLogoTarget();
      const logo = logoRef.current;

      if (!target || !logo) {
        revealImmediately();
        return;
      }

      const introSize = window.innerWidth < 768 ? INTRO_SIZE_MOBILE : INTRO_SIZE_DESKTOP;
      logo.style.setProperty("--intro-size", `${introSize}px`);

      await nextFrame();
      if (cancelled) return;

      const targetRect = target.getBoundingClientRect();
      const introRect = logo.getBoundingClientRect();

      if (!isUsableRect(targetRect) || !isUsableRect(introRect)) {
        revealImmediately();
        return;
      }

      const introCenterX = introRect.left + introRect.width / 2;
      const introCenterY = introRect.top + introRect.height / 2;
      const targetCenterX = targetRect.left + targetRect.width / 2;
      const targetCenterY = targetRect.top + targetRect.height / 2;

      logo.style.setProperty("--intro-x", `${targetCenterX - introCenterX}px`);
      logo.style.setProperty("--intro-y", `${targetCenterY - introCenterY}px`);
      logo.style.setProperty("--intro-scale-x", `${targetRect.width / introRect.width}`);
      logo.style.setProperty("--intro-scale-y", `${targetRect.height / introRect.height}`);

      root.classList.add("intro-running");
      setPhase("active");

      finishTimer = window.setTimeout(() => {
        finishIntro();
      }, INTRO_DURATION);
    };

    void prepare();

    failSafeTimer = window.setTimeout(() => {
      finishIntro();
    }, FAILSAFE_DURATION);

    return () => {
      cancelled = true;
      window.clearTimeout(finishTimer);
      window.clearTimeout(failSafeTimer);
      root.classList.remove("intro-running", "intro-reduced", "intro-logo-landed");
    };
  }, [finishIntro]);

  if (phase === "done") return null;

  return (
    <div
      className={`opening-intro ${phase === "active" ? "opening-intro--active" : ""}`}
      aria-hidden="true"
      onAnimationEnd={(event) => {
        if (event.currentTarget === event.target) finishIntro();
      }}
    >
      <img
        ref={logoRef}
        src={qiskitMark}
        alt=""
        className="opening-intro__mark"
        onAnimationEnd={(event) => {
          if (event.currentTarget === event.target) {
            document.documentElement.classList.add("intro-logo-landed");
          }
        }}
      />
    </div>
  );
}
