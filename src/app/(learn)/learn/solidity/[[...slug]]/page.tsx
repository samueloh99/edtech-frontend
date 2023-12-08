"use client";

import Editor, { OnChange } from "@monaco-editor/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface FileStructure {
  [key: string]: {
    name: string;
    language: string;
    value: string;
  };
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
export default function CairoIntro() {
  const [fileName, setFileName] = useState<string>("index.js");
  const { files, updateFile } = useFiles({
    "index.js": {
      name: "index.js",
      language: "javascript",
      value: "",
    },
  });

  const file = files[fileName];

  const handleEditorChange: OnChange = (value, event) => {
    if (value) {
      updateFile(fileName, value);
    }
  };

  return (
    <main
      className="flex flex-row w-full overflow-hidden"
      style={{ height: "calc(100vh - 50px)" }}
    >
      <div className="bg-slate-900 text-white flex flex-col justify-start gap-2 items-start max-w-[200px] w-full h-full py-5">
        <p className="text-sm text-slate-300 ml-5">Explorer</p>

        <div className="flex flex-col justify-center w-full items-start gap-2 text-sm">
          {Object.keys(files).map((name) => (
            <button
              key={name}
              className={`${
                file.name === fileName ? "bg-[#1E1E1E]" : "bg-transparent"
              } w-full text-start px-10 py-1 cursor-pointer`}
              disabled={fileName === name}
              onClick={() => setFileName(name)}
            >
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
            defaultValue={file.value}
            onChange={handleEditorChange}
          />
        </div>
        <div className="flex flex-col border-t border-slate-700 h-2/5 gap-5 w-full py-2">
          <div className="flex flex-row justify-between items-center px-5">
            <p className="text-sm text-slate-300">CONSOLE</p>
            <div className="flex flex-row justify-center items-center gap-2">
              <Button className="bg-black text-white hover:bg-slate-900 text-xs w-[50px] h-[30px]">
                RUN
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start px-5 text-md text-white">
            <p>CONTENT HERE</p>
          </div>
        </div>
      </div>
    </main>
  );
}
