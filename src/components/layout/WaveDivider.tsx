interface WaveDividerProps {
  variant: "light-to-dark" | "dark-to-light";
  className?: string;
}

export function WaveDivider({ variant, className = "" }: WaveDividerProps) {
  const fill = variant === "light-to-dark" ? "#0b2147" : "#f9f7f2";

  return (
    <div className={`relative -mt-px w-full leading-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-12 w-full sm:h-16 lg:h-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
