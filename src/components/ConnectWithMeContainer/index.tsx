'use client'
import Image from "next/image";
import myPhoto from "@/assets/image.png"
import { InstagramLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";

export default function ConnectWithMeContainer() {
  return (
    <section id="connect-with-me" className="w-full py-24 flex items-center text-center flex-col gap-4">
      <h2 className="text-3xl md:text-4xl font-bold">Connect with me</h2>
      <Image src={myPhoto} width={300} height={300} alt="Vinicius Gabriel photo" className="rounded-sm mt-12" />
      <div className="flex flex-col gap-2">
        <h3 className="font-medium">Vinicius Gabriel</h3>
        <p>FullStack Developer</p>
        <div className="text-sm">
          <p>Higly skilled full stack developer with expertise</p>
          <p> in both front-end and back-end development.</p>
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