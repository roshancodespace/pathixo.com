"use client"
import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import ServiceModal from './service-modal'

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
    <section className='min-h-screen max-w-7xl py-20 px-4 flex flex-col gap-12' id='services'>
      <div>
        <h4 className='font-semibold'>OUR SERVICES</h4>
        <div className='grid md:grid-cols-2 gap-5 items-center'>
          <div>
            <h1 className='text-3xl font-bold md:text-5xl leading-none'>
              What
              <span className='inline-block px-4'>Services</span>
              <br />
              Do We Offer?
            </h1>
          </div>
          <p>
            Our team blends cutting-edge technology with sleek design to deliver solutions that are not only reliable but also remarkable. Whether it’s launching your first product or optimizing enterprise systems, we help you stay ahead of the curve
          </p>
        </div>
      </div>
      <div className="divide-y divide-white/30">
        {services.map((service) => (
          <div
            key={service.title}
            onClick={() => setSelectedService(service)}
            className="flex justify-between cursor-pointer items-center py-5 h-[6.5em] font-medium border-b border-white group hover:bg-white transition-all hover:px-5 md:hover:px-10"
          >
            <h1 className="text-2xl flex items-end gap-2 md:text-4xl lg:text-5xl opacity-50 cursor-pointer transition-all group-hover:opacity-100 group-hover:text-black group-hover:text-3xl md:group-hover:text-5xl lg:group-hover:text-6xl">
              {service.title}
              <div className='size-3 bg-[#ff44f9] transition-opacity mb-[3px] opacity-0 group-hover:opacity-100'></div>
            </h1>
            <div className="rounded-full border-2 group-hover:border-black p-3 transition-all group-hover:translate-x-2">
              <ArrowRight className="w-6 h-6 group-hover:text-black transition-colors" />
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