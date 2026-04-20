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
      "liquid-glass-strong text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 focus-visible:ring-offset-2",
    secondary:
      "liquid-glass text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/40 focus-visible:ring-offset-2",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} group`}
    >
      {children}
    </Link>
  );
}
