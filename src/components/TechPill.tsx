export default function TechPill({
  tech,
  className,
}: {
  tech: string;
  className?: string;
}) {
  return (
    <span
      className={`text-slate-100 drop-shadow-xl border border-secondary bg-accent px-2 sm:px-3 py-1 rounded-full text-sm font-silkscreen tracking-wide shadow-sm ${className}`}
    >
      {tech}
    </span>
  );
}
