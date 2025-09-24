"use client"

import { ShieldCheck, Zap, Users, Rocket, ArrowRight } from "lucide-react"

const reasons = [
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description: "We ensure your applications and data are secure using best-in-class security practices, giving you peace of mind and compliance-ready solutions.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable Delivery",
    description: "From ideation to deployment, we deliver web and mobile solutions efficiently without compromising quality, helping your business grow rapidly.",
  },
  {
    icon: Users,
    title: "Expert Team Collaboration",
    description: "Our team of experienced developers, designers, and consultants work closely with you to understand your goals and provide tailor-made solutions.",
  },
  {
    icon: Rocket,
    title: "Scalable & Future-Ready",
    description: "We build systems that grow with your business — scalable architectures, maintainable code, and modern technologies to keep you ahead.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative text-white py-24 overflow-hidden">
      {/* Background subtle blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-purple-900/10 blur-[200px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/10 blur-[250px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <p className="text-zinc-400 text-sm font-medium tracking-wider uppercase mb-4">
          WHY CHOOSE US
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
          Why <span className="text-purple-400">Pathixo</span> Stands Out
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.slice(0, 3).map((reason, idx) => (
            <div
              key={idx}
              className={`bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800 hover:border-purple-500/30 transition-all duration-300 flex flex-col gap-4 ${idx == 1 && 'row-start-2 col-span-2 col-start-2'}`}
            >
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-white/10 border border-purple-500/20 flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{reason.title}</h3>
              </div>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed">{reason.description}</p>
            </div>
          ))}

          {/* Scalable & Future-Ready card spans 2 columns for emphasis */}
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800 hover:border-purple-500/30 transition-all duration-300 flex flex-col gap-6 md:row-span-2 md:row-start-1">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-white/10 border border-purple-500/20 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">{reasons[3].title}</h3>
            </div>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">{reasons[3].description}</p>
            <button className="mt-auto ml-auto self-start inline-flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
