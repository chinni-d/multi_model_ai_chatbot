"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export function ClerkProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { resolvedTheme } = useTheme();

  return (
    <ClerkProvider
      appearance={{
        baseTheme: resolvedTheme === "dark" ? dark : undefined,
        variables: {
          colorPrimary: resolvedTheme === "dark" ? "white" : "hsl(221.2 83.2% 53.3%)",
          colorBackground: resolvedTheme === "dark" ? "black" : "white",
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}
