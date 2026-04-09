type StepRowProps = {
  step: number;
  title: string;
  description: string;
  bullets?: string[];
  cta?: React.ReactNode;
};

export function StepRow({
  step,
  title,
  description,
  bullets,
  cta,
}: StepRowProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start py-8 border-b border-neutral-200/70 last:border-b-0">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-900 text-white text-sm font-semibold flex items-center justify-center tabular-nums">
        {step}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg md:text-xl font-semibold text-neutral-900 tracking-tight">
          {title}
        </h3>
        <p className="mt-2 text-neutral-600 leading-relaxed text-[15px] md:text-base">
          {description}
        </p>
        {bullets && bullets.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {bullets.map((b, i) => (
              <li key={i} className="text-neutral-600 text-sm flex gap-2">
                <span className="text-neutral-400 shrink-0">·</span>
                {b}
              </li>
            ))}
          </ul>
        )}
        {cta && <div className="mt-6">{cta}</div>}
      </div>
    </div>
  );
}
