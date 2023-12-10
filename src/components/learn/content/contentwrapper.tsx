import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Check, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useUserCourseProgressContext } from "@/context/UserCourseProgressContext";
import confetti from "canvas-confetti";
import { NextStepDialog } from "../exercise/nextStepDialog";

interface ContentWrapperProps {
  courseContent: {
    id: number;
    title: string;
    module: number;
    type: string;
    time: string;
  };
  nextModuleContent: {
    id: number;
    title: string;
    module: number;
    type: string;
    time: string;
  } | null;
  curentModuleNumber: number;
}

export default function ContentWrapper({
  courseContent,
  nextModuleContent,
  curentModuleNumber,
}: ContentWrapperProps) {
  const [isPaused, setIsPaused] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const { markModuleComplete, progress, areAllModulesCompleted } =
    useUserCourseProgressContext();

  const isCompleted = progress.some(
    (p) => p.moduleId === courseContent.module && p.completed
  );

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  const handleMarkAsComplete = (moduleId: number) => {
    markModuleComplete(moduleId);
    if (progress.length === 0) {
      triggerConfetti();
      setIsDialogOpen(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      setIsPaused(video.paused);

      const handlePlay = () => setIsPaused(false);
      const handlePause = () => setIsPaused(true);

      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);

      return () => {
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
      };
    }
  }, []);

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
    <div className="flex flex-col w-4/6 gap-5 bg-white px-5 py-10 rounded-md border border-slate-200">
      <NextStepDialog
        isDialogOpen={isDialogOpen}
        curentModuleNumber={curentModuleNumber}
        handleMarkAsComplete={handleMarkAsComplete}
        nextModuleContent={nextModuleContent}
        setIsDialogOpen={setIsDialogOpen}
        textContent={"You completed your first exercise!"}
      />
      <h1 className="text-lg font-bold">{courseContent.title}</h1>
      <div className="flex w-full relative">
        {isPaused && (
          <button
            onClick={togglePlayPause}
            className="bg-slate-300 w-[100px] h-[60px] items-center flex justify-center rounded-3xl opacity-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <Play color="black" size={30} />
          </button>
        )}
        {courseContent.type === "content" && (
          <video ref={videoRef} className="w-full" controls>
            <source
              src={`/cairo-module-${courseContent.module}.mp4`}
              type="video/mp4"
            />
          </video>
        )}
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-5 mt-10">
        {isCompleted ? (
          <div className="flex flex-row justify-center items-center gap-2">
            <Check size={20} className="text-green-600" />
            Complete
          </div>
        ) : (
          <Button
            onClick={() => handleMarkAsComplete(courseContent.module)}
            className="bg-green-600"
          >
            Mark as completed
          </Button>
        )}

        {nextModuleContent && isCompleted === true ? (
          nextModuleContent.type === "content" ? (
            <Link
              className="bg-green-600 hover:bg-green-700 transition-all flex flex-row gap-2 items-center justify-center text-white px-2 py-3 rounded-md"
              href={`/learn/cairo/content/module/${courseContent.module + 1}`}
            >
              <p className="text-sm text-slate-200">Next:</p>
              <p className="text-base">{nextModuleContent.title}</p>
            </Link>
          ) : (
            <Link
              className="bg-green-600 hover:bg-green-700 transition-all flex flex-row gap-2 items-center justify-center text-white px-2 py-3 rounded-md"
              href={`/learn/cairo/exercise/module/${courseContent.module + 1}`}
            >
              <p className="text-sm text-slate-200">Next:</p>
              <p className="text-base">{nextModuleContent.title}</p>
            </Link>
          )
        ) : (
          ""
        )}
        {areAllModulesCompleted && nextModuleContent === null && (
          <Link
            className="bg-green-600 hover:bg-green-700 transition-all flex flex-row gap-2 items-center justify-center text-white px-2 py-3 rounded-md"
            href={`/`}
          >
            Finish course
          </Link>
        )}
      </div>
    </div>
  );
}
