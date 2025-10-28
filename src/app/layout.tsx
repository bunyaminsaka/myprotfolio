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
  title: "Bünyamin Saka - Computer Science Student & Developer",
  description: "Portfolio of Bünyamin Saka, a Computer Science student at WSB Merito Poznań and Customer Representative at TP Poland. Showcasing projects, skills, and experience in full-stack development.",
  keywords: ["Bünyamin Saka", "Computer Science", "Developer", "Portfolio", "Poznań", "Poland", "Java", "React", "Spring", "ASP.NET"],
  authors: [{ name: "Bünyamin Saka" }],
  creator: "Bünyamin Saka",
  openGraph: {
    title: "Bünyamin Saka - Computer Science Student & Developer",
    description: "Portfolio of Bünyamin Saka, a Computer Science student and aspiring full-stack developer from Poznań, Poland.",
    url: "https://bunyaminsaka.dev",
    siteName: "Bünyamin Saka Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bünyamin Saka - Computer Science Student & Developer",
    description: "Portfolio of Bünyamin Saka, a Computer Science student and aspiring full-stack developer from Poznań, Poland.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
