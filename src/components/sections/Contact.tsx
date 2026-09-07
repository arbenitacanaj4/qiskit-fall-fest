import { Cloud, Qubit } from "@/components/atmosphere";
import { ArrowIcon } from "@/components/ArrowIcon";
import { REGISTER_URL, contact, event } from "@/data/event";
import ibmQuantumLogoReverse from "@/assets/IBM_Quantum_logotype_rev_RGB.png";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-ink px-4 pt-16 pb-10 text-paper sm:px-6 lg:px-8 lg:pt-28"
    >
      <Cloud depth={2} variant={1} className="top-[-15%] left-[-25%] w-[110%] lg:w-[70%]" opacity={0.14} blend />
      <Cloud depth={1} variant={1} desktopOnly className="bottom-[10%] right-[-20%] w-[55%]" opacity={0.1} blend flip />

      <div className="mx-auto max-w-[1600px]">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-paper/50">
          07 <span className="mx-2 text-paper/25">/</span> Contact &amp; registration
        </p>

        <h2 className="mt-8">
          <span className="display block text-[16vw] leading-[0.8] lg:text-[11vw]">See you</span>
          <span className="display block text-[16vw] leading-[0.8] text-pink italic lg:ml-[8vw] lg:text-[11vw]">
            in Budapest.
          </span>
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <p className="contact-date-number display">29<span>/</span>30</p>
            <p className="contact-date-meta font-mono text-sm tracking-[0.18em] uppercase text-paper/70">
              Oct {event.year} · {event.hostShort}, Budapest
            </p>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-baseline gap-4 bg-pink px-6 py-4 font-display text-4xl leading-none font-bold uppercase transition-colors hover:bg-paper hover:text-ink sm:text-6xl"
            >
              Register
              <ArrowIcon className="size-[0.64em] transition-transform group-hover:translate-x-2" />
            </a>
            
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <dl className="divide-y divide-paper/20 border-y border-paper/30">
              <div className="grid grid-cols-[6rem_1fr] gap-4 py-3">
                <dt className="font-mono text-[11px] tracking-[0.18em] uppercase text-paper/50">
                  Email
                </dt>
                <dd>
                  <a href={`mailto:${contact.email}`} className="underline hover:text-pink">
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[6rem_1fr] gap-4 py-3">
                <dt className="font-mono text-[11px] tracking-[0.18em] uppercase text-paper/50">
                  Instagram
                </dt>
                <dd>
                  <a
                    href={contact.instagram.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-pink"
                  >
                    {contact.instagram.label} <ArrowIcon className="inline-block size-3 text-pink" />
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <footer className="contact-footer mt-16 border-t border-paper/25 pt-4 font-mono text-[11px] tracking-[0.16em] uppercase text-paper/45">
          <p>Qiskit Fall Fest 2026 · Budapest edition</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>Student organized · Supported by IBM Quantum</span>
        
          </div>
          <p className="text-paper/60">
            state: <Qubit className="text-paper/60" />
          </p>
        </footer>
      </div>
    </section>
  );
}
