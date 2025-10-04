// /app/about/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
    Lightbulb,
    Gem,
    MessageSquareQuote,
    Users,
    TrendingUp,
    Target,
    Eye,
    CheckCircle,
    Code,
} from "lucide-react";
import Modal from "@/components/modal";
import { ProjectContactForm } from "@/components/project-consultation-form";

// --- Type Definitions ---
interface StatProps {
    value: string;
    label: string;
}

interface PillProps {
    children: React.ReactNode;
}

interface InfoCardProps {
    icon: React.ReactElement;
    title: string;
    description: string;
    borderColor?: string;
}

interface ValueCardProps {
    icon: React.ReactElement;
    title: string;
    description: string;
}

interface TechCardProps {
    name: string;
    category: string;
}

// --- Data with Icons ---
const CORE_VALUES = [
    {
        title: "Innovation First",
        description: "We don't follow trends—we create them. Every project is an opportunity to push the boundaries of technology.",
        icon: <Lightbulb className="w-6 h-6" />,
    },
    {
        title: "Obsessive Quality",
        description: "Good enough isn't in our vocabulary. We iterate and refine until every pixel and interaction is flawless.",
        icon: <Gem className="w-6 h-6" />,
    },
    {
        title: "Radical Transparency",
        description: "No jargon, no hidden agendas. We believe in honest communication and building trust through openness.",
        icon: <MessageSquareQuote className="w-6 h-6" />,
    },
    {
        title: "User-Centric Design",
        description: "Technology should serve people, not the other way around. Every decision starts with the end user in mind.",
        icon: <Users className="w-6 h-6" />,
    },
    {
        title: "Continuous Evolution",
        description: "The tech landscape never stops changing, and neither do we. Learning and adaptation are built into our culture.",
        icon: <TrendingUp className="w-6 h-6" />,
    },
    {
        title: "Impact Over Output",
        description: "We measure success by the tangible value we create for your business and users, not just lines of code.",
        icon: <CheckCircle className="w-6 h-6" />,
    },
];

const TECH_STACK = [
    { name: "React & Next.js", category: "Frontend" },
    { name: "Node.js & Python", category: "Backend" },
    { name: "AWS & Vercel", category: "Cloud" },
    { name: "Docker & K8s", category: "DevOps" },
    { name: "PostgreSQL & MongoDB", category: "Databases" },
    { name: "GraphQL & REST", category: "APIs" },
    { name: "TypeScript", category: "Language" },
    { name: "Figma & Framer", category: "Design" },
];

export default function AboutPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="min-h-screen bg-black text-white overflow-x-hidden">
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-black to-blue-950/50"></div>
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] animate-blob"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-6 text-center">
                        <Pill>Who We Are</Pill>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8">
                            Building The
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 animate-gradient">
                                Future of Digital
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            We are innovators, dreamers, and builders creating digital experiences that redefine what's possible and deliver tangible results.
                        </p>
                        <div className="mt-16 flex justify-center items-stretch gap-8">
                            <Stat value="5+" label="Years Experience" />
                            <div className="w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>
                            <Stat value="100+" label="Projects Delivered" />
                            <div className="w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>
                            <Stat value="50+" label="Happy Clients" />
                        </div>
                    </div>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                        <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex items-start justify-center p-2">
                            <motion.div
                                className="w-1 h-3 bg-purple-500 rounded-full"
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>
                    </div>
                </section>

                {/* Consistent Page Wrapper */}
                <div className="space-y-32 md:space-y-40 py-32 md:py-40">
                    {/* Story Section */}
                    <section className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="lg:pr-8">
                                <Pill>Our Story</Pill>
                                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                    We Build Products That Actually
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"> Matter</span>
                                </h2>
                                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                                    <p>Pathixo wasn't built in a boardroom. It was forged in late-night coding sessions and an obsessive belief that software should work beautifully—not just function.</p>
                                    <p>Tired of seeing businesses struggle with half-baked solutions, we decided to create digital products that users love and businesses depend on. Clean code, intuitive design, real impact.</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <InfoCard
                                    icon={<Target className="w-8 h-8 text-purple-400" />}
                                    title="Our Mission"
                                    description="To build digital products that solve real problems, delight users, and drive measurable business growth."
                                />
                                <InfoCard
                                    icon={<Eye className="w-8 h-8 text-blue-400" />}
                                    title="Our Vision"
                                    description="To set the standard for what great digital products should be—fast, beautiful, and built to last."
                                    borderColor="border-blue-500/20 hover:border-blue-500/40"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Values Section */}
                    <section className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <Pill>What Drives Us</Pill>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Principles That <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Define Us</span>
                            </h2>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">These aren't just words on a wall. They're the DNA of everything we create.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {CORE_VALUES.map((value) => (
                                <ValueCard key={value.title} title={value.title} description={value.description} icon={value.icon} />
                            ))}
                        </div>
                    </section>

                    {/* Tech Stack Section */}
                    <section className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <Pill>Technology</Pill>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Powered By <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Cutting-Edge Tech</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {TECH_STACK.map((tech) => (
                                <TechCard key={tech.name} name={tech.name} category={tech.category} />
                            ))}
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="max-w-5xl mx-auto px-6">
                        <div className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-black/50 backdrop-blur-xl">
                            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
                            <div className="relative p-12 md:p-16 text-center">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                    Let's Build Something
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Extraordinary</span>
                                </h2>
                                <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">Ready to transform your vision into reality? Let's start a conversation.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg overflow-hidden transition-transform hover:scale-105"
                                    >
                                        <span className="relative z-10">Start Your Project</span>
                                    </button>
                                    <button className="px-8 py-4 border-2 border-purple-500/50 rounded-full font-semibold text-lg hover:bg-purple-500/10 hover:border-purple-500 transition-all">
                                        View Our Work
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ProjectContactForm />
            </Modal>
        </>
    );
}

// --- Typed, Reusable Components ---

const Stat: React.FC<StatProps> = ({ value, label }) => (
    <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">{value}</div>
        <div className="text-gray-500 mt-2 text-sm uppercase tracking-wider">{label}</div>
    </div>
);

const Pill: React.FC<PillProps> = ({ children }) => (
    <div className="inline-block mb-6">
        <div className="px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10">
            <span className="text-xs uppercase tracking-widest text-purple-300">{children}</span>
        </div>
    </div>
);

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description, borderColor = 'border-purple-500/20 hover:border-purple-500/40' }) => (
    <div className={`group relative overflow-hidden rounded-2xl border ${borderColor} transition-all bg-white/5 p-8`}>
        <div className="mb-4 transition-transform group-hover:scale-110">{icon}</div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
);

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
    <div className="group relative overflow-hidden rounded-2xl border border-purple-500/20 p-8 transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1 bg-white/[0.02]">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="relative">
            <div className="mb-6 text-purple-400 transition-transform group-hover:scale-110 w-10 h-10 flex items-center justify-center rounded-lg bg-white/5">
                {icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
    </div>
);

const TechCard: React.FC<TechCardProps> = ({ name, category }) => (
    <div className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-purple-500/20 p-5 transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1 bg-black/40 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="relative text-purple-400">
            <Code className="w-6 h-6" />
        </div>
        <div className="relative">
            <div className="text-xs text-gray-400 uppercase tracking-wider">{category}</div>
            <div className="text-md font-bold text-gray-200">{name}</div>
        </div>
    </div>
);