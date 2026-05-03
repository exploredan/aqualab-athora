import type { Metadata } from "next";
import { Space_Grotesk, Roboto } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aqualab | Technical Watersports Apparel",
  description: "High-performance technical apparel engineered for elite sailing, kitesurfing, and rowing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
