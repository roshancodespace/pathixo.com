// /components/ProjectContactForm.tsx
"use client"

import { motion } from "motion/react"
import React, { useState } from "react"

export const ProjectContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        // 1. Prevent the browser's default form submission behavior
        e.preventDefault();

        // 2. Format the subject and body for the email
        const subject = encodeURIComponent(`Project Inquiry from ${name}`);
        const body = encodeURIComponent(
`Hello Pathixo,

My name is ${name}.

You can reach me at: ${email}

My project idea is:
-------------------
${message}
-------------------
`
        );

        // 3. Construct the mailto link
        const mailtoLink = `mailto:contact@pathixo.com?subject=${subject}&body=${body}`;

        // 4. Open the user's email client
        window.location.href = mailtoLink;
    }

    return (
        <div>
            <div className="mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold">Start a Project</h2>
                <p className="text-zinc-400 mt-2">Fill out the form below to get started.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 focus:ring-purple-500 focus:border-purple-500 transition"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">Work Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 focus:ring-purple-500 focus:border-purple-500 transition"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-1">How can we help?</label>
                    <textarea
                        id="message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 focus:ring-purple-500 focus:border-purple-500 transition"
                    ></textarea>
                </div>
                <div className="pt-4">
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full bg-gradient-to-r cursor-pointer from-purple-500 to-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-purple-500/20 transition-all duration-300 text-white"
                    >
                        Prepare Email
                    </motion.button>
                </div>
            </form>
        </div>
    )
}