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
    countryName: "BraSil",
    locale: "pt_BR",
    alternateLocale: "en_US",
    url: "https://my-portfolio-gattekaa.vercel.app/",
    siteName: "Vinicius Gabriel - Desenvolvedor FullStack",
    title: "Vinicius Gabriel - Desenvolvedor FullStack",
    description: "Vinicius Gabriel Desenvolvedor Fullstack - Transformando ideias em Poderosas Soluções Web",
    images: [
      {
        url: "/brand_background.png",
        width: 1200,
        height: 630,
        alt: "Vinicius Gabriel - Desenvolvedor FullStack",
      },
    ],
  },
  icons: [
    {
      rel: "icon",
      url: "/brand_icon_transparent_green.png",
      type: "image/png",
      sizes: "any",
    }
  ],
  authors: [
    {
      name: "Vinicius Gabriel"
    }
  ],
  category: "Web Development",
  classification: "Web Development",
  creator: "Vinicius Gabriel",
  keywords: "fullstack, frontend, backend, vinicius, gabriel, vinicius gabriel, viniciusgabriel, developer, nextjs, desenvolvedor, design, designer, webdeveloper, webdesigner, web, website, site",
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
