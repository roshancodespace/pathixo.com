"use client"

import { Linkedin, Github, Mail } from "lucide-react"

const team = [
  {
    name: "Ayush Tripathi",
    role: "Founder & AI/ML Engineer",
    description: "Leading AI/ML innovations and strategic vision for cutting-edge solutions.",
    image: "/tripathi.png",
    socials: [
      { icon: Linkedin, url: "#", label: "LinkedIn" },
      { icon: Mail, url: "mailto:ayush@pathixo.com", label: "Email" },
    ],
  },
  {
    name: "Nitish Pandit",
    role: "Co-founder",
    description: "Driving business growth and client relationships with strategic expertise.",
    image: "/nitish.png",
    socials: [
      { icon: Linkedin, url: "#", label: "LinkedIn" },
      { icon: Mail, url: "mailto:nitish@pathixo.com", label: "Email" },
    ],
  },
  {
    name: "Roshan Kumar",
    role: "Co-founder & CTO",
    description: "Expert in JavaScript, TypeScript, React/Next.js, Flutter, and scalable architecture.",
    image: "/roshan.png",
    socials: [
      { icon: Linkedin, url: "#", label: "LinkedIn" },
      { icon: Github, url: "#", label: "GitHub" },
      { icon: Mail, url: "mailto:roshan@pathixo.com", label: "Email" },
    ],
  },
  {
    name: "Abhijeet Jha",
    role: "AI/ML Engineer",
    description: "Pioneering intelligent systems and machine learning algorithms to solve complex challenges.",
    image: "/abhijeet.png",
    socials: [
      { icon: Linkedin, url: "#", label: "LinkedIn" },
      { icon: Github, url: "#", label: "GitHub" },
      { icon: Mail, url: "mailto:abhijeet@pathixo.com", label: "Email" },
    ],
  },
]

export default function MeetTheTeam() {
  return (
    <section className="relative flex flex-col justify-center min-h-screen py-20 md:py-28 text-white">
      {/* Background decorations */}
      {/* <div className="absolute inset-0 bg-dot-white/[0.07] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute top-0 inset-x-0 h-[30rem] bg-[radial-gradient(ellipse_80%_100%_at_50%_-20%,rgba(147,51,234,0.25)_0%,rgba(79,70,229,0)_100%)]" /> */}

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Meet The Minds Behind The Mission
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto mb-16 text-lg">
          A synergy of innovation, expertise, and passion, driving the future of technology.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative flex flex-col items-center p-6 bg-zinc-950/60 backdrop-blur-sm rounded-2xl border border-zinc-800 transition-all duration-300 hover:border-transparent hover:bg-zinc-900/80 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="mb-5 p-[2px] rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-zinc-950"
                />
              </div>

              <h3 className="text-xl font-bold text-zinc-100">{member.name}</h3>
              <p className="font-medium bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-3">
                {member.role}
              </p>
              <p className="text-zinc-500 text-sm mb-6 flex-grow">{member.description}</p>

              <div className="flex gap-4">
                {member.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-purple-400 hover:scale-110 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
