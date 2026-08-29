import { Cloud, Reveal } from "@/components/atmosphere";
import { SectionMark } from "@/components/SectionMark";

export function About() {
  return (
    <section id="about" className="about-section relative isolate overflow-hidden px-4 sm:px-6 lg:px-8">
      <Cloud depth={2} variant={1} className="top-[6%] left-[-38%] w-[120%] lg:w-[64%]" opacity={0.3} flip />
      <Cloud depth={3} variant={2} desktopOnly className="bottom-[-36%] right-[-22%] w-[78%]" opacity={0.25} />

      <div className="mx-auto max-w-[1600px]">
        <SectionMark index="01" title="About" note="Global series · Local edition" />

        <Reveal as="h2" className="about-headline mx-auto">
          <span className="about-headline__line display block">
            Ten years of
          </span>
          <span className="about-headline__line about-headline__line--accent display block text-pink italic">
            quantum on
          </span>
          <span className="about-headline__line about-headline__line--final display block">
            the cloud.
          </span>
        </Reveal>

        <div className="about-columns grid gap-10 md:grid-cols-3">
          <Reveal className="about-column">
            <p className="mono-label">01 / Qiskit Fall Fest</p>
            <p className="about-column__body text-ink/85">
              Qiskit Fall Fest is a global series of community-led quantum computing events, hosted
              each autumn by student groups and universities around the world with support from IBM
              Quantum. Every edition is designed and run locally, with talks, workshops and challenges
              built by students, for students.
            </p>
          </Reveal>

          <Reveal delay={80} className="about-column">
            <p className="mono-label">02 / Qiskit &amp; IBM Quantum</p>
            <p className="about-column__body text-ink/85">
              Qiskit is an open-source SDK for working with quantum computers at the level of
              circuits, operators and primitives. IBM Quantum put real quantum hardware on the cloud
              in 2016. The 2026 Fall Fest theme marks a decade of anyone, anywhere, being able to
              run a circuit on a real machine.
            </p>
          </Reveal>

          <Reveal delay={160} className="about-column">
            <p className="mono-label">03 / The BME edition</p>
            <p className="about-column__body text-ink/85">
              Budapest's edition is organized by students at the Budapest University of Technology
              and Economics. For the second year in a row, BME has been selected to host Qiskit Fall
              Fest, this year from among more than 900 applications worldwide. Two days of quantum
              computing, all in English, free to attend, with no prior quantum experience required.
            </p>
            <p className="about-column__meta font-mono text-xs leading-relaxed text-ink/50">
              {"// event details are placeholders until confirmed"}
            </p>
          </Reveal>
        </div>

        {/* visual interruption: technical annotation strip */}
        <div className="about-marquee overflow-hidden border-y border-ink/20 py-3">
          <div className="marquee-track flex w-max gap-10 font-mono text-[11px] tracking-[0.2em] whitespace-nowrap uppercase text-ink/60">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="flex gap-10">
                <span>Free entry</span>
                <span className="text-pink">Superposition ≠ magic</span>
                <span>H · CX · RZ · measure</span>
                <span>29 / 30 Oct 2026</span>
                <span className="text-pink">Student organized</span>
                <span>Budapest, HU</span>
                <span>|0⟩ + |1⟩ / √2</span>
                <span className="text-pink">Bring a laptop</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
