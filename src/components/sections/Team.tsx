import { Cloud, Reveal } from "@/components/atmosphere";
import { SectionMark } from "@/components/SectionMark";
import { Portrait } from "@/components/Portrait";
import { team } from "@/data/event";

export function Team() {
  return (
    <section id="team" className="relative isolate overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
      <Cloud depth={2} variant={1} desktopOnly className="bottom-[-10%] right-[-30%] w-[70%]" opacity={0.26} flip />

      <div className="mx-auto max-w-[1600px]">
        <SectionMark index="05" title="Team" note="Students, not a conference bureau" />

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <h2 className="display text-[13vw] leading-[0.8] lg:text-[8vw]">
            Made by <span className="text-pink">students</span>
          </h2>
          <p className="max-w-sm font-mono text-[13px] leading-relaxed text-ink/70">
            {"// contact sheet — organizing crew, BME edition 2026"}
          </p>
        </div>

        {/* contact sheet: tight grid, uneven baselines */}
        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-2">
          {team.map((m, i) => (
            <Reveal
              as="li"
              key={m.name}
              delay={i * 50}
              className={i % 2 === 1 ? "lg:mt-10" : ""}
            >
              <Portrait src={m.photo} name={m.name} ratio="aspect-square" />
              <p className="display mt-2 text-xl leading-none">{m.name}</p>
              <p className="mono-label mt-1">{m.role}</p>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block border-b border-ink/40 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors hover:border-pink hover:text-pink"
              >
                LinkedIn ↗
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
