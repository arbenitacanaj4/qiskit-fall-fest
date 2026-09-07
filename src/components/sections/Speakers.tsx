import { Cloud, Reveal } from "@/components/atmosphere";
import { ArrowIcon } from "@/components/ArrowIcon";
import { SectionMark } from "@/components/SectionMark";
import { Portrait } from "@/components/Portrait";
import { speakers } from "@/data/event";

export function Speakers() {
  return (
    <section id="speakers" className="speakers-section relative isolate overflow-hidden px-4 sm:px-6 lg:px-8">
      <Cloud depth={2} variant={2} className="top-[2%] left-[-34%] w-[115%] lg:w-[68%]" opacity={0.26} />
      <Cloud depth={1} variant={1} desktopOnly className="top-[50%] right-[-26%] w-[54%]" opacity={0.18} />

      <div className="mx-auto max-w-[1600px]">
        <SectionMark index="04" title="Speakers" note="Line-up in progress" />

        <h2 className="speakers-heading display mx-auto">
          <span>Meet the</span>
          <span className="text-pink italic"> speakers</span>
        </h2>

        <div className="speaker-list flex flex-col">
          {speakers.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={s.name} className="speaker-entry">
                {/* portrait */}
                <div
                  className={`speaker-entry__portrait order-1 ${flip ? "lg:order-2" : ""}`}
                >
                  <Portrait src={s.photo} name={s.name} />
                  <p className="mono-label mt-2">
                    {String(i + 1).padStart(2, "0")} / {s.org}
                  </p>
                </div>

                {/* type block, deliberately overlapping the portrait column on desktop */}
                <div
                  className={`speaker-entry__content order-2 ${flip ? "lg:order-1" : ""}`}
                >
                  <h3 className="speaker-entry__name display">{s.name}</h3>
                  <p className="mt-3 font-mono text-xs tracking-[0.14em] uppercase text-pink">
                    {s.role}
                  </p>
                  <p className="speaker-entry__bio max-w-xl text-ink/85">{s.bio}</p>
                  <dl className="speaker-entry__session max-w-xl border-t border-ink/20 text-sm">
                    <div className="flex flex-wrap gap-x-3">
                      <dt className="mono-label">Session</dt>
                      <dd className="font-medium">{s.talk}</dd>
                    </div>
                  </dl>
                  <a
                    href={s.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-baseline gap-2 border-b border-ink/40 pb-0.5 font-mono text-xs tracking-[0.16em] uppercase transition-colors hover:border-pink hover:text-pink"
                  >
                    LinkedIn <ArrowIcon className="size-3 text-pink" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
