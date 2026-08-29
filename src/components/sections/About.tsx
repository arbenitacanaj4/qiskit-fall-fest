import { Cloud, Reveal } from "@/components/atmosphere";
import { SectionMark } from "@/components/SectionMark";

export function About() {
  return (
    <section id="about" className="relative isolate overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
      <Cloud depth={2} variant={1} className="top-[10%] left-[-35%] w-[110%] lg:w-[60%]" opacity={0.3} flip />
      <Cloud depth={3} variant={2} desktopOnly className="bottom-[-30%] right-[-25%] w-[70%]" />

      <div className="mx-auto max-w-[1600px]">
        <SectionMark index="01" title="About" note="Global series · Local edition" />

        <Reveal as="h2" className="mt-8">
          <span className="display block text-[11vw] leading-[0.84] lg:text-[7.5vw]">
            Ten years of
          </span>
          <span className="display block text-[11vw] leading-[0.84] text-pink italic lg:ml-[10vw] lg:text-[7.5vw]">
            quantum on
          </span>
          <span className="display block text-[11vw] leading-[0.84] lg:ml-[3vw] lg:text-[7.5vw]">
            the cloud.
          </span>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4 lg:col-start-1">
            <p className="mono-label">01 / Qiskit Fall Fest</p>
            <p className="mt-3 text-lg leading-relaxed text-ink/85">
              Qiskit Fall Fest is a global series of community-led quantum computing events, hosted
              each autumn by student groups and universities around the world with support from IBM
              Quantum. Every edition is designed and run locally — talks, workshops and challenges
              built by students, for students.
            </p>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-4 lg:col-start-6">
            <p className="mono-label">02 / Qiskit &amp; IBM Quantum</p>
            <p className="mt-3 text-lg leading-relaxed text-ink/85">
              Qiskit is an open-source SDK for working with quantum computers at the level of
              circuits, operators and primitives. IBM Quantum put real quantum hardware on the cloud
              in 2016 — the 2026 Fall Fest theme marks a decade of anyone, anywhere, being able to
              run a circuit on a real machine.
            </p>
          </Reveal>

          <Reveal delay={160} className="lg:col-span-3 lg:col-start-10">
            <p className="mono-label">03 / The BME edition</p>
            <p className="mt-3 text-lg leading-relaxed text-ink/85">
              Budapest's edition is organized by students at the Budapest University of Technology
              and Economics. Two days, no prior quantum experience required, everything in English,
              free to attend.
            </p>
            <p className="mt-4 font-mono text-xs leading-relaxed text-ink/50">
              {"// event details are placeholders until confirmed"}
            </p>
          </Reveal>
        </div>

        {/* visual interruption: technical annotation strip */}
        <div className="mt-20 overflow-hidden border-y border-ink/20 py-3">
          <div className="marquee-track flex w-max gap-10 font-mono text-[11px] tracking-[0.2em] whitespace-nowrap uppercase text-ink/60">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="flex gap-10">
                <span>Free entry</span>
                <span className="text-pink">Superposition ≠ magic</span>
                <span>H · CX · RZ · measure</span>
                <span>29—30 Oct 2026</span>
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
