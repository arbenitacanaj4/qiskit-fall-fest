import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Schedule } from "@/components/sections/Schedule";
import { Speakers } from "@/components/sections/Speakers";
import { Venue } from "@/components/sections/Venue";
import { Team } from "@/components/sections/Team";
import { Faq } from "@/components/sections/Faq";
import { Partners } from "@/components/sections/Partners";
import { Contact } from "@/components/sections/Contact";

const title = "Qiskit Fall Fest 2026 — Budapest, BME · Oct 29—30";
const description =
  "A free, student-organized Qiskit Fall Fest at Budapest University of Technology and Economics, October 29—30, 2026. Talks, Qiskit workshops and a coding challenge. Register now.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-paper text-ink">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Schedule />
        <Speakers />
        <Venue />
        <Team />
        <Faq />
        <Partners />
        <Contact />
      </main>
    </div>
  );
}
