"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}>

        <p className="text-accent text-sm font-medium mb-2 tracking-widest uppercase">
          About me
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
          Who I am
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Photo */}
          <div className="relative w-full h-[300px] sm:h-full shrink-0">
            <Image
              src="/yashgrover.jpeg"
              fill
              alt="Yash Grover"
              className="object-cover rounded-2xl"
            />
          </div>
          {/* <div className="w-full aspect-square max-w-xs mx-auto md:mx-0 rounded-2xl
            bg-surface border border-border flex items-center justify-center text-text-muted">
            <span className="text-sm">your photo</span>
          </div> */}

          {/* Bio */}
          <div className="flex flex-col gap-4">
            <p className="text-text-secondary leading-relaxed">
              I'm a B.Tech CS student at IILM University with a strong foundation
              in frontend development and a growing interest in backend and AI systems.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I've worked as a Flutter Developer and Engineer Intern at Stucknot,
              where I built production UIs and worked hands-on with LLMs and
              RAG pipelines
            </p>
            <p className="text-text-secondary leading-relaxed">
              Outside of work, I practice competitive coding on LeetCode, build
              UI experiments in Flutter and React, and create content for social media.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[
                { val: "2+", label: "Internships" },
                { val: "2", label: "Live Projects" },
                { val: "3+", label: "Certifications" },
              ].map(s => (
                <div key={s.label} className="bg-surface border border-border
                  rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-accent">{s.val}</div>
                  <div className="text-xs text-text-muted mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  )
}