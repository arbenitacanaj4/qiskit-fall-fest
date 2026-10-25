/** Editorial section marker: number and an optional technical note on one rule. */
export function SectionMark({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note?: string | undefined;
}) {
  return (
    <div className="rule-ink flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 pt-3">
      <p className="section-label mono-label" aria-label={`${index} ${title}`}>
        <span className="section-label__number text-pink">{index}</span>
      </p>
      {note && <p className="mono-label">{note}</p>}
    </div>
  );
}
