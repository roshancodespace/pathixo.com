"use client";

import { motion } from "motion/react";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, url: "#", label: "LinkedIn" },
  { icon: Github, url: "#", label: "GitHub" },
  { icon: Twitter, url: "#", label: "Twitter" },
  { icon: Mail, url: "mailto:nitishpandit921@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-zinc-800 z-10 pt-24 sm:pt-32 pb-8">
      <div className="container mx-auto px-6">
        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Great Together
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Have a project in mind or just want to chat? We're always excited to
            hear about new ideas and challenges. Reach out and let's start the
            conversation.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30"
          >
            Get a Free Quote
          </a>
        </motion.div>

        {/* Bottom Bar: Copyright & Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-zinc-800 mt-24 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Pathixo. All rights reserved.
          </p>
          <div className="flex gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-purple-400 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
