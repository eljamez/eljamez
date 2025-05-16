import Link from "next/link";

export default function HomeSubheader({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className="text-[1.5rem] sm:text-[2.5rem] text-center hover:scale-105 transition-all cursor-pointer hover:underline leading-normal"
        >
          {children}
        </Link>
      ) : (
        <p className="text-[1.5rem] sm:text-[2.5rem] text-center leading-normal">
          {children}
        </p>
      )}
    </>
  );
}
