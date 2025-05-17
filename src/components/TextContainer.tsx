export default function TextContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-blend-saturation bg-white/50
          rounded-lg text-slate-800 shadow overflow-hidden backdrop-blur-md p-8 text-lg sm:text-xl ${className}`}
    >
      {children}
    </div>
  );
}
