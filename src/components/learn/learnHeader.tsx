import { User } from "lucide-react";
import Link from "next/link";

export function LearnHeader() {
  return (
    <div className="flex flex-row justify-between items-center md:px-10 px-5 h-[50px] bg-black text-white w-full">
      <ul className="hidden md:flex flex-row justify-center items-center gap-2 text-sm">
        <Link href={"/"} className="font-bold">
          Education Platform
        </Link>
        <li>/</li>
        <li>Cairo</li>
        <li>/</li>
        <li>Chapter 1</li>
      </ul>
      <ul className="flex md:hidden flex-row justify-center items-center gap-2 text-sm">
        <Link href={"/"} className="font-bold">
          Education Platform
        </Link>
      </ul>
      <div className="flex flex-row justify-center items-center gap-10 text-sm">
        <p>Get a plan</p>
        <div>
          <User size={20} />
        </div>
      </div>
    </div>
  );
}
