import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { OpeningIntro } from "@/components/OpeningIntro";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Schedule } from "@/components/sections/Schedule";
import { Speakers } from "@/components/sections/Speakers";
import { Venue } from "@/components/sections/Venue";
import { Team } from "@/components/sections/Team";
import { Partners } from "@/components/sections/Partners";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

import { event } from "@/data/event";

const title = "Qiskit Fall Fest 2026, Budapest, BME · Oct 30";
const description = `A free, student-organized Qiskit Fall Fest at ${event.host}, ${event.dates}. Doors open ${event.doorsOpenTime}; programme ${event.startTime} - ${event.endTime} Budapest time. Talks, challenges, a panel discussion, and networking. Supported by IBM Quantum. Register now.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-paper text-ink">
      <OpeningIntro />
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Schedule />
        <Venue />
        <Speakers />
        <Team />
        <Partners />
        <Faq />
        <Contact />
      </main>
    </div>
  );
}
