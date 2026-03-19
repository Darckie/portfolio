'use client'

import { useState } from 'react'
import {
  Telescope,
  BookOpen,
  PenLine,
  Music2,
  Pencil,
  Dumbbell,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

interface Interest {
  code: string
  title: string
  description: string
  detail: string
  icon: React.ReactNode
  iconBg: string
}

const interests: Interest[] = [
  {
    code: '01',
    title: 'Space Science',
    description: 'Astronomy, cosmology, and the quiet fascination of how systems work at a cosmic scale.',
    detail: 'From orbital mechanics to dark matter theories — the universe is the best reminder that complexity can still be elegant.',
    icon: <Telescope size={18} />,
    iconBg: 'rgba(99,102,241,0.12)',
  },
  {
    code: '02',
    title: 'Philosophy',
    description: 'Questions about meaning, ethics, and decision-making shape how I think about life and work.',
    detail: 'Stoicism, epistemology, and ethics of technology. Good philosophy makes better engineers.',
    icon: <BookOpen size={18} />,
    iconBg: 'rgba(234,179,8,0.12)',
  },
  {
    code: '03',
    title: 'Poetry',
    description: 'Writing and reading poetry keeps language sharp, personal, and expressive.',
    detail: 'Constraint breeds creativity — the same discipline that makes a poem good makes a component API good.',
    icon: <PenLine size={18} />,
    iconBg: 'rgba(236,72,153,0.12)',
  },
  {
    code: '04',
    title: 'Guitar',
    description: 'Fingerstyle guitar is one of the ways I slow down and stay creatively balanced.',
    detail: 'Tommy Emmanuel and classical ragtime. Playing slowly until it becomes fast is a lesson that applies everywhere.',
    icon: <Music2 size={18} />,
    iconBg: 'rgba(34,197,94,0.12)',
  },
  {
    code: '05',
    title: 'Sketching',
    description: 'Visual composition and drawing feed directly into how I think about layout and rhythm.',
    detail: 'Proportion, whitespace, and gestural line — the same principles as good UI design, just with a pencil.',
    icon: <Pencil size={18} />,
    iconBg: 'rgba(249,115,22,0.12)',
  },
  {
    code: '06',
    title: 'Reading & Fitness',
    description: 'Books, movement, and kickboxing keep both curiosity and discipline in shape.',
    detail: 'Currently reading: The Design of Everyday Things. Training: kickboxing and long-distance cycling.',
    icon: <Dumbbell size={18} />,
    iconBg: 'rgba(20,184,166,0.12)',
  },
]

export default function InterestsSection() {
  const [selectedInterest, setSelectedInterest] = useState<Interest>(interests[0])
  const [animKey, setAnimKey] = useState(0)

  const handleSelect = (interest: Interest) => {
    setSelectedInterest(interest)
    setAnimKey(k => k + 1)
  }

  return (
    <div className="surface-panel-strong p-6 sm:p-8">
      <style>{`
        .interest-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          border: 1px solid var(--border);
          background: var(--surface-muted);
          padding: 12px 14px;
          text-align: left;
          cursor: pointer;
          transition: border-color 0.18s, background 0.18s, transform 0.15s;
          position: relative;
          overflow: hidden;
        }
        .interest-btn:hover {
          border-color: var(--border-strong);
          background: var(--surface);
          transform: translateX(2px);
        }
        .interest-btn.active {
          border-color: var(--accent);
          background: var(--accent-soft);
        }
        .interest-btn.active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--accent);
        }
        .interest-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--text-muted);
          border: 1px solid var(--border);
          background: var(--surface-muted);
          transition: background 0.18s, color 0.18s, border-color 0.18s;
        }
        .interest-btn.active .interest-icon-wrap {
          color: var(--accent);
          border-color: var(--accent);
          background: var(--accent-soft);
        }
        .interest-arrow {
          margin-left: auto;
          color: var(--text-muted);
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.18s, transform 0.18s;
          flex-shrink: 0;
        }
        .interest-btn.active .interest-arrow,
        .interest-btn:hover .interest-arrow {
          opacity: 1;
          transform: translateX(0);
        }
        .detail-panel {
          animation: detailFadeIn 0.3s ease both;
        }
        @keyframes detailFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .interest-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border: 1px solid var(--border);
          background: var(--surface-muted);
          font-size: 11px;
          font-family: monospace;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .big-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border);
          color: var(--accent);
          transition: background 0.3s;
          margin-bottom: 20px;
        }
        .outside-quote {
          border-left: 2px solid var(--accent);
          padding-left: 16px;
          margin-top: 20px;
          font-style: italic;
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.7;
        }
      `}</style>

      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex items-center gap-2 text-[var(--accent)]">
          <Sparkles size={14} />
        </div>
        <div className="section-kicker" style={{ marginBottom: 0 }}>Personal interests</div>
        <div className="flex-1 h-px bg-[var(--border)]" />
        <span className="font-mono text-[11px] text-[var(--text-muted)]">
          {interests.length} interests
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
        {/* Interest list */}
        <div className="flex flex-col gap-2">
          {interests.map((interest) => (
            <button
              key={interest.code}
              type="button"
              onClick={() => handleSelect(interest)}
              className={`interest-btn ${selectedInterest.code === interest.code ? 'active' : ''}`}
            >
              <div className="interest-icon-wrap">
                {interest.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                  {interest.code}
                </div>
                <div className="mt-0.5 text-sm font-semibold text-[var(--text)] leading-tight">
                  {interest.title}
                </div>
              </div>
              <ArrowRight size={13} className="interest-arrow" />
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div
          key={animKey}
          className="detail-panel surface-muted flex flex-col min-h-[280px] p-6"
        >
          <div className="flex-1">
            <div
              className="big-icon-wrap"
              style={{ background: selectedInterest.iconBg }}
            >
              {selectedInterest.icon}
            </div>

            <div className="flex items-center gap-3 mb-3">
              <span className="interest-tag">{selectedInterest.code}</span>
            </div>

            <h3 className="text-2xl font-bold tracking-[-0.04em] text-[var(--text)]">
              {selectedInterest.title}
            </h3>

            <p className="section-copy mt-3 max-w-xl text-sm leading-relaxed">
              {selectedInterest.description}
            </p>

            <blockquote className="outside-quote">
              {selectedInterest.detail}
            </blockquote>
          </div>

          <div className="mt-8 border-t border-[var(--border)] pt-5">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={11} className="text-[var(--accent)]" />
              <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                Outside of work
              </div>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-md">
              The goal is the same as in code: taste, discipline, and enough curiosity
              to keep learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}