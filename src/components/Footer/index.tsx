"use client";

// Libs
import { motion } from "framer-motion";

// Icons
import {
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

// Helpers
import Locale from "@/helpers/locale";

// Locales
import { FooterLocale } from "@/locales/footer";
import { NavigationLocale } from "@/locales/navigation";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full py-24 px-12 md:px-48 bg-background-light"
    >
      <div className="justify-between hidden md:flex">
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.1 } }}
          viewport={{ once: true }}
          href={"/"}
          className="font-bold text-xl tracking-tight animate-gradient flex items-center"
        >
          &lt;Vinicius/&gt;
        </motion.a>
        <section className="flex flex-col gap-4">
          <motion.h2
            initial={{ opacity: 0, left: "-20%" }}
            whileInView={{ opacity: 1, left: 0 }}
            viewport={{ once: true }}
            className="pb-4 font-medium text-base relative"
          >
            <Locale item={FooterLocale.navigation} />
          </motion.h2>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
            viewport={{ once: true }}
            href="/#"
            className="flex gap-2 items-center hover:opacity-80 duration-150"
          >
            <Locale item={NavigationLocale.home} />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
            viewport={{ once: true }}
            href={"/#explore-my-work"}
            className="flex gap-2 items-center hover:opacity-80 duration-150"
          >
            <Locale item={NavigationLocale.explore_my_work} />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.4 } }}
            viewport={{ once: true }}
            href={"/#connect-with-me"}
            className="flex gap-2 items-center hover:opacity-80 duration-150"
          >
            <Locale item={NavigationLocale.connect_with_me} />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
            viewport={{ once: true }}
            href={"/#technologies"}
            className="flex gap-2 items-center hover:opacity-80 duration-150"
          >
            <Locale item={NavigationLocale.technologies} />
          </motion.a>
        </section>
        <section className="flex flex-col gap-4">
          <motion.h2
            initial={{ opacity: 0, right: "-20%" }}
            whileInView={{ opacity: 1, right: 0 }}
            viewport={{ once: true }}
            className="pb-4 font-medium text-base relative"
          >
            <Locale item={FooterLocale.follow_me} />
          </motion.h2>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
            viewport={{ once: true }}
            target="_blank"
            rel="noreferrer"
            href={"https://www.linkedin.com/in/vinicius-gabriel-76a991216/"}
            className="flex gap-2 items-center hover:opacity-80 duration-150"
          >
            <LinkedinLogo size={24} className="hover:opacity-40 duration-150" />
            <p>LinkedIn</p>
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
            viewport={{ once: true }}
            target="_blank"
            rel="noreferrer"
            href={"https://www.instagram.com/vinihbieel/"}
            className="flex gap-2 items-center hover:opacity-80 duration-150"
          >
            <InstagramLogo
              size={24}
              className="hover:opacity-40 duration-150"
            />
            <p>Instagram</p>
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.4 } }}
            viewport={{ once: true }}
            target="_blank"
            rel="noreferrer"
            href={"https://api.whatsapp.com/send?phone=5513992077498"}
            className="flex gap-2 items-center hover:opacity-80 duration-150"
          >
            <WhatsappLogo size={24} className="hover:opacity-40 duration-150" />
            <p>Whatsapp</p>
          </motion.a>
        </section>
      </div>
      <div className="flex-col justify-between items-center gap-24 flex md:hidden">
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.1 } }}
          viewport={{ once: true }}
          href={"/"}
          className="font-bold text-xl tracking-tight animate-gradient"
        >
          &lt;Vinicius/&gt;
        </motion.a>
        <div className="w-full flex justify-between">
          <section className="flex flex-col gap-4">
            <motion.h2
              initial={{ opacity: 0, left: "-20%" }}
              whileInView={{ opacity: 1, left: 0 }}
              viewport={{ once: true }}
              className="pb-4 font-medium text-base relative"
            >
              <Locale item={FooterLocale.navigation} />
            </motion.h2>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
              viewport={{ once: true }}
              href="/#"
              className="flex gap-2 items-center hover:opacity-80 duration-150"
            >
              <Locale item={NavigationLocale.home} />
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
              viewport={{ once: true }}
              href={"/#explore-my-work"}
              className="flex gap-2 items-center hover:opacity-80 duration-150"
            >
              <Locale item={NavigationLocale.explore_my_work} />
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.4 } }}
              viewport={{ once: true }}
              href={"/#connect-with-me"}
              className="flex gap-2 items-center hover:opacity-80 duration-150"
            >
              <Locale item={NavigationLocale.connect_with_me} />
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
              viewport={{ once: true }}
              href={"/#technologies"}
              className="flex gap-2 items-center hover:opacity-80 duration-150"
            >
              <Locale item={NavigationLocale.technologies} />
            </motion.a>
          </section>
          <section className="flex flex-col gap-4">
            <motion.h2
              initial={{ opacity: 0, right: "-20%" }}
              whileInView={{ opacity: 1, right: 0 }}
              viewport={{ once: true }}
              className="pb-4 font-medium text-base relative"
            >
              <Locale item={FooterLocale.follow_me} />
            </motion.h2>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
              viewport={{ once: true }}
              target="_blank"
              rel="noreferrer"
              href={"https://www.linkedin.com/in/vinicius-gabriel-76a991216/"}
              className="flex gap-2 items-center hover:opacity-80 duration-150"
            >
              <LinkedinLogo
                size={24}
                className="hover:opacity-40 duration-150"
              />
              <p>LinkedIn</p>
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
              viewport={{ once: true }}
              target="_blank"
              rel="noreferrer"
              href={"https://www.instagram.com/vinihbieel/"}
              className="flex gap-2 items-center hover:opacity-80 duration-150"
            >
              <InstagramLogo
                size={24}
                className="hover:opacity-40 duration-150"
              />
              <p>Instagram</p>
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.4 } }}
              viewport={{ once: true }}
              target="_blank"
              rel="noreferrer"
              href={"https://api.whatsapp.com/send?phone=5513992077498"}
              className="flex gap-2 items-center hover:opacity-80 duration-150"
            >
              <WhatsappLogo
                size={24}
                className="hover:opacity-40 duration-150"
              />
              <p>Whatsapp</p>
            </motion.a>
          </section>
        </div>
      </div>
    </footer>
  );
}
