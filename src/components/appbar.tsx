"use client";

import {
  useSession,
  SignInButton,
  SignedOut,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";

export default function AppBar() {
  const session = useSession();

  return (
    <div>
      {!session.isSignedIn && (
        <SignedOut>
          <SignInButton />
        </SignedOut>
      )}
      {session.isSignedIn && (
        <SignedIn>
          <UserButton />
        </SignedIn>
      )}
    </div>
  );
}
