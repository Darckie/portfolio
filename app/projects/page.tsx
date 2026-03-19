'use client'

import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  Download,
  ExternalLink,
  Calendar,
  User,
  Clock,
  CheckCircle2,
  Lightbulb,
  ShieldAlert,
  TrendingUp,
  CircleDot,
  Building2,
  Layers,
  ChevronRight,
} from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { useMemo, useState } from 'react'

import whatsappScreenshot1 from './whatsapp_chat/images/Screenshot1.png'

type ProjectTab = 'overview' | 'learnings' | 'challenges' | 'outcomes'

interface ProjectDocument {
  label: string
  href: string
}

interface Project {
  title: string
  status: string
  year: string
  description: string
  tech: string[]
  myRole: string
  duration: string
  learnings: string[]
  challenges: string[]
  outcomes: string[]
  completion?: number
  client?: string
  clientUrl?: string
  projectUrl?: string
  images?: StaticImageData[]
  documents?: ProjectDocument[]
}

const BASE_PATH = '/portfolio'

const tabItems: { label: string; value: ProjectTab; icon: React.ReactNode }[] = [
  { label: 'Overview',   value: 'overview',   icon: <Layers size={12} /> },
  { label: 'Learnings',  value: 'learnings',  icon: <Lightbulb size={12} /> },
  { label: 'Challenges', value: 'challenges', icon: <ShieldAlert size={12} /> },
  { label: 'Outcomes',   value: 'outcomes',   icon: <TrendingUp size={12} /> },
]

const tabBulletIcon: Record<ProjectTab, React.ReactNode> = {
  overview:   <Layers size={13} />,
  learnings:  <Lightbulb size={13} />,
  challenges: <ShieldAlert size={13} />,
  outcomes:   <CheckCircle2 size={13} />,
}

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(0)
  const [activeTab, setActiveTab] = useState<ProjectTab>('overview')

  const projects = useMemo<Project[]>(
    () => [
      {
        title: 'Mortgage Auction Platform',
        status: 'In Progress',
        completion: 78,
        year: '2024 – Present',
        client: 'Nadlan Capital Group',
        clientUrl: 'https://nadlancapitalgroup.com/',
        projectUrl: 'https://nandalanfinance.netlify.app/',
        tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'React Table', 'React Hook Form', 'Zod', 'NextAuth', 'Zustand', 'React Query', 'Shadcn UI'],
        description: 'A full-stack application for agents, lenders, brokers, and borrowers to manage real-estate loan auctions with rich filtering, role-based access, and structured workflows.',
        myRole: 'Frontend Developer',
        duration: 'Ongoing',
        learnings: [
          'Next.js App Router patterns for complex product flows.',
          'Zustand and React Query for clear separation of local and server state.',
          'Advanced data-table architecture with sorting, filtering, and exports.',
          'Role-based UI patterns for multiple user types and permissions.',
        ],
        challenges: [
          'Handling dense filtering logic without making the interface feel heavy.',
          'Balancing performance with large datasets and complex table states.',
          'Designing flows that stay understandable across several user roles.',
        ],
        outcomes: [
          'Built a scalable loan-management interface from scratch.',
          'Created reusable patterns for forms, exports, and protected views.',
          'Delivered a responsive product experience for a complex business domain.',
        ],
      },
      {
        title: 'WhatsApp Chat Web App',
        status: 'Live',
        year: '2023 – 2024',
        tech: ['Node.js', 'Express.js', 'React.js', 'TypeScript', 'MySQL', 'JWT', 'WebSockets'],
        description: 'A secure chat management portal that lets agents receive, reply to, and monitor WhatsApp conversations from a unified web interface.',
        myRole: 'Full-Stack Developer',
        duration: '4 months',
        images: [whatsappScreenshot1],
        documents: [{ label: 'WhatsApp Chat Web App Architecture & API Doc', href: `${BASE_PATH}/whatsapp_chat_doc.pdf` }],
        learnings: [
          'Webhook-driven chat architecture and reliable event handling.',
          'Message lifecycle management with delivery and read tracking.',
          'Admin reporting patterns for support workflows and analytics.',
        ],
        challenges: [
          'Preventing duplicate message processing from webhook retries.',
          'Supporting file and media workflows across chat sessions.',
          'Keeping infrastructure details secure while exposing clean APIs.',
        ],
        outcomes: [
          'Delivered a production-ready chat portal for business operations.',
          'Centralized customer conversations into a single interface.',
          'Documented architecture and APIs for handoff and future maintenance.',
        ],
      },
      {
        title: 'Clixxo Gateway Management Server',
        status: 'In Progress',
        year: '2025 – Present',
        tech: ['Node.js', 'Express.js', 'Sequelize', 'MySQL', 'JWT', 'Winston', 'Linux'],
        description: 'A backend platform for network gateway devices covering authentication, diagnostics, system management, and operational reliability.',
        myRole: 'Backend Developer',
        duration: '3 months – Present',
        learnings: [
          'Secure API design for system-level operations.',
          'Middleware architecture for auth and access control.',
          'Structured logging and diagnostics across backend services.',
        ],
        challenges: [
          'Exposing system operations safely to application users.',
          'Coordinating async diagnostics with dependable backend responses.',
          'Preparing a foundation for HA and future platform growth.',
        ],
        outcomes: [
          'Enabled secure gateway diagnostics and user access.',
          'Reduced manual troubleshooting through backend automation.',
          'Created a scalable service layer for future device management features.',
        ],
      },
      {
        title: 'Maharashtra Cyber Complaints Portal',
        status: 'Live',
        year: '2023 – Present',
        tech: ['React.js', 'Redux', 'Crypto.js', 'MySQL', 'Java', 'JWT'],
        description: 'A government complaint management system for monitoring cyber fraud reports with dashboards, search tools, and operational visibility.',
        myRole: 'Frontend Lead Developer',
        duration: 'Ongoing',
        learnings: [
          'Large-scale React architecture for admin-heavy systems.',
          'Data visualization design for operational monitoring.',
          'Security-aware frontend workflows for sensitive information.',
        ],
        challenges: [
          'Designing interfaces for high-volume complaint management.',
          'Balancing clarity and depth for non-technical operators.',
          'Maintaining speed and reliability under continuous usage.',
        ],
        outcomes: [
          'Supported a real-world public-sector complaint workflow.',
          'Improved issue monitoring with structured dashboards and search.',
          'Delivered a stable system used for day-to-day operations.',
        ],
      },
      {
        title: 'ACEHELPLINE Emergency Call Management',
        status: 'Live',
        year: '2025 – Present',
        tech: ['React.js', 'MUI', 'Tailwind', 'TypeScript', 'Java', 'MySQL'],
        description: 'An emergency call management and dispatcher interface for tracking incidents, operator workflows, and real-time information handling.',
        myRole: 'Frontend Lead Developer',
        duration: '8+ months',
        learnings: [
          'TypeScript patterns for large-scale React systems.',
          'UI design for high-pressure operational workflows.',
          'Performance and reliability considerations for live dashboards.',
        ],
        challenges: [
          'Keeping the interface calm and legible under stress.',
          'Handling live updates without overwhelming operators.',
          'Coordinating complex flows across calls, incidents, and history.',
        ],
        outcomes: [
          'Built a mission-critical interface for emergency operations.',
          'Improved response workflow visibility and tracking.',
          'Created a dependable frontend foundation for ongoing expansion.',
        ],
      },
    ],
    []
  )

  const project = projects[selectedProject]

  const tabContent: Record<ProjectTab, string[]> = {
    overview:   [],
    learnings:  project.learnings,
    challenges: project.challenges,
    outcomes:   project.outcomes,
  }

  return (
    <div className="page-shell">
      <style>{`
        /* ── Project list button ── */
        .proj-btn {
          width: 100%;
          border: 1px solid var(--border);
          background: var(--surface);
          padding: 18px 20px;
          text-align: left;
          transition: border-color .18s, background .18s;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .proj-btn:hover {
          border-color: var(--border-strong);
          background: var(--surface-muted);
        }
        .proj-btn.active {
          border-color: var(--accent);
          background: var(--surface-strong, var(--surface-muted));
        }
        .proj-btn.active::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: var(--accent);
        }
        .proj-btn .proj-btn-arrow {
          color: var(--text-muted);
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity .15s, transform .15s, color .15s;
          flex-shrink: 0;
        }
        .proj-btn:hover .proj-btn-arrow,
        .proj-btn.active .proj-btn-arrow {
          opacity: 1;
          transform: translateX(0);
          color: var(--accent);
        }

        /* ── Status pill ── */
        .status-live {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 3px 9px;
          border-radius: 999px;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #22c55e;
          background: rgba(34,197,94,0.1);
          border: 1px solid rgba(34,197,94,0.2);
        }
        .status-progress {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 3px 9px;
          border-radius: 999px;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: var(--text-muted);
          background: var(--surface-muted);
          border: 1px solid var(--border);
        }

        /* ── Meta strip ── */
        .meta-cell {
          border: 1px solid var(--border);
          background: var(--surface-muted);
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          transition: border-color .18s;
        }
        .meta-cell:hover { border-color: var(--border-strong); }
        .meta-cell-icon {
          color: var(--accent);
          margin-bottom: 6px;
        }

        /* ── Tech chips ── */
        .tech-chip {
          display: inline-block;
          padding: 4px 10px;
          border: 1px solid var(--border);
          background: var(--surface-muted);
          font-family: monospace;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: var(--text-muted);
          transition: border-color .15s, color .15s;
        }
        .tech-chip:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        /* ── Tab buttons ── */
        .tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 7px 14px;
          font-size: 12px;
          font-weight: 500;
          border-radius: 6px;
          border: 1px solid transparent;
          cursor: pointer;
          transition: all .15s;
        }
        .tab-btn.active {
          background: var(--accent-soft);
          color: var(--accent);
          border-color: var(--accent);
        }
        .tab-btn:not(.active) {
          color: var(--text-muted);
          background: transparent;
        }
        .tab-btn:not(.active):hover {
          color: var(--text);
          background: var(--surface-muted);
        }

        /* ── Tab content bullets ── */
        .tab-bullet {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 16px;
          border: 1px solid var(--border);
          background: var(--surface-muted);
          transition: border-color .15s;
        }
        .tab-bullet:hover { border-color: var(--border-strong); }
        .tab-bullet-icon {
          color: var(--accent);
          margin-top: 1px;
          flex-shrink: 0;
        }

        /* ── Action buttons ── */
        .action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          font-size: 12px;
          font-weight: 500;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-muted);
          border-radius: 7px;
          text-decoration: none;
          cursor: pointer;
          transition: border-color .15s, color .15s;
        }
        .action-btn:hover {
          border-color: var(--border-strong);
          color: var(--text);
        }

        /* ── Progress bar ── */
        .progress-wrap {
          border: 1px solid var(--border);
          background: var(--surface-muted);
          padding: 14px 16px;
        }
        .progress-bar-bg {
          height: 3px;
          background: var(--border);
          border-radius: 999px;
          margin-top: 10px;
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 3px;
          background: var(--accent);
          border-radius: 999px;
          transition: width .6s ease;
        }

        /* ── Document row ── */
        .doc-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 16px;
          border: 1px solid var(--border);
          background: var(--surface-muted);
          text-decoration: none;
          transition: border-color .15s;
        }
        .doc-row:hover { border-color: var(--border-strong); }

        /* ── Snapshot card ── */
        .snapshot-card {
          border: 1px solid var(--border);
          background: var(--surface-muted);
          padding: 18px;
        }
        .snapshot-row {
          padding: 10px 0;
          border-bottom: 1px solid var(--border);
        }
        .snapshot-row:last-child { border-bottom: none; }
      `}</style>

      <section className="section-shell px-0 pb-16 pt-28 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-kicker mb-4">Projects</div>
          <div className="flex flex-col gap-4 border-b border-[var(--border)] pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="section-title text-[clamp(2.4rem,5vw,4.2rem)]">
                <span className="text-yellow-500">Detailed</span> case work
              </h1>
              <p className="section-copy mt-4 max-w-2xl">
                Projects and case studies highlighting my approach to complex product problems, system design, and polished UI.
              </p>
            </div>
            <div className="mono-label whitespace-nowrap">
              {projects.length.toString().padStart(2, '0')} featured projects
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[400px_minmax(0,1fr)]">

          {/* ── Project list ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-2"
          >
            {projects.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => { setSelectedProject(index); setActiveTab('overview') }}
                className={`proj-btn ${selectedProject === index ? 'active' : ''}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-[10px] text-[var(--text-muted)]">
                        0{index + 1}
                      </span>
                      <span className={item.status === 'Live' ? 'status-live' : 'status-progress'}>
                        <CircleDot size={8} />
                        {item.status}
                      </span>
                    </div>
                    <div className="text-base font-semibold text-[var(--text)] leading-snug mb-2">
                      {item.title}
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-[var(--text-muted)]">
                      <Calendar size={9} />
                      {item.year}
                      {item.completion ? (
                        <>
                          <span className="mx-1 opacity-40">·</span>
                          {item.completion}% complete
                        </>
                      ) : null}
                    </div>
                  </div>
                  <ChevronRight size={15} className="proj-btn-arrow mt-1" />
                </div>
              </button>
            ))}
          </motion.div>

          {/* ── Detail panel ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="surface-panel-strong p-6 sm:p-7"
          >
            {/* Header */}
            <div className="flex flex-col gap-4 border-b border-[var(--border)] pb-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className={project.status === 'Live' ? 'status-live' : 'status-progress'}>
                    <CircleDot size={8} />
                    {project.status}
                  </span>
                  <span className="font-mono text-[10px] text-[var(--text-muted)]">{project.year}</span>
                </div>
                <h2 className="text-2xl font-bold tracking-[-0.04em] text-[var(--text)] leading-tight">
                  {project.title}
                </h2>
                {project.client ? (
                  <div className="mt-2 flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
                    <Building2 size={12} />
                    {project.clientUrl ? (
                      <a
                        href={project.clientUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent)] hover:underline"
                      >
                        {project.client}
                      </a>
                    ) : project.client}
                  </div>
                ) : null}
              </div>

              <div className="flex flex-wrap gap-2 flex-shrink-0">
                {project.projectUrl ? (
                  <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="action-btn">
                    <ExternalLink size={13} />
                    Live
                  </a>
                ) : null}
                {project.documents?.[0] ? (
                  <a href={project.documents[0].href} download className="action-btn">
                    <Download size={13} />
                    Doc
                  </a>
                ) : null}
              </div>
            </div>

            {/* Meta row */}
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { label: 'Role',     value: project.myRole,   icon: <User size={13} /> },
                { label: 'Duration', value: project.duration, icon: <Clock size={13} /> },
                { label: 'Status',   value: project.status,   icon: <CircleDot size={13} /> },
              ].map((item) => (
                <div key={item.label} className="meta-cell">
                  <div className="meta-cell-icon">{item.icon}</div>
                  <div className="mono-label text-[10px]">{item.label}</div>
                  <div className="text-sm font-semibold text-[var(--text)] mt-1">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Progress */}
            {project.completion ? (
              <div className="mt-4 progress-wrap">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 mono-label text-[10px]">
                    <TrendingUp size={10} />
                    Progress
                  </div>
                  <div className="mono-label text-[10px]">{project.completion}%</div>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: `${project.completion}%` }} />
                </div>
              </div>
            ) : null}

            {/* Tech */}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-chip">{tech}</span>
              ))}
            </div>

            {/* Tabs */}
            <div className="mt-6 flex flex-wrap gap-2 border-b border-[var(--border)] pb-4">
              {tabItems.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setActiveTab(item.value)}
                  className={`tab-btn ${activeTab === item.value ? 'active' : ''}`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedProject}-${activeTab}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="mt-5"
              >
                {activeTab === 'overview' ? (
                  <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_240px]">
                    <div className="space-y-3">
                      <p className="section-copy text-sm leading-relaxed">{project.description}</p>
                      <p className="section-copy text-sm leading-relaxed">
                        This project highlights my approach to production UI: clear
                        information architecture, flexible component systems, and calm
                        interfaces for complex workflows.
                      </p>
                    </div>
                    <div className="snapshot-card">
                      <div className="mono-label mb-3 text-[10px]">Snapshot</div>
                      <div className="snapshot-row">
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--text-muted)] mb-1">
                          <User size={9} /> Role
                        </div>
                        <div className="text-sm font-medium text-[var(--text)]">{project.myRole}</div>
                      </div>
                      <div className="snapshot-row">
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--text-muted)] mb-1">
                          <Layers size={9} /> Focus
                        </div>
                        <div className="text-sm text-[var(--text-muted)]">
                          Clean UX, frontend architecture, product polish
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    {tabContent[activeTab].map((item, i) => (
                      <div key={i} className="tab-bullet">
                        <span className="tab-bullet-icon">{tabBulletIcon[activeTab]}</span>
                        <p className="text-sm leading-relaxed text-[var(--text-muted)]">{item}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Images */}
            {project.images?.length ? (
              <div className="mt-7">
                <div className="mono-label mb-3 text-[10px]">Project preview</div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.images.map((image, i) => (
                    <div key={i} className="overflow-hidden border border-[var(--border)]">
                      <Image
                        src={image}
                        alt={`${project.title} preview ${i + 1}`}
                        width={640}
                        height={360}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Documents */}
            {project.documents?.length ? (
              <div className="mt-7">
                <div className="mono-label mb-3 text-[10px]">Downloads</div>
                <div className="flex flex-col gap-2">
                  {project.documents.map((doc) => (
                    <a key={doc.label} href={doc.href} download className="doc-row">
                      <div>
                        <div className="text-sm font-medium text-[var(--text)]">{doc.label}</div>
                        <div className="mono-label mt-1 text-[10px]">PDF document</div>
                      </div>
                      <Download size={15} className="text-[var(--text-muted)] flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </motion.div>
        </div>
      </section>
    </div>
  )
}