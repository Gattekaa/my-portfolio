'use client'
import Navbar from "@/components/Navbar";
import { ArrowArcLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export default function Custom404() {
  const { back } = useRouter()
  return (
    <section className="w-full h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col justify-center items-center">
        <p className="text-9xl font-black animate-gradient">404</p>
        <p className="text-2xl font-medium text-background-dark">Oops, Page not Found...</p>
        <button onClick={back} className="mt-8 bg-background-dark text-white px-8 py-3 flex gap-4 items-center justify-center hover:bg-transparent border-2 border-transparent duration-150 hover:border-background-dark hover:text-background-dark">
          <ArrowArcLeft size={28} />
          Go back
        </button>
      </div>
    </section>
  )
}