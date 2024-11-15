import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Nunito } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Diego | Developer",
  description: "My portfolio space  ",
};

const nunito = Nunito({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(`antialiased min-h-screen font-sans`, nunito.variable)}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
