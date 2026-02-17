import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/dark-mode/theme-provider";
import { ModeToggle } from "@/components/dark-mode/theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chinook Music Store",
  description:
    "A complete sample application built with Next.js 16, Neon DB + Auth and Drizzle ORM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="font-sans">
            <nav className="flex items-center justify-between p-4 border-b border-foreground/10">
              <div className="flex items-center justify-between container mx-auto">
                <p className="tracking-tight">Chinook Music Store</p>
                <ModeToggle />
              </div>
            </nav>
            <main className="p-4">
              <div className="container mx-auto">{children}</div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
