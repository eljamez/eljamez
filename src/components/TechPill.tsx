export default function TechPill({
  tech,
  className,
}: {
  tech: string;
  className?: string;
}) {
  return (
    <span
      className={`text-slate-100 drop-shadow-xl bg-accent px-2 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-silkscreen tracking-wide shadow-sm ${className}`}
    >
      {tech}
    </span>
  );
}
