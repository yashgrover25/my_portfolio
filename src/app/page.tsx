import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import ExperienceSection from '@/components/sections/Experience'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import React from 'react'


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <ExperienceSection />
      <Projects />
      <Contact />
      {/* <footer className="text-center py-8 text-text-muted text-xs border-t border-border">
        Built by Yash Grover with Next.js & Tailwind
      </footer> */}
      <footer className="w-full bg-[#111319] text-[#94a3b8] py-10 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left Side: Copyright */}
          <div className="text-sm font-medium tracking-tight">
            © 2024 <span className="text-white">Yash Grover.</span> Built with precision.
          </div>

          {/* Right Side: Social Links */}
          <div className="flex items-center gap-8 text-sm">
            <a
              href="https://github.com/yashgrover25"
              target="_blank"
              className="hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yash-grover17"
              target="_blank"
              className="hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-white transition-colors duration-200"
            >
              Twitter
            </a>
            <a
              href="mailto:ygrover178@gmail.com"
              className="hover:text-white transition-colors duration-200"
            >
              Email
            </a>
          </div>

        </div>
      </footer>
    </div>
  )
}
