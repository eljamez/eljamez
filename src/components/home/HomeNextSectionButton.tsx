import { FaArrowDown } from "react-icons/fa";

export default function HomeNextSectionButton({
  sectionId,
}: {
  sectionId: string;
}) {
  return (
    <button
      className="absolute left-1/2 -translate-x-1/2 bottom-8 z-20 bg-zinc-900/80 hover:bg-zinc-800 text-white p-3 rounded-full shadow-lg animate-bounce focus:outline-none"
      onClick={() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
        });
      }}
      aria-label={`Scroll to ${sectionId}`}
    >
      <FaArrowDown size={28} />
    </button>
  );
}
