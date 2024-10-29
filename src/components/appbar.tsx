"use client";

import {
  useSession,
  SignInButton,
  SignedOut,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

export default function AppBar() {
  const session = useSession();

  return (
    <div>
      <nav className="bg-transparent">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800">
                JustAnotherCanvas
              </span>
            </div>
            <div className="flex items-center gap-3 sm:gap-1">
              <Link href={"https://github.com/KaustubhVaidya404/justanothercanvas"}><Github /></Link>
              {!session.isSignedIn && (
                <SignedOut>
                  <SignInButton>
                    <Button>Sign In</Button>
                  </SignInButton>
                </SignedOut>
              )}
              {session.isSignedIn && (
                <SignedIn>
                  <UserButton />
                </SignedIn>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
