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
    title: 'Makino Auto Mobile Portfolio',
    year: '2025',
    status: 'Live',
    url: 'https://darckie.github.io/makino-modern/',
    description: 'Automotive brand portfolio with smooth scroll and interactive gallery.',
  },
  {
    title: 'Mortgage Auction Platform',
    year: '2024',
    status: 'In progress',
    url: 'https://nandalanfinance.netlify.app/',
    description: 'Finance platform for real-time mortgage auction listings.',
  },
  {
    title: 'Maharashtra Cyber Portal',
    year: '2023',
    status: 'Live',
    url: 'https://darckie.github.io/ComplaintPortal/',
    description: 'Government UAT portal for cyber complaint management.',
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
        /* ── Hero layout ── */
        .hero-grid {
          display: grid;
          gap: 24px;
          padding: 0;
          padding-bottom: 56px;
          padding-top: 112px;
        }
        @media(min-width:768px){
          .hero-grid {
            grid-template-columns: minmax(0,1.2fr) 310px;
            padding-top: 128px;
            gap: 36px;
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
        }
        .status-badge .live-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #22c55e;
          animation: blink 2s ease-in-out infinite;
        }
        @keyframes blink { 0%,100%{opacity:1}50%{opacity:.3} }

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
        }
        .btn-primary:hover { opacity:.82; transform:translateY(-1px); }

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
        }
        .btn-ghost:hover { border-color: var(--border-strong); color: var(--text); transform:translateY(-1px); }

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
          0%   { transform:translateX(0); }
          100% { transform:translateX(-50%); }
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
          aspect-ratio: 4/5;
          background: var(--surface-muted);
        }
        .profile-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.58) 0%, transparent 52%);
        }
        .profile-img-caption {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 14px 16px;
          color: #fff;
        }
        .stat-mini {
          border: 1px solid var(--border);
          background: var(--surface);
          border-radius: 10px;
          padding: 14px 16px;
          transition: border-color .18s;
        }
        .stat-mini:hover { border-color: var(--border-strong); }

        /* ── Work section ── */
        .work-panel {
          border: 1px solid var(--border);
          background: var(--surface);
          border-radius: 12px;
          padding: 22px;
        }
        @media(min-width:640px){ .work-panel { padding: 26px; } }

        .work-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 18px;
          margin-bottom: 4px;
        }
        @media(min-width:540px){
          .work-header { flex-direction: row; align-items: flex-end; justify-content: space-between; }
        }

        /* ── Project rows ── */
        .proj-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 18px 0;
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
          padding: 18px 10px;
        }
        .proj-row:hover .proj-title { color: var(--accent); }
        .proj-row:hover .proj-arrow { color: var(--text); transform: translate(2px,-2px); }

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
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 4px;
          letter-spacing: -0.15px;
          transition: color .15s;
        }
        .proj-desc {
          font-size: 12px;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 8px;
        }
        .proj-footer {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .proj-year {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-family: monospace;
          font-size: 10px;
          color: var(--text-muted);
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
          max-width: 180px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .proj-arrow {
          color: var(--text-muted);
          flex-shrink: 0;
          margin-top: 2px;
          transition: color .15s, transform .15s;
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

          <div className="mt-7 flex flex-wrap gap-3">
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

        {/* Right col */}
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
                    fontSize: 24, fontWeight: 700,
                    color: 'var(--text)', letterSpacing: '-0.5px',
                    lineHeight: 1, marginBottom: 6,
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
        className="section-shell pb-16 sm:pb-20"
      >
        <div className="work-panel">
          <div className="work-header">
            <div>
              <div className="section-kicker mb-3">Selected work</div>
              <h2
                style={{
                  fontSize: 'clamp(22px, 3vw, 28px)',
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