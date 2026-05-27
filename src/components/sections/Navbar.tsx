"use client"

import {useState , useEffect} from 'react'
import { X, Menu } from 'lucide-react'
const links = ["about", "skills", "projects", "experience", "contact"]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNav = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-surface border-b border-border backdrop-blur-sm" : "bg-transparent"}`}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <span className="text-text-primary font-semibold tracking-tight">
          My<span className="text-accent">Portfolio</span>
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {links.map(l => (
            <button key={l} onClick={() => handleNav(l)}
              className="text-text-secondary hover:text-accent-light text-sm capitalize transition-colors">
              {l}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-text-secondary" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-surface border-t border-border px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <button key={l} onClick={() => handleNav(l)}
              className="text-text-secondary hover:text-accent-light text-sm capitalize text-left transition-colors">
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}