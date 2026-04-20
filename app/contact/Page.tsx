'use client'

import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  ArrowUpRight,
  Download,
  MapPin,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from 'lucide-react'

const BASE_PATH = '/portfolio'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.48, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
})

const contactLinks = [
  {
    label: 'Email',
    value: 'brijeshkunwar85@gmail.com',
    href: 'mailto:brijeshkunwar85@gmail.com',
    icon: <Mail size={15} />,
    external: false,
  },
  {
    label: 'Phone',
    value: '+91 7830372716',
    href: 'tel:+917830372716',
    icon: <Phone size={15} />,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/brijeshkunwar85',
    href: 'https://www.linkedin.com/in/brijeshkunwar85/',
    icon: <Linkedin size={15} />,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/Darckie',
    href: 'https://github.com/Darckie',
    icon: <Github size={15} />,
    external: true,
  },
]

const availabilityTags = [
  'Frontend Developer',
  'React / Next.js',
  'Remote-friendly',
  'Open to relocation',
]

const preferencePoints = [
  'Product teams that care about UI quality',
  'Modern React ecosystems (Next.js, TypeScript)',
  'Thoughtful engineering culture',
  'Challenging, meaningful work',
]

export default function ContactPage() {
  return (
    <div className="page-shell">
      <style>{`
        /* ── Contact link rows ── */
        .contact-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 16px 18px;
          border: 1px solid var(--border);
          background: var(--surface);
          text-decoration: none;
          transition: border-color .18s, background .18s, transform .15s;
          cursor: pointer;
          border-radius: 8px;
        }
        .contact-row:hover {
          border-color: var(--accent);
          background: var(--surface-muted);
          transform: translateX(3px);
        }
        .contact-row:hover .contact-arrow {
          color: var(--accent);
          transform: translate(2px,-2px);
        }
        .contact-row-icon {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: var(--surface-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          flex-shrink: 0;
          transition: border-color .15s, color .15s;
        }
        .contact-row:hover .contact-row-icon {
          border-color: var(--accent);
          color: var(--accent);
        }
        .contact-arrow {
          color: var(--text-muted);
          transition: color .15s, transform .15s;
          flex-shrink: 0;
        }

        /* ── CTA buttons ── */
        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 11px 22px;
          background: var(--text);
          color: var(--surface);
          font-size: 13px;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          text-decoration: none;
          transition: opacity .18s, transform .15s;
        }
        .cta-primary:hover { opacity:.82; transform:translateY(-1px); }

        .cta-ghost {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 11px 22px;
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
        .cta-ghost:hover { border-color: var(--border-strong); color: var(--text); transform:translateY(-1px); }

        /* ── Availability tags ── */
        .avail-tag {
          display: inline-block;
          padding: 5px 12px;
          border: 1px solid var(--border);
          background: var(--surface-muted);
          font-size: 12px;
          color: var(--text-muted);
          border-radius: 6px;
          transition: border-color .15s, color .15s;
        }
        .avail-tag:hover {
          border-color: var(--border-strong);
          color: var(--text);
        }

        /* ── Preference list ── */
        .pref-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 0;
          border-bottom: 1px solid var(--border);
          font-size: 14px;
          color: var(--text-muted);
        }
        .pref-item:last-child { border-bottom: none; }
        .pref-check { color: #22c55e; flex-shrink: 0; }

        /* ── Location badge ── */
        .location-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border: 1px solid var(--border);
          border-radius: 999px;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: var(--text-muted);
          background: var(--surface-muted);
        }

        /* ── Status badge ── */
        .open-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 3px 10px;
          border-radius: 999px;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #22c55e;
          background: rgba(34,197,94,0.1);
          border: 1px solid rgba(34,197,94,0.2);
        }
        .open-badge .dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #22c55e;
          animation: blink 2s ease-in-out infinite;
        }
        @keyframes blink { 0%,100%{opacity:1}50%{opacity:.3} }

        /* ── Info panel ── */
        .info-panel {
          border: 1px solid var(--border);
          background: var(--surface-muted);
          border-radius: 8px;
          padding: 18px;
        }
      `}</style>

      <section className="section-shell px-0 pb-16 pt-28 md:pt-32">

        {/* Page header */}
        <motion.div {...fadeUp(0)} className="mb-8">
          <div className="section-kicker mb-4">Contact</div>
          <div className="flex flex-col gap-3 border-b border-[var(--border)] pb-7 sm:flex-row sm:items-end sm:justify-between">
            <h1 className="section-title text-[clamp(2.4rem,5vw,4rem)]">
              <span className="text-yellow-500">Let&apos;s</span> ship something sharp.
            </h1>
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="location-badge">
                <MapPin size={9} />
                India
              </div>
              <div className="open-badge">
                <span className="dot" />
                Open to work
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">

          {/* ── Left — Bio + CTAs ── */}
          <motion.div {...fadeUp(0.06)} className="surface-panel-strong p-6 sm:p-8 flex flex-col gap-7">

            <div>
              <p className="section-copy leading-relaxed">
                I&apos;m open to frontend-focused roles, product teams that care about
                quality, and thoughtful conversations around modern React development.
                I reply within 24 hours.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a href="mailto:brijeshkunwar85@gmail.com" className="cta-primary">
                <Mail size={14} />
                Send an email
              </a>
              <a href={`${BASE_PATH}/brijesh_kunwar_resume.pdf`} download className="cta-ghost">
                Download resume
                <Download size={13} />
              </a>
            </div>

            {/* Availability tags */}
            <div className="border-t border-[var(--border)] pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={13} className="text-[var(--accent)]" />
                <span className="mono-label text-[10px]">Availability</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {availabilityTags.map((tag) => (
                  <span key={tag} className="avail-tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Preferences */}
            <div className="border-t border-[var(--border)] pt-6">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 size={13} className="text-[var(--accent)]" />
                <span className="mono-label text-[10px]">What I&apos;m looking for</span>
              </div>
              <div>
                {preferencePoints.map((point) => (
                  <div key={point} className="pref-item">
                    <CheckCircle2 size={13} className="pref-check" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right — Contact links ── */}
          <motion.div {...fadeUp(0.12)} className="flex flex-col gap-3">

            {/* Quick info card */}
            <div className="info-panel">
              <div className="mono-label mb-3 text-[10px]">Response time</div>
              <div className="text-sm font-semibold text-[var(--text)]">Within 24 hours</div>
              <div className="mt-1 text-xs text-[var(--text-muted)]">
                Weekdays · English or Hindi
              </div>
            </div>

            {/* Contact rows */}
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="contact-row"
              >
                <div className="flex items-center gap-3">
                  <div className="contact-row-icon">{link.icon}</div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--text-muted)] mb-1">
                      {link.label}
                    </div>
                    <div className="text-sm font-medium text-[var(--text)]">{link.value}</div>
                  </div>
                </div>
                {link.external
                  ? <ExternalLink size={14} className="contact-arrow" />
                  : <ArrowUpRight size={14} className="contact-arrow" />
                }
              </a>
            ))}

            {/* Resume download as a card too */}
            <a
              href={`${BASE_PATH}/brijesh_kunwar_resume.pdf`}
              download
              className="contact-row"
            >
              <div className="flex items-center gap-3">
                <div className="contact-row-icon">
                  <Download size={15} />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--text-muted)] mb-1">
                    Resume
                  </div>
                  <div className="text-sm font-medium text-[var(--text)]">
                    brijesh_kunwar_resume.pdf
                  </div>
                </div>
              </div>
              <Download size={14} className="contact-arrow" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}