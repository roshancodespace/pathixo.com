import { Bot, Terminal, Shield } from "lucide-react"
import { FaWindows, FaApple, FaLinux } from "react-icons/fa"
import { WaitlistCTA } from "@/components/portfolio/waitlist-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vakxo | Pathixo Portfolio",
  description: "Vakxo - Your live desktop AI buddy. Explore the innovative digital solutions by Pathixo.",
  alternates: {
    canonical: "https://pathixo.com/portfolio",
  },
  openGraph: {
    title: "Vakxo | Pathixo Portfolio",
    description: "Vakxo - Your live desktop AI buddy.",
    url: "https://pathixo.com/portfolio",
    siteName: "Pathixo",
    type: "website",
  }
}

export default function PortfolioPage() {

  return (
    <div className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Pathixo Portfolio - Vakxo",
            "description": "Vakxo - Your live desktop AI buddy.",
            "publisher": {
              "@type": "Organization",
              "name": "Pathixo"
            }
          }),
        }}
      />

      {/* HERO SECTION */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-white/[0.06] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-6 py-40 md:py-60 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-purple-500/40 bg-purple-500/10 rounded-full text-sm text-purple-300 mb-6 tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            COMING SOON
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Introducing{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Vakxo
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Your Live Desktop AI Buddy.
            <br />
            Talks, listens, and takes control of your PC to help you code or do anything.
          </p>

          <WaitlistCTA />
          
          {/* Platforms */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
              <FaWindows className="w-5 h-5 text-[#00a4ef]" />
              <div className="text-left">
                <div className="font-semibold text-white text-sm">Windows</div>
                <div className="text-[10px] text-green-400">Coming Soon</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/5 bg-white/5 backdrop-blur-md opacity-60">
              <FaApple className="w-5 h-5 text-white" />
              <div className="text-left">
                <div className="font-semibold text-white text-sm">macOS</div>
                <div className="text-[10px] text-zinc-400">Planned</div>
              </div>
            </div>

            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/5 bg-white/5 backdrop-blur-md opacity-60">
              <FaLinux className="w-5 h-5 text-white" />
              <div className="text-left">
                <div className="font-semibold text-white text-sm">Linux</div>
                <div className="text-[10px] text-zinc-400">Planned</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE CARDS */}
      <div className="max-w-5xl mx-auto px-6 pb-28 -mt-16 md:-mt-24">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="group border border-gray-800 rounded-xl p-8 bg-gray-900/30 backdrop-blur-md transition-all hover:border-purple-500/50 hover:bg-gray-900/50">
            <Bot className="w-10 h-10 text-purple-400 mb-5 transition-transform group-hover:scale-110" />
            <h3 className="text-xl font-semibold mb-3">Talks & Listens</h3>
            <p className="text-gray-400 leading-relaxed">
              Interact naturally with voice commands. It hears you and talks back just like a real buddy.
            </p>
          </div>

          <div className="group border border-gray-800 rounded-xl p-8 bg-gray-900/30 backdrop-blur-md transition-all hover:border-pink-500/50 hover:bg-gray-900/50">
            <Terminal className="w-10 h-10 text-pink-400 mb-5 transition-transform group-hover:scale-110" />
            <h3 className="text-xl font-semibold mb-3">Codes With You</h3>
            <p className="text-gray-400 leading-relaxed">
              Need help coding? It takes control and writes, refactors, and explains code for you.
            </p>
          </div>

          <div className="group border border-gray-800 rounded-xl p-8 bg-gray-900/30 backdrop-blur-md transition-all hover:border-blue-500/50 hover:bg-gray-900/50">
            <Shield className="w-10 h-10 text-blue-400 mb-5 transition-transform group-hover:scale-110" />
            <h3 className="text-xl font-semibold mb-3">Total PC Control</h3>
            <p className="text-gray-400 leading-relaxed">
              From normal computer usage to complex tasks, it controls your desktop automatically.
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-800" />
      </div>
      <div className="text-center py-24">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Our Other Work
        </h2>
        <p className="text-gray-500 text-lg">More groundbreaking projects coming soon...</p>
      </div>

    </div>
  )
}
