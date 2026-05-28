"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion } from "framer-motion"
import { useState } from "react"
import { FaGithub ,FaLinkedin } from 'react-icons/fa';
import { Send } from "lucide-react"

const schema = z.object({
  name:    z.string().min(2, "Name is too short"),
  email:   z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message is too short"),
})
type FormData = z.infer<typeof schema>

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle")

  const { register, handleSubmit, reset,
    formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) { setStatus("sent"); reset() }
      else setStatus("error")
    } catch { setStatus("error") }
  }

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}>

        <p className="text-accent text-sm font-medium mb-2 tracking-widest uppercase">
          Get in touch
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          Contact
        </h2>
        <p className="text-text-secondary mb-12 max-w-md">
          Open to internships, collaborations, and interesting projects.
          Drop a message and I'll get back to you.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

            <div>
              <input {...register("name")} placeholder="Your name"
                className="w-full bg-surface border border-border rounded-lg px-4 py-3
                  text-text-primary text-sm placeholder:text-text-muted
                  focus:outline-none focus:border-accent/50 transition-colors" />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <input {...register("email")} placeholder="your@email.com"
                className="w-full bg-surface border border-border rounded-lg px-4 py-3
                  text-text-primary text-sm placeholder:text-text-muted
                  focus:outline-none focus:border-accent/50 transition-colors" />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <textarea {...register("message")} rows={5} placeholder="Your message..."
                className="w-full bg-surface border border-border rounded-lg px-4 py-3
                  text-text-primary text-sm placeholder:text-text-muted resize-none
                  focus:outline-none focus:border-accent/50 transition-colors" />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
            </div>

            <button type="submit" disabled={status === "sending"}
              className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90
                disabled:opacity-50 text-white text-sm font-medium
                px-6 py-3 rounded-lg transition-colors">
              <Send size={14} />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent"  && <p className="text-teal text-sm">Message sent! I'll reply soon.</p>}
            {status === "error" && <p className="text-red-400 text-sm">Something went wrong. Try again.</p>}

          </form>

          {/* Social links */}
          <div className="flex flex-col gap-6 justify-center">
            <p className="text-text-secondary text-sm">Or find me here —</p>
            {[
              { label: "GitHub",   href: "https://github.com/yashgrover25",         icon: <FaGithub size={18} /> },
              { label: "LinkedIn", href: "https://linkedin.com/in/yash-grover17",   icon: <FaLinkedin size={18} /> },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank"
                className="flex items-center gap-3 text-text-secondary
                  hover:text-accent-light transition-colors group">
                <span className="w-10 h-10 rounded-lg bg-surface border border-border
                  flex items-center justify-center group-hover:border-accent/40 transition-colors">
                  {s.icon}
                </span>
                {s.label}
              </a>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  )
}