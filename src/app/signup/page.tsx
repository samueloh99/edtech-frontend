import { SignUp } from "@clerk/nextjs";

export default function Signup() {
  return (
    <main className="flex flex-col min-h-screen h-full main-container justify-center items-center">
      <SignUp />
    </main>
  );
}
