import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Terminal } from "@/components/features/Terminal/Terminal";
import { AIChat } from "@/components/features/AIChat/AIChat";
import { ScrollProgress } from "@/components/features/ScrollProgress";
import { GridBackground } from "@/components/features/GridBackground";
import { ThemeProvider } from "@/lib/theme";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Aman Maan | Software Developer",
  description:
    "Software Developer with experience in ASP.NET Core, Angular, TypeScript, and enterprise SaaS applications.",
  keywords: [
    "Software Developer",
    "ASP.NET Core",
    "Angular",
    "TypeScript",
    "Python",
    "React",
    "Node.js",
    "Docker",
    "AWS",
    "Microservices",
  ],
  authors: [{ name: "Aman Maan" }],
  openGraph: {
    title: "Aman Maan | Software Developer",
    description:
      "Software Developer with experience in ASP.NET Core, Angular, TypeScript, and enterprise SaaS applications.",
    url: "https://amanmaan.dev",
    siteName: "Aman Maan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Maan | Software Developer",
    description:
      "Software Developer with experience in ASP.NET Core, Angular, TypeScript, and enterprise SaaS applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrains.variable} font-sans`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <GridBackground />
          <ScrollProgress />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
          <Terminal />
          <AIChat />
        </ThemeProvider>
      </body>
    </html>
  );
}
