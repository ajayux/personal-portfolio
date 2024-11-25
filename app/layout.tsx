import type { Metadata, Viewport } from "next";
import { Montserrat, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/nav/nav";
import { DockInUse } from "@/components/magicui/dock-in-use";
import FooterContent from "@/components/FooterContent";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat" });
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--space_grotesk",
});

export const metadata: Metadata = {
  title: "ajay n - Webdeveloper Portfolio",
  description:
    "Portfolio of ajay",
};

export const viewport: Viewport = {
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body
        className={cn(
          "h-0 min-h-screen overflow-x-hidden bg-background font-space_grotesk text-foreground antialiased relative",
          montserrat.variable,
          space_grotesk.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
              <NavBar />
          <main>
            {children}
            <span className="fixed bottom-8 left-auto right-auto m-0 h-fit w-fit p-0 max-xl:hidden">
              <DockInUse />
            </span>
          </main>
          <footer>
            <FooterContent />
          </footer>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
