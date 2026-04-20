'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Download,
  Feather,
  Layers,
  Repeat,
  Type,
  Atom,
  Cpu,
  Server,
  Database,
  MapPin,
  Briefcase,
  ExternalLink,
  CircleDot,
  Clock,
} from 'lucide-react'
import Image from 'next/image'

const BASE_PATH = '/portfolio'

const featuredProjects = [



  {
    title: 'Whataspp Generic solution',
    year: '2026',
    status: 'Live',
    url: 'https://darckibeta0007.netlify.app/',
    description: 'WhatsApp conversations from a unified web interface & role-based Admin dashboards.',
  },
  {
    title: 'Napkin Haven E-commerce UI - personal project',
    year: '2026',
    status: 'IN PROGRESS',
    url: 'https://napkin-haven-shop.lovable.app/',
    description: 'Modern e-commerce UI for a fictional stationery store.',
  },

  {
    title: 'Mortgage Auction Platform',
    year: '2025',
    status: 'In progress',
    url: 'https://nandalanfinance.netlify.app/',
    description: 'Finance platform for real-time mortgage auction listings.',
  },
  {
    title: 'Maharashtra Cyber Portal',
    year: '2024',
    status: 'Live',
    url: 'https://darckie.github.io/ComplaintPortal/',
    description: 'Government UAT portal for cyber complaint management.',
  },
  {
    title: 'Makino Auto Mobile Portfolio',
    year: '2025',
    status: 'Live',
    url: 'https://darckie.github.io/makino-modern/',
    description: 'Automotive brand portfolio with smooth scroll and interactive gallery.',
  },
  {
    title: 'Anchorcomply',
    year: '2024',
    status: 'Live',
    url: 'https://anchorcomply.com/',
    description: 'Compliance management SaaS with role-based dashboards.',
  },
]

const capabilityChips = [
  { label: 'React.js', icon: Atom },
  { label: 'Next.js', icon: Layers },
  { label: 'TypeScript', icon: Type },
  { label: 'Tailwind CSS', icon: Feather },
  { label: 'Redux', icon: Repeat },
  { label: 'Node.js', icon: Cpu },
  { label: 'Express.js', icon: Server },
  { label: 'MySQL', icon: Database },
]

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.48, delay, ease: smoothEase },
})

const fadeUpView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.48, ease: smoothEase },
}

interface LandingPageProps {
  onNavigate?: (page: 'home' | 'about' | 'projects' | 'contact') => void
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="page-shell">
      <style>{`
        /* ── Base reset for mobile ── */
        *, *::before, *::after { box-sizing: border-box; }

        /* ── Hero layout ── */
        .hero-grid {
          display: grid;
          gap: 32px;
          padding: 0;
          padding-bottom: 48px;
          padding-top: 80px;
          /* Single column on mobile */
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: minmax(0, 1.2fr) 310px;
            padding-top: 128px;
            padding-bottom: 56px;
            gap: 36px;
          }
        }

        /* ── Section shell ── */
        .section-shell {
          width: 100%;
          max-width: 100%;
          padding-left: 16px;
          padding-right: 16px;
        }
        @media (min-width: 640px) {
          .section-shell {
            padding-left: 24px;
            padding-right: 24px;
          }
        }
        @media (min-width: 1024px) {
          .section-shell {
            padding-left: 40px;
            padding-right: 40px;
          }
        }

        /* ── Status badge ── */
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border: 1px solid var(--border);
          border-radius: 999px;
          font-family: monospace;
          font-size: 11px;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: var(--text-muted);
          background: var(--surface-muted);
          margin-bottom: 20px;
          /* Prevent overflow on very small screens */
          max-width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .status-badge .live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          animation: blink 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* ── Hero title ── */
        .section-title {
          font-size: clamp(26px, 6vw, 52px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: var(--text);
        }
        .section-kicker {
          font-family: monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }
        .section-copy {
          color: var(--text-muted);
        }

        /* ── Buttons ── */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 10px 20px;
          background: var(--text);
          color: var(--surface);
          font-size: 13px;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: opacity .18s, transform .15s;
          white-space: nowrap;
        }
        .btn-primary:hover { opacity: .82; transform: translateY(-1px); }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 10px 20px;
          background: transparent;
          color: var(--text-muted);
          font-size: 13px;
          font-weight: 500;
          border: 1px solid var(--border);
          border-radius: 8px;
          cursor: pointer;
          text-decoration: none;
          transition: border-color .18s, color .18s, transform .15s;
          white-space: nowrap;
        }
        .btn-ghost:hover { border-color: var(--border-strong); color: var(--text); transform: translateY(-1px); }

        /* Button row wraps on tiny screens */
        .hero-btn-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }
        /* Full-width buttons on very small screens */
        @media (max-width: 380px) {
          .btn-primary,
          .btn-ghost {
            width: 100%;
            justify-content: center;
          }
        }

        .btn-small {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          background: transparent;
          color: var(--text-muted);
          font-size: 12px;
          font-weight: 500;
          border: 1px solid var(--border);
          border-radius: 6px;
          cursor: pointer;
          text-decoration: none;
          transition: border-color .18s, color .18s;
          white-space: nowrap;
        }
        .btn-small:hover { border-color: var(--border-strong); color: var(--text); }

        /* ── Marquee ── */
        .marquee-outer {
          overflow: hidden;
          border: 1px solid var(--border);
          background: var(--surface);
          border-radius: 10px;
          padding: 10px 0;
          margin-top: 28px;
        }
        .chip-track {
          display: flex;
          gap: 8px;
          width: max-content;
          animation: marquee-scroll 24s linear infinite;
        }
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .chip-item {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          white-space: nowrap;
          padding: 4px 12px;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--surface-muted);
          font-size: 11px;
          font-weight: 500;
          color: var(--text-muted);
          flex-shrink: 0;
        }

        /* ── Profile card ── */
        .profile-card {
          border: 1px solid var(--border);
          background: var(--surface);
          border-radius: 12px;
          overflow: hidden;
        }
        .profile-img-wrap {
          position: relative;
          /* On mobile, use a shorter aspect ratio so it doesn't dominate the viewport */
          aspect-ratio: 16/9;
          background: var(--surface-muted);
        }
        @media (min-width: 768px) {
          .profile-img-wrap {
            aspect-ratio: 4/5;
          }
        }
        .profile-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.58) 0%, transparent 52%);
        }
        .profile-img-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 14px 16px;
          color: #fff;
        }

        /* ── Stats row ── */
        .stat-mini {
          border: 1px solid var(--border);
          background: var(--surface);
          border-radius: 10px;
          padding: 14px 16px;
          transition: border-color .18s;
        }
        .stat-mini:hover { border-color: var(--border-strong); }
        .mono-label {
          font-family: monospace;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-muted);
        }

        /* ── Work section ── */
        .work-panel {
          border: 1px solid var(--border);
          background: var(--surface);
          border-radius: 12px;
          padding: 16px;
        }
        @media (min-width: 640px) {
          .work-panel { padding: 26px; }
        }

        .work-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 18px;
          margin-bottom: 4px;
        }
        @media (min-width: 540px) {
          .work-header {
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
          }
        }

        /* ── Project rows ── */
        .proj-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 16px 0;
          border-bottom: 1px solid var(--border);
          text-decoration: none;
          cursor: pointer;
          transition: background .14s, padding .14s, margin .14s;
          border-radius: 4px;
        }
        .proj-row:last-child { border-bottom: none; }
        .proj-row:hover {
          background: var(--surface-muted);
          margin: 0 -10px;
          padding: 16px 10px;
        }
        .proj-row:hover .proj-title { color: var(--accent); }
        .proj-row:hover .proj-arrow { color: var(--text); transform: translate(2px, -2px); }

        .proj-idx {
          font-family: monospace;
          font-size: 10px;
          color: var(--text-muted);
          padding-top: 4px;
          width: 20px;
          flex-shrink: 0;
        }
        .proj-main { flex: 1; min-width: 0; }
        .proj-title {
          font-size: 13px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 4px;
          letter-spacing: -0.15px;
          transition: color .15s;
          /* Prevent overflow */
          overflow-wrap: break-word;
          word-break: break-word;
        }
        @media (min-width: 480px) {
          .proj-title { font-size: 14px; }
        }
        .proj-desc {
          font-size: 12px;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 8px;
          overflow-wrap: break-word;
        }
        .proj-footer {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }
        .proj-year {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-family: monospace;
          font-size: 10px;
          color: var(--text-muted);
          white-space: nowrap;
        }
        .proj-status {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 2px 7px;
          border-radius: 999px;
          white-space: nowrap;
        }
        .proj-status.live {
          color: #22c55e;
          background: rgba(34,197,94,0.1);
          border: 1px solid rgba(34,197,94,0.2);
        }
        .proj-status.progress {
          color: var(--text-muted);
          background: var(--surface-muted);
          border: 1px solid var(--border);
        }
        .proj-url {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-family: monospace;
          font-size: 10px;
          color: var(--text-muted);
          /* Shrink URL on mobile so it doesn't overflow */
          max-width: min(180px, calc(100vw - 120px));
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        /* Hide URL on very small screens to avoid clutter */
        @media (max-width: 380px) {
          .proj-url { display: none; }
        }
        .proj-arrow {
          color: var(--text-muted);
          flex-shrink: 0;
          margin-top: 2px;
          transition: color .15s, transform .15s;
        }

        /* ── Section bottom padding ── */
        .pb-section {
          padding-bottom: 48px;
        }
        @media (min-width: 640px) {
          .pb-section { padding-bottom: 80px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="section-shell hero-grid">

        {/* Left col */}
        <motion.div {...fadeUp(0)}>
          <div className="status-badge">
            <span className="live-dot" />
            Open to frontend roles
          </div>

          <div className="section-kicker mb-4">
            Focused on clean, minimal solutions —{' '}
            <span style={{ fontSize: 11, fontWeight: 400, textTransform: 'none', letterSpacing: 0, color: 'var(--text-muted)' }}>
              delivering exactly what clients need, nothing excessive.
            </span>
          </div>

          <h1 className="section-title max-w-2xl">
            <span className="text-yellow-500">Building interfaces</span>{' '}
            that feel calm, fast, and deliberate.
          </h1>

          <p className="section-copy mt-5 max-w-xl" style={{ fontSize: 15, lineHeight: 1.72 }}>
            Frontend developer focused on modern React products, polished user
            experiences, and production-ready systems that stay clean as they scale.
          </p>

          <div className="hero-btn-row">
            <button
              type="button"
              onClick={() => onNavigate?.('projects')}
              className="btn-primary"
            >
              <Briefcase size={13} />
              View projects
              <ArrowRight size={13} />
            </button>
            <a
              href={`${BASE_PATH}/brijesh_kunwar_resume.pdf`}
              download
              className="btn-ghost"
            >
              Download resume
              <Download size={13} />
            </a>
          </div>

          {/* Tech marquee */}
          <div className="marquee-outer">
            <div className="chip-track">
              {[...capabilityChips, ...capabilityChips].map((chip, i) => {
                const Icon = chip.icon
                return (
                  <span key={`${chip.label}-${i}`} className="chip-item">
                    <Icon size={11} />
                    {chip.label}
                  </span>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Right col — profile card + stats */}
        <motion.div {...fadeUp(0.1)} className="flex flex-col gap-3">
          <div className="profile-card">
            <div className="profile-img-wrap">
              <Image
                src={`${BASE_PATH}/images/sanji.jpg`}
                alt="Brijesh Kunwar"
                fill
                className="object-cover"
                priority
              />
              <div className="profile-img-overlay" />
              <div className="profile-img-caption">
                <div
                  style={{
                    display: 'flex', alignItems: 'center', gap: 5,
                    fontFamily: 'monospace', fontSize: 10,
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                    color: 'rgba(255,255,255,0.55)', marginBottom: 5,
                  }}
                >
                  <MapPin size={9} />
                  Based in India
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#fff', lineHeight: 1.3 }}>
                  Open to frontend roles
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { value: '2+', label: 'Years experience' },
              { value: '30+', label: 'Projects shaped' },
            ].map((item) => (
              <div key={item.label} className="stat-mini">
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: 'var(--text)',
                    letterSpacing: '-0.5px',
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  {item.value}
                </div>
                <div className="mono-label" style={{ fontSize: 10 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── SELECTED WORK ── */}
      <motion.section
        {...fadeUpView}
        className="section-shell pb-section"
      >
        <div className="work-panel">
          <div className="work-header">
            <div>
              <div className="section-kicker mb-3">Selected work</div>
              <h2
                style={{
                  fontSize: 'clamp(20px, 3vw, 28px)',
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  color: 'var(--text)',
                }}
              >
                Showcase projects
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate?.('projects')}
              className="btn-small"
            >
              View all
              <ArrowRight size={12} />
            </button>
          </div>

          <div>
            {featuredProjects.map((project, index) => (
              <motion.a
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="proj-row"
                whileHover={{ x: 0 }}
              >
                <div className="proj-idx">0{index + 1}</div>

                <div className="proj-main">
                  <div className="proj-title">{project.title}</div>
                  <div className="proj-desc">{project.description}</div>
                  <div className="proj-footer">
                    <span className="proj-year">
                      <Clock size={9} />
                      {project.year}
                    </span>
                    <span className={`proj-status ${project.status === 'Live' ? 'live' : 'progress'}`}>
                      <CircleDot size={8} />
                      {project.status}
                    </span>
                    <span className="proj-url">
                      <ExternalLink size={9} />
                      {project.url.replace('https://', '').replace('http://', '')}
                    </span>
                  </div>
                </div>

                <ArrowRight size={14} className="proj-arrow" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}