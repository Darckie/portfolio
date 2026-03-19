'use client'

import { motion } from 'framer-motion'
import {
  Moon,
  SunMedium,
  Home,
  User,
  FolderKanban,
  Mail,
  Clock,
} from 'lucide-react'
import { useEffect, useState } from 'react'

type PageKey = 'home' | 'about' | 'projects' | 'contact'
type ThemeMode = 'dark' | 'light'

interface HeaderProps {
  currentPage: PageKey
  onNavigate?: (page: PageKey) => void
  onToggleTheme?: () => void
  theme: ThemeMode
}

const items: { label: string; value: PageKey; icon: React.ReactNode }[] = [
  { label: 'Home',     value: 'home',     icon: <Home size={13} /> },
  { label: 'About',    value: 'about',    icon: <User size={13} /> },
  { label: 'Projects', value: 'projects', icon: <FolderKanban size={13} /> },
  { label: 'Contact',  value: 'contact',  icon: <Mail size={13} /> },
]

export default function Header({
  currentPage,
  onNavigate,
  onToggleTheme,
  theme,
}: HeaderProps) {
  const [currentTime, setCurrentTime] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      )
    }
    tick()
    const timer = window.setInterval(tick, 60000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        .header-shell {
          position: fixed;
          inset-inline: 0;
          top: 0;
          z-index: 50;
          transition: padding .3s ease;
        }
        .header-shell.scrolled {
          padding-top: 8px;
        }
        .header-inner {
          border: 1px solid var(--border);
          background: var(--surface);
          transition: background .3s, border-color .3s, box-shadow .3s;
        }
        .header-inner.scrolled {
          background: color-mix(in srgb, var(--surface) 88%, transparent);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-color: var(--border-strong);
          box-shadow: 0 1px 0 0 var(--border);
        }

        /* Logo block */
        .header-logo-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          text-align: left;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          transition: opacity .15s;
        }
        .header-logo-btn:hover { opacity: .75; }
        .header-logo-mark {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-strong);
          background: var(--surface-muted);
          font-size: 12px;
          font-weight: 700;
          color: var(--text);
          letter-spacing: -0.5px;
          border-radius: 8px;
          flex-shrink: 0;
          transition: border-color .15s;
        }
        .header-logo-btn:hover .header-logo-mark {
          border-color: var(--accent);
        }

        /* Nav items */
        .nav-item {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 12px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-muted);
          border-radius: 7px;
          border: 1px solid transparent;
          cursor: pointer;
          background: none;
          transition: color .15s, background .15s, border-color .15s;
          white-space: nowrap;
        }
        .nav-item:hover {
          color: var(--text);
          background: var(--surface-muted);
        }
        .nav-item.active {
          color: var(--accent);
          background: var(--accent-soft);
          border-color: color-mix(in srgb, var(--accent) 30%, transparent);
        }

        /* Status badge */
        .status-badge {
          display: none;
        }
        @media(min-width:768px){
          .status-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 5px 11px;
            border: 1px solid var(--border);
            border-radius: 999px;
            background: var(--surface-muted);
            font-family: monospace;
            font-size: 10px;
            letter-spacing: 0.07em;
            color: var(--text-muted);
            text-transform: uppercase;
          }
        }
        .status-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #22c55e;
          animation: status-blink 2s ease-in-out infinite;
        }
        @keyframes status-blink { 0%,100%{opacity:1}50%{opacity:.3} }

        /* Theme toggle */
        .theme-toggle {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border);
          background: var(--surface-muted);
          border-radius: 8px;
          color: var(--text-muted);
          cursor: pointer;
          transition: border-color .15s, color .15s, background .15s;
          flex-shrink: 0;
        }
        .theme-toggle:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--accent-soft);
        }

        /* Mobile nav strip */
        .mobile-nav {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          padding-bottom: 2px;
          margin-top: 10px;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .mobile-nav::-webkit-scrollbar { display: none; }
        @media(min-width:768px){
          .mobile-nav { display: none; }
        }
      `}</style>

      <motion.header
        className={`header-shell${scrolled ? ' scrolled' : ''}`}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-shell pt-4 sm:pt-5">
          <div className={`header-inner${scrolled ? ' scrolled' : ''} px-4 py-3 sm:px-5`}>

            {/* Main row */}
            <div className="flex items-center justify-between gap-3">

              {/* Logo */}
              <button
                type="button"
                onClick={() => onNavigate?.('home')}
                className="header-logo-btn"
              >
                <div className="header-logo-mark">BK</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>
                    Brijesh Kunwar
                  </div>
                  <div className="mono-label" style={{ fontSize: 10 }}>
                    Frontend Developer
                  </div>
                </div>
              </button>

              {/* Desktop nav */}
              <nav className="hidden items-center gap-1 md:flex">
                {items.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => onNavigate?.(item.value)}
                    className={`nav-item ${currentPage === item.value ? 'active' : ''}`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Right side */}
              <div className="flex items-center gap-2">
                {/* Status */}
                <div className="status-badge">
                  <span className="status-dot" />
                  Open to work
                  <span style={{ opacity: 0.4, marginInline: 2 }}>·</span>
                  <Clock size={9} style={{ opacity: 0.5 }} />
                  {currentTime}
                </div>

                {/* Theme toggle */}
                <button
                  type="button"
                  onClick={onToggleTheme}
                  className="theme-toggle"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark'
                    ? <SunMedium size={15} />
                    : <Moon size={15} />
                  }
                </button>
              </div>
            </div>

            {/* Mobile nav */}
            <div className="mobile-nav">
              {items.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => onNavigate?.(item.value)}
                  className={`nav-item ${currentPage === item.value ? 'active' : ''}`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>

          </div>
        </div>
      </motion.header>
    </>
  )
}