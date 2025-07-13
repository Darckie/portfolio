'use client'
import { useState } from 'react'
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigate = (page: string) => {
    setCurrentPage(page)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />
      case 'projects':
        return <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">PROJECTS PAGE</h1>
            <p className="text-gray-600 mb-8">Coming Soon...</p>
            <button 
              onClick={() => handleNavigate('home')}
              className="px-6 py-3 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      case 'contact':
        return <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">CONTACT PAGE</h1>
            <p className="text-gray-600 mb-8">Coming Soon...</p>
            <button 
              onClick={() => handleNavigate('home')}
              className="px-6 py-3 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      default:
        return <LandingPage onNavigate={handleNavigate} />
    }
  }

  return (
    <main>
      {renderPage()}
    </main>
  )
}