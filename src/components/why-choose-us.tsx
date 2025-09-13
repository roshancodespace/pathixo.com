"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Users, Cpu } from "lucide-react"

const differentiators = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Your data is protected with compliance-ready infrastructure, encryption, and 24/7 monitoring.",
  },
  {
    icon: Zap,
    title: "Faster Time-to-Market",
    description:
      "We ship production-ready solutions in weeks, not months, accelerating your business outcomes.",
  },
  {
    icon: Users,
    title: "B2B-Focused Partnerships",
    description:
      "We work as an extension of your team — ensuring tailored solutions and long-term collaboration.",
  },
  {
    icon: Cpu,
    title: "Scalable Architecture",
    description:
      "From MVP to millions of users, our cloud-native solutions scale with your business needs.",
  },
]

export default function WhyChooseUsPage() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white py-24 px-6">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="uppercase tracking-widest text-sm font-semibold text-purple-400 mb-2"
        >
          Why Choose Us
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold"
        >
          Built for{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Growth & Trust
          </span>
        </motion.h2>
      </div>

      {/* Differentiators */}
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {differentiators.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="flex gap-6 items-start bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition"
          >
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <item.icon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
