"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import NavigationMenu from "@/layouts/navbar/NavigationMenu";
import Topbar from "@/layouts/topbar/Topbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pathnames = ["login", "onboarding", "signup", "otp", "password-reset"];

export default function DynamicLayout({ children }) {
  const currentPath = usePathname(); // Get the current pathname dynamically
  const isSpecialPath = pathnames.some((path) => currentPath?.includes(path));

  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      {isSpecialPath ? (
        <div>{children}</div>
      ) : (
        <div className="app-wrapper">
          <NavigationMenu />
          <div className="app-content">
            <Topbar />
            <div className="app-c">
              <div>{children}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
