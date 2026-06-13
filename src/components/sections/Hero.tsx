"use client"

import { motion } from "framer-motion"
import { FaGithub ,FaLinkedin } from 'react-icons/fa';
import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center
      text-center px-6 relative">

      {/* Availability badge */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full
          border border-accent/30 bg-accent/10 text-accent-light text-xs">
        <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
        Available for work · 2026
      </motion.div>
    
      {/* Name */}
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold text-text-primary tracking-tight mb-4">
        Yash Grover
      </motion.h1>

      {/* Tagline */}
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-text-secondary mb-2 max-w-xl">
        Flutter dev with production experience
        <div className="text-accent-light">— building fast, shipping faster.</div>
      </motion.p>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-text-muted text-sm mb-10">
        Flutter · Next.js · React · LLMs · RAG
      </motion.p>

      {/* CTAs */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap gap-3 justify-center mb-10">

        <a href="/resume.pdf" target="_blank"
          className="px-5 py-2.5 bg-accent hover:bg-accent/90 text-white text-sm
            font-medium rounded-lg transition-colors">
          Download Resume
        </a>

        <button onClick={() => document.getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" })}
          className="px-5 py-2.5 border border-border hover:border-accent/50
            text-text-secondary hover:text-text-primary text-sm rounded-lg transition-colors">
          View Projects
        </button>
      </motion.div>

      {/* Social icons */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex gap-4 mb-10">
        <a href="https://github.com/yashgrover25" target="_blank"
          className="text-text-muted hover:text-text-primary transition-colors">
          <FaGithub size={18} />
        </a>
        <a href="https://linkedin.com/in/yash-grover17" target="_blank"
          className="text-text-muted hover:text-text-primary transition-colors">
          <FaLinkedin size={18} />
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 text-text-muted">
        <ArrowDown size={16} />
      </motion.div>

    </section>
  )
}