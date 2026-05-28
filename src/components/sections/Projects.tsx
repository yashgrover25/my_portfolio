"use client"

import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { ExternalLink } from "lucide-react"
import { projects } from "@/data"

// Tech chip brand colors — same as your theme
const chipColor: Record<string, string> = {
  "Flutter":  "rgba(83,194,255,0.12)",
  "React":    "rgba(97,218,251,0.12)",
  "Next.js":  "rgba(226,232,240,0.08)",
  "Firebase": "rgba(255,167,38,0.12)",
  "Dart":     "rgba(83,194,255,0.12)",
  "Supabase": "rgba(62,207,142,0.12)",
}
const chipText: Record<string, string> = {
  "Flutter":  "#53C2FF",
  "React":    "#61DAFB",
  "Next.js":  "#CBD5E1",
  "Firebase": "#FFA726",
  "Dart":     "#53C2FF",
  "Supabase": "#3ECF8E",
}

export default function Projects() {
  return (
    <section id="projects" className="py-12  px-6 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}>

        <p className="text-accent text-sm font-medium mb-2 tracking-widest uppercase">
          What I've built
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative bg-surface border border-border rounded-2xl p-6
                flex flex-col gap-4 group
                backdrop-blur-sm overflow-hidden">

              {/* Glassmorphism glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                transition-opacity duration-500 pointer-events-none
                bg-gradient-to-br from-accent/5 via-transparent to-teal/5" />

              {/* Status dot */}
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-text-muted">
                  <span className={`w-1.5 h-1.5 rounded-full
                    ${project.status === "live" ? "bg-teal animate-pulse" : "bg-text-muted"}`} />
                  {project.status}
                </span>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank"
                      className="text-text-muted hover:text-text-primary transition-colors">
                      <FaGithub size={16} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank"
                      className="text-text-muted hover:text-accent-light transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Title + description */}
              <div>
                <h3 className="text-text-primary font-semibold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {project.tech.map(t => (
                  <span key={t}
                    style={{
                      background: chipColor[t] ?? "rgba(255,255,255,0.06)",
                      color: chipText[t] ?? "#94A3B8",
                      border: `1px solid ${chipText[t] ?? "#94A3B8"}30`
                    }}
                    className="text-xs px-2.5 py-1 rounded-md font-medium">
                    {t}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  )
}