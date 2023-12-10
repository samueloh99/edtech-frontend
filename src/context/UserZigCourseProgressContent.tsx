// UserZigCourseProgressContext.js
import { cairoCourseContent } from "@/lib/data";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type ModuleProgress = {
  moduleId: number;
  completed: boolean;
};

type UserZigCourseProgressContextData = {
  progress: ModuleProgress[];
  markModuleComplete: (moduleId: number) => void;
  areAllModulesCompleted: boolean;
};

type UserZigCourseProgressProviderProps = {
  children: ReactNode;
};

export const UserZigCourseProgressContext = createContext(
  {} as UserZigCourseProgressContextData
);

export function UserZigCourseProgressProvider({
  children,
}: UserZigCourseProgressProviderProps) {
  const [progress, setProgress] = useState<ModuleProgress[]>(() => {
    if (typeof window !== "undefined") {
      const savedProgress = localStorage.getItem("userZigProgress");
      return savedProgress ? JSON.parse(savedProgress) : [];
    }
    return [];
  });

  const areAllModulesCompleted =
    progress.length === cairoCourseContent[0].contents.length &&
    progress.every((module) => module.completed);

  const [isClientSide, setIsClientSide] = useState(false);

  useEffect(() => {
    setIsClientSide(true);
    const savedProgress = localStorage.getItem("userZigProgress");
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  useEffect(() => {
    if (isClientSide) {
      localStorage.setItem("userZigProgress", JSON.stringify(progress));
    }
  }, [progress, isClientSide]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("userZigProgress", JSON.stringify(progress));
    }
  }, [progress]);

  const markModuleComplete = (moduleId: number) => {
    setProgress((currentProgress) => {
      if (
        currentProgress.some(
          (module) => module.moduleId === moduleId && module.completed
        )
      ) {
        return currentProgress;
      }
      return [...currentProgress, { moduleId, completed: true }];
    });
  };

  return (
    <UserZigCourseProgressContext.Provider
      value={{ progress, markModuleComplete, areAllModulesCompleted }}
    >
      {isClientSide ? children : null}{" "}
    </UserZigCourseProgressContext.Provider>
  );
}

export const useUserZigCourseProgressContext = () =>
  useContext(UserZigCourseProgressContext);
