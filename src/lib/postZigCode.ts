import { PostCodeSubmissionType } from "./types";

class ApiError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
  }
}

export async function postZigCodeSubmission(
  userCode: string,
  exerciseId: number
): Promise<PostCodeSubmissionType> {
  const body = {
    userCode,
    exerciseId: String(exerciseId),
    language: "zig",
  };

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/run-user-code`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (!res.ok) {
      const errorBody = await res.json();
      throw new ApiError(
        errorBody.message || "Failed to fetch data",
        res.status
      );
    }

    return await res.json();
  } catch (error) {
    console.error("API call failed:", error);
    if (error instanceof ApiError) {
      // Handle API errors
      throw new Error("API call failed:");
    } else {
      // Handle network or other types of errors
      throw new Error("Network or unexpected error occurred");
    }
  }
}
