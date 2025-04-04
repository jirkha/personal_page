"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname.startsWith("/#");

  return (
    <body
      className={clsx(
        "min-h-full w-full",
        isHomePage && "bg-gradient-to-b from-black to-slate-600"
      )}
    >
      {children}
    </body>
  );
}
