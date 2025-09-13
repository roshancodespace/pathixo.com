"use client"

import GradientBlinds from "./backgrounds/gradient-blinds"
import RotatingText from "./RotatingText"


export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 w-screen -z-10 pointer-events-none">
                <GradientBlinds
                    gradientColors={['#FF9FFC', '#5227FF']}
                    angle={0}
                    noise={0.3}
                    blindCount={1}
                    blindMinWidth={10}
                    spotlightRadius={0.5}
                    spotlightSoftness={1}
                    spotlightOpacity={0.4}
                    mouseDampening={0.15}
                    distortAmount={0}
                    shineDirection="left"
                    mixBlendMode="lighten"
                />
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4 transition-all">
                <h1 className="text-[3rem] md:text-[5rem] font-bold leading-none text-center mb-6">
                    <div className="max-md:flex-col flex items-center gap-3">
                        <div className="flex items-center">
                            <span>Smarter</span>
                            <span className="inline-block ml-4 relative justify-center min-w-[5.5ch] overflow-hidden rounded-full">
                                <span className="absolute inset-0  bg-gradient-to-r from-purple-600 to-blue-600" />

                                <RotatingText
                                    texts={['Web', 'Digital', 'SaaS', 'Mobile', 'Cloud']}
                                    mainClassName="inline-flex scale-[0.8]"
                                />
                            </span>
                        </div>
                        <span className="max-md:block">Solutions</span>
                    </div>
                    <div>
                        <span>Powered by</span>
                        {/* <span className="inline-block border-2 border-white rounded-full px-4 py-1 ml-4">Pathixo</span> */}
                        <span className="relative ml-3 inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 font-medium text-white backdrop-blur-3xl">
                                Pathixo
                            </span>
                        </span>
                    </div>
                </h1>
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
                <div className="absolute bottom-10 z-[55] flex flex-col items-center text-gray-400">
                    <svg className="w-6 h-6 mb-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                    <span className="text-sm">Scroll Down</span>
                </div>
            </div>
        </section>
    )
}