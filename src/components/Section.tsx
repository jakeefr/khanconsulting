type SectionVariant = "default" | "hero" | "tight";

const variantClass: Record<SectionVariant, string> = {
  default: "py-16 md:py-24",
  hero: "pt-24 md:pt-32 pb-14 md:pb-20",
  tight: "py-12 md:py-16",
};

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: SectionVariant;
};

export function Section({
  children,
  className = "",
  id,
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${variantClass[variant]} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
