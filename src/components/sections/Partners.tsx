import { Cloud } from "@/components/atmosphere";
import { SectionMark } from "@/components/SectionMark";
import { partners } from "@/data/event";

export function Partners() {
  return (
    <section
      id="partners"
      className="partners-section relative isolate overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <Cloud
        depth={3}
        variant={2}
        className="top-[-34%] left-[-32%] w-[120%] lg:w-[58%]"
        opacity={0.18}
        flip
      />
      <div className="mx-auto max-w-[1600px]">
        <SectionMark index="06" title="Partners" />
        <h2 className="display mt-10 text-center text-5xl sm:text-7xl">
          Our <span className="italic text-pink">partners</span>
        </h2>
        <ul className="partner-grid">
          {partners.map((partner) => {
            const content = (
              <>
                <div
                  className={`partner-logo ${partner.id === "comp2" ? "partner-logo--wide-dark" : ""}`}
                >
                  {partner.logo ? (
                    <img src={partner.logo} alt={partner.altText} loading="lazy" />
                  ) : (
                    <span className="mono-label text-center text-grape/70">
                      {partner.name}
                      <br />
                      Logo coming soon
                    </span>
                  )}
                </div>
              </>
            );
            return (
              <li key={partner.id} className="border-t border-ink/20 py-4">
                {partner.website ? (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:text-pink"
                    aria-label={`Visit ${partner.name} website`}
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
