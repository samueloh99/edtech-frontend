// UserCourseProgressContext.js
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

type UserCourseProgressContextData = {
  progress: ModuleProgress[];
  markModuleComplete: (moduleId: number) => void;
  areAllModulesCompleted: boolean;
};

type UserCourseProgressProviderProps = {
  children: ReactNode;
};

export const UserCourseProgressContext = createContext(
  {} as UserCourseProgressContextData
);

export function UserCourseProgressProvider({
  children,
}: UserCourseProgressProviderProps) {
  const [progress, setProgress] = useState<ModuleProgress[]>(() => {
    if (typeof window !== "undefined") {
      const savedProgress = localStorage.getItem("userProgress");
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
    const savedProgress = localStorage.getItem("userProgress");
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  useEffect(() => {
    if (isClientSide) {
      localStorage.setItem("userProgress", JSON.stringify(progress));
    }
  }, [progress, isClientSide]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("userProgress", JSON.stringify(progress));
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
    <UserCourseProgressContext.Provider
      value={{ progress, markModuleComplete, areAllModulesCompleted }}
    >
      {isClientSide ? children : null}{" "}
    </UserCourseProgressContext.Provider>
  );
}

export const useUserCourseProgressContext = () =>
  useContext(UserCourseProgressContext);
