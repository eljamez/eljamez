export default function ExperimentsHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-xl text-slate-500">{description}</p>
    </div>
  );
}
