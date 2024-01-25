import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GPT - Bruno Mathias",
  description: "Developed by Bruno Mathias using the GPT-3 API and Vercel SDK.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
