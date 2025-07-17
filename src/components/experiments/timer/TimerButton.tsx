export default function TimerButton({
  onClick,
  title,
  className,
}: {
  onClick: () => void;
  title: string;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 hover:scale-105 hover:shadow-lg transition-all duration-300 text-white px-4 py-2 rounded-md ${className}`}
    >
      {title}
    </button>
  );
}
