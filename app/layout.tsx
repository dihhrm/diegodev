import "./globals.css";
import { cn } from "lib/utils";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

export const metadata: Metadata = {
  title: "Diego | Developer",
  description: "Diego personal website.",
};

const nunito = Nunito({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(`antialiased min-h-screen font-sans`, nunito.variable)}
      >
        {children}
      </body>
    </html>
  );
}
