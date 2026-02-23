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
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg shadow-black/20 p-6 md:p-8 transition-all duration-200 hover:bg-white/10 hover:border-white/15 hover:-translate-y-0.5">
      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl flex items-center justify-center text-lg font-bold text-white">
        {step}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-xl md:text-2xl font-semibold text-white">
          {title}
        </h3>
        <p className="mt-3 text-gray-300 leading-relaxed">{description}</p>
        {bullets && bullets.length > 0 && (
          <ul className="mt-4 space-y-2">
            {bullets.map((b, i) => (
              <li key={i} className="text-gray-300 text-sm flex gap-2">
                <span className="text-gray-400">—</span>
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
