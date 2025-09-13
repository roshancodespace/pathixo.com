"use client"
import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import ServiceModal from './service-modal'
import { BoxReveal } from './magicui/box-reveal'
import { LineShadowText } from './magicui/line-shadow-text'
import TextType from './TextType'
import { motion } from 'motion/react'

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
  {
    title: "DevOps & Automation",
    description:
      "CI/CD pipelines, monitoring, and automated workflows to keep your systems running smoothly.",
  },
]


function Services() {
  const [selectedService, setSelectedService] = useState<null | typeof services[0]>(null)
  return (
    <section className='min-h-screen relative z-[1] max-w-7xl py-20 px-4 space-y-12 w-full' id='services'>
      <div>
        <h4 className='font-semibold'>OUR SERVICES</h4>
        <div className='grid md:grid-cols-2 gap-5 items-center'>
          <BoxReveal>
            <h1 className='text-3xl font-bold md:text-5xl leading-none'>
              What
              <LineShadowText shadowColor="#ffffff" className='inline-block mx-4 italic'>Services</LineShadowText>
              <br />
              Do We Offer
              <motion.span
                initial={{ rotateZ: 20, x: 5, skewX: 5 }}
                animate={{ rotateZ: -20, x: 0, skewX: -5 }}
                transition={{
                  repeat: Infinity,      // infinite loop
                  repeatType: "reverse", // go back and forth
                  duration: 1.2,         // speed of each swing
                  ease: "easeInOut",     // smooth easing
                }}
                className="inline-block ml-2"
              >
                ?
              </motion.span>
            </h1>
          </BoxReveal>
          <div className='w-full'>
            <TextType
              text={[`Our team blends cutting-edge technology with sleek design to deliver solutions that are not only reliable but also remarkable. Whether it’s launching your first product or optimizing enterprise systems, we help you stay ahead of the curve`]}
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
            className="flex justify-between cursor-pointer items-center py-5 h-[6.5em] font-medium border-b border-white group hover:bg-white transition-all hover:px-5 md:hover:px-10"
          >
            <h1 className="text-2xl flex items-end gap-2 md:text-4xl lg:text-5xl cursor-pointer transition-all group-hover:text-black group-hover:text-3xl md:group-hover:text-5xl lg:group-hover:text-6xl">
              {service.title}
              <div className='size-3 bg-[#ff44f9] transition-opacity mb-[3px] opacity-0 group-hover:opacity-100'></div>
            </h1>
            <div className="rounded-full border-2 group-hover:border-black p-3 transition-all group-hover:translate-x-2">
              <motion.div
                animate={{ x: [0, 2, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      {selectedService && (
        <ServiceModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
          description={selectedService.description}
        />
      )}
    </section>
  )
}

export default Services
