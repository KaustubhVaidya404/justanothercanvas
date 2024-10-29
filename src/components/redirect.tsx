"use client";

import { useSession } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function Redirect() {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.isSignedIn) {
      router.push(`/canvas/${session.session?.user?.firstName}`);
    }
  }, [session]);

  return null;
}
