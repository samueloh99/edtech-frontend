"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { User } from "lucide-react";

export function LearnHeader() {
  const pathName = usePathname();
  const breadcrumbs = pathName.split("/").slice(1);
  return (
    <div className="flex flex-row justify-between items-center md:px-10 px-5 h-[50px] bg-black text-white w-full">
      <ul className="hidden md:flex flex-row justify-center items-center gap-2 text-sm">
        <Link href={"/"} className="font-bold">
          Code Space
        </Link>
        <li>/</li>
        {breadcrumbs.map((link, index) => (
          <li key={index}>
            {link} {index + 1 === breadcrumbs.length ? "" : "/"}
          </li>
        ))}
      </ul>
      <ul className="flex md:hidden flex-row justify-center items-center gap-2 text-sm">
        <Link href={"/"} className="font-bold">
          Code Space
        </Link>
      </ul>
    </div>
  );
}
