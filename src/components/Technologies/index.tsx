"use client";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";

import jwtio from "@/assets/svg/jwtio.svg";
import nextjs from "@/assets/svg/nextjs.svg";
import nodejs from "@/assets/svg/nodejs.svg";
import prismaio from "@/assets/svg/prismaio.svg";
// Images
import react from "@/assets/svg/react.svg";

export default function Technologies() {
  return (
    <Splide
      id="technologies"
      className="w-full opacity-80 py-8 bg-background-light border-y-2 border-y-background-dark/20"
      options={{
        type: "loop",
        gap: "10px",
        drag: "free",
        arrows: false,
        pagination: false,
        perPage: 3,
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: false,
          speed: 1,
        },
      }}
      extensions={{ AutoScroll }}
    >
      <SplideSlide className="flex items-center justify-center relative !w-[250px] md:!w-[400px] h-[100px]">
        <Image
          src={react}
          fill
          className="object-contain scale-90"
          alt="ReactJS"
          title="ReactJS"
        />
      </SplideSlide>
      <SplideSlide className="flex items-center justify-center relative !w-[250px] md:!w-[400px] h-[100px]">
        <Image
          src={nextjs}
          fill
          className="object-contain"
          alt="NextJS"
          title="NextJS"
        />
      </SplideSlide>
      <SplideSlide className="flex items-center justify-center relative !w-[250px] md:!w-[400px] h-[100px]">
        <Image
          src={nodejs}
          fill
          className="object-contain scale-75"
          alt="NodeJS"
          title="NodeJS"
        />
      </SplideSlide>
      <SplideSlide className="flex items-center justify-center relative !w-[250px] md:!w-[400px] h-[100px]">
        <Image
          src={prismaio}
          fill
          className="object-contain scale-75"
          alt="PrismaIO"
          title="PrismaIO"
        />
      </SplideSlide>
      <SplideSlide className="flex items-center justify-center relative !w-[250px] md:!w-[400px] h-[100px]">
        <Image
          src={jwtio}
          fill
          className="object-contain"
          alt="JwtIO"
          title="JwtIO"
        />
      </SplideSlide>
    </Splide>
  );
}
