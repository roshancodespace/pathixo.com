"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-2xs" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-lg">P</span>
                        </div>
                        <span
                            className={`text-xl font-semibold transition-colors text-foreground`}
                        >
                            Pathixo
                        </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#services"
                            className={`transition-colors`}
                        >
                            Services
                        </a>
                        <a
                            href="#team"
                            className={`transition-colors`}
                        >
                            Team
                        </a>
                        <a
                            href="#contact"
                            className={`transition-colors`}
                        >
                            Contact
                        </a>
                    </div>

                    <Button className="bg-red-500 hover:bg-primary/90 text-primary-foreground">Get Started</Button>
                </div>
            </div>
        </nav>
    )
}
