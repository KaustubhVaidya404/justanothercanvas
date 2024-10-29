"use client";

import {
  useSession,
  SignInButton,
  SignedOut,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";

export default function AppBar() {
  const session = useSession();

  return (
    <div>
      <nav className="bg-white shadow">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800">
                JustAnotherCanvas
              </span>
            </div>
            <div className="flex items-center">
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
