export default function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-2xl sm:text-5xl text-center sm:text-[5rem] font-bold">
      {children}
    </h3>
  );
}
