type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg shadow-black/20 p-6 md:p-8 transition-all duration-200 hover:bg-white/10 hover:border-white/15 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/25 ${className}`}
    >
      {children}
    </div>
  );
}
