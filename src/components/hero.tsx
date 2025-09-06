"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Smartphone, Zap } from "lucide-react"
import { motion } from "motion/react"

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6"
                    >
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance font-mono">
                            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                                Pathixo
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 mb-8 text-pretty font-light">
                            Professional web & mobile development solutions
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-8 mb-12"
                    >
                        <div className="flex items-center gap-3 text-gray-500">
                            <Code className="w-6 h-6 text-red-500" />
                            <span className="font-medium">Next.js</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-500">
                            <Smartphone className="w-6 h-6 text-orange-500" />
                            <span className="font-medium">Flutter</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-500">
                            <Zap className="w-6 h-6 text-red-400" />
                            <span className="font-medium">SEO Optimized</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-medium">
                            Start Project
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>

                        <a href="https://inspiredcoder.vercel.app/">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-orange-500 text-orange-500 hover:bg-orange-500/10 px-8 py-6 text-lg bg-transparent font-medium"
                            >
                                View Portfolio
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
