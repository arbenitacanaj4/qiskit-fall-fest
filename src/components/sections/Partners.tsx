import { SectionMark } from "@/components/SectionMark";
import { partners } from "@/data/event";
import ibmQuantum from "@/assets/ibm-quantum-logotype.jpg.asset.json";

/** Logo slot: replace `logo` with an imported asset URL, layout stays put. */
function LogoSlot({ name, note, logo }: { name: string; note: string; logo?: string }) {
  return (
    <li className="flex min-h-[9rem] flex-col justify-between gap-4 border-t border-ink/25 pt-4">
      <div className="flex min-h-16 items-center">
        {logo ? (
          <img src={logo} alt={name} loading="lazy" className="max-h-14 w-auto max-w-[70%]" />
        ) : (
          <span className="display text-2xl leading-none text-ink/80 lg:text-3xl">{name}</span>
        )}
      </div>
      <div>
        {logo && <p className="display text-lg leading-none text-ink/70">{name}</p>}
        <p className="mono-label mt-1">{note}</p>
      </div>
    </li>
  );
}

export function Partners() {
  return (
    <section className="relative isolate px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1600px]">
        <SectionMark index="07" title="Support" note="Official logos to be added" />
        <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((p) => (
            <LogoSlot
              key={p.name}
              name={p.name}
              note={p.note}
              logo={p.official ? ibmQuantum.url : undefined}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
