"use client";

//React
import React from "react";

type Languages = "en" | "pt-br" | string;

export const LanguageContext = React.createContext({
  language: "en" as Languages,
  setLanguage: (language: Languages) => {},
});

export default function LanguageProvider({
  children,
  lang,
}: { children: React.ReactNode; lang: Languages }) {
  const [language, setLanguage] = React.useState<Languages>(lang);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
