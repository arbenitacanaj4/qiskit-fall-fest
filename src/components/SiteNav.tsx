import { useEffect, useState } from "react";
import { ArrowIcon } from "@/components/ArrowIcon";
import { nav, REGISTER_URL, event } from "@/data/event";
import qiskitMark from "@/assets/qiskit_black.png";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.6] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-paper">
      <div className="mx-auto flex max-w-[1600px] items-stretch gap-0 border-b border-ink/20 px-3 sm:px-6 lg:px-8 xl:gap-4">
        {/* wordmark */}
        <a
          href="#home"
          className="flex min-w-0 flex-1 items-center gap-2 py-3 sm:gap-3 xl:flex-none"
          aria-label="Qiskit Fall Fest Budapest home"
        >
          <img
            src={qiskitMark}
            alt=""
            className="size-7 shrink-0"
            aria-hidden="true"
            data-intro-logo-target
          />
          <span className="display truncate text-[15px] leading-none tracking-[0.04em] sm:text-lg">
            Qiskit Fall Fest 
          </span>
        </a>

        {/* desktop: inline editorial index, no floating pill */}
        <nav aria-label="Sections" className="hidden flex-1 items-stretch justify-end xl:flex">
          <ul className="flex items-stretch">
            {nav.map((item, i) => (
              <li key={item.href} className="flex">
                <a
                  href={item.href}
                  aria-current={active === item.href ? "true" : undefined}
                  className={`group flex items-end gap-1.5 border-l border-ink/15 px-3 pt-3 pb-2 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors xl:px-4 ${
                    active === item.href ? "text-pink" : "text-ink/70 hover:text-ink"
                  }`}
                >
                  <span className="text-[9px] text-ink/35 group-hover:text-pink">
                    {String(i).padStart(2, "0")}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noreferrer"
          className="ml-auto flex shrink-0 items-center gap-1.5 bg-pink px-2.5 font-mono text-[10px] tracking-[0.14em] text-paper uppercase transition-colors hover:bg-ink min-[390px]:gap-2 min-[390px]:px-3 min-[390px]:text-[11px] min-[390px]:tracking-[0.18em] sm:px-4 xl:ml-0 xl:px-7"
        >
          Register <ArrowIcon className="size-3 shrink-0" />
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex shrink-0 items-center border-l border-ink/15 pl-2.5 font-mono text-[10px] tracking-[0.14em] uppercase min-[390px]:pl-3 sm:pl-4 sm:text-[11px] xl:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[57px] bottom-0 z-50 overflow-y-auto bg-paper xl:hidden"
        >
          <ul className="px-4 pt-2 pb-10 sm:px-6">
            {nav.map((item, i) => (
              <li key={item.href} className="border-b border-ink/15">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-4"
                >
                  <span className="display text-4xl">{item.label}</span>
                  <span className="font-mono text-[10px] text-ink/40">
                    {String(i).padStart(2, "0")}
                  </span>
                </a>
              </li>
            ))}
            <li className="pt-6">
              <p className="mono-label">{event.datesShort}</p>
              <p className="mt-1 font-mono text-xs text-ink/70">{event.hostShort}, Budapest</p>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
