import { Cloud, Reveal } from "@/components/atmosphere";
import { ArrowIcon } from "@/components/ArrowIcon";
import { SectionMark } from "@/components/SectionMark";
import { Portrait } from "@/components/Portrait";
import { team } from "@/data/event";

export function Team() {
  return (
    <section id="team" className="team-section relative isolate overflow-hidden px-4 sm:px-6 lg:px-8">
      <Cloud depth={2} variant={1} desktopOnly className="bottom-[-14%] right-[-30%] w-[72%]" opacity={0.22} flip />

      <div className="mx-auto max-w-[1600px]">
        <SectionMark index="05" title="Team" />

        <div className="team-heading">
          <h2 className="team-title display mx-auto">
            Made by <span className="text-pink">students</span>
          </h2>
        
        </div>

        {/* contact sheet: designed for exactly three organizers */}
        <ul className="team-grid grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal
              as="li"
              key={m.name}
              delay={i * 50}
              className={`team-member ${i === 1 ? "lg:mt-10" : i === 2 ? "sm:col-span-2 sm:mx-auto sm:w-[52%] lg:col-span-1 lg:mx-0 lg:mt-4 lg:w-auto" : ""}`}
            >
              <Portrait src={m.photo} name={m.name} ratio="aspect-square" className="team-member__portrait" />
              <p className="team-member__name display mt-2 leading-none">{m.name}</p>
              <p className="mono-label mt-1">{m.role}</p>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block border-b border-ink/40 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors hover:border-pink hover:text-pink"
              >
                LinkedIn <ArrowIcon className="size-3 text-pink" />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
