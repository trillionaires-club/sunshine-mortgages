import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunshine Mortgages | Auckland Mortgage Broker",
  description: "Expert mortgage advisers in Auckland. Get personalized home loan solutions for first home buyers, refinancing, and investment properties.",
  keywords: ["mortgage broker Auckland", "home loan NZ", "first home buyer", "mortgage adviser Auckland"],
  openGraph: {
    title: "Sunshine Mortgages | Auckland Mortgage Broker",
    description: "Expert mortgage advisers in Auckland. Get personalized home loan solutions.",
    url: "https://sunshinemortgages.co.nz",
    siteName: "Sunshine Mortgages",
    locale: "en_NZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
