'use client'

import { ArrowUp } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export default function ScrollTo() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollHeight = document.body.scrollHeight - windowHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    setScrollY(scrolled);
  };

  function scroll() {
    if (scrollY <= 50) return scrollTo({ top: 10000 });
    scrollTo({ top: 0 });
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button onClick={scroll} className="w-10 h-10 fixed bottom-10 right-10 z-[100] bg-background-dark rounded-full shadow-lg flex items-center justify-center">
      <ArrowUp
        className={`duration-150 text-background-light ${scrollY <= 50 ? "rotate-180" : ""}`}
      />
    </button>
  )
}