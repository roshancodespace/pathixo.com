"use client"

import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import Link from 'next/link'
import { BoxReveal } from '../magicui/box-reveal'
import { LineShadowText } from '../magicui/line-shadow-text'
import TextType from '../TextType'
import { motion } from 'motion/react'
import Modal from '../modal'

const services = [
  {
    title: "Web Development",
    description:
      "High-performance websites with Next.js, optimized for speed, SEO, and user experience.",
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps using Flutter or React Native that feel native on iOS and Android.",
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure with AWS, GCP, or Vercel to support growth and reliability.",
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful, user-focused designs that blend aesthetics with functionality for seamless experiences.",
  },
  {
    title: "API & Backend Development",
    description:
      "Robust, secure, and scalable APIs and backends tailored to your business needs.",
  },
  // {
  //   title: "DevOps & Automation",
  //   description:
  //     "CI/CD pipelines, monitoring, and automated workflows to keep your systems running smoothly.",
  // },
]

function Services() {
  const [selectedService, setSelectedService] = useState<null | typeof services[0]>(null)

  return (
    <section
      className="min-h-screen relative z-[1] max-w-7xl pt-40 px-4 space-y-12 w-full mx-auto"
      id="services"
    >
      <div>
        <h4 className="font-semibold text-purple-400">OUR SERVICES</h4>
        <div className="grid md:grid-cols-2 gap-5 items-center">
          <BoxReveal>
            <h1 className="text-3xl font-bold md:text-5xl leading-none">
              What
              <LineShadowText
                shadowColor="#a855f7"
                className="inline-block mx-4 italic text-purple-400"
              >
                Services
              </LineShadowText>
              <br />
              Do We Offer
              <motion.span
                initial={{ rotateZ: 20, x: 5, skewX: 5 }}
                animate={{ rotateZ: -20, x: 0, skewX: -5 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                className="inline-block ml-2 text-purple-400"
              >
                ?
              </motion.span>
            </h1>
          </BoxReveal>
          <div className="w-full text-zinc-300">
            <TextType
              text={[
                `Our team blends cutting-edge technology with sleek design to deliver solutions that are not only reliable but also remarkable. Whether it’s launching your first product or optimizing enterprise systems, we help you stay ahead of the curve`,
              ]}
              typingSpeed={35}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>
        </div>
      </div>

      <div>
        {services.map((service) => (
          <div
            key={service.title}
            onClick={() => setSelectedService(service)}
            className="flex justify-between cursor-pointer items-center py-5 h-[6.5em] font-medium border-b border-zinc-800 group hover:bg-purple-500/10 transition-all hover:px-5 md:hover:px-10"
          >
            <h1 className="text-2xl flex items-end gap-2 md:text-4xl lg:text-5xl cursor-pointer transition-all group-hover:text-purple-400 group-hover:text-3xl md:group-hover:text-5xl lg:group-hover:text-6xl">
              {service.title}
              <div className="size-3 bg-purple-400 transition-opacity mb-[3px] opacity-0 group-hover:opacity-100"></div>
            </h1>
            <div className="rounded-full border-2 border-zinc-700 group-hover:border-purple-400 p-3 transition-all group-hover:translate-x-2">
              <motion.div
                animate={{ x: [0, 2, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              >
                <ArrowRight className="w-6 h-6 text-purple-400" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Correctly using the reusable Modal component */}
      <Modal isOpen={!!selectedService} onClose={() => setSelectedService(null)}>
        {selectedService && (
          <div>
            <div className="mb-6">
              <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold">{selectedService.title}</h2>
            </div>
            <p className="mb-8 text-gray-300 leading-relaxed">{selectedService.description}</p>
            <Link href="#contact" onClick={() => setSelectedService(null)}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-gradient-to-r cursor-pointer from-purple-500 to-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-purple-500/20 transition-all duration-300 text-white"
              >
                Start a Project With Us
              </motion.button>
            </Link>
          </div>
        )}
      </Modal>
    </section>
  )
}

export default Services