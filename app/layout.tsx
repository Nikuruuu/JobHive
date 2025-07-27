import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JobHive – Find Your Next Opportunity",
  description:
    "Discover and apply for curated job opportunities with JobHive. Built to connect top talent with great companies.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${font.className} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
