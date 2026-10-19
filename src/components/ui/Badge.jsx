export default function Badge({
  children,
  icon: Icon,
  className = "",
  variant = "purple",
}) {
  const variantStyles = {
    purple: "bg-[#f4effe] text-[#5b13ff] border-[#e9dcff]",
    blue: "bg-[#eef4ff] text-[#2563eb] border-[#dbeafe]",
    amber: "bg-[#fffbeb] text-[#d97706] border-[#fef3c7]",
    green: "bg-[#ecfdf5] text-[#059669] border-[#d1fae5]",
  }[variant] || "bg-[#f4effe] text-[#5b13ff] border-[#e9dcff]";

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border shadow-xs transition-transform duration-200 hover:scale-105 ${variantStyles} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
}
