"use client";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";

export function UserActionHeader() {
  const router = useRouter();
  const { isSignedIn } = useUser();
  return (
    <div className="flex flex-row ml-auto justify-center items-center gap-5">
      {isSignedIn ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <>
          <Button onClick={() => router.push("/login")}>Login</Button>
          <Button onClick={() => router.push("/signup")}>Signup</Button>
        </>
      )}
    </div>
  );
}
