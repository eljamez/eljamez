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
          className="text-[2rem] text-center hover:scale-105 transition-all cursor-pointer hover:underline"
        >
          {children}
        </Link>
      ) : (
        <p className="text-[2rem] text-center">{children}</p>
      )}
    </>
  );
}
