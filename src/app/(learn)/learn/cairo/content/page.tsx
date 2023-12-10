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
        <Image
          src={"/cairo_lang.svg"}
          width={40}
          height={40}
          alt="cairo_lang"
        />
        <h1 className="text-3xl font-bold">Welcome to Cairo Course</h1>
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
          Unlock the potential of blockchain development with Cairo, a
          revolutionary programming language designed for creating secure and
          scalable smart contracts on various platforms. This beginner-friendly
          course will guide you through the intricacies of Cairo, empowering you
          to craft innovative decentralized applications (dApps).{" "}
        </p>
        <p>
          Throughout the course, you'll gain hands-on experience with Cairo's
          unique features, such as its built-in formal verification for writing
          provably-correct smart contracts. We'll dive deep into the
          architecture of the STARK-based blockchain, explore how to optimize
          for ultra-efficient zero-knowledge proofs, and learn best practices
          for security and performance.
        </p>
        <p>
          By the end of this journey, you'll be equipped with the necessary
          skills to leverage Cairo's advanced capabilities, setting a strong
          foundation for your future as a blockchain developer.
        </p>
      </div>
      <div className="w-full flex flex-col gap-5 justify-center items-center">
        <p className="text-lg">Skills you'll obatin</p>
        <div className="w-full flex flex-wrap gap-2 justify-center items-center">
          <Badge>Rust</Badge>
          <Badge>Cairo</Badge>
        </div>
      </div>
      <Link
        href={"/learn/cairo/content/module/1"}
        className="bg-blue-600 text-lg font-bold py-4 hover:bg-blue-900 transition-all px-5 rounded-md text-white"
      >
        Start now
      </Link>
    </div>
  );
}
