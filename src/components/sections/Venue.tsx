import { Cloud, Reveal } from "@/components/atmosphere";
import { SectionMark } from "@/components/SectionMark";
import { venue } from "@/data/event";

export function Venue() {
  return (
    <section id="venue" className="relative isolate overflow-hidden bg-peri/40 px-4 py-16 sm:px-6 lg:px-8 lg:py-32">
      <Cloud depth={3} variant={1} className="top-[-20%] left-[-10%] w-[100%] lg:w-[65%]" opacity={0.22} />

      <div className="mx-auto max-w-[1600px]">
        <SectionMark index="04" title="Venue" note="Budapest · Hungary" />

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <h2 className="display text-[10vw] leading-[0.86] lg:text-[5.6vw]">
              Budapest University of Technology and Economics
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/80">
              Two days on campus. Talks in a lecture hall, workshops in a computer lab, coffee and
              conversation in between.
            </p>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-4 lg:col-start-9">
            <dl className="divide-y divide-ink/20 border-y border-ink/25">
              {[
                ["Institution", venue.university],
                ["Building", venue.building],
                ["Room", venue.room],
                ["Address", venue.address],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-4 py-3">
                  <dt className="mono-label">{k}</dt>
                  <dd className="text-sm leading-snug">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6">
              <p className="mono-label">Getting there</p>
              <ul className="mt-2 space-y-1 font-mono text-[13px] text-ink/75">
                {venue.transport.map((t) => (
                  <li key={t}>— {t}</li>
                ))}
              </ul>
            </div>

            <a
              href={venue.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-baseline gap-2 border-b-2 border-pink pb-1 font-display text-2xl font-bold uppercase transition-colors hover:border-ink"
            >
              Open in maps <span aria-hidden="true">↗</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
