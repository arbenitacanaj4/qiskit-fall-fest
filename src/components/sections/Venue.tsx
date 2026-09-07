import { Cloud, Reveal } from "@/components/atmosphere";
import { ArrowIcon } from "@/components/ArrowIcon";
import { SectionMark } from "@/components/SectionMark";
import { venue } from "@/data/event";

export function Venue() {
  return (
    <section id="venue" className="venue-section relative isolate overflow-hidden bg-peri/40 px-4 py-16 sm:px-6 lg:px-8 lg:py-32">
      <Cloud depth={3} variant={1} className="top-[-20%] left-[-10%] w-[100%] lg:w-[65%]" opacity={0.22} />

      <div className="mx-auto max-w-[1600px]">
        <SectionMark index="03" title="Venue" note="Budapest · Hungary" />

        <div className="venue-layout mt-10 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <h2 className="venue-title display leading-[0.86]">
              Budapest University of Technology and Economics
            </h2>
            <p className="venue-copy mt-6 max-w-lg leading-relaxed text-ink/80">
              Two days on campus. Talks, a hackathon, coffee and conversation in between.
            </p>
          </Reveal>

          <Reveal delay={100} className="venue-details lg:col-span-5 lg:col-start-8">
            <dl className="divide-y divide-ink/20 border-y border-ink/25">
              {[
                ["Institution", venue.university],
                ["Building", venue.building],
                ["Room", venue.room],
              ].map(([k, v]) => (
                <div key={k} className="venue-detail-row grid gap-3 py-4 sm:grid-cols-[8rem_1fr]">
                  <dt className="mono-label">{k}</dt>
                  <dd className="venue-detail-value leading-tight">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="venue-transport mt-7">
              <p className="mono-label">Getting there</p>
              <ul className="mt-3 space-y-2 font-mono text-ink/80">
                {venue.transport.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            <a
              href={venue.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 border-b-2 border-pink pb-1 font-display text-2xl font-bold uppercase transition-colors hover:border-ink"
            >
              Open in maps <ArrowIcon className="size-[0.72em] text-pink" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
