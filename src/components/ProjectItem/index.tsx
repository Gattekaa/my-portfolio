'use client'
import Image, { StaticImageData } from "next/image";
import { useState } from "react";


interface Props {
  description?: string,
  title: string,
  photo: StaticImageData | string,
  alterPhoto?: StaticImageData | string,
  href?: string;
}

export default function ProjectItem({ photo, alterPhoto, href, description, title }: Props) {
  const Element = href ? 'a' : 'div';

  return (
    <div className="w-full min-h-[400px] flex flex-col gap-4">
      <Element href={href} target="_blank" className="w-full h-[316px] relative">
        <Image src={photo} fill className={`${alterPhoto ? 'hover:opacity-0' : '!static'} aspect-video duration-300 z-[10] !h-[316px] !min-h-[316px] object-cover`} alt="Project image" />
        {
          alterPhoto ? <>
            <div className="absolute z-[8] w-full h-[316px] flex items-center justify-center bg-background-dark/20 text-slate-200 font-bold text-2xl">Click to open</div>
            <Image src={alterPhoto} fill className={`!static aspect-video !h-[316px] !min-h-[316px] object-cover`} alt="Project image" />
          </>

            : null
        }
      </Element>
      <p className="font-bold text-2xl">{title}</p>
      <p className={`text-sm text-justify animate-scale-up`}>{description}</p>
    </div>
  )
};

