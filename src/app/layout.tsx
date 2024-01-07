//NextJS
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";

// Contexts
import LanguageProvider from "@/contexts/languageContext";

// Styles
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinicius Gabriel - Desenvolvedor FullStack",
  description: "Vinicius Gabriel Desenvolvedor Fullstack - Transformando ideias em Poderosas Soluções Web",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://my-portfolio-gattekaa.vercel.app/",
    siteName: "Vinicius Gabriel - Desenvolvedor FullStack",
    title: "Vinicius Gabriel - Desenvolvedor FullStack",
    description: "Vinicius Gabriel Desenvolvedor Fullstack - Transformando ideias em Poderosas Soluções Web",
    images: [
      {
        url: "/brand_icon_transparent_green.png",
        width: 800,
        height: 600,
        alt: "Vinicius Gabriel - Desenvolvedor FullStack",
      },
    ],
  },
  icons: [
    {
      rel: "icon",
      url: "/brand_icon_transparent_green.svg",
      sizes: "any",
    }
  ],
  authors: [
    {
      name: "Vinicius Gabriel"
    }
  ],

  robots: "index, follow",

};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  const cookiesNext = cookies();
  const lang = cookiesNext?.get("lang")?.value || "en";

  return (
    <html lang="en">
      <LanguageProvider lang={lang}>
        <body className={inter.className}>{children}</body>
      </LanguageProvider>
    </html>
  );
}
