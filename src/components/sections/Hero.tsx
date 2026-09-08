import { ArrowIcon } from "@/components/ArrowIcon";
import { REGISTER_URL, event } from "@/data/event";

export function Hero() {
  return (
    <section id="home" className="hero-poster relative isolate overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="hero-poster__inner mx-auto">
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
                className="hero-title__line hero-title__line--fall display block text-pink"
                data-intro-reveal="fall"
              >
                Fall Fest
              </span>
              <span className="hero-title__meta flex flex-wrap items-end gap-x-4">
                <span
                  className="hero-title__line hero-title__year display text-grape italic"
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
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 hero-register-group">
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
