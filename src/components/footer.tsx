"use client"

import { motion } from "motion/react"
import { Code, Smartphone, Zap } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-black z-10 border-t border-zinc-800">
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
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Pathixo
              </span>
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed font-light max-w-md">
              Professional web and mobile development solutions for modern businesses.
            </p>

            <div className="flex flex-wrap gap-6">
              <motion.div className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                <Code className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium">Next.js</span>
              </motion.div>
              <motion.div className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                <Smartphone className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium">Flutter</span>
              </motion.div>
              <motion.div className="flex items-center gap-2 text-gray-400 hover:text-purple-300 transition-colors">
                <Zap className="w-4 h-4 text-purple-300" />
                <span className="text-sm font-medium">SEO Optimized</span>
              </motion.div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-gradient-to-r from-purple-400 to-blue-500 after:transition-all after:duration-500 hover:after:w-full">
              Services
            </h4>
            <ul className="space-y-3 text-gray-400 font-light">
              {["Web Development", "Mobile Apps", "SEO Optimization", "UI/UX Design", "Backend Development"].map((item, idx) => (
                <li
                  key={idx}
                  className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-gradient-to-r from-purple-400 to-blue-500 after:transition-all after:duration-500 hover:after:w-full">
              Contact
            </h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>Bokaro Steel City</p>
              <p>+91 8877020121</p>
              <p>nitishpandit921@gmail.com</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-zinc-800 mt-16 pt-8 text-center"
        >
          <p className="text-gray-500 font-light">© 2025 Pathixo. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
