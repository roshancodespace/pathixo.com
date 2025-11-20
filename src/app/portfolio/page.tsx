"use client"

import React, { useState } from "react"
import { Layers, Percent, Store } from "lucide-react"
import Modal from "@/components/modal"

export default function PortfolioPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-white/[0.06] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-6 py-40 md:py-60 flex flex-col items-center text-center">
          <div className="inline-block px-4 py-1.5 border border-purple-500/40 bg-purple-500/10 rounded-full text-sm text-purple-300 mb-6 tracking-wide">
            COMING SOON
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Introducing{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Mallsurf
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            The entire mall, in your hands.
            <br />
            Reimagining the physical mall experience.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
          >
            Join the Waitlist
          </button>
        </div>
      </div>

      {/* FEATURE CARDS */}
      <div className="max-w-5xl mx-auto px-6 pb-28 -mt-16 md:-mt-24">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="group border border-gray-800 rounded-xl p-8 bg-gray-900/30 backdrop-blur-md transition-all hover:border-purple-500/50 hover:bg-gray-900/50">
            <Layers className="w-10 h-10 text-purple-400 mb-5 transition-transform group-hover:scale-110" />
            <h3 className="text-xl font-semibold mb-3">Smart Floor-by-Floor Maps</h3>
            <p className="text-gray-400 leading-relaxed">
              Instantly find stores, restrooms, and exits. Never get lost again.
            </p>
          </div>

          <div className="group border border-gray-800 rounded-xl p-8 bg-gray-900/30 backdrop-blur-md transition-all hover:border-pink-500/50 hover:bg-gray-900/50">
            <Percent className="w-10 h-10 text-pink-400 mb-5 transition-transform group-hover:scale-110" />
            <h3 className="text-xl font-semibold mb-3">Live Offers & Events</h3>
            <p className="text-gray-400 leading-relaxed">
              Stay updated with real-time deals, events, and promotions.
            </p>
          </div>

          <div className="group border border-gray-800 rounded-xl p-8 bg-gray-900/30 backdrop-blur-md transition-all hover:border-blue-500/50 hover:bg-gray-900/50">
            <Store className="w-10 h-10 text-blue-400 mb-5 transition-transform group-hover:scale-110" />
            <h3 className="text-xl font-semibold mb-3">The Complete Directory</h3>
            <p className="text-gray-400 leading-relaxed">
              Access hours, contact details, and info for every store — instantly.
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-800" />
      </div>
      <div className="text-center py-24">
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Our Other Work
        </h3>
        <p className="text-gray-500 text-lg">More groundbreaking projects coming soon...</p>
      </div>

      {/* MODAL FOR WAITLIST */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-semibold mb-4 text-center">Join the Waitlist</h2>
        <p className="text-gray-400 text-center mb-6">
          Be the first to know when Mallsurf launches.
        </p>
        <form
          action="https://formspree.io/f/movykned"
          method="POST"
          onSubmit={(e) => {
            alert("Thank you for joining the waitlist! 🚀")
            setIsModalOpen(false)
          }}
          className="space-y-4"
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-purple-500 outline-none transition"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-purple-500 outline-none transition"
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
          >
            Join Now
          </button>
        </form>
      </Modal>
    </div>
  )
}
