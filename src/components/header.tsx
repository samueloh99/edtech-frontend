import Link from "next/link";

export function Header() {
  return (
    <div className="flex h-[70px] bg-white">
      <div className="flex flex-row justify-between items-center main-container">
        <Link href={"/"} className="text-xl font-bold">
          Education Platform
        </Link>
        <ul className="flex flex-row justify-center items-center gap-5 text-lg">
          <li>Pricing</li>
          <li>Log in</li>
        </ul>
      </div>
    </div>
  );
}
