import { Cloud } from "@/components/atmosphere";
import { SectionMark } from "@/components/SectionMark";
import { Portrait } from "@/components/Portrait";
import { SpeakerProfile } from "@/components/EventDetails";
import { speakers } from "@/data/event";

export function Speakers() {
  return (
    <section
      id="speakers"
      className="speakers-section relative isolate overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <Cloud
        depth={2}
        variant={2}
        className="top-[2%] left-[-34%] w-[115%] lg:w-[68%]"
        opacity={0.26}
      />
      <div className="mx-auto max-w-[1600px]">
        <SectionMark index="04" title="Speakers" note="Speakers & panelists" />
        <h2 className="speakers-heading display mx-auto">
          Meet the <span className="text-pink italic">speakers</span>
        </h2>
        <ul className="speaker-grid">
          {[...speakers]
            .sort((a, b) => a.displayOrder - b.displayOrder)
            .map((speaker) => (
              <li key={speaker.id} className="min-w-0">
                <SpeakerProfile
                  speaker={speaker}
                  trigger={
                    <button
                      type="button"
                      className="speaker-card group"
                      aria-label={`View profile: ${speaker.name}`}
                    >
                      <Portrait src={speaker.photo} name={speaker.name} ratio="aspect-[4/5]" />
                      <span className="speaker-card__copy">
                        <span className="display leading-[1.05]">{speaker.name}</span>
                        <span className="mono-label text-pink">{speaker.eventRole}</span>
                        <span className="text-sm font-semibold text-grape">{speaker.role}</span>
                        <span className="text-sm text-ink/70">{speaker.organization}</span>
                        <span className="line-clamp-3 leading-relaxed">{speaker.shortBio}</span>
                        <span className="detail-link mt-auto w-fit">View Profile ↗</span>
                      </span>
                    </button>
                  }
                />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
