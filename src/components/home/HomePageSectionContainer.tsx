export default function HomePageSectionContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full h-screen flex flex-col items-center justify-center px-2 sm:px-4 relative overflow-hidden text-5xl text-center sm:text-[5rem] font-bold ${className}`}
    >
      {children}
    </div>
  );
}
