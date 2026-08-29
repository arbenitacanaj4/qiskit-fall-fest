import { useState } from "react";
import { Cloud, Reveal } from "@/components/atmosphere";
import { SectionMark } from "@/components/SectionMark";
import { schedule } from "@/data/event";

export function Schedule() {
  const [day, setDay] = useState(schedule[0]!.id);
  const current = schedule.find((d) => d.id === day) ?? schedule[0]!;

  return (
    <section id="schedule" className="relative isolate overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
      <Cloud depth={3} variant={1} className="top-[20%] right-[-40%] w-[120%] lg:w-[70%]" opacity={0.16} />

      <div className="mx-auto max-w-[1600px]">
        <SectionMark index="02" title="Programme" note="Subject to change" />

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display text-[13vw] leading-[0.8] lg:text-[8vw]">
            Two days,
            <br />
            <span className="text-pink">one circuit.</span>
          </h2>

          {/* day switch: two tabs, print-programme flavour */}
          <div role="tablist" aria-label="Schedule days" className="flex w-full border-t border-ink/20 lg:w-auto">
            {schedule.map((d) => {
              const selected = d.id === day;
              return (
                <button
                  key={d.id}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setDay(d.id)}
                  className={`flex-1 border-r border-b border-ink/20 px-5 py-4 text-left transition-colors first:border-l lg:flex-none lg:px-8 ${
                    selected ? "bg-ink text-paper" : "hover:bg-peri/60"
                  }`}
                >
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-70">
                    {d.day}
                  </span>
                  <span className="display mt-1 block text-4xl lg:text-5xl">{d.date}</span>
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase opacity-70">
                    {d.weekday}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* timeline: rows on a rule, circuit line running through the times */}
        <div className="mt-12">
          <div className="mono-label hidden grid-cols-[7rem_1fr_15rem_13rem] gap-6 pb-2 lg:grid">
            <span>Time</span>
            <span>Event</span>
            <span>Speaker / host</span>
            <span>Location</span>
          </div>

          <ol className="border-t border-ink/25">
            {current.items.map((item, i) => (
              <Reveal
                as="li"
                key={`${current.id}-${item.time}`}
                delay={i * 40}
                className="group relative grid grid-cols-[4.5rem_1fr] items-baseline gap-x-4 gap-y-1 border-b border-ink/15 py-5 transition-colors hover:bg-peri/35 lg:grid-cols-[7rem_1fr_15rem_13rem] lg:gap-6"
              >
                <span className="font-mono text-sm tabular-nums text-pink lg:text-base">
                  {item.time}
                </span>
                <span className="display text-2xl leading-[0.95] sm:text-3xl lg:text-[2.6vw]">
                  {item.title}
                  {item.kind === "break" && (
                    <span className="ml-3 align-middle font-mono text-[10px] tracking-[0.18em] text-ink/40">
                      BREAK
                    </span>
                  )}
                </span>
                <span className="col-start-2 font-mono text-xs text-ink/70 lg:col-start-3 lg:text-[13px]">
                  {item.host}
                </span>
                <span className="col-start-2 font-mono text-xs text-ink/55 lg:col-start-4 lg:text-[13px]">
                  {item.location}
                </span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-1 top-6 hidden h-2 w-2 rounded-full bg-ink/25 transition-colors group-hover:bg-pink lg:block"
                />
              </Reveal>
            ))}
          </ol>

          <p className="mono-label mt-4">
            All times CET · Detailed session descriptions published closer to the event
          </p>
        </div>
      </div>
    </section>
  );
}
