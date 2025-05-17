export default function PageHeader({ title }: { title: string }) {
  return (
    <h1 className="text-4xl sm:text-6xl font-russo-one mb-2 text-white drop-shadow-hero">
      {title}
    </h1>
  );
}
