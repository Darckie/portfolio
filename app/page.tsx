'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import ContactPage from './contact/Page'
import Header from './components/Header'
import ProjectPage from './projects/page'

type PageKey = 'home' | 'about' | 'projects' | 'contact'

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageKey>('home')

  const handleNavigate = (page: PageKey) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage onNavigate={handleNavigate} />
      case 'about':
        return <AboutPage />
      case 'projects':
        return <ProjectPage />
      case 'contact':
        return <ContactPage />
      default:
        return <LandingPage onNavigate={handleNavigate} />
    }
  }

  return (
    <>
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="page-shell"
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>
    </>
  )
}
