export default function PageSubheader({ title }: { title: string }) {
  return (
    <p className="text-slate-800 text-center text-2xl max-w-2xl">{title}</p>
  );
}
