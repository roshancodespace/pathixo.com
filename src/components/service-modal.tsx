"use client"

import { motion, AnimatePresence } from "motion/react"
import { X } from "lucide-react"
import { createPortal } from "react-dom"

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
}

export default function ServiceModal({
  isOpen,
  onClose,
  title,
  description,
}: ServiceModalProps) {
  return createPortal(<AnimatePresence>
    {isOpen && (
      <motion.div
        className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Modal content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 40 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-lg rounded-2xl bg-zinc-900 p-8 text-white shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-2 hover:bg-white/10"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Title & description */}
          <h2 className="mb-4 text-3xl font-bold">{title}</h2>
          <p className="mb-6 text-gray-300 leading-relaxed">{description}</p>

          {/* CTA */}
          <button className="rounded-lg bg-gradient-to-r from-blue-500 to-blue-800 px-6 py-3 text-white font-semibold shadow-md hover:shadow-lg transition">
            Let’s Talk
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>, document.body)

}
