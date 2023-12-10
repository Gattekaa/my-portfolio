// React
import React from "react";

// Contexts
import { LanguageContext } from "@/contexts/languageContext";

interface ILocale {
  en: string;
  pt_br: string;
}

export default function Locale({ item }: { item: ILocale }) {
  const { language } = React.useContext(LanguageContext);

  if (language === "pt_br") {
    return item.pt_br
  }

  return item.en;
}
