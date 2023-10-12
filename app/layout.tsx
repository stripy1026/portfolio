import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "I am Inwoo",
  description: "인우의 프론트엔드 웹 개발자 포트폴리오 입니다",
  openGraph: {
    title: "I am Inwoo",
    description: "인우의 프론트엔드 웹 개발자 포트폴리오 입니다",
    url: "https://iaminwoo.vercel.app",
    siteName: "Next.js",
    images: [
      {
        url: "https://iaminwoo.vercel.app/preview.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
