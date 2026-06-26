import Image from "next/image";

interface LogoProps {
  variant?: "header" | "footer";
  priority?: boolean;
  className?: string;
}

const variantStyles = {
  header: "h-14 w-auto sm:h-16 md:h-[4.5rem] lg:h-20",
  footer: "h-20 w-auto sm:h-24 lg:h-28",
};

export function Logo({ variant = "header", priority = false, className = "" }: LogoProps) {
  return (
    <Image
      src="/images/logo.png"
      alt="Usmani Property Management"
      width={666}
      height={195}
      priority={priority}
      className={`${variantStyles[variant]} ${className}`}
    />
  );
}
