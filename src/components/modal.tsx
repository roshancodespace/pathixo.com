// /components/Modal.tsx
"use client"

import { motion, AnimatePresence } from "motion/react"
import { X } from "lucide-react"
import { createPortal } from "react-dom"
import { useState, useEffect } from "react"
import React from "react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode 
}

export default function Modal({
  isOpen,
  onClose,
  children,
}: ModalProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-lg rounded-2xl bg-zinc-900 text-white shadow-2xl border border-zinc-700"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e:any) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute cursor-pointer right-4 top-4 rounded-full p-2 text-zinc-400 hover:text-white hover:bg-white/10 transition z-10"
            >
              <X className="h-6 w-6" />
            </button>
            {/* Render any child component passed to the modal */}
            <div className="p-8">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}