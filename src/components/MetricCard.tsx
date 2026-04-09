type MetricCardProps = {
  value: string;
  label: string;
  sublabel?: string;
};

export function MetricCard({
  value,
  label,
  sublabel,
}: MetricCardProps) {
  return (
    <div className="rounded-xl border border-neutral-200/60 bg-white/70 backdrop-blur-sm px-4 py-5 md:px-5 md:py-6 text-center transition-colors hover:border-neutral-300/90">
      <div className="text-lg md:text-xl font-semibold text-neutral-900 tracking-tight leading-tight">
        {value}
      </div>
      <div className="mt-1.5 text-xs md:text-sm font-medium text-neutral-600">
        {label}
      </div>
      {sublabel && (
        <div className="mt-0.5 text-[11px] md:text-xs text-neutral-500">{sublabel}</div>
      )}
    </div>
  );
}
