'use client'
import { useState } from 'react'
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import ContactPage from './contact/Page'
import Header from './components/Header'
import ProjectPage from './projects/page'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigate = (page: string) => {
    setCurrentPage(page)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage onNavigate={handleNavigate} />
      case 'about':

        return <AboutPage onNavigate={handleNavigate} />
      case 'projects':
        return    <ProjectPage  />
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />
      default:
        return <LandingPage onNavigate={handleNavigate} />
    }
  }

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <main>
        {renderPage()}
      </main>
    </>
  )
}