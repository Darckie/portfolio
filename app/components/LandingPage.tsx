'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Download,
  Briefcase,
  ExternalLink,
  Clock,
} from 'lucide-react'
import Image from 'next/image'
import Avatar from './Avatar'
import CodingPhilosophy from './CodingPhilosophy'

const BASE_PATH = '/portfolio'

const featuredProjects = [
  {
    title: 'Mortgage Auction Platform',
    year: '2025',
    status: 'Live',
    url: 'https://nandalanfinance.netlify.app/',
    description: 'Real estate loan auction platform with four role-based dashboards handling 100k+ records with AI-driven matching.',
  },
  {
    title: 'WhatsApp Chat Management Portal',
    year: '2026',
    status: 'Live',
    url: 'https://darckibeta0007.netlify.app/',
    description: 'Real-time chat platform with WebSocket integration, analytics dashboard, and conversation management for 1000+ daily chats.',
  },
  {
    title: 'Maharashtra Cyber Complaints Portal',
    year: '2024',
    status: 'Live',
    url: 'https://darckie.github.io/ComplaintPortal/',
    description: 'Government cyber fraud tracking system with real-time monitoring and data visualization dashboards.',
  },
  {
    title: 'Napkin Haven E-commerce',
    year: '2026',
    status: 'In Progress',
    url: 'https://napkin-haven-shop.lovable.app/',
    description: 'Modern e-commerce UI for stationery store with product catalogs and smooth interactions.',
  },
]

const techStack = [
  { label: 'React.js', color: 'bg-blue-100 text-blue-700' },
  { label: 'Next.js', color: 'bg-gray-100 text-gray-700' },
  { label: 'TypeScript', color: 'bg-blue-100 text-blue-700' },
  { label: 'Tailwind CSS', color: 'bg-cyan-100 text-cyan-700' },
  { label: 'Redux', color: 'bg-purple-100 text-purple-700' },
  { label: 'Node.js', color: 'bg-green-100 text-green-700' },
]

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: smoothEase },
})

const fadeUpView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: smoothEase },
}

interface LandingPageProps {
  onNavigate?: (page: 'home' | 'about' | 'projects' | 'contact') => void
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="relative">
      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* HERO SECTION */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}
      <section className="min-h-screen pt-32 pb-20 px-4 md:px-8 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div {...fadeUp(0)}>
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-teal-50 border border-teal-200 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
                <span className="text-sm font-medium text-teal-800">Open to frontend roles</span>
              </motion.div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Building interfaces that feel
                <span className="block bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                  calm, fast, and deliberate
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                Frontend developer focused on modern React products, polished user experiences, and production-ready systems that scale cleanly.
              </p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <button
                  onClick={() => onNavigate?.('projects')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Briefcase size={18} />
                  View projects
                  <ArrowRight size={16} />
                </button>
                <a
                  href={`${BASE_PATH}/brijesh_kunwar_resume.pdf`}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-gray-300 text-gray-900 font-semibold hover:border-teal-600 hover:text-teal-600 transition-all duration-300"
                >
                  <Download size={18} />
                  Download resume
                </a>
              </motion.div>

              {/* Tech Stack Chips */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-2"
              >
                {techStack.map((tech, i) => (
                  <span
                    key={tech.label}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${tech.color} border border-current border-opacity-20`}
                  >
                    {tech.label}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Profile Card with Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              {/* Profile Image Card */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                <div className="relative aspect-square md:aspect-auto h-96">
                  <Image
                    src={`${BASE_PATH}/images/sanji.jpg`}
                    alt="Brijesh Kunwar"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ translateY: -4 }}
                  className="rounded-2xl p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="text-3xl font-bold text-teal-600 mb-1">2+</p>
                  <p className="text-sm text-gray-600 font-medium">Years building</p>
                </motion.div>
                <motion.div
                  whileHover={{ translateY: -4 }}
                  className="rounded-2xl p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="text-3xl font-bold text-teal-600 mb-1">30+</p>
                  <p className="text-sm text-gray-600 font-medium">Projects shipped</p>
                </motion.div>
              </div>

              {/* Avatar Component */}
              <div className="flex justify-center pt-4">
                <Avatar section="hero" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* SELECTED WORK SECTION */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}
      <motion.section {...fadeUpView} className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-transparent via-teal-50/30 to-transparent">
        <div className="max-w-6xl mx-auto w-full">
          {/* Section Header */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-mono uppercase tracking-widest text-teal-600 mb-3">Selected work</p>
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Featured projects</h2>
                <button
                  onClick={() => onNavigate?.('projects')}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-teal-600 hover:bg-teal-50 transition-colors whitespace-nowrap flex items-center gap-2"
                >
                  View all
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-4">
            {featuredProjects.map((project, index) => (
              <motion.a
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
                className="group rounded-2xl border border-gray-200 bg-white p-6 md:p-8 hover:border-teal-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-gray-500">0{index + 1}</span>
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors flex-shrink-0 mt-1" />
                </div>

                {/* Project Meta */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock size={14} />
                    {project.year}
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full ${
                      project.status === 'Live'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Live' ? 'bg-green-600' : 'bg-gray-600'}`} />
                    {project.status}
                  </span>
                  <span className="text-xs text-gray-400 ml-auto">
                    {project.url.replace('https://', '').replace('http://', '')}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* SECTION DIVIDER */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* CODING PHILOSOPHY SECTION */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}
      <CodingPhilosophy />
    </div>
  )
}
