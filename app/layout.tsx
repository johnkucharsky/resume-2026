import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { workExperience } from "./utils/work-experience";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
});

export const metadata: Metadata = {
  title: "Кучарский Иван Резюме",
  description:
    "Иван Кучарский — frontend-разработчик с опытом " +
    workExperience +
    ". Занимаюсь созданием приложений на React, Vite, Next.js, хорошо пишу на нативном js, html, " +
    "css. Есть опыт написания и поддержки кастомных ui библиотек",
  keywords: ["Next.js", "React", "HTML", "CSS"],
  openGraph: {
    title: "Кучарский Иван Резюме",
    description:
      "Иван Кучарский — фронтенд-разработчик с опытом " +
      workExperience +
      "разработки на React и Next.js",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Кучарский Иван Резюме",
    description:
      "Иван Кучарский — фронтенд-разработчик с опытом " +
      workExperience +
      "разработки на React и Next.js",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
