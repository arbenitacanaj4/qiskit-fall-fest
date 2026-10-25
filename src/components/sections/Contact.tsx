import { Cloud, Qubit } from "@/components/atmosphere";
import { ArrowIcon } from "@/components/ArrowIcon";
import { REGISTER_URL, contact, event } from "@/data/event";

export function Contact() {
  return (
    <section
      id="contact"
      className="contact-section relative isolate bg-ink px-4 text-paper sm:px-6 lg:px-8"
    >
      <Cloud
        depth={2}
        variant={1}
        className="top-[-15%] left-[-25%] w-[110%] lg:w-[70%]"
        opacity={0.14}
        blend
      />
      <Cloud
        depth={1}
        variant={1}
        desktopOnly
        className="bottom-[10%] right-[-20%] w-[55%]"
        opacity={0.1}
        blend
        flip
      />

      <div className="contact-content mx-auto max-w-[1600px]">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-pink" aria-label="08 Contact & registration">
          08
        </p>

        <h2 className="contact-heading">
          <span className="display block">See you</span>
          <span className="contact-heading-city display block text-pink italic">in Budapest.</span>
        </h2>

        <div className="contact-details grid gap-8 md:grid-cols-2 md:gap-10">
          <div className="min-w-0">
            <p className="contact-date-number display">30 Oct {event.year}</p>
            <p className="contact-date-meta font-mono text-sm tracking-[0.18em] uppercase text-paper/70">
              {event.hostShort}, Budapest
            </p>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noreferrer"
              className="contact-register group inline-flex items-baseline gap-4 bg-pink px-6 py-4 font-display leading-none font-bold uppercase transition-colors hover:bg-paper hover:text-ink"
            >
              Register
              <ArrowIcon className="size-[0.64em] transition-transform group-hover:translate-x-2" />
            </a>
          </div>

          <div className="min-w-0 md:self-end">
            <dl className="divide-y divide-paper/20 border-y border-paper/30">
              <div className="grid grid-cols-1 gap-2 py-3 xl:grid-cols-[6rem_minmax(0,1fr)] xl:gap-4">
                <dt className="font-mono text-[11px] tracking-[0.18em] uppercase text-paper/50">
                  Email
                </dt>
                <dd className="min-w-0">
                  <a
                    href={`mailto:${contact.email}`}
                    className="contact-link underline hover:text-pink"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-2 py-3 xl:grid-cols-[6rem_minmax(0,1fr)] xl:gap-4">
                <dt className="font-mono text-[11px] tracking-[0.18em] uppercase text-paper/50">
                  Instagram
                </dt>
                <dd>
                  <a
                    href={contact.instagram.url}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link underline hover:text-pink"
                  >
                    {contact.instagram.label}{" "}
                    <ArrowIcon className="inline-block size-3 text-pink" />
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <footer className="contact-footer border-t border-paper/25 pt-4 font-mono text-[11px] tracking-[0.16em] uppercase text-paper/45">
          <p>All rights reserved.</p>
          <p className="text-paper/60">
            state: <Qubit className="text-paper/60" />
          </p>
        </footer>
      </div>
    </section>
  );
}
