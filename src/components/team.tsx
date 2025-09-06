/* eslint-disable @next/next/no-img-element */
"use client"

import { motion } from "motion/react"
import { Linkedin, Facebook, Instagram, Mail } from "lucide-react"

const team = [
  {
    name: "Ayush Tripathi",
    role: "Founder & AI/ML Engineer",
    description: "Leading AI/ML innovations and strategic vision for cutting-edge solutions.",
    image: "/tripathi.png",
  },
  {
    name: "Nitish Pandit",
    role: "Co-founder",
    description: "Driving business growth and client relationships with strategic expertise.",
    image: "/nitish.png",
  },
  {
    name: "Roshan Kumar",
    role: "CTO & Full Stack Developer",
    description: "Expert in JavaScript, TypeScript, React/Next.js, Flutter, and scalable architecture.",
    image: "/roshan.png",
  },
]

const companySocials = [
  { icon: Linkedin, url: "https://www.linkedin.com/in/nitish-kumar-42aa0626a", label: "LinkedIn" },
  { icon: Facebook, url: "https://www.facebook.com/sushil.sushilkumar.18294", label: "Facebook" },
  { icon: Instagram, url: "https://www.instagram.com/nitishpandit___32", label: "Instagram" },
  { icon: Mail, url: "mailto:nitishpandit921@gmail.com", label: "Email" },
]

export function Team() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/95" id="team">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Passionate developers and innovators dedicated to creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:bg-card/80 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                <div className="text-center">
                  <div className="relative mb-6 mx-auto w-32 h-32">
                    <img
                      src={member.image || "/placeholder.svg?height=128&width=128"}
                      alt={member.name}
                      className="w-full h-full rounded-2xl object-cover border-2 border-border group-hover:border-primary/30 transition-colors duration-300"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4 text-sm">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">Connect With Pathixo</h3>
          <div className="flex justify-center gap-4">
            {companySocials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-card/50 border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
