"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Check, Circle, Code, PlaySquare } from "lucide-react";
import {
  UserCourseProgressProvider,
  useUserCourseProgressContext,
} from "@/context/UserCourseProgressContext";

import { cairoCourseContent } from "@/lib/data";
import ContentWrapper from "@/components/learn/content/contentwrapper";

export default function CairoCourseContentPageWrapper() {
  return (
    <UserCourseProgressProvider>
      <CairoCourseContentPage />
    </UserCourseProgressProvider>
  );
}

function CairoCourseContentPage() {
  const router = useRouter();
  const pathName = usePathname();
  const findCurrentModule = pathName.split("/").slice(1);
  const curentModuleNumber = Number(
    findCurrentModule[findCurrentModule.length - 1]
  );
  const { progress } = useUserCourseProgressContext();

  const findModuleContent = cairoCourseContent
    .flatMap((item) => item.contents)
    .find((content) => content.module === curentModuleNumber);

  const findNextModuleContent = (currentModuleNumber: number) => {
    const allContents = cairoCourseContent.flatMap((item) => item.contents);
    const currentIndex = allContents.findIndex(
      (content) => content.module === currentModuleNumber
    );
    return currentIndex >= 0 && currentIndex < allContents.length - 1
      ? allContents[currentIndex + 1]
      : null;
  };

  const nextModuleContent = findNextModuleContent(curentModuleNumber);

  useEffect(() => {
    if (!findModuleContent) {
      router.replace("/learn/cairo/content");
      return;
    }

    if (findModuleContent.type === "practice") {
      router.replace(
        `/learn/cairo/exercise/module/${findModuleContent.module}`
      );
    }
  }, [findModuleContent, router]);

  return (
    <div className="flex flex-row w-full px-10 py-5 gap-5">
      <div className="flex flex-col w-2/6">
        {cairoCourseContent.map((item, key) => (
          <div
            className="flex flex-col border border-slate-200 rounded-md bg-white"
            key={key}
          >
            <h1 className="text-lg font-bold gap-5 border-b border-slate-300 py-3 px-5">
              {item.title}
            </h1>
            <div className="flex flex-col w-full divide-y divide-slate-300">
              {item.contents.map((contents, k) => {
                const isCompleted = progress.some(
                  (p) => p.moduleId === contents.module && p.completed
                );

                return (
                  <Link
                    href={
                      contents.type === "content"
                        ? `/learn/cairo/content/module/${contents.module}`
                        : `/learn/cairo/exercise/module/${contents.module}`
                    }
                    key={k}
                    className="flex flex-row items-center  justify-between px-5 py-3 hover:bg-slate-100 cursor-pointer transition-all"
                  >
                    <div className="flex flex-row items-center justify-center gap-4">
                      {contents.type === "content" ? (
                        <PlaySquare size={20} />
                      ) : (
                        <Code size={20} />
                      )}
                      <p className="text-sm">{contents.title}</p>
                    </div>
                    <div className="flex justify-center items-center w-[20px]">
                      {isCompleted ? (
                        <div className="rounded-full border border-green-600 p-1">
                          <Check size={15} className="text-green-600" />
                        </div>
                      ) : (
                        <Circle size={20} className="text-slate-300" />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {findModuleContent && (
        <ContentWrapper
          courseContent={findModuleContent}
          curentModuleNumber={curentModuleNumber}
          nextModuleContent={nextModuleContent}
        />
      )}
    </div>
  );
}
