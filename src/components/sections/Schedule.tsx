import { useState } from "react";
import { Cloud, Reveal } from "@/components/atmosphere";
import { SectionMark } from "@/components/SectionMark";
import { schedule } from "@/data/event";

export function Schedule() {
  const [day, setDay] = useState(schedule[0]!.id);
  const current = schedule.find((d) => d.id === day) ?? schedule[0]!;
  const currentIndex = schedule.findIndex((d) => d.id === current.id);

  function selectAdjacentDay(direction: -1 | 1) {
    const next = schedule[(currentIndex + direction + schedule.length) % schedule.length];
    if (next) setDay(next.id);
  }

  return (
    <section id="schedule" className="programme-section relative isolate overflow-hidden px-4 sm:px-6 lg:px-8">
      <Cloud depth={3} variant={1} className="top-[-24%] right-[-38%] w-[125%] lg:w-[76%]" opacity={0.24} />
      <Cloud depth={2} variant={2} desktopOnly className="bottom-[8%] left-[-34%] w-[62%]" opacity={0.16} flip />

      <div className="mx-auto max-w-[1600px]">
        <SectionMark index="02" title="Programme" note="Subject to change" />

        <div className="programme-selector mx-auto text-center">
          <p className="mono-label">October 2026</p>
          <div role="tablist" aria-label="Schedule days" className="programme-days">
            {schedule.map((d) => {
              const selected = d.id === day;
              const dateNumber = d.date.replace(/\D/g, "");
              return (
                <button
                  key={d.id}
                  id={`${d.id}-tab`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls={`${d.id}-schedule`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setDay(d.id)}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowLeft") {
                      event.preventDefault();
                      selectAdjacentDay(-1);
                    }
                    if (event.key === "ArrowRight") {
                      event.preventDefault();
                      selectAdjacentDay(1);
                    }
                  }}
                  className={`programme-day ${selected ? "programme-day--active" : ""}`}
                >
                  <span className="programme-day__label mono-label">{d.day}</span>
                  <span className="programme-day__number display">{dateNumber}</span>
                  <span className="programme-day__weekday mono-label">{d.weekday}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* timeline: rows on a rule, circuit line running through the times */}
        <div
          key={current.id}
          id={`${current.id}-schedule`}
          role="tabpanel"
          aria-labelledby={`${current.id}-tab`}
          className="programme-timeline"
        >
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
            Tentative times CET · Detailed session descriptions published closer to the event
          </p>
        </div>
      </div>
    </section>
  );
}
