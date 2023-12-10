import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sumTime(contents: any) {
  let totalSeconds = contents.reduce((total: any, content: any) => {
    const [minutes, seconds] = content.time.split(":").map(Number);
    return total + minutes * 60 + seconds;
  }, 0);

  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);

  let formattedTime = "";
  if (hours > 0) {
    formattedTime += `${hours} hour${hours > 1 ? "s" : ""} `;
  }
  if (minutes > 0 || hours === 0) {
    formattedTime += `${minutes} minute${minutes !== 1 ? "s" : ""}`;
  }

  return formattedTime;
}

export function formatBackendResponse(response: {
  successful: boolean;
  output: string;
}) {
  if (!response.successful) {
    return "Error: The test did not run successfully.";
  }

  const output = response.output;

  // Extract the test result summary
  const summaryMatch = output.match(/test result: (.*)/);
  const summary = summaryMatch ? summaryMatch[1] : "No summary available";

  // Extract the gas usage estimate
  const gasUsageMatch = output.match(/gas usage est\.: (\d+)/);
  const gasUsage = gasUsageMatch
    ? `Gas usage estimate: ${gasUsageMatch[1]}`
    : "No gas usage estimate available";

  // Extract other relevant information as needed...

  // Format the final output
  return `Test Summary:\n${summary}\n\n${gasUsage}`;
}
