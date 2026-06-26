interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  description,
  align = "left",
  dark = false,
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const titleColor = dark ? "text-white" : "text-navy";
  const descColor = dark ? "text-white/80" : "text-charcoal/80";

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className={`font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl ${titleColor}`}>
        {title}
        {titleAccent && (
          <>
            {" "}
            <span className="text-gold">{titleAccent}</span>
          </>
        )}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}
