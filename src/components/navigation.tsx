"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navigation() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`
                fixed left-0 right-0 z-50 mx-auto transition-all duration-300 ease-in-out
                /* Desktop Styles (Always floating pill) */
                md:top-4 md:px-3 md:max-w-4xl
                /* Mobile Styles (Dynamic based on scroll) */
                ${scrolled ? "top-0 px-0 w-full" : "top-2 px-3 max-w-4xl"}
            `}
        >
            <div
                className={`
                    flex justify-between items-center 
                    backdrop-blur-sm shadow-[0px_0px_0px_0.5px_#2d3748] 
                    px-5 py-4 transition-all duration-300
                    border-b border-white/10
                    
                    /* Desktop Styles */
                    md:rounded-full md:mt-2 md:bg-[#ffffff06]

                    /* Mobile Styles */
                    ${scrolled
                        ? "rounded-none mt-0 bg-[#0a0a0a]/90" // Scrolled: Full width, dark bg
                        : "rounded-full mt-2 bg-[#ffffff06]" // Top: Floating pill, transparent
                    }
                `}
            >
                <div className="flex items-center">
                    <div
                        className="bg-white text-black rounded-lg p-3 size-8 flex items-center justify-center font-bold text-2xl"
                        style={{ fontFamily: "var(--font-marck)" }}
                    >
                        P
                    </div>
                    <h1
                        className="text-2xl ml-1"
                        style={{ fontFamily: "var(--font-marck)" }}
                    >
                        athixo
                    </h1>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex">
                    <Link href="/#home" className="mx-4 hover:underline">Home</Link>
                    <Link href="/#services" className="mx-4 hover:underline">Services</Link>
                    <Link href="/portfolio" className="mx-4 hover:underline">Portfolio</Link>
                    <Link href="/about" className="mx-4 hover:underline">About</Link>
                    <Link href="/#contact" className="mx-4 hover:underline">Contact</Link>
                    <Link
                        href="https://edu.pathixo.com"
                        className="mx-4 font-semibold underline decoration-2 underline-offset-4 hover:opacity-80 transition-all hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]"
                    >
                        Courses
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setOpen(true)} className="md:hidden text-white">
                    <Menu size={26} />
                </button>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`
                    fixed top-0 left-0 h-screen w-64 
                    bg-black/90 backdrop-blur-xl
                    border-r border-white/10
                    z-50 p-6 flex flex-col
                    transition-transform duration-300 ease-out
                    ${open ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center">
                        <div className="bg-white text-black rounded-lg flex justify-center items-center size-8 text-xl font-semibold">
                            P
                        </div>
                        <span className="ml-1 text-xl font-medium">athixo</span>
                    </div>

                    <button onClick={() => setOpen(false)}>
                        <X className="text-white/60 hover:text-white" size={26} />
                    </button>
                </div>

                {/* Nav Items */}
                <div className="flex flex-col space-y-6">
                    {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
                        <Link
                            key={item}
                            onClick={() => setOpen(false)}
                            href={item === "Home" ? "/#home" : item === "Contact" ? "/#contact" : item === "Services" ? "/#services" : `/${item.toLowerCase()}`}
                            className="text-white/80 text-lg hover:text-white transition"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-white/10"></div>

                {/* Courses CTA */}
                <Link
                    onClick={() => setOpen(false)}
                    href="https://edu.pathixo.com"
                    className="
                        text-white text-lg font-semibold text-center
                        px-3 py-3 rounded-lg
                        bg-white/10
                        border border-white/10
                        hover:bg-white/20
                        transition
                    "
                >
                    Courses
                </Link>

                {/* Footer */}
                <div className="mt-auto pt-10 text-xs text-white/40">
                    © Pathixo
                </div>
            </div>

            {/* Backdrop for Mobile Menu */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}
        </nav>
    );
}

export default Navigation;