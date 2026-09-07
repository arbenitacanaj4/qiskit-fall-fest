type ArrowIconProps = {
  className?: string;
  title?: string;
};

export function ArrowIcon({ className = "", title }: ArrowIconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
    >
      {title && <title>{title}</title>}
      <path
        d="M4 12L12 4M6.25 4H12V9.75"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
