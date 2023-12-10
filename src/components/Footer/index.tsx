'use client'

// NextJS
import Link from "next/link";

// Icons
import { InstagramLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";

// Helpers
import Locale from "@/helpers/locale";

// Locales
import { FooterLocale } from "@/locales/footer";
import { NavigationLocale } from "@/locales/navigation";

export default function Footer() {
  return (
    <footer id="footer" className="w-full py-24 px-12 md:px-48  bg-background-light">
      <div className="justify-between items-center hidden md:flex">
        <Link href={'/'} className="font-bold text-xl tracking-tight animate-gradient">
          &lt;Vinicius/&gt;
        </Link>
        <section className="flex flex-col gap-4">
          <h2 className="pb-4 font-medium text-base">
            <Locale item={FooterLocale.navigation} />
          </h2>
          <Link href="/#" className="flex gap-2 items-center hover:opacity-80 duration-150">
            <Locale item={NavigationLocale.home} />
          </Link>
          <Link href={'/#explore-my-work'} className="flex gap-2 items-center hover:opacity-80 duration-150">
            <Locale item={NavigationLocale.explore_my_work} />
          </Link>
          <Link href={'/#connect-with-me'} className="flex gap-2 items-center hover:opacity-80 duration-150">
            <Locale item={NavigationLocale.connect_with_me} />
          </Link>
          <Link href={'/#technologies'} className="flex gap-2 items-center hover:opacity-80 duration-150">
            <Locale item={NavigationLocale.technologies} />
          </Link>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="pb-4 font-medium text-base">
            <Locale item={FooterLocale.follow_me} />
          </h2>
          <Link target="_blank" href={'https://www.linkedin.com/in/vinicius-gabriel-76a991216/'} className="flex gap-2 items-center hover:opacity-80 duration-150">
            <LinkedinLogo size={24} className="hover:opacity-40 duration-150" />
            <p>LinkedIn</p>
          </Link>
          <Link target="_blank" href={'https://www.instagram.com/vinihbieel/'} className="flex gap-2 items-center hover:opacity-80 duration-150">
            <InstagramLogo size={24} className="hover:opacity-40 duration-150" />
            <p>Instagram</p>
          </Link>
          <Link target="_blank" href={'https://api.whatsapp.com/send?phone=5513992077498'} className="flex gap-2 items-center hover:opacity-80 duration-150">
            <WhatsappLogo size={24} className="hover:opacity-40 duration-150" />
            <p>Whatsapp</p>
          </Link>
        </section>
      </div>
      <div className="flex-col justify-between items-center gap-24 flex md:hidden">
        <Link href={'/'} className="font-bold text-xl tracking-tight animate-gradient">
          &lt;Vinicius/&gt;
        </Link>
        <div className="w-full flex justify-between">
          <section className="flex flex-col gap-4">
            <h2 className="pb-4 font-medium text-base">
              <Locale item={FooterLocale.navigation} />
            </h2>
            <Link href="/#" className="flex gap-2 items-center hover:opacity-80 duration-150">
              <Locale item={NavigationLocale.home} />
            </Link>
            <Link href={'/#explore-my-work'} className="flex gap-2 items-center hover:opacity-80 duration-150">
              <Locale item={NavigationLocale.explore_my_work} />
            </Link>
            <Link href={'/#connect-with-me'} className="flex gap-2 items-center hover:opacity-80 duration-150">
              <Locale item={NavigationLocale.connect_with_me} />
            </Link>
            <Link href={'/#technologies'} className="flex gap-2 items-center hover:opacity-80 duration-150">
              <Locale item={NavigationLocale.technologies} />
            </Link>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className="pb-4 font-medium text-base">
              <Locale item={FooterLocale.follow_me} />
            </h2>
            <Link target="_blank" href={'https://www.linkedin.com/in/vinicius-gabriel-76a991216/'} className="flex gap-2 items-center hover:opacity-80 duration-150">
              <LinkedinLogo size={24} className="hover:opacity-40 duration-150" />
              <p>LinkedIn</p>
            </Link>
            <Link target="_blank" href={'https://www.instagram.com/vinihbieel/'} className="flex gap-2 items-center hover:opacity-80 duration-150">
              <InstagramLogo size={24} className="hover:opacity-40 duration-150" />
              <p>Instagram</p>
            </Link>
            <Link target="_blank" href={'https://api.whatsapp.com/send?phone=5513992077498'} className="flex gap-2 items-center hover:opacity-80 duration-150">
              <WhatsappLogo size={24} className="hover:opacity-40 duration-150" />
              <p>Whatsapp</p>
            </Link>
          </section>
        </div>
      </div>
    </footer>
  )
}