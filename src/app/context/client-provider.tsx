"use client";

import { SessionProvider } from "next-auth/react";

export default function NextSessionProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return <SessionProvider>{children}</SessionProvider>;
}
