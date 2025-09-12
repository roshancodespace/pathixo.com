"use client"

import { motion } from "motion/react"
import { Code, Smartphone, Zap } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 z-[100] relative">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-6 font-mono">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Pathixo</span>
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed font-light max-w-md">
              Professional web and mobile development solutions for modern businesses.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-gray-400">
                <Code className="w-4 h-4 text-red-500" />
                <span className="text-sm font-medium">Next.js</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Smartphone className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-medium">Flutter</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Zap className="w-4 h-4 text-red-400" />
                <span className="text-sm font-medium">SEO Optimized</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400 font-light">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>SEO Optimization</li>
              <li>UI/UX Design</li>
              <li>Backend Development</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <div className="space-y-3 text-gray-400 text-sm font-light">
              <p>Bokaro Steel City</p>
              <p>+91 8877020121</p>
              <p>nitishpandit921@gmail.com</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-16 pt-8 text-center"
        >
          <p className="text-gray-500 font-light">© 2025 Pathixo. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
