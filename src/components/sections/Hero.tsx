import { ArrowIcon } from "@/components/ArrowIcon";
import { REGISTER_URL, event } from "@/data/event";

export function Hero() {
  return (
    <section
      id="home"
      className="hero-poster relative isolate overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="hero-poster__inner mx-auto">
        <div className="hero-composition">
          {/* Keep the year and city together as one typographic line. */}
          <h1 className="hero-title">
            <span className="sr-only">
              Qiskit Fall Fest 2026 Budapest, {event.dates} at {event.host}
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
              <span className="hero-title__meta">
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

          <div className="hero-date" data-intro-reveal="dates">
            <p className="hero-acknowledgement mono-label text-grape">
              <span>Global programme</span>{" "}
              <span>
                supported by <span className="whitespace-nowrap">IBM Quantum</span>
              </span>
            </p>
            <div className="hero-date__composition">
              <span className="hero-date__number display text-pink">30</span>
              <div className="hero-date__words">
                <p className="display text-grape">October</p>
                <p className="mono-label">2026 · Friday</p>
              </div>
            </div>
            <p className="mono-label text-grape">Budapest · BME</p>
          </div>

          <div className="hero-detail-grid" data-intro-reveal="copy">
            <div className="hero-intro flex flex-col justify-end">
              <p className="hero-intro__copy max-w-md leading-snug text-ink/85 lg:max-w-xl">
                A one-day, student-organized quantum computing event at the{" "}
                <span className="font-semibold">{event.host}</span>. Part of the global Qiskit Fall
                Fest, supported by IBM Quantum, celebrating{" "}
                <span className="text-pink italic">a decade of quantum on the cloud</span>.
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
