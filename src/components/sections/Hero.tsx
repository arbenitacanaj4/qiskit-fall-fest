import { Qubit } from "@/components/atmosphere";
import { ArrowIcon } from "@/components/ArrowIcon";
import { REGISTER_URL, event } from "@/data/event";

export function Hero() {
  return (
    <section id="home" className="hero-poster relative isolate overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="hero-poster__inner mx-auto max-w-[1600px]">
        {/* top line: status strip */}
        <div
          className="hero-poster__status flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2"
          data-intro-reveal="technical"
        >
          <p className="hero-status-primary mono-label">
            Official event · Supported by IBM Quantum{" "}
            <span className="hero-status-qubit">
              <span aria-hidden="true">/</span>
              <Qubit />
            </span>
          </p>
          <p className="hero-coordinates mono-label">
            47.4735°N 19.0596°E <span className="mx-2 text-ink/25">/</span> <Qubit />
          </p>
        </div>

        <div className="rule-ink" />

        <div className="hero-composition">
          {/* headline composition, deliberately mis-aligned, breaks the grid */}
          <h1 className="hero-title">
            <span className="sr-only">
              Qiskit Fall Fest 2026 Budapest, October 29 to 30, 2026 at {event.host}
            </span>
            <span aria-hidden="true" className="block">
              <span className="hero-title__line display block" data-intro-reveal="qiskit">
                Qiskit
              </span>
              <span
                className="hero-title__line display block text-pink lg:ml-[8vw]"
                data-intro-reveal="fall"
              >
                Fall Fest
              </span>
              <span className="hero-title__meta flex flex-wrap items-end gap-x-4 lg:-ml-[1vw]">
                <span
                  className="hero-title__line display text-grape italic"
                  data-intro-reveal="place"
                >
                  2026
                </span>
                <span className="hero-title__place display text-ink" data-intro-reveal="place">
                  Budapest
                </span>
              </span>
            </span>
          </h1>

          <div
            className="hero-event-diagram"
            aria-label="October 29 talks and October 30 hackathon in Budapest"
            data-intro-reveal="dates"
          >
            <div className="hero-event-diagram__days">
              <div className="hero-event-diagram__day">
                <p className="hero-event-diagram__date">
                  <span>29</span>
                  <span>Oct</span>
                </p>
                <span className="hero-event-diagram__stem" aria-hidden="true" />
                <p className="hero-event-diagram__label">Talks</p>
              </div>
              <span className="hero-event-diagram__connector" aria-hidden="true" />
              <div className="hero-event-diagram__day">
                <p className="hero-event-diagram__date">
                  <span>30</span>
                  <span>Oct</span>
                </p>
                <span className="hero-event-diagram__stem" aria-hidden="true" />
                <p className="hero-event-diagram__label">Hackathon</p>
              </div>
            </div>
            <div className="hero-event-diagram__base" aria-hidden="true">
              <span />
              <p>Budapest</p>
              <span />
            </div>
          </div>

          <div className="hero-detail-grid" data-intro-reveal="copy">
            <div className="hero-intro flex flex-col justify-end">
              <p className="hero-intro__copy max-w-md leading-snug text-ink/85 lg:max-w-xl">
                A two-day, student-organized quantum computing festival at the{" "}
                <span className="font-semibold">{event.host}</span>. Part of the global Qiskit Fall
                Fest, celebrating <span className="text-pink italic">a decade of quantum on the cloud</span>.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-register group inline-flex items-baseline gap-3 border-b-2 border-pink pb-1 font-display leading-none font-bold uppercase transition-colors hover:border-ink"
                >
                  Register
                  <ArrowIcon className="size-[0.62em] text-pink transition-transform group-hover:translate-x-1" />
                </a>
                <span className="mono-label">Free · Places limited</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
