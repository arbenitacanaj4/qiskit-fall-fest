import { Cloud } from "@/components/atmosphere";
import { SectionMark } from "@/components/SectionMark";
import { partners } from "@/data/event";

function LogoSlot({ name, note }: { name: string; note: string }) {
  return (
    <li className="partner-entry">
      <p className="partner-entry__name display">{name}</p>
      <p className="partner-entry__note mono-label">{note}</p>
    </li>
  );
}

export function Partners() {
  return (
    <section id="partners" className="partners-section relative isolate overflow-hidden px-4 sm:px-6 lg:px-8">
      <Cloud depth={3} variant={2} className="top-[-34%] left-[-32%] w-[120%] lg:w-[58%]" opacity={0.18} flip />

      <div className="mx-auto max-w-[1600px]">
        <SectionMark index="06" title="Partners"/>
        <ul className="partner-list">
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
