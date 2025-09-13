"use client"

import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    title: "Discover",
    description:
      "We start by understanding your goals, challenges, and customers. Together, we map the strategy that drives results.",
    icon: "🔍",
    gradient: "from-purple-600 to-indigo-600",
    bgGlow: "bg-purple-500/20",
  },
  {
    title: "Build", 
    description:
      "Our team designs and develops scalable web, mobile, and cloud solutions — always optimized for performance and security.",
    icon: "⚡",
    gradient: "from-indigo-600 to-blue-600",
    bgGlow: "bg-indigo-500/20",
  },
  {
    title: "Scale",
    description:
      "Once launched, we support you with infrastructure, monitoring, and optimizations to keep your business growing.",
    icon: "🚀",
    gradient: "from-blue-600 to-cyan-600",
    bgGlow: "bg-blue-500/20",
  },
]

function Step({
  step,
  index,
  total,
  scrollYProgress,
}: {
  step: { 
    title: string
    description: string
    icon: string
    gradient: string
    bgGlow: string
  }
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}) {
  const start = index / total
  const end = (index + 1) / total

  const y = useTransform(scrollYProgress, [start, end], [100, 0])
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
  const scale = useTransform(scrollYProgress, [start, end], [0.8, 1])
  const rotate = useTransform(scrollYProgress, [start, end], [5, 0])

  return (
    <motion.div
      style={{ y, opacity, scale, rotate }}
      className="sticky top-20 flex flex-col items-center justify-center h-screen px-6"
    >
      <div className="max-w-3xl text-center">
        {/* Step Number */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center justify-center w-8 h-8 mb-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-sm font-bold"
        >
          {index + 1}
        </motion.div>

        {/* Icon with enhanced styling */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl ${step.bgGlow} backdrop-blur-sm border border-white/10 text-4xl relative overflow-hidden group`}
        >
          {/* Animated background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
          <span className="relative z-10">{step.icon}</span>
          
          {/* Floating particles */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${20 + i * 20}%`,
                }}
                animate={{
                  y: [-10, -20, -10],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Title with gradient */}
        <motion.h2 
          className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {step.title}
        </motion.h2>

        {/* Description with better typography */}
        <motion.p 
          className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {step.description}
        </motion.p>

        {/* Progress indicator */}
        <motion.div 
          className="flex items-center justify-center mt-8 space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-8 rounded-full transition-all duration-300 ${
                i === index 
                  ? `bg-gradient-to-r ${step.gradient}` 
                  : 'bg-white/20'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function HowItWorksPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Enhanced background animations
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const headerScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-black text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute top-20 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Enhanced heading */}
      <motion.div 
        style={{ opacity: headerOpacity, scale: headerScale }}
        className="sticky top-0 z-10 flex flex-col items-center justify-center h-screen text-center pointer-events-none"
      >
        <motion.h4 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-widest text-sm font-semibold text-purple-400 mb-4"
        >
          How It Works
        </motion.h4>
        
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          From{" "}
          <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Idea
          </span>{" "}
          to Impact
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-gray-400 text-lg mb-8"
        >
          Our proven three-step process transforms your vision into reality
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-purple-400 text-xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Steps with enhanced container */}
      <div className="relative z-20">
        {steps.map((step, i) => (
          <Step
            key={step.title}
            step={step}
            index={i}
            total={steps.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>

      {/* Final section with CTA */}
      <motion.div
        style={{ 
          opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1]),
          y: useTransform(scrollYProgress, [0.8, 1], [100, 0])
        }}
        className="sticky bottom-0 flex items-center justify-center h-screen bg-gradient-to-t from-black via-purple-950/20 to-transparent"
      >
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get started?
          </h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Let's discuss your project and bring your ideas to life
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg"
          >
            Start Your Journey
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}