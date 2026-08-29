/**
 * Portrait slot. Drop a real image path into `src` (imported asset or URL)
 * and the composition stays identical.
 */
export function Portrait({
  src,
  name,
  className = "",
  ratio = "aspect-[4/5]",
}: {
  src?: string | undefined;
  name: string;
  className?: string | undefined;
  ratio?: string | undefined;
}) {
  return (
    <div className={`relative overflow-hidden bg-peri/70 ${ratio} ${className}`}>
      {src ? (
        <img
          src={src}
          alt={name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover grayscale-[15%] transition-transform duration-700 hover:scale-[1.03]"
        />
      ) : (
        <div className="flex h-full w-full flex-col justify-between p-3">
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-grape/70">
            photo
          </span>
          <svg
            viewBox="0 0 100 100"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full text-grape/25"
            preserveAspectRatio="none"
          >
            <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.4" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.4" />
          </svg>
          <span className="relative font-mono text-[10px] tracking-[0.18em] uppercase text-grape/70">
            {name}
          </span>
        </div>
      )}
    </div>
  );
}
