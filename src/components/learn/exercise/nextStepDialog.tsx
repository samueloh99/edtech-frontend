import Link from "next/link";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogTrigger, DialogClose } from "@radix-ui/react-dialog";

interface NextStepDialogProps {
  isDialogOpen: boolean;
  nextModuleContent: {
    id: number;
    title: string;
    module: number;
    type: string;
    time: string;
  } | null;
  handleMarkAsComplete: (curentModuleNumber: number) => void;
  curentModuleNumber: number;
  setIsDialogOpen: (b: boolean) => void;
  textContent: string;
  language: string;
}

export function NextStepDialog({
  isDialogOpen,
  nextModuleContent,
  handleMarkAsComplete,
  curentModuleNumber,
  setIsDialogOpen,
  textContent,
  language,
}: NextStepDialogProps) {
  return (
    <Dialog open={isDialogOpen}>
      <DialogTrigger asChild />
      <DialogContent className="flex flex-col justify-center items-center gap-5 bg-black text-white border border-slate-800">
        <div className="flex flex-col gap-5 justify-center items-center">
          <p className="text-green-400 text-lg">🎉 Congratulations 🎉</p>
          <p className="text-sm">{textContent}</p>
        </div>
        {nextModuleContent === null ? (
          <Link
            className="bg-green-600 hover:bg-green-700 transition-all flex flex-row gap-2 items-center justify-center text-white w-auto h-[30px] px-2 rounded-md"
            href={`/`}
          >
            Finish Course
          </Link>
        ) : nextModuleContent.type === "content" ? (
          <Link
            onClick={() => handleMarkAsComplete(curentModuleNumber)}
            className="bg-green-600 hover:bg-green-700 transition-all flex flex-row gap-2 items-center justify-center text-white w-auto h-[30px] px-2 rounded-md"
            href={`/learn/${language}/content/module/${curentModuleNumber + 1}`}
          >
            <p className="text-xs text-slate-200">Next:</p>
            <p className="text-xs">{nextModuleContent.title}</p>
          </Link>
        ) : (
          <Link
            onClick={() => handleMarkAsComplete(curentModuleNumber)}
            className="bg-green-600 hover:bg-green-700 transition-all flex flex-row gap-2 items-center justify-center text-white w-auto h-[30px] px-2 rounded-md"
            href={`/learn/${language}/exercise/module/${
              curentModuleNumber + 1
            }`}
          >
            <p className="text-xs text-slate-200">Next:</p>
            <p className="text-xs">{nextModuleContent.title}</p>
          </Link>
        )}
        <DialogClose asChild className="absolute top-5 right-5">
          <button
            className="close-button"
            onClick={() => setIsDialogOpen(false)}
          >
            x
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
