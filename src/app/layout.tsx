import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Abril_Fatface } from "next/font/google";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable:"--poppins"
});
const abril = Abril_Fatface({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable:"--abril"
});

export const metadata: Metadata = {
  title: "🖤 Eriko",
  description: "Generated with 🖤 using  Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={` ${poppins.variable} ${abril.variable}`}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
