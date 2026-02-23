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
    <div className="rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg shadow-black/20 p-6 text-center transition-all duration-200 hover:bg-white/10 hover:border-white/15 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/25">
      <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">
        {value}
      </div>
      <div className="mt-1 text-sm font-medium text-gray-300">{label}</div>
      {sublabel && (
        <div className="mt-0.5 text-xs text-gray-400">{sublabel}</div>
      )}
    </div>
  );
}
