import { Cloud, Reveal } from "@/components/atmosphere";
import { SectionMark } from "@/components/SectionMark";
import { faq } from "@/data/event";

export function Faq() {
  return (
    <section id="faq" className="relative isolate overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
      <Cloud depth={3} variant={2} className="top-[15%] right-[-30%] w-[100%] lg:w-[60%]" />

      <div className="mx-auto max-w-[1600px]">
        <SectionMark index="06" title="Questions" note="Still unsure? Write to us" />

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <h2 className="display text-[13vw] leading-[0.8] lg:col-span-4 lg:text-[7vw]">
            Practical
            <br />
            <span className="text-pink italic">things</span>
          </h2>

          <div className="lg:col-span-8">
            <dl className="border-t border-ink/25">
              {faq.map((item, i) => (
                <Reveal as="div" key={item.q} delay={i * 25}>
                  <details className="group border-b border-ink/15">
                    <summary className="flex cursor-pointer list-none items-baseline gap-4 py-4 marker:hidden">
                      <span className="font-mono text-[11px] text-ink/40 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <dt className="display flex-1 text-2xl leading-none sm:text-3xl">{item.q}</dt>
                      <span
                        aria-hidden="true"
                        className="font-mono text-lg text-pink transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <dd className="max-w-2xl pb-5 pl-10 text-lg leading-relaxed text-ink/80">
                      {item.a}
                    </dd>
                  </details>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
