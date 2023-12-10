import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export default function CairoCourseIntroPage() {
  return (
    <div
      style={{ height: "calc(100vh - 50px)" }}
      className="flex flex-col overflow-hidden justify-center items-center max-w-3xl m-auto just py-10 gap-10 bg-white"
    >
      <div className="flex flex-row gap-2 items-center justify-center">
        <Image src={"/zig_lang.png"} width={40} height={40} alt="cairo_lang" />
        <h1 className="text-3xl font-bold">Welcome to Zig Course</h1>
      </div>
      <div className="flex flex-row justify-between items-start w-2/3">
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm font-bold">31 minutes</p>
          <p className="text-sm text-slate-600">time to complete</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm font-bold">Beginner</p>
          <p className="text-sm text-slate-600">skill level</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm font-bold">Basic Coding</p>
          <p className="text-sm text-slate-600">pre-requisites</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center text-center px-10">
        <p>
          Embark on a journey to master Zig, an emerging programming language
          designed for robustness, optimality, and clarity. This course
          introduces you to the fundamentals of Zig, from its unique approach to
          error handling and resource management to its powerful compile-time
          features.
        </p>
        <p>
          You'll learn how to write efficient, maintainable code for a variety
          of applications, including system programming and cross-platform
          development. Discover the efficiency of Zig's comptime capabilities,
          and gain practical experience by tackling real-world coding
          challenges.
        </p>
        <p>
          By the end of the course, you'll have a solid foundation in Zig and be
          ready to leverage its features for optimal performance and reliability
          in your projects.
        </p>
      </div>
      <div className="w-full flex flex-col gap-5 justify-center items-center">
        <p className="text-lg">Skills you'll obatin</p>
        <div className="w-full flex flex-wrap gap-2 justify-center items-center">
          <Badge>Zig Language</Badge>
          <Badge>System Programming</Badge>
          <Badge>Compile-time Techniques</Badge>
        </div>
      </div>
      <Link
        href={"/learn/zig/exercise/module/1"}
        className="bg-blue-600 text-lg font-bold py-4 hover:bg-blue-900 transition-all px-5 rounded-md text-white"
      >
        Start now
      </Link>
    </div>
  );
}
