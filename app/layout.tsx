import type { Metadata } from "next";
import { Forum } from "next/font/google";
import "./globals.css";
import { MusicProvider } from "@/context/MusicContext";
import clsx from "clsx";

const forum = Forum({
  subsets: ['latin'],
  weight: ['400'], // Choose weights as required
});

export const metadata: Metadata = {
  title: "Sushiko",
  description: "The japanese haven",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={forum.className}>
        <MusicProvider>
          {children}
        </MusicProvider>
      </body>
    </html>
  );
}
