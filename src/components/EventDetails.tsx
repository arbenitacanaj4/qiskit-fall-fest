import { useRef, useState, type ReactNode } from "react";
import { Linkedin } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Portrait } from "@/components/Portrait";
import {
  event,
  sessions,
  speakers,
  type Speaker,
  type Session,
  type ProfessionalLink,
} from "@/data/event";

function DetailsDialog({
  trigger,
  title,
  summary,
  children,
  onOpenChange,
}: {
  trigger: ReactNode;
  title: string;
  summary: string;
  children: ReactNode;
  onOpenChange?: (open: boolean) => void;
}) {
  return (
    <Dialog onOpenChange={(open) => onOpenChange?.(open)}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="event-dialog w-[calc(100%-2rem)] max-w-[52rem] rounded-none bg-paper p-6 text-ink sm:rounded-none sm:p-8">
        <DialogTitle className="display pr-8 text-[clamp(1.75rem,8vw,2.5rem)] leading-[1.05] sm:text-5xl sm:leading-none">
          {title}
        </DialogTitle>
        <DialogDescription className="text-base text-grape">{summary}</DialogDescription>
        {children}
      </DialogContent>
    </Dialog>
  );
}

function Links({ links }: { links: ProfessionalLink[] }) {
  return links.length > 0 ? (
    <ul className="flex flex-wrap gap-5">
      {links.map((link) => (
        <li key={link.url}>
          <a className="detail-link" href={link.url} target="_blank" rel="noreferrer">
            {link.label} ↗
          </a>
        </li>
      ))}
    </ul>
  ) : null;
}

function SpeakerContent({ speaker }: { speaker: Speaker }) {
  const talks = sessions.filter((session) => session.speakerIds.includes(speaker.id));
  const links = [...speaker.links];
  if (speaker.website) links.push({ label: "Website", url: speaker.website });
  return (
    <div className="grid items-start gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
      <Portrait src={speaker.photo} name={speaker.name} className="speaker-dialog-portrait" />
      <div className="min-w-0 space-y-5 leading-relaxed">
        <p className="mono-label text-pink">{speaker.eventRole}</p>
        {speaker.fullBio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        {talks.length > 0 && (
          <div>
            <h3 className="mono-label mb-3 text-grape">Sessions</h3>
            <ul className="space-y-6">
              {talks.map((talk) => (
                <li key={talk.id} className="space-y-2 border-t border-ink/20 pt-3">
                  <p className="mono-label text-grape">
                    {talk.startTime} - {talk.endTime} · {talk.type}
                  </p>
                  <h4 className="font-semibold">{talk.title}</h4>
                  {talk.description.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        )}
        {speaker.linkedin && (
          <a
            href={speaker.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${speaker.name} on LinkedIn`}
            className="detail-link inline-flex min-h-11 items-center gap-2 text-grape transition-colors hover:text-pink focus-visible:text-pink"
          >
            <Linkedin aria-hidden="true" className="size-4 shrink-0" />
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        )}
        <Links links={links} />
      </div>
    </div>
  );
}

export function SpeakerProfile({ speaker, trigger }: { speaker: Speaker; trigger: ReactNode }) {
  return (
    <DetailsDialog
      trigger={trigger}
      title={speaker.name}
      summary={speaker.role + " · " + speaker.organization}
    >
      <SpeakerContent speaker={speaker} />
    </DetailsDialog>
  );
}

export function SessionDetails({ session, trigger }: { session: Session; trigger: ReactNode }) {
  const [profile, setProfile] = useState<Speaker | null>(null);
  const profileTrigger = useRef<HTMLButtonElement | null>(null);
  const assignedSpeakers = speakers.filter((speaker) => session.speakerIds.includes(speaker.id));
  return (
    <DetailsDialog
      trigger={trigger}
      title={profile ? profile.name : session.title}
      summary={
        profile
          ? profile.role + " · " + profile.organization
          : event.dates + " · Budapest local time"
      }
      onOpenChange={(open) => {
        if (!open) setProfile(null);
      }}
    >
      {profile ? (
        <>
          <button
            type="button"
            className="detail-link w-fit"
            ref={(node) => node?.focus()}
            onClick={() => {
              setProfile(null);
              requestAnimationFrame(() => profileTrigger.current?.focus());
            }}
          >
            ← Back to session
          </button>
          <SpeakerContent speaker={profile} />
        </>
      ) : (
        <>
          <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-6 gap-y-2 border-y border-ink/20 py-4">
            <dt className="mono-label">Time</dt>
            <dd>
              {session.startTime} - {session.endTime}
            </dd>
            <dt className="mono-label">Type</dt>
            <dd>{session.type}</dd>
            {session.location && (
              <>
                <dt className="mono-label">Location</dt>
                <dd>{session.location}</dd>
              </>
            )}
          </dl>
          <div className="space-y-4 leading-relaxed">
            {session.description.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          {assignedSpeakers.length > 0 && (
            <div>
              <h3 className="mono-label mb-3 text-grape">
                {session.type === "Panel" ? "Panelists" : "Speakers"}
              </h3>
              <ul className="space-y-4">
                {assignedSpeakers.map((speaker) => (
                  <li key={speaker.id}>
                    <button
                      type="button"
                      className="detail-link"
                      ref={(node) => {
                        if (
                          node &&
                          node.dataset["speakerId"] === profileTrigger.current?.dataset["speakerId"]
                        )
                          profileTrigger.current = node;
                      }}
                      data-speaker-id={speaker.id}
                      onClick={(e) => {
                        profileTrigger.current = e.currentTarget;
                        setProfile(speaker);
                      }}
                    >
                      {speaker.name} · View profile ↗
                    </button>
                    <p className="mt-1 text-sm text-ink/70">{speaker.organization}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {session.prerequisites && (
            <div>
              <h3 className="mono-label mb-2 text-grape">Prerequisites</h3>
              <p>{session.prerequisites}</p>
            </div>
          )}
          {session.topics.length > 0 && (
            <div>
              <h3 className="mono-label mb-2 text-grape">Topics covered</h3>
              <ul className="list-disc pl-5">
                {session.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          )}
          <Links links={session.resources} />
        </>
      )}
    </DetailsDialog>
  );
}
