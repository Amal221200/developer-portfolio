import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amal's Portfolio",
  description: "Modern and Minimalistic Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider defaultTheme="dark" attribute="class" disableTransitionOnChange>
          <FloatingNav navItems={navItems} />
          <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
            <div className="w-full max-w-7xl">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
