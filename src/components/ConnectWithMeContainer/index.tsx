"use client";

// NextJS
import Image from "next/image";

// Helpers
import Locale from "@/helpers/locale";

// Libs
import { motion } from "framer-motion";

// Icons
import {
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

// Locales
import { connect_with_me } from "@/locales/connect_with_me";

// Assets
import myPhoto from "@/assets/image.png";

export default function ConnectWithMeContainer() {
  return (
    <section
      id="connect-with-me"
      className="w-full py-24 flex items-center text-center flex-col gap-4"
    >
      <motion.h2
        initial={{ opacity: 0, left: "-20%" }}
        whileInView={{ opacity: 1, left: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold relative"
      >
        <Locale item={connect_with_me.title} />
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }}
        viewport={{ once: true }}
        className="relative w-[300px] h-[300px] rounded-full overflow-hidden mt-12"
      >
        <Image
          src={myPhoto}
          fill
          sizes="(max-width: 100%, min-height: 300px)"
          title="Vinicius Gabriel photo"
          alt="Vinicius Gabriel photo"
        />
      </motion.div>

      <div className="flex flex-col gap-2">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.35 } }}
          viewport={{ once: true }}
          className="font-medium"
        >
          Vinicius Gabriel
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.4 } }}
          viewport={{ once: true }}
        >
          <Locale item={connect_with_me.role} />
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.45 } }}
          viewport={{ once: true }}
          className="text-sm"
        >
          <Locale item={connect_with_me.description} />
        </motion.p>
        <div className="w-full flex gap-2 justify-center mt-2">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.5 } }}
            viewport={{ once: true }}
            aria-label="Find me on LinkedIn"
            target="_blank"
            rel="noreferrer"
            href={"https://www.linkedin.com/in/vinicius-gabriel-76a991216/"}
          >
            <LinkedinLogo size={32} className="hover:opacity-60 duration-150" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.55 } }}
            viewport={{ once: true }}
            aria-label="Find me on Instagram"
            target="_blank"
            rel="noreferrer"
            href={"https://https://www.instagram.com/vinihbieel/"}
          >
            <InstagramLogo
              size={32}
              className="hover:opacity-60 duration-150"
            />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.6 } }}
            viewport={{ once: true }}
            aria-label="Find me on WhatsApp"
            target="_blank"
            rel="noreferrer"
            href={"https://api.whatsapp.com/send?phone=5513992077498"}
          >
            <WhatsappLogo size={32} className="hover:opacity-60 duration-150" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
