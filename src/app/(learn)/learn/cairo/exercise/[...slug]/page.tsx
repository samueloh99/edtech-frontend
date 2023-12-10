"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Check } from "lucide-react";
import confetti from "canvas-confetti";
import Editor, { OnChange } from "@monaco-editor/react";

import {
  UserCourseProgressProvider,
  useUserCourseProgressContext,
} from "@/context/UserCourseProgressContext";

import { cairoCourseContent, cairoExercises } from "@/lib/data";
import { postCairoCodeSubmission } from "@/lib/postCairoCode";
import { PostCairoCodeSubmissionType } from "@/lib/types";
import { Spinner } from "@/components/spinner";
import { ResetCodeDialog } from "@/components/learn/exercise/resetCodeDialog";
import { NextStepDialog } from "@/components/learn/exercise/nextStepDialog";
import { Button } from "@/components/ui/button";

interface FileStructure {
  [key: string]: {
    name: string;
    language: string;
    value: string;
  };
}

export default function CairoIntroWrapper() {
  return (
    <UserCourseProgressProvider>
      <CairoIntro />
    </UserCourseProgressProvider>
  );
}

const useFiles = (initialFiles: FileStructure) => {
  const [files, setFiles] = useState<FileStructure>(initialFiles);

  const updateFile = (fileName: string, value: string) => {
    setFiles((prevFiles) => ({
      ...prevFiles,
      [fileName]: { ...prevFiles[fileName], value },
    }));
  };

  return { files, updateFile };
};

function CairoIntro() {
  const router = useRouter();
  const pathName = usePathname();
  const { markModuleComplete, progress } = useUserCourseProgressContext();

  const findCurrentModuleNumber = pathName.split("/").slice(1);
  const curentModuleNumber = Number(
    findCurrentModuleNumber[findCurrentModuleNumber.length - 1]
  );

  const findExercise = cairoExercises.find(
    (exercise) => exercise.module === curentModuleNumber
  );

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
    if (findExercise === undefined) {
      router.replace("/learn/cairo/content");
    }
  }, [findExercise, router]);

  if (findExercise === undefined) {
    return null;
  }

  const [fileName, setFileName] = useState<string>("lib.cairo");
  const { files, updateFile } = useFiles(findExercise.file);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [loadingRunCode, setLoadingRunCode] = useState(false);
  const [codeResultConsole, setCodeResultConsole] =
    useState<PostCairoCodeSubmissionType>();

  const file = files[fileName];

  const handleEditorChange: OnChange = (value, event) => {
    updateFile(fileName, value ?? "");
  };

  const handleRun = async () => {
    try {
      setLoadingRunCode(true);
      const response = await postCairoCodeSubmission(
        files["lib.cairo"].value,
        findExercise.exerciseId
      );
      setLoadingRunCode(false);
      setCodeResultConsole(response);

      if (response.success) {
        setIsDialogOpen(true);
        triggerConfetti();
      }
    } catch (error) {
      console.error("Error during API call:", error);
      setLoadingRunCode(false);
    }
  };

  const handleResetCode = () => {
    const initialCode = findExercise.file["lib.cairo"].value;
    updateFile(fileName, initialCode);
  };

  const handleMarkAsComplete = (moduleId: number) => {
    markModuleComplete(moduleId);
  };

  const triggerConfetti = () => {
    confetti({
      angle: 60,
      spread: 55,
      particleCount: 100,
      origin: { x: 0 },
    });
    confetti({
      angle: 120,
      spread: 55,
      particleCount: 100,
      origin: { x: 1 },
    });
  };

  return (
    <main
      className="flex flex-row w-full overflow-hidden"
      style={{ height: "calc(100vh - 50px)" }}
    >
      <NextStepDialog
        isDialogOpen={isDialogOpen}
        curentModuleNumber={curentModuleNumber}
        handleMarkAsComplete={handleMarkAsComplete}
        nextModuleContent={nextModuleContent}
        setIsDialogOpen={setIsDialogOpen}
        textContent="You completed your exercise !"
      />
      <div className="bg-slate-900 text-white flex flex-col justify-start gap-2 items-start max-w-[200px] w-full h-full py-5">
        <p className="text-sm text-slate-300 ml-5">Explorer</p>

        <div className="flex flex-col justify-center w-full items-start gap-2 text-sm relative">
          {Object.keys(files).map((name) => (
            <button
              key={name}
              className={`${
                file.name === fileName ? "bg-[#1E1E1E]" : "bg-transparent"
              } w-full text-start px-5 py-1 cursor-pointer flex flex-row items-center gap-2 justify-start`}
              disabled={fileName === name}
              onClick={() => setFileName(name)}
            >
              <Image
                src={"/rust_lang.png"}
                alt="rust_lang_icon"
                width={14}
                height={14}
              />
              {name}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col max-w-full w-full h-full pt-5 bg-[#1E1E1E]">
        <div className="flex flex-col w-full h-full gap-5">
          <p className="text-white text-sm ml-2">{fileName}</p>
          <Editor
            height="100%"
            width="100%"
            theme="vs-dark"
            path={file.name}
            defaultLanguage={file.language}
            value={file.value}
            onChange={handleEditorChange}
          />
        </div>
        <div className="flex flex-col border-t border-slate-700 h-2/5 gap-5 w-full py-2">
          <div className="flex flex-row justify-between items-center px-5">
            <p className="text-sm text-slate-300">CONSOLE</p>
            <div className="flex flex-row justify-center items-center gap-2">
              <Button
                className="flex bg-black text-white hover:bg-slate-900 text-xs w-auto h-[30px] gap-3"
                disabled={loadingRunCode}
                onClick={() => handleRun()}
              >
                RUN
                {loadingRunCode && <Spinner />}
              </Button>{" "}
              <ResetCodeDialog handleResetCode={handleResetCode} />
              {nextModuleContent === null ? (
                <button>finish course</button>
              ) : codeResultConsole && codeResultConsole?.success === true ? (
                nextModuleContent.type === "content" ? (
                  <Link
                    onClick={() => handleMarkAsComplete(curentModuleNumber)}
                    className="bg-green-600 hover:bg-green-700 transition-all flex flex-row gap-2 items-center justify-center text-white w-auto h-[30px] px-2 rounded-md"
                    href={`/learn/cairo/content/module/${
                      curentModuleNumber + 1
                    }`}
                  >
                    <p className="text-xs text-slate-200">Next:</p>
                    <p className="text-xs">{nextModuleContent.title}</p>
                  </Link>
                ) : (
                  <Link
                    onClick={() => handleMarkAsComplete(curentModuleNumber)}
                    className="bg-green-600 hover:bg-green-700 transition-all flex flex-row gap-2 items-center justify-center text-white w-auto h-[30px] px-2 rounded-md"
                    href={`/learn/cairo/exercise/module/${
                      curentModuleNumber + 1
                    }`}
                  >
                    <p className="text-xs text-slate-200">Next:</p>
                    <p className="text-xs">{nextModuleContent.title}</p>
                  </Link>
                )
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center items-start px-5 text-md text-white">
            {loadingRunCode && (
              <div className="flex w-full justify-center items-center gap-2">
                <Spinner />
                <p>Code is running</p>
              </div>
            )}
            {loadingRunCode === false &&
              codeResultConsole &&
              codeResultConsole.success === true && (
                <div className="flex flex-row items-center justify-center gap-2 bg-green-400 px-3 py-2 rounded-xl text-black">
                  <Check size={20} className="text-green-950" />
                  Passed all tests.
                </div>
              )}
            {loadingRunCode === false &&
              codeResultConsole &&
              codeResultConsole.success === false && (
                <div className="flex flex-row items-center justify-center gap-2 bg-red-400 text-sm px-3 py-2 rounded-xl text-black">
                  <p>{codeResultConsole?.output}</p>
                </div>
              )}
          </div>
        </div>
      </div>
    </main>
  );
}
