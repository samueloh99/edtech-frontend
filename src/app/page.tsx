import { courses, languagesFilters } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col gap-5">
        <div className="flex h-[200px] justify-center items-center bg-green-100">
          <h1 className="text-3xl font-semibold">Courses</h1>
        </div>
        <div className="flex flex-col gap-10 main-container">
          <div className="flex flex-wrap gap-5">
            {languagesFilters.map((item, key) => {
              return (
                <div
                  key={key}
                  className="border border-black p-2 rounded-md font-bold text-md"
                >
                  {item.name}
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-5">
            {courses.map((item, key) => {
              return (
                <Link
                  key={key}
                  href={`/courses/${item.slug}`}
                  className="border border-slate-300 rounded-md overflow-hidden flex flex-col max-w-[250px] w-full"
                >
                  <div className="flex h-[150px] bg-orange-300 font-bold justify-center items-center">
                    <p>{item.name}</p>
                  </div>
                  <div className="flex flex-col justify-between items-start h-[100px] p-3">
                    <div className="flex flex-col justify-start items-start">
                      <div className="flex flex-row justify-center items-center text-sm gap-2">
                        <p>{item.lessons} lessons</p>
                        <p>|</p>
                        <p>{item.totalHours} hours</p>
                      </div>
                      <p className="text-sm">
                        with <span className="font-bold">{item.author}</span>
                      </p>
                    </div>
                    <p className="text-sm">{item.level}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
