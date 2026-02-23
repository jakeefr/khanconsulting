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
      "bg-white/10 text-white border border-white/10 backdrop-blur-xl shadow-lg shadow-black/20 hover:bg-white/15 hover:border-white/20 hover:-translate-y-0.5 focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent",
    secondary:
      "bg-white/5 text-white border-2 border-white/20 backdrop-blur-xl hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5 focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </Link>
  );
}
