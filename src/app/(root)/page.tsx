import Link from "next/link";

import { Button } from "@/components/ui/button";
import { courses, languagesFilters } from "@/lib/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-5">
      <div className="relative flex flex-col h-[450px] overflow-hidden justify-center items-center bg-primary-rosesoft gap-5 pt-28 mb-10">
        <div className="flex flex-col justify-center items-center gap-5 w-full z-10">
          <h1 className="text-3xl font-semibold">Explore our courses</h1>
          <Button className="w-[150px] py-6">Get started</Button>
        </div>
        <div className="absolute right-0 bottom-[-100px] w-[450px] h-[400px] z-0">
          <Image alt="bubble-2" src="/bubble-1.svg" fill />
        </div>
        <div className="absolute left-0 bottom-[-100px] w-[450px] h-[400px] z-0">
          <Image alt="bubble-2" src="/bubble-2.svg" fill />
        </div>
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
                className="border border-slate-300 rounded-md overflow-hidden flex flex-col max-w-[250px] w-full bg-white"
              >
                <div
                  className={`flex h-[150px] font-bold text-lg justify-center items-center ${item.bg}`}
                >
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
    </main>
  );
}
