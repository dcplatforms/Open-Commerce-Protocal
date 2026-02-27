import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "../styles/globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";
import GridBackground from "@/components/GridBackground";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Open Commerce Protocol | Documentation",
  description: "The open source standard for agentic commerce and universal commerce protocol transactions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <ThemeRegistry>
          <GridBackground />
          <Header />
          <main className="pt-24 min-height-screen">
            {children}
          </main>
        </ThemeRegistry>
      </body>
    </html>
  );
}