import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SPDY-Software",
  description: "Daniel's website",
   icons: {
    icon: "/logo.png", // path to your favicon
    apple: "/logo.png", // optional, for iOS devices
    shortcut: "/logo.png", // optional
  },
};

export const viewport = {
  themeColor: "#000000",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"scroll-behavior="smooth" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >    
        {children}
      </body>
    </html>
  );
}
