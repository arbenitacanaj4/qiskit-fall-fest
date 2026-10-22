import { Cloud } from "@/components/atmosphere";
import { SectionMark } from "@/components/SectionMark";
import { SessionDetails } from "@/components/EventDetails";
import { event, sessions, speakers } from "@/data/event";

export function Schedule() {
  return (
    <section
      id="schedule"
      className="programme-section relative isolate overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <Cloud
        depth={3}
        variant={1}
        className="top-[-24%] right-[-38%] w-[125%] lg:w-[76%]"
        opacity={0.24}
      />
      <div className="mx-auto max-w-[1600px]">
        <SectionMark index="02" title="Programme" />
        <div className="agenda-heading">
          <h2 className="agenda-intro display">
            AN <span className="text-pink">UNCLASSICAL</span> AFTERNOON.
          </h2>
          <p className="agenda-tagline text-xl text-grape sm:text-2xl">
            The usual rules need not apply.
          </p>
          <p className="agenda-datetime mono-label">
            <span>{event.dates}</span>
            <span>
              {event.startTime} - {event.endTime}
            </span>
          </p>
        </div>
        <ol className="agenda-list border-t border-ink/25">
          {sessions
            .filter((session) => session.id !== "registration")
            .map((session) => {
              const names = speakers
                .filter((speaker) => session.speakerIds.includes(speaker.id))
                .map((speaker) => speaker.name);
              const detailed = session.speakerIds.length > 0 || session.type === "Challenge";
              const content = (
                <>
                  <span className="agenda-time font-mono text-sm text-grape tabular-nums">
                    {session.startTime} - {session.endTime}
                  </span>
                  <span className="min-w-0">
                    {session.type === "Challenge" && (
                      <span className="agenda-type mono-label text-pink">Challenge</span>
                    )}
                    <span
                      className={
                        detailed
                          ? "display block text-2xl sm:text-3xl"
                          : "display block text-xl sm:text-2xl"
                      }
                    >
                      {session.title}
                    </span>
                    <span className="mt-1 block text-sm text-ink/70">
                      {session.id === "welcome" ? "Vice dean’s welcome · " : ""}
                      {names.length
                        ? names.join(", ") + " · " + session.type
                        : session.description.join(" ") || session.type}
                    </span>
                  </span>
                  {detailed && <span className="detail-link w-fit">Explore Session ↗</span>}
                </>
              );
              return (
                <li
                  key={session.id}
                  className={
                    "border-b border-ink/20 " + (session.id === "welcome" ? "agenda-opening" : "")
                  }
                >
                  {detailed ? (
                    <SessionDetails
                      session={session}
                      trigger={
                        <button
                          type="button"
                          className="agenda-row"
                          aria-label={"Explore " + session.title}
                        >
                          {content}
                        </button>
                      }
                    />
                  ) : (
                    <div className="agenda-row agenda-row--quiet">{content}</div>
                  )}
                </li>
              );
            })}
        </ol>
      </div>
    </section>
  );
}
