import { ApplicationForm } from "@/components/application-form"
import { Sparkles, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-background relative pt-28 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Application Form Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Apply to{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Pathixo</span>
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <ApplicationForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/40 mt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-sm text-muted-foreground">
              <p>© 2025 Pathixo. Building tomorrow's technology today.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
