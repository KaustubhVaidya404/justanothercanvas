"use client";

import { UUIDGenerator } from "@/utils/uuigenerator";
import { useSession } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function Redirect() {
  const session = useSession();
  const router = useRouter();
  const value = new UUIDGenerator().generate();

  useEffect(() => {
    if (session.isSignedIn) {
      router.push(`/canvas/${session.session?.user?.firstName}/${value}`);
    }
  }, [value, router, session]);

  return null;
}
