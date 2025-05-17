export default function PageSubheader({ title }: { title: string }) {
  return (
    <p className="text-center text-white drop-shadow-hero text-2xl max-w-2xl">
      {title}
    </p>
  );
}
