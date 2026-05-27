import About from '@/components/sections/About'
import ExperienceSection from '@/components/sections/Experience'
import Hero from '@/components/sections/Hero'
import Skills from '@/components/sections/Skills'
import React from 'react'


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <ExperienceSection />
    </div>
  )
}
