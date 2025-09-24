"use client"

import { motion, AnimatePresence } from "motion/react"
import { X } from "lucide-react"
import { createPortal } from "react-dom"
import { useState, useEffect } from "react"

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
  const [show, setShow] = useState(isOpen)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    if (isOpen) setShow(true)
  }, [isOpen])

  const handleClose = () => {
    // trigger exit animation
    setClosing(true)
  }

  const handleAnimationComplete = () => {
    if (closing) {
      setClosing(false)
      setShow(false)
      onClose()
    }
  }

  if (!show) return null

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: closing ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        onClick={handleClose} // close when clicking background
      >
        <motion.div
          style={{ perspective: 1200 }}
          initial={{ rotateX: 15, scale: 0.95, opacity: 0, filter: "blur(12px)" }}
          animate={{
            rotateX: closing ? -15 : 0,
            scale: closing ? 0.95 : 1,
            opacity: closing ? 0 : 1,
            filter: closing ? "blur(12px)" : "blur(0px)",
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onAnimationComplete={handleAnimationComplete}
          className="relative w-full max-w-lg rounded-2xl bg-zinc-900 p-8 text-white shadow-2xl border border-zinc-700"
          onClick={(e) => e.stopPropagation()} // prevent background click from closing modal immediately
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute cursor-pointer right-4 top-4 rounded-full p-2 hover:bg-white/10 transition"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Header accent */}
          <div className="mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          </div>

          {/* Description */}
          <p className="mb-8 text-gray-300 leading-relaxed">{description}</p>

          {/* CTA button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full md:w-auto bg-gradient-to-r cursor-pointer from-purple-500 to-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 text-white"
          >
            Get Started
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  )
}
