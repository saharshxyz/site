import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const sans = IBM_Plex_Sans({
  variable: "--font-sans",
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "@saharshxyz",
  description: "Saharsh Yeruva's Personal Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-prose p-3">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
