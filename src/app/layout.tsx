import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

const inter = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CROOOOOOOOOOOT",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Section1 />
          <Section2 />
        </ThemeProvider>
      </body>
    </html>
  );
}
