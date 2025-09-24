"use client"

import { useState } from "react"
import { Facebook, Twitter, Linkedin, Github } from "lucide-react"

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", form)
  }

  return (
    <section className="min-h-screen bg-black relative overflow-hidden py-24 px-6">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-900/10 blur-[200px] rounded-full" />
        <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-blue-900/10 blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* Left Side - Info */}
        <div className="text-white space-y-10 flex flex-col justify-center">
          <div className="w-1 h-20 bg-purple-600 rounded-full"></div>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Let&apos;s Build <span className="text-purple-500">Together</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            We deliver custom web and mobile solutions for businesses, startups, and SaaS companies. 
            Got an idea? Let&apos;s make it a reality.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider">Email</h3>
              <p className="text-white font-medium">hello@pathixo.com</p>
            </div>
            <div>
              <h3 className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider">Phone</h3>
              <p className="text-white font-medium">+91 8877 020 121</p>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            {[Facebook, Twitter, Linkedin, Github].map((Icon, idx) => (
              <button
                key={idx}
                className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-purple-500 hover:text-purple-500 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="relative my-auto">
          {/* Corner accents */}
          <div className="absolute -top-4 -left-4 w-6 h-6 border-l-2 border-t-2 border-purple-500"></div>
          <div className="absolute -top-4 -right-4 w-6 h-6 border-r-2 border-t-2 border-purple-500"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 border-l-2 border-b-2 border-purple-500"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 border-r-2 border-b-2 border-purple-500"></div>

          <div className="bg-zinc-900/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl">
            <h2 className="text-white text-2xl font-semibold mb-8">Send us a message</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-transparent border-b border-gray-700 pb-2 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full bg-transparent border-b border-gray-700 pb-2 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2 uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your project details..."
                  rows={5}
                  required
                  className="w-full bg-transparent border-b border-gray-700 pb-2 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-600 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-[1.02] tracking-wider uppercase"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}
