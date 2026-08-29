import { Cloud, Qubit } from "@/components/atmosphere";
import { REGISTER_URL, event } from "@/data/event";
import hummingbird from "@/assets/hummingbird.png";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden px-4 pt-10 pb-16 sm:px-6 lg:px-8 lg:pt-16 lg:pb-28">
      <Cloud depth={3} variant={2} className="top-[-12%] left-[-20%] w-[110%] lg:w-[75%]" />
      <Cloud depth={2} variant={1} className="top-[38%] right-[-30%] w-[95%] lg:w-[62%]" opacity={0.38} />
      <Cloud depth={1} variant={1} desktopOnly className="bottom-[-18%] left-[-14%] w-[55%]" opacity={0.3} flip />

      <div className="mx-auto max-w-[1600px]">
        {/* top line: status strip */}
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 pb-6">
          <p className="mono-label">Official event · Supported by Qiskit / IBM Quantum</p>
          <p className="mono-label">
            47.4735°N 19.0596°E <span className="mx-2 text-ink/25">/</span> <Qubit />
          </p>
        </div>

        <div className="rule-ink" />

        {/* headline composition — deliberately mis-aligned, breaks the grid */}
        <h1 className="pt-6 lg:pt-4">
          <span className="sr-only">
            Qiskit Fall Fest 2026 Budapest — October 29 to 30, 2026 at {event.host}
          </span>
          <span aria-hidden="true" className="block">
            <span className="display block text-[19vw] leading-[0.78] lg:text-[13.5vw]">Qiskit</span>
            <span className="display -mt-[0.06em] block text-[19vw] leading-[0.78] text-pink lg:ml-[8vw] lg:text-[13.5vw]">
              Fall Fest
            </span>
            <span className="mt-2 flex flex-wrap items-end gap-x-4 lg:mt-0 lg:-ml-[1vw]">
              <span className="display text-[19vw] leading-[0.78] text-grape italic lg:text-[13.5vw]">
                2026
              </span>
              <span className="display mb-[0.12em] text-[9vw] leading-none text-ink lg:mb-[0.2em] lg:text-[5vw]">
                Budapest
              </span>
            </span>
          </span>
        </h1>

        {/* date block: a major graphic element, not metadata */}
        <div className="mt-10 grid gap-8 lg:mt-6 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-6 lg:col-start-1">
            <p className="mono-label">October</p>
            <p className="display mt-1 text-[26vw] leading-[0.72] text-pink lg:text-[13vw]">
              29<span className="text-ink">—</span>30
            </p>
            <p className="mono-label mt-2">2026 · Thursday—Friday</p>
          </div>

          <div className="flex flex-col justify-end gap-6 lg:col-span-5 lg:col-start-8">
            <p className="max-w-md text-lg leading-snug text-ink/85 sm:text-xl">
              A two-day, student-organized quantum computing festival at the{" "}
              <span className="font-semibold">{event.host}</span>. Part of the global Qiskit Fall
              Fest — celebrating <span className="text-pink italic">a decade of quantum on the cloud</span>.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-baseline gap-3 border-b-2 border-pink pb-1 font-display text-4xl leading-none font-bold uppercase transition-colors hover:border-ink sm:text-5xl"
              >
                Register
                <span className="text-pink transition-transform group-hover:translate-x-1" aria-hidden="true">
                  ↗
                </span>
              </a>
              <span className="mono-label">Free · Places limited</span>
            </div>
          </div>
        </div>

        <div className="mt-14 flex items-end justify-between gap-6 lg:mt-10">
          <a href="#about" className="mono-label hover:text-pink">
            Scroll ↓ the cloud is thicker below
          </a>
          <div className="relative hidden h-16 flex-1 overflow-hidden sm:block" aria-hidden="true">
            <img
              src={hummingbird}
              alt=""
              width={640}
              height={640}
              loading="lazy"
              className="bird-flight absolute top-2 h-12 w-12 opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
