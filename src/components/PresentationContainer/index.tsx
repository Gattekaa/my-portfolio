import rocketSvg from '@/assets/svg/rocket.svg'
import Image from 'next/image'
export default function PresentationContainer() {
  return (
    <section className="w-full md:min-h-[calc(100vh_-_80px)] grid grid-flow-row md:grid-flow-col md:grid-cols-2 md:gap-12 lg:gap-24 py-24">
      <div className="flex order-2 md:order-none flex-col items-center justify-center text-start px-8 lg:p-24 gap-8">
        <p className="text-5xl md:text-[3.5vw] font-bold ">Transforming ideas into <strong className="animate-gradient font-bold">Powerfull</strong> Web Solutions</p>
        <span>Welcome to my fullstack developer portfolio. I specialize in creating robust web solutions that bring your ideas to life.</span>
        <div className="w-full flex gap-4">
          <button className="whitespace-nowrap w-full md:w-fit bg-background-dark text-white px-8 py-3">See more</button>
          <button className="whitespace-nowrap w-full md:w-fit text-background-dark border-2 border-background-dark px-8 py-3">Contact me</button>
        </div>
      </div>
      <div className="flex h-[380px] md:h-full flex-col items-center justify-center relative">
        <Image
          className="object-contain aspect-square md:scale-[70%]"  
          sizes='(max-width: 100%)'       
          priority
          src={rocketSvg}
          alt="Picture of the author"
          fill
        />
      </div>
    </section>
  )
}