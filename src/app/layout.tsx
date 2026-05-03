import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AIPanel from "@/components/AIAvatar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ElectVerse — Learn Elections",
  description: "AI-powered election education platform for India",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-screen bg-gray-50 flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light">
          {/* Fixed top navbar */}
          <Navbar />

          {/* Split layout below navbar */}
          <div className="flex pt-16 flex-1 overflow-hidden">

            {/* LEFT — AI Panel */}
            <AIPanel />

            {/* RIGHT — Page content */}
            <main className="flex-1 overflow-y-auto flex flex-col">
              <div className="flex-1">
                {children}
              </div>
              <Footer />
            </main>

          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
