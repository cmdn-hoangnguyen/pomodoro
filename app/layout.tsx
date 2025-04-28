import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../libs/fontawesome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pomodoro technique",
  description:
    "Maximize your focus and work smarter with our Pomodoro timer. A simple yet powerful productivity tool to help you stay on track, avoid burnout, and manage your time effectively.",
  keywords: [
    "Pomodoro",
    "productivity tool",
    "focus timer",
    "work efficiency",
    "time management",
    "stay focused",
    "work smarter",
    "boost productivity",
    "Pomodoro technique",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
