export default function ExperimentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl bg-white/80 p-4 sm:p-8 text-slate-800 h-full w-full flex-1">
      {children}
    </div>
  );
}
