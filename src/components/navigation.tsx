"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navigation() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="max-w-4xl h-[100px] fixed left-0 right-0 px-3 mx-auto top-2 md:top-4 z-50">
            <div className="rounded-full backdrop-blur-sm flex justify-between items-center shadow-[0px_0px_0px_0.5px_#2d3748] bg-[#ffffff06] px-5 py-4 mt-2">
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

                <button onClick={() => setOpen(true)} className="md:hidden text-white">
                    <Menu size={26} />
                </button>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`
    fixed top-0 left-0 h-full w-64 
    bg-black/80 backdrop-blur-md
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
                        <X className="text-white/60" size={26} />
                    </button>
                </div>

                {/* Nav Items */}
                <div className="flex flex-col space-y-6">
                    <Link
                        onClick={() => setOpen(false)}
                        href="/#home"
                        className="text-white/80 text-lg hover:text-white transition"
                    >
                        Home
                    </Link>
                    <Link
                        onClick={() => setOpen(false)}
                        href="/#services"
                        className="text-white/80 text-lg hover:text-white transition"
                    >
                        Services
                    </Link>
                    <Link
                        onClick={() => setOpen(false)}
                        href="/portfolio"
                        className="text-white/80 text-lg hover:text-white transition"
                    >
                        Portfolio
                    </Link>
                    <Link
                        onClick={() => setOpen(false)}
                        href="/about"
                        className="text-white/80 text-lg hover:text-white transition"
                    >
                        About
                    </Link>
                    <Link
                        onClick={() => setOpen(false)}
                        href="/#contact"
                        className="text-white/80 text-lg hover:text-white transition"
                    >
                        Contact
                    </Link>
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-white/10"></div>

                {/* Courses — the only highlighted CTA */}
                <Link
                    onClick={() => setOpen(false)}
                    href="https://edu.pathixo.com"
                    className="
      text-white text-lg font-semibold
      px-3 py-2 rounded-md
      bg-white/5
      border border-white/10
      hover:bg-white/10
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

        </nav>
    );
}

export default Navigation;
