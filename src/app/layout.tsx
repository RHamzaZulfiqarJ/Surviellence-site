import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CDropdown from "@/Utilities/CDropdown";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Survilliance System", 
  description: "Generated using Next.Js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#1A272F] text-white h-full`}
      >
        <header className="bg-[#1e2028] p-4 sticky top-0 z-10 flex justify-between">
          <img src={"logo.png"} height={70} width={70} alt="No Image Found" />
          <CDropdown />
        </header>
        {children}
      </body>
    </html>
  );
}
