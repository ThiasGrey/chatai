import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GPT - Bruno Mathias",
  icons: [
    {
      url: "/favicon.svg",
    },
  ],
  description: "Developed by Bruno Mathias using the GPT-3 API and Vercel SDK.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
