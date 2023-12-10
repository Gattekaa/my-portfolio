'use client'

// NextJS
import Image from 'next/image'
import Link from 'next/link'

// Helpers
import Locale from '@/helpers/locale'

// Assets
import { PresentationLocale } from '@/locales/presentation'

// Assets
import rocketSvg from '@/assets/svg/rocket.svg'


export default function PresentationContainer() {
  return (
    <section className="w-full md:min-h-[calc(100vh_-_80px)] grid grid-flow-row md:grid-flow-col md:grid-cols-2 md:gap-12 lg:gap-24 py-24">
      <div className="flex order-2 md:order-none flex-col items-center justify-center text-start px-4 lg:p-24 gap-8 animate-increase-size">
        <p className="text-5xl md:text-[3.5vw] font-bold "><Locale item={PresentationLocale.copy_parts.first} /> <strong className="animate-gradient font-bold"><Locale item={PresentationLocale.copy_parts.second} /></strong> <Locale item={PresentationLocale.copy_parts.third} /></p>
        <span>
          <Locale item={PresentationLocale.greeting} />
        </span>
        <div className="w-full flex gap-4 ">
          <Link href={'#explore-my-work'} className="animate-fade-in delay-75 whitespace-nowrap w-full md:w-fit flex items-center justify-center border-2 duration-150 border-background-dark bg-background-dark hover:bg-transparent hover:text-background-dark text-background-light px-8 py-3">
            <Locale item={PresentationLocale.buttons.see_more} />
          </Link>
          <Link href={'#connect-with-me'} className="whitespace-nowrap w-full md:w-fit flex items-center justify-center duration-150 text-background-dark border-2 border-background-dark px-8 py-3 hover:bg-background-dark hover:text-background-light">
            <Locale item={PresentationLocale.buttons.contact_me} />
          </Link>
        </div>
      </div>
      <div className="flex h-[380px] md:h-full flex-col items-center justify-center relative animate-increase-size">
        <Image
          className="object-contain aspect-square md:scale-[70%] "
          sizes='(max-width: 100%)'
          priority
          src={rocketSvg}
          alt="Picture an rocket"
          fill
        />
      </div>
    </section>
  )
}