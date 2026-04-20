'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AvatarProps {
  section: 'hero' | 'projects' | 'about' | 'coding' | 'contact'
}

export default function Avatar({ section }: AvatarProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const getAvatarState = () => {
    switch (section) {
      case 'hero':
        return { emoji: '👋', label: 'Neutral' }
      case 'projects':
        return { emoji: '💼', label: 'Working' }
      case 'about':
        return { emoji: '😊', label: 'Casual' }
      case 'coding':
        return { emoji: '🧠', label: 'Focused' }
      case 'contact':
        return { emoji: '💬', label: 'Ready to chat' }
      default:
        return { emoji: '👋', label: 'Neutral' }
    }
  }

  const state = getAvatarState()

  return (
    <motion.div
      key={section}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center gap-2"
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-100 to-teal-50 border-2 border-teal-200 flex items-center justify-center text-4xl shadow-md"
      >
        {state.emoji}
      </motion.div>
      <p className="text-xs font-medium text-gray-600">{state.label}</p>
    </motion.div>
  )
}
