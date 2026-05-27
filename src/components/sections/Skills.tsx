"use client"

import { motion } from "framer-motion"
import { skills } from "@/data"
import {
  SiFlutter, SiReact, SiNextdotjs, SiFirebase,
  SiSupabase, SiPython, SiDart, SiGit, SiJavascript
} from "react-icons/si"
import { Brain } from "lucide-react"

// Map skill names to icons and colors
const iconMap: Record<string, { icon: React.ReactNode; color: string }> = {
  Flutter:  { icon: <SiFlutter />,   color: "#53C2FF" },
  React:    { icon: <SiReact />,     color: "#61DAFB" },
  "Next.js":{ icon: <SiNextdotjs />, color: "#CBD5E1" },
  Firebase: { icon: <SiFirebase />,  color: "#FFA726" },
  Supabase: { icon: <SiSupabase />,  color: "#3ECF8E" },
  Python:   { icon: <SiPython />,    color: "#3B82F6" },
  Dart:     { icon: <SiDart />,      color: "#53C2FF" },
  Java:     { icon: <SiJavascript />,      color: "#007396" },
  Git:      { icon: <SiGit />,       color: "#F05033" },
  LLMs:     { icon: <Brain size={24} />, color: "#818CF8" },
  RAG:      { icon: <Brain size={24} />, color: "#818CF8" },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}>

        <p className="text-accent text-sm font-medium mb-2 tracking-widest uppercase">
          What I work with
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {skills.map((skill, i) => {
            const meta = iconMap[skill.name]
            return (
              <motion.div key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-surface border border-border rounded-xl p-4
                  flex flex-col items-center gap-2 cursor-default group">

                <span className="text-2xl transition-colors"
                  style={{ color: meta?.color ?? "#94A3B8" }}>
                  {meta?.icon ?? "?"}
                </span>

                <span className="text-xs text-text-muted group-hover:text-text-secondary
                  transition-colors text-center">
                  {skill.name}
                </span>
              </motion.div>
            )
          })}
        </div>

      </motion.div>
    </section>
  )
}