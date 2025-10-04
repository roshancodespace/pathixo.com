/* eslint-disable @next/next/no-img-element */
"use client"

import { motion } from 'motion/react'
import RotatingText from "./RotatingText"

export function Hero() {
    return (
        <section className="fixed top-0 z-0 w-screen min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 w-screen h-screen -z-10 pointer-events-none">
                <img src="/lb-noise.webp" alt="" className="max-md:hidden object-cover w-full h-full" />
                <img src="/mb-noise.webp" alt="" className="md:hidden object-cover w-full h-full" />
            </div>

            <div className="flex flex-col items-center justify-center text-center px-4 transition-all">
                <h1 className="text-[3rem] md:text-[5rem] font-bold leading-none text-center mb-6">
                    {/* Line 1 */}
                    <div className="max-md:flex-col flex items-center gap-3">
                        <div className="flex items-center">
                            <span>Smarter</span>
                            <span className="inline-block ml-4 relative justify-center min-w-[5.5ch] overflow-hidden rounded-full">
                                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600" />
                                <RotatingText
                                    texts={['Web', 'Digital', 'SaaS', 'Mobile', 'Cloud']}
                                    mainClassName="inline-flex scale-[0.8]"
                                />
                            </span>
                        </div>
                        <span className="max-md:block">Solutions</span>
                    </div>

                    {/* Line 2 - brand statement */}
                    <div className="mt-4 flex items-center justify-center gap-3">
                        <span className="text-lg md:text-xl">Expertly crafted with care by</span>
                        <span className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 font-extrabold text-2xl md:text-4xl text-white backdrop-blur-3xl">
                                Pathixo
                            </span>
                        </span>
                    </div>

                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    We design and build smarter web, mobile, and cloud solutions that help businesses scale and succeed in the digital world.
                </p>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 font-semibold text-white backdrop-blur-3xl transition-all hover:from-purple-700 hover:to-blue-700 group-hover:scale-105">
                            Get a Quote
                        </span>
                    </button>
                    <button className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white/20 bg-white/5 px-8 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30 hover:scale-105">
                        Book a Call
                    </button>
                </div>

                {/* Scroll Down Indicator */}
                <div className="absolute bottom-14 left-1/2 -translate-x-1/2">
                    <div className="w-6 h-10 border-2 border-white-500/50 rounded-full flex items-start justify-center p-2">
                        <motion.div
                            className="w-1 h-3 bg-white rounded-full"
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
