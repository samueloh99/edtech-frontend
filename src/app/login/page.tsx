import { SignIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen h-full main-container justify-center items-center">
      <SignIn />
    </main>
  );
}
