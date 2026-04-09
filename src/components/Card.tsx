type CardProps = {
  children: React.ReactNode;
  className?: string;
};

/** Light surface card; prefer sparingly—many homepage sections now use flat dividers. */
export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-neutral-200/70 bg-white/70 backdrop-blur-sm px-6 py-6 md:px-7 md:py-7 transition-colors hover:border-neutral-300/80 ${className}`}
    >
      {children}
    </div>
  );
}
