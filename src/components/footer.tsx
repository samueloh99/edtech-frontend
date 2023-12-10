import Link from "next/link";

export function Footer() {
  return (
    <div className="flex flex-col bg-white mt-60 w-full h-full md:h-[300px]">
      <div className="main-container flex flex-col w-full h-full justify-between items-start py-5 gap-10 md:gap-0">
        <div className="flex flex-col md:flex-row justify-between items-star w-full gap-10 md:gap-0">
          <div className="flex flex-col justify-start items-center md:items-start w-full gap-2">
            <p className="text-xl font-bold">Code Space</p>
            <ul className="flex flex-col items-center md:items-start text-md">
              <Link href={"/"}>Home</Link>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-between gap-10 md:gap-0">
            <div className="flex flex-col justify-start items-center md:items-start w-full gap-2">
              <p className="text-lg font-bold">Community</p>
              <ul className="flex flex-col items-center md:items-start text-md">
                <Link
                  href={"https://www.youtube.com/@MyCairoAcademia"}
                  target="_blank"
                >
                  Youtube
                </Link>
              </ul>
            </div>
            <div className="flex flex-col justify-start items-center md:items-start w-full gap-2">
              <p className="text-lg font-bold">Courses</p>
              <ul className="flex flex-col items-center md:items-start text-md">
                <Link href={"/"}>All courses</Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-start items-center text-xs text-slate-600">
          <p>@2023 Code Space</p>
        </div>
      </div>
    </div>
  );
}
