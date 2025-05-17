export default function TextContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
          text-slate-100 drop-shadow-hero leading-relaxed rounded-lg text-lg sm:text-xl ${className}`}
    >
      {children}
    </div>
  );
}
