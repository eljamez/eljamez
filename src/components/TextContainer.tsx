export default function TextContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-gradient-to-br bg-blend-saturation from-zinc-400/40 to-white/30
          rounded-lg text-slate-800 shadow overflow-hidden backdrop-blur-md p-8 text-lg sm:text-xl ${className}`}
    >
      {children}
    </div>
  );
}
