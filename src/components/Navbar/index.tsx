'use client'
import { TextAlignRight, TextAlignLeft } from "@phosphor-icons/react"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleNavbarOpen = () => setNavbarOpen(!navbarOpen)
  return (
    <nav className="flex w-full items-center justify-between flex-wrap bg-background-light z-[100] py-6 p-8 lg:px-24 border-b-2 border-b-border-light sticky top-0 left-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href={'/'} className="font-bold text-xl tracking-tight animate-gradient">
          &lt;Vinicius/&gt;
        </Link>
      </div>
      <div className="block lg:hidden">

        <button onClick={handleNavbarOpen} className="">
          {
            navbarOpen ? <TextAlignLeft size={32} /> : <TextAlignRight size={32} />
          }
        </button>
      </div>
      <div className={`hidden lg:flex lg:items-center`}>
        <div className="flex gap-4">
          <a href="#" className="text-background-dark hover:text-background-dark/40 duration-150 mr-4">
            Home
          </a>
          <a href="/#explore-my-work" className="text-background-dark hover:text-background-dark/40 duration-150">
            Explore my work
          </a>
          <a href="/#technologies" className="text-background-dark hover:text-background-dark/40 duration-150 mr-4">
            Technologies
          </a>
          <a href="/#connect-with-me" className="text-background-dark hover:text-background-dark/40 duration-150">
            Connect with me
          </a>
        </div>
      </div>
      {
        navbarOpen && (
          <div className={`lg:hidden animate-scale-up w-full ${navbarOpen ? 'absolute block pt-4 pb-8 px-8 lg:px-24 bg-background-light border-b-2 border-b-border-light' : 'hidden'}  top-[75%] left-0 lg:flex lg:items-center`}>
            <div className="flex flex-col gap-4">
              <a onClick={handleNavbarOpen} href="/#" className="text-background-dark hover:text-background-dark/40 duration-150 mr-4">
                Home
              </a>
              <a onClick={handleNavbarOpen} href="/#explore-my-work" className="text-background-dark hover:text-background-dark/40 duration-150">
                Explore my work
              </a>
              <a onClick={handleNavbarOpen} href="/#technologies" className="text-background-dark hover:text-background-dark/40 duration-150 mr-4">
                Technologies
              </a>
              <a onClick={handleNavbarOpen} href="/#connect-with-me" className="text-background-dark hover:text-background-dark/40 duration-150">
                Connect with me
              </a>
            </div>
          </div>
        )
      }
    </nav>

              
  )
}