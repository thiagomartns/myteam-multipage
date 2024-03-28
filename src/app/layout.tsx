import type { Metadata } from "next";
import { Livvic } from "next/font/google";
import "./globals.css";

const livvic = Livvic({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "myteam",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={livvic.className}>{children}</body>
    </html>
  );
}
