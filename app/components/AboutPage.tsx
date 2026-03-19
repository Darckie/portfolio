'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Briefcase,
  GraduationCap,
  Code2,
  Layers,
  Database,
  Calendar,
  Building2,
  Award,
  TrendingUp,
  Cpu,
  Globe,
  GitBranch,
} from 'lucide-react'

import Interest from '../interest/InterestPanel'

const BASE_PATH = '/portfolio'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

const fadeUpInView = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

const experiences = [
  {
    year: 'Apr 2024 – Present',
    title: 'Mid-Senior Frontend Developer',
    company: 'Technical Offerings & System Solutions Pvt Ltd.',
    shortCompany: 'TOSS',
    description:
      'Building interactive dashboards, CRM workflows, and business portals with a strong focus on responsive UI, maintainable React architecture, and reliable delivery.',
    current: true,
  },
  {
    year: 'Oct 2023 – Apr 2024',
    title: 'Frontend Developer Intern',
    company: 'Technical Offerings & System Solutions Pvt Ltd.',
    shortCompany: 'TOSS',
    description:
      'Worked on production React features, API integrations, state management, and responsive interface systems that became the foundation for my full-time role.',
    current: false,
  },
]

const education = [
  {
    degree: 'Master of Computer Applications',
    short: 'MCA',
    institution: 'H.N.B.G.U Srinagar',
    year: '2023',
    grade: 'CGPA 7.4',
  },
  {
    degree: 'Bachelor of Science',
    short: 'B.Sc',
    institution: 'P.G.C Gopeshwer',
    year: '2021',
    grade: 'CGPA 6.4',
  },
  {
    degree: '12th Grade',
    short: 'XII',
    institution: 'GIC Kansuwa',
    year: '2017',
    grade: '72%',
  },
]

const skillGroups = [
  {
    title: 'Frontend',
    icon: <Layers size={14} />,
    items: ['React.js', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'Material UI'],
  },
  {
    title: 'Backend',
    icon: <Cpu size={14} />,
    items: ['Node.js', 'Express.js', 'Java', 'REST APIs', 'JWT'],
  },
  {
    title: 'Database & Tools',
    icon: <Database size={14} />,
    items: ['MySQL', 'Git', 'GitHub', 'Postman'],
  },
]

const stats = [
  { value: '2+', label: 'Years experience', icon: <TrendingUp size={16} /> },
  { value: '30+', label: 'Projects touched', icon: <Code2 size={16} /> },
  { value: '13+', label: 'Core technologies', icon: <Globe size={16} /> },
]

export default function AboutPage() {
  return (
    <div className="page-shell">
      <style>{`
        .about-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border: 1px solid var(--border);
          border-radius: 999px;
          font-size: 11px;
          font-family: monospace;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted);
          background: var(--surface-muted);
        }
        .about-badge .dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #22c55e;
          animation: pulse-dot 2s infinite;
        }
        @keyframes pulse-dot {
          0%,100%{opacity:1;transform:scale(1)}
          50%{opacity:.5;transform:scale(1.5)}
        }
        .exp-card {
          position: relative;
          border: 1px solid var(--border);
          background: var(--surface-muted);
          padding: 24px;
          transition: border-color 0.2s, background 0.2s;
        }
        .exp-card:hover {
          border-color: var(--border-strong);
          background: var(--surface);
        }
        .exp-card .current-dot {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 3px rgba(34,197,94,0.15);
          animation: pulse-dot 2s infinite;
        }
        .exp-timeline-line {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--border);
        }
        .exp-timeline-line::before {
          content: '';
          position: absolute;
          top: 28px;
          left: -3px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          border: 2px solid var(--surface);
        }
        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 1px solid var(--border);
          background: var(--surface-muted);
          padding: 6px 12px;
          font-size: 12px;
          color: var(--text-muted);
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          cursor: default;
        }
        .skill-pill:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--accent-soft);
        }
        .edu-card {
          border: 1px solid var(--border);
          background: var(--surface-muted);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          transition: border-color 0.2s, transform 0.2s;
        }
        .edu-card:hover {
          border-color: var(--border-strong);
          transform: translateY(-2px);
        }
        .edu-short-badge {
          display: inline-block;
          padding: 3px 10px;
          background: var(--accent-soft);
          border: 1px solid var(--accent);
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 10px;
          width: fit-content;
        }
        .stat-item {
          padding: 16px;
          background: var(--surface-muted);
          border: 1px solid var(--border);
          transition: border-color 0.2s, background 0.2s;
        }
        .stat-item:hover {
          border-color: var(--border-strong);
          background: var(--surface);
        }
        .stat-icon {
          color: var(--accent);
          margin-bottom: 8px;
        }
        .skill-group-header {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--accent);
          margin-bottom: 12px;
        }
        .skill-group-header span {
          font-size: 13px;
          font-weight: 600;
          color: var(--text);
        }
        .profile-stat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          overflow: hidden;
        }
        .profile-stat-cell {
          background: var(--surface-muted);
          padding: 12px 8px;
          text-align: center;
        }
        .section-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .section-divider-line {
          flex: 1;
          height: 1px;
          background: var(--border);
        }
        .icon-label {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--accent);
        }
      `}</style>

      <section className="section-shell px-0 pb-14 pt-28 sm:pb-16 md:pt-32">

        {/* ── HERO GRID ── */}
        <motion.div
        //   {...fadeUp(0)}
          className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]"
        >
          {/* Left — Bio */}
          <div className="surface-panel-strong p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="section-kicker">About</div>
              <div className="about-badge">
                <span className="dot" />
                Available for work
              </div>
            </div>

            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-[var(--text)] sm:text-4xl leading-tight">
              <span className="text-yellow-500">Clean systems.</span>{' '}
              Sharp interfaces.{' '}
              <span className="text-[var(--text-muted)] font-light italic">Human-centered decisions.</span>
            </h2>

            <div className="mt-6 space-y-4">
              <p className="section-copy">
                Frontend developer with 2+ years of experience building scalable,
                dynamic interfaces with React.js. I focus on polished user
                experiences, strong component systems, and frontend architecture
                that stays manageable as products evolve.
              </p>
              <p className="section-copy">
                I also work comfortably across backend tasks with Node.js,
                Express.js, Java, and MySQL when a project needs it. Outside work,
                I enjoy poetry, sketching, fingerstyle guitar, reading, and
                kickboxing.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid gap-3 border-t border-[var(--border)] pt-8 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="text-2xl font-bold text-[var(--text)] tracking-tight">{stat.value}</div>
                  <div className="mono-label mt-1 text-[11px]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Profile Card */}
          <div className="surface-panel-strong overflow-hidden flex flex-col">
            <div className="relative h-44 w-full bg-[var(--surface-muted)]">
              <Image
                src={`${BASE_PATH}/images/vinsmokeSanji.jpeg`}
                alt="Brijesh Kunwar"
                fill
                className="object-cover"
              />
              {/* overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            <div className="flex flex-col gap-5 p-6 flex-1">
              <div>
                <div className="text-xl font-bold text-[var(--text)] tracking-tight">Brijesh Kunwar</div>
                <div className="mt-1 flex items-center gap-2 text-sm text-[var(--text-muted)]">
                  <Code2 size={13} />
                  Frontend Engineer · React Developer
                </div>
                <div className="mt-1 flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <Building2 size={12} />
                  TOSS · India
                </div>
              </div>

              <div className="profile-stat-grid">
                {[
                  { value: 'React', label: 'Primary' },
                  { value: 'UI', label: 'Focus' },
                  { value: 'Hybrid', label: 'Mode' },
                ].map((item) => (
                  <div key={item.label} className="profile-stat-cell">
                    <div className="text-sm font-semibold text-[var(--text)]">{item.value}</div>
                    <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.08em] text-[var(--text-muted)]">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'React.js', icon: <Layers size={10} /> },
                  { label: 'Next.js', icon: <Globe size={10} /> },
                  { label: 'TypeScript', icon: <Code2 size={10} /> },
                  { label: 'Node.js', icon: <Cpu size={10} /> },
                  { label: 'MySQL', icon: <Database size={10} /> },
                  { label: 'Git', icon: <GitBranch size={10} /> },
                ].map(({ label, icon }) => (
                  <span key={label} className="skill-pill">
                    {icon}
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── EXPERIENCE + SKILLS ── */}
        <motion.div
          {...fadeUpInView}
          className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]"
        >
          {/* Experience */}
          <div className="surface-panel-strong p-6 sm:p-8">
            <div className="section-divider">
              <div className="icon-label">
                <Briefcase size={14} />
                <span className="section-kicker" style={{ marginBottom: 0 }}>Experience</span>
              </div>
              <div className="section-divider-line" />
            </div>

            <div className="relative pl-5 space-y-0">
              <div className="exp-timeline-line" />
              {experiences.map((exp, i) => (
                <div
                  key={exp.title}
                  className={`exp-card relative ${i < experiences.length - 1 ? 'mb-4' : ''}`}
                >
                  {exp.current && <span className="current-dot" />}

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-[var(--text)] leading-tight">{exp.title}</h3>
                      <div className="mt-1 flex items-center gap-1.5 text-xs text-[var(--accent)]">
                        <Building2 size={11} />
                        {exp.shortCompany}
                        {exp.current && (
                          <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-green-500 border border-green-500/20">
                            <span className="h-1 w-1 rounded-full bg-green-500" />
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-muted)] whitespace-nowrap">
                      <Calendar size={11} />
                      {exp.year}
                    </div>
                  </div>
                  <p className="section-copy mt-3 text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="surface-panel p-6">
            <div className="section-divider">
              <div className="icon-label">
                <Code2 size={14} />
                <span className="section-kicker" style={{ marginBottom: 0 }}>Skills</span>
              </div>
              <div className="section-divider-line" />
            </div>

            <div className="space-y-6">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <div className="skill-group-header">
                    {group.icon}
                    <span>{group.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="skill-pill">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── EDUCATION ── */}
        <motion.section {...fadeUpInView} className="mt-6">
          <div className="surface-panel-strong p-6 sm:p-8">
            <div className="section-divider mb-6">
              <div className="icon-label">
                <GraduationCap size={14} />
                <span className="section-kicker" style={{ marginBottom: 0 }}>Education</span>
              </div>
              <div className="section-divider-line" />
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--text)] whitespace-nowrap">
                Academic background
              </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {education.map((item) => (
                <div key={item.degree} className="edu-card">
                  <div className="edu-short-badge">{item.short}</div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-muted)]">
                    <Calendar size={10} />
                    {item.year}
                  </div>
                  <div className="mt-3 text-base font-bold text-[var(--text)] leading-snug">{item.degree}</div>
                  <div className="mt-1 flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
                    <Building2 size={12} />
                    {item.institution}
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent)]">
                    <Award size={11} />
                    {item.grade}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── INTERESTS ── */}
        <motion.div {...fadeUpInView} className="mt-6">
          <Interest />
        </motion.div>

      </section>
    </div>
  )
}