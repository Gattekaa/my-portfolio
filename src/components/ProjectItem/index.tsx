"use client";

// React & NextJS
import Image, { StaticImageData } from "next/image";

// Libs
import { motion } from "framer-motion";

// Locale
import { ProjectItemLocale } from "@/locales/project_item";

// Helpers
import Locale from "@/helpers/locale";

interface IProps {
  description: { en: string; pt_br: string };
  title: { en: string; pt_br: string };
  photo: StaticImageData | string;
  alterPhoto?: StaticImageData | string;
  href?: string;
}

export default function ProjectItem({
  photo,
  alterPhoto,
  href,
  description,
  title,
}: IProps) {
  const Element = href ? "a" : "div";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          delay: Math.random() * 0.5,
        },
      }}
      viewport={{ once: true }}
      className="w-full min-h-[500px] flex flex-col gap-4"
    >
      <Element
        href={href}
        target="_blank"
        className="w-full h-[416px] relative"
      >
        <Image
          src={photo}
          fill
          draggable={false}
          className={`${
            alterPhoto ? "hover:opacity-0" : "!static"
          } aspect-video duration-300 z-[10] !h-[416px] !min-h-[416px] object-cover`}
          sizes="(max-width: 100%, min-height: 416px)"
          title={`${Locale({ item: title })}`}
          alt={`${<Locale item={title} />} project image`}
        />
        {alterPhoto && (
          <>
            {href && (
              <div className="absolute z-[8] w-full h-[416px] flex items-center justify-center bg-background-dark/20 text-slate-200 font-bold text-2xl">
                <Locale item={ProjectItemLocale.hoverText} />
              </div>
            )}
            <Image
              src={alterPhoto}
              fill
              draggable={false}
              className={
                "!static aspect-video !h-[416px] !min-h-[416px] object-cover"
              }
              sizes="(max-width: 100%, min-height: 416px)"
              title="Project image"
              alt="Project image"
            />
          </>
        )}
      </Element>
      <p className="font-bold text-2xl">
        <Locale item={title} />
      </p>
      <p className={"text-sm text-justify animate-scale-up"}>
        <Locale item={description} />
      </p>
    </motion.div>
  );
}
