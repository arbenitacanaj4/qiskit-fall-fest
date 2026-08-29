import { Cloud } from "@/components/atmosphere";
import { SectionMark } from "@/components/SectionMark";
import { partners } from "@/data/event";

function LogoSlot({ name, note }: { name: string; note: string }) {
  return (
    <li className="flex min-h-[9rem] flex-col justify-between gap-4 border-t border-ink/25 pt-4">
      <div className="flex min-h-16 items-center">
        <span className="display text-2xl leading-none text-ink/80 lg:text-3xl">{name}</span>
      </div>
      <div>
        <p className="mono-label mt-1">{note}</p>
      </div>
    </li>
  );
}

export function Partners() {
  return (
    <section className="partners-section relative isolate overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Cloud depth={3} variant={2} className="top-[-34%] left-[-32%] w-[120%] lg:w-[58%]" opacity={0.18} flip />

      <div className="mx-auto max-w-[1600px]">
        <SectionMark index="07" title="Support" note="Current supporters · Sponsors TBC" />
        <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((p) => (
            <LogoSlot
              key={p.name}
              name={p.name}
              note={p.note}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
