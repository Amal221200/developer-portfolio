import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { navItems } from "@/data";
import MobileSidebarProvider from "@/components/providers/MobileSidebarProvider";

const MobileSidebarButton = dynamic(() => import("@/components/buttons/MobileSidebarButton"), { ssr: true });
const FloatingNav = dynamic(() => import("@/components/ui/FloatingNav").then(m => m.FloatingNav), { ssr: true });
const MobileSidebar = dynamic(() => import("@/components/MobileSidebar"), { ssr: true });

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
        <MobileSidebarProvider>
          <ThemeProvider defaultTheme="dark" attribute="class" disableTransitionOnChange>
            <FloatingNav navItems={navItems} />
            <MobileSidebar />
            <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
              <div className="w-full max-w-7xl">
                {children}
              </div>
            </main>
            <MobileSidebarButton />
          </ThemeProvider>
        </MobileSidebarProvider>
      </body>
    </html>
  );
}
