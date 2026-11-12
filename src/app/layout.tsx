import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TripMentor - AI-Powered Travel Planning",
  description:
    "Plan your perfect trip with AI. Get personalized itineraries, discover hidden gems, and explore the world smarter with TripMentor.",
  keywords: ["travel", "AI", "itinerary", "trip planning", "vacation"],
  openGraph: {
    title: "TripMentor - AI-Powered Travel Planning",
    description:
      "Plan your perfect trip with AI. Get personalized itineraries and explore the world smarter.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
