'use client'

// NextJS
import Image from "next/image";
import Link from "next/link";

// Helpers
import Locale from "@/helpers/locale";

// Icons
import { InstagramLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";

// Locales
import { connect_with_me } from "@/locales/connect_with_me";

// Assets
import myPhoto from "@/assets/image.png"

export default function ConnectWithMeContainer() {
  return (
    <section id="connect-with-me" className="w-full py-24 flex items-center text-center flex-col gap-4">
      <h2 className="text-3xl md:text-4xl font-bold">
        <Locale item={connect_with_me.title} />
      </h2>
      <Image src={myPhoto} width={300} height={300} alt="Vinicius Gabriel photo" className="rounded-sm mt-12" />
      <div className="flex flex-col gap-2">
        <h3 className="font-medium">Vinicius Gabriel</h3>
        <p>
          <Locale item={connect_with_me.role} />
        </p>
        <div className="text-sm">
          <Locale item={connect_with_me.description} />
        </div>
        <div className="w-full flex gap-2 justify-center mt-2">
          <Link target="_blank" href={'https://www.linkedin.com/in/vinicius-gabriel-76a991216/'}>
            <LinkedinLogo size={32} className="hover:opacity-60 duration-150" />
          </Link>
          <Link target="_blank" href={'https://https://www.instagram.com/vinihbieel/'}>
            <InstagramLogo size={32} className="hover:opacity-60 duration-150" />
          </Link>
          <Link target="_blank" href={'https://api.whatsapp.com/send?phone=5513992077498'}>
            <WhatsappLogo size={32} className="hover:opacity-60 duration-150" />
          </Link>
        </div>
      </div>
    </section>
  )
}