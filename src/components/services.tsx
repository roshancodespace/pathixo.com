"use client"

import { motion } from "motion/react"
import { Globe, Smartphone, Search, Palette, Database, Cloud } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites built with Next.js for optimal performance and SEO.",
    color: "text-red-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform mobile applications using Flutter for iOS and Android.",
    color: "text-orange-500",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Built-in SEO best practices to ensure your website ranks high on search engines.",
    color: "text-red-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Mesmerizing user interfaces that provide exceptional user experiences.",
    color: "text-orange-400",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Scalable backend solutions with modern databases and APIs.",
    color: "text-red-600",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Deploy and scale your applications with modern cloud infrastructure.",
    color: "text-orange-600",
  },
]

export function Services() {
  return (
    <section className="py-32 bg-gradient-to-br from-zinc-800 to-zinc-950" id="services">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 text-balance font-mono">
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto text-pretty font-light">
            Professional development solutions for modern businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:bg-gray-900/50 transition-all duration-300 hover:border-red-500/30">
                <div className="w-14 h-14 rounded-lg bg-gray-800/50 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
