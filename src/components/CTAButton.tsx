import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-2xl";
  const variants = {
    primary:
      "bg-neutral-900 text-white border border-neutral-900 shadow-surface hover:bg-neutral-800 hover:border-neutral-800 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
    secondary:
      "bg-white text-neutral-900 border-2 border-neutral-200 shadow-surface hover:bg-neutral-50 hover:border-neutral-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} group relative overflow-hidden`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      {children}
    </Link>
  );
}
