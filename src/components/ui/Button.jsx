import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  ...props
}) {
  const sizeClasses = {
    sm: "text-xs py-2 px-3.5 rounded-lg",
    md: "text-sm md:text-base py-3 px-6 rounded-xl",
    lg: "text-base md:text-lg py-3.5 px-8 rounded-xl",
  }[size] || "text-base py-3 px-6 rounded-xl";

  const variantClass = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    text: "btn-text",
  }[variant] || "btn-primary";

  const combinedClasses = `${variantClass} ${sizeClasses} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}
