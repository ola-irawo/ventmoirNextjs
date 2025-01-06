import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationMenu from "@/layouts/navbar/NavigationMenu";
import Topbar from "@/layouts/topbar/Topbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={"app-wrapper"}>
          <NavigationMenu />

          <div className="app-content">
            <Topbar />
            <div className="app-c">
              <div>{children}</div>
              <h1 className="widget">Widget</h1>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
