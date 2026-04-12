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
    <div className="rounded-xl border border-neutral-200/60 border-t-2 border-t-neutral-800 bg-white/70 backdrop-blur-sm px-4 py-5 md:px-5 md:py-6 text-center transition-all duration-200 hover:border-neutral-300/90 hover:bg-neutral-50/80 hover:shadow-surface-md">
      <div className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight leading-tight">
        {value}
      </div>
      <div className="mt-2 text-xs md:text-sm font-medium text-neutral-600">
        {label}
      </div>
      {sublabel && (
        <div className="mt-0.5 text-[11px] md:text-xs text-neutral-500">{sublabel}</div>
      )}
    </div>
  );
}
