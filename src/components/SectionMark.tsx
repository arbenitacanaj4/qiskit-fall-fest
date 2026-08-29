/** Editorial section marker: number, name, and a technical note on one rule. */
export function SectionMark({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="rule-ink flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 pt-3">
      <p className="mono-label">
        <span className="text-pink">{index}</span> <span className="mx-2 text-ink/25">/</span> {title}
      </p>
      {note && <p className="mono-label">{note}</p>}
    </div>
  );
}
