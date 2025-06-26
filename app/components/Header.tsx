'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="w-full px-6 py-4 bg-white shadow-md dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Title */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          Kunwar<span className="text-blue-600">Dev</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="hover:text-blue-500 transition">About</Link>
          <Link href="#projects" className="hover:text-blue-500 transition">Projects</Link>
          <Link href="#contact" className="hover:text-blue-500 transition">Contact</Link>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 px-2">
          <Link href="#about" className="block py-2 border-b hover:text-blue-500">About</Link>
          <Link href="#projects" className="block py-2 border-b hover:text-blue-500">Projects</Link>
          <Link href="#contact" className="block py-2 hover:text-blue-500">Contact</Link>
        </div>
      )}
    </header>
  )
}

export default Header
