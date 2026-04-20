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
    <div className="liquid-glass rounded-xl px-4 py-5 md:px-5 md:py-6 text-center">
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
