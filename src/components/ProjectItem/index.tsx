'use client'

// React & NextJS
import React from "react";
import Image, { StaticImageData } from "next/image";

// Helpers
import Locale from "@/helpers/locale";

interface IProps {
  description: { en: string, pt_br: string },
  title: { en: string, pt_br: string },
  photo: StaticImageData | string,
  alterPhoto?: StaticImageData | string,
  href?: string;
}

export default function ProjectItem({ photo, alterPhoto, href, description, title }: IProps) {
  const Element = href ? 'a' : 'div';

  return (
    <div className="w-full min-h-[500px] flex flex-col gap-4">
      <Element href={href} target="_blank" className="w-full h-[416px] relative">
        <Image src={photo} fill className={`${alterPhoto ? 'hover:opacity-0' : '!static'} aspect-video duration-300 z-[10] !h-[416px] !min-h-[416px] object-cover`} sizes="(max-width: 100%, min-height: 416px)" alt="Project image" />
        {
          alterPhoto ? <>
            <div className="absolute z-[8] w-full h-[416px] flex items-center justify-center bg-background-dark/20 text-slate-200 font-bold text-2xl">Click to open</div>
            <Image src={alterPhoto} fill className={`!static aspect-video !h-[416px] !min-h-[416px] object-cover`} sizes="(max-width: 100%, min-height: 416px)" alt="Project image" />
          </>

            : null
        }
      </Element>
      <p className="font-bold text-2xl">
        <Locale item={title} />
      </p>
      <p className={`text-sm text-justify animate-scale-up`}>
        <Locale item={description} />
      </p>
    </div>
  )
};

