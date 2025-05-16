export default function PageSubheader({ title }: { title: string }) {
  return (
    <p className="text-slate-800 text-center text-lg max-w-2xl">{title}</p>
  );
}
