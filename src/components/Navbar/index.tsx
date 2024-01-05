"use client";

// React & NextJS
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Libs
import { motion } from "framer-motion";

// Icons
import {
  GlobeHemisphereEast,
  TextAlignLeft,
  TextAlignRight,
} from "@phosphor-icons/react";

// Components
import Dropdown from "../Dropdown";

// Contexts
import { LanguageContext } from "@/contexts/languageContext";

// Locale
import { NavigationLocale } from "@/locales/navigation";

//Helpers
import Locale from "@/helpers/locale";

// Assets
import brazil_flag from "@/assets/svg/brazil_flag.svg";
import usa_flag from "@/assets/svg/usa_flag.svg";
import { setCookie } from "nookies";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { setLanguage } = React.useContext(LanguageContext);
  const [languageDropdownOpen, setLanguageDropdownOpen] = React.useState(false);
  const handleNavbarOpen = () => setNavbarOpen(!navbarOpen);

  function handleLanguageBlur(e: React.FocusEvent<HTMLElement>) {
    if (!e.relatedTarget) {
      setLanguageDropdownOpen(false);
    }
  }

  function handleLanguagueChange(language: string) {
    setCookie(null, "lang", language);
    setLanguage(language);
    setLanguageDropdownOpen(false);
  }

  return (
    <nav className="flex w-full items-center justify-between flex-wrap bg-background-light z-[100] py-6 p-8 lg:px-24 border-b-2 border-b-border-light sticky top-0 left-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center flex-shrink-0 text-white mr-6"
      >
        <Link
          href={"/"}
          className="font-bold text-xl tracking-tight animate-gradient"
        >
          &lt;Vinicius/&gt;
        </Link>
      </motion.div>
      <div className="lg:hidden flex gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }}
          className="group relative flex justify-center"
        >
          <button
            type="button"
            aria-label="Change Language"
            onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
            onBlur={handleLanguageBlur}
            className="hover:opacity-80 duration-150"
          >
            <GlobeHemisphereEast
              size={28}
              weight="duotone"
              color="#4AA5E0"
              className="duration-150 group-focus-within:animate-language-spin"
            />
          </button>
          {languageDropdownOpen && (
            <Dropdown>
              <button
                type="button"
                aria-label="Change language to English"
                onClick={() => handleLanguagueChange("en")}
                className="w-[142px] hover:bg-background-dark/5 duration-150 px-3 py-2 flex items-center gap-3"
              >
                <Image src={usa_flag} alt="USA flag" width={20} />
                English
              </button>
              <button
                type="button"
                aria-label="Mudar idioma para Português"
                onClick={() => handleLanguagueChange("pt_br")}
                className="w-[142px] hover:bg-background-dark/5 duration-150 px-3 py-2 flex items-center gap-3"
              >
                <Image src={brazil_flag} alt="Brazil flag" width={20} />
                Português
              </button>
            </Dropdown>
          )}
        </motion.div>
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }}
          type="button"
          aria-label="Toggle Navbar"
          onClick={handleNavbarOpen}
          className=""
        >
          {navbarOpen ? (
            <TextAlignLeft size={32} />
          ) : (
            <TextAlignRight size={32} />
          )}
        </motion.button>
      </div>

      <div className={"hidden lg:flex lg:items-center"}>
        <div className="flex gap-4 items-center">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            href="/"
            className="text-background-dark hover:text-background-dark/40 duration-150 mr-4"
          >
            <Locale item={NavigationLocale.home} />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.1 } }}
            href="/#explore-my-work"
            className="text-background-dark hover:text-background-dark/40 duration-150"
          >
            <Locale item={NavigationLocale.explore_my_work} />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }}
            href="/#technologies"
            className="text-background-dark hover:text-background-dark/40 duration-150 mr-4"
          >
            <Locale item={NavigationLocale.technologies} />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }}
            href="/#connect-with-me"
            className="text-background-dark hover:text-background-dark/40 duration-150 mr-4"
          >
            <Locale item={NavigationLocale.connect_with_me} />
          </motion.a>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.4 } }}
            className="group relative flex justify-center"
          >
            <button
              type="button"
              aria-label="Change Language"
              onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
              onBlur={handleLanguageBlur}
              className="hover:opacity-80 duration-150"
            >
              <GlobeHemisphereEast
                size={28}
                weight="duotone"
                color="#4AA5E0"
                className="duration-150 group-focus-within:animate-language-spin"
              />
            </button>
            {languageDropdownOpen && (
              <Dropdown>
                <button
                  type="button"
                  aria-label="Change language to English"
                  onClick={() => handleLanguagueChange("en")}
                  className="w-[142px] hover:bg-background-dark/5 duration-150 px-3 py-2 flex items-center gap-3"
                >
                  <Image src={usa_flag} alt="USA flag" width={20} />
                  English
                </button>
                <button
                  type="button"
                  aria-label="Mudar idioma para Português"
                  onClick={() => handleLanguagueChange("pt_br")}
                  className="w-[142px] hover:bg-background-dark/5 duration-150 px-3 py-2 flex items-center gap-3"
                >
                  <Image src={brazil_flag} alt="Brazil flag" width={20} />
                  Português
                </button>
              </Dropdown>
            )}
          </motion.div>
        </div>
      </div>
      {navbarOpen && (
        <div
          className={`lg:hidden animate-scale-up w-full ${navbarOpen
            ? "absolute block pt-4 pb-8 px-8 lg:px-24 bg-background-light border-b-2 border-b-border-light"
            : "hidden"
            }  top-[75%] left-0 lg:flex lg:items-center`}
        >
          <div className="flex flex-col gap-4 items-center">
            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a
              onClick={handleNavbarOpen}
              href="/"
              className="text-background-dark hover:text-background-dark/40 duration-150 w-full py-2"
            >
              <Locale item={NavigationLocale.home} />
            </a>
            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a
              onClick={handleNavbarOpen}
              href="/#explore-my-work"
              className="text-background-dark hover:text-background-dark/40 duration-150 w-full py-2"
            >
              <Locale item={NavigationLocale.explore_my_work} />
            </a>
            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a
              onClick={handleNavbarOpen}
              href="/#technologies"
              className="text-background-dark hover:text-background-dark/40 duration-150 w-full py-2"
            >
              <Locale item={NavigationLocale.technologies} />
            </a>
            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a
              onClick={handleNavbarOpen}
              href="/#connect-with-me"
              className="text-background-dark hover:text-background-dark/40 duration-150 w-full py-2"
            >
              <Locale item={NavigationLocale.connect_with_me} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
