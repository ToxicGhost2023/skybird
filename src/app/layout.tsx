import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const peykan = localFont({
  src: [
    {
      path: "../fonts/peykan/PAYKAN-REGULAR.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-peykan",
});

export const metadata: Metadata = {
  title: "SkyBrid",
  description: "فروش انواع بلیط ها",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={peykan.variable}>{children}</body>
    </html>
  );
}
