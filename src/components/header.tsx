import Link from "next/link";

export function Header() {
  return (
    <div className="flex h-[70px] bg-transparent absolute top-0 z-30 w-full">
      <div className="flex flex-row justify-between items-center main-container">
        <Link href={"/"} className="text-xl font-bold">
          Code Space
        </Link>
      </div>
    </div>
  );
}
