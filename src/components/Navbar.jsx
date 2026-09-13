import { useState } from 'react'
import logo from '../assets/logo-text.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-[1000] border-b border-slate-100 bg-white">
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center px-4 md:h-20 md:px-8">

        <button
          className="mr-2 shrink-0 text-2xl leading-none text-slate-700 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          ☰
        </button>

        <div className="shrink-0">
          <a href="/">
            <img
              src={logo}
              alt="Dev Stack"
              className="h-9 w-[139px] object-contain"
            />
          </a>
        </div>

        <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
          <a href="#home" className="text-sm text-slate-600">
            Home
          </a>
          <a href="#technologies" className="text-sm text-slate-600">
            Technologies
          </a>
          <a href="#projects" className="text-sm text-slate-600">
            Projects
          </a>
          <a href="#about" className="text-sm text-slate-600">
            About
          </a>
          <a href="#contact" className="text-sm text-slate-600">
            Contact
          </a>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2 md:gap-4">
          <a
            href="#signin"
            className="text-xs text-slate-600 md:text-sm"
          >
            Sign In
          </a>

          <a
            href="#signup"
            className="whitespace-nowrap rounded-full bg-pink-500 px-3 py-2 text-xs text-white md:px-5 md:py-[11px] md:text-sm"
          >
            Sign Up
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#home" className="text-sm text-slate-600">
              Home
            </a>
            <a href="#technologies" className="text-sm text-slate-600">
              Technologies
            </a>
            <a href="#projects" className="text-sm text-slate-600">
              Projects
            </a>
            <a href="#about" className="text-sm text-slate-600">
              About
            </a>
            <a href="#contact" className="text-sm text-slate-600">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar