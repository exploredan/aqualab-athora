import type { Metadata } from "next";
import { Space_Grotesk, Roboto } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

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
  openGraph: {
    title: "Aqualab | Technical Watersports Apparel",
    description: "High-performance technical apparel engineered for elite sailing, kitesurfing, and rowing.",
    url: "https://aqualab.com",
    siteName: "Aqualab",
    images: [
      {
        url: "/thumbnail.webp",
        width: 1200,
        height: 630,
        alt: "Aqualab Technical Apparel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqualab | Technical Watersports Apparel",
    description: "High-performance technical apparel engineered for elite sailing, kitesurfing, and rowing.",
    images: ["/thumbnail.webp"],
  },
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
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
