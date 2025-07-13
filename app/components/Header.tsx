'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Header = ({ onNavigate }: { onNavigate?: (page: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="cyber-font text-2xl font-black text-black">
            <span className="text-cyan-500">KB</span>
            <span className="text-purple-500">.</span>
            <span className="text-pink-500">DEV</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <div className="mono-font text-sm text-gray-600">
              {currentTime}
            </div>
            {['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'].map((item) => (
              <button
                key={item}
                onClick={() => onNavigate && onNavigate(item.toLowerCase())}
                className="text-black hover:text-cyan-500 transition-colors duration-300 relative group font-mono"
              >
                {item}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
