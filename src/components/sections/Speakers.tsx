import { Cloud, Reveal } from "@/components/atmosphere";
import { SectionMark } from "@/components/SectionMark";
import { Portrait } from "@/components/Portrait";
import { speakers } from "@/data/event";

export function Speakers() {
  return (
    <section id="speakers" className="relative isolate overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
      <Cloud depth={2} variant={2} className="top-[5%] left-[-30%] w-[110%] lg:w-[70%]" />
      <Cloud depth={1} variant={1} desktopOnly className="top-[55%] right-[-25%] w-[50%]" opacity={0.25} />

      <div className="mx-auto max-w-[1600px]">
        <SectionMark index="03" title="Speakers" note="Line-up in progress" />

        <h2 className="display mt-8 text-[14vw] leading-[0.8] lg:text-[9vw]">
          Who's
          <span className="text-pink italic"> talking</span>
        </h2>

        <div className="mt-14 flex flex-col gap-16 lg:gap-24">
          {speakers.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal
                key={s.name}
                className={`grid items-start gap-6 lg:grid-cols-12 lg:gap-8 ${flip ? "" : ""}`}
              >
                {/* portrait */}
                <div
                  className={`order-1 lg:col-span-4 ${
                    flip ? "lg:order-2 lg:col-start-9" : "lg:col-start-1"
                  }`}
                >
                  <Portrait src={s.photo} name={s.name} />
                  <p className="mono-label mt-2">
                    {String(i + 1).padStart(2, "0")} / {s.org}
                  </p>
                </div>

                {/* type block, deliberately overlapping the portrait column on desktop */}
                <div
                  className={`order-2 lg:col-span-8 ${
                    flip ? "lg:order-1 lg:col-start-1 lg:pr-[6vw]" : "lg:col-start-4 lg:-ml-[6vw]"
                  }`}
                >
                  <h3 className="display text-[12vw] leading-[0.82] lg:text-[7vw]">{s.name}</h3>
                  <p className="mt-3 font-mono text-xs tracking-[0.14em] uppercase text-pink">
                    {s.role}
                  </p>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/85">{s.bio}</p>
                  <dl className="mt-6 max-w-xl border-t border-ink/20 pt-3 text-sm">
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
                    LinkedIn <span aria-hidden="true">↗</span>
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
