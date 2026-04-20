'use client'

import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

const philosophyPoints = [
  {
    title: 'Clean Code, Scalable Architecture',
    description: 'Building components that are modular, reusable, and easy to maintain as products grow.',
  },
  {
    title: 'Performance First',
    description: 'Optimization isn\'t an afterthought. Lazy loading, code splitting, and efficient rendering matter from day one.',
  },
  {
    title: 'User-Centric Design',
    description: 'Every interaction should feel smooth and intuitive. Accessibility and responsive design are non-negotiable.',
  },
  {
    title: 'Smart Use of AI',
    description: 'AI helps accelerate development, but human thinking drives the architecture. Balance automation with intentional design.',
  },
  {
    title: 'Debugging Mindset',
    description: 'Understanding root causes, not just fixing symptoms. Error handling and monitoring are built in from the start.',
  },
]

const codeExamples = [
  {
    title: 'Optimized React Component',
    lang: 'jsx',
    code: `// Use useMemo to prevent unnecessary re-renders
const MemoizedList = memo(({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
))

export default function App() {
  const items = useMemo(() => 
    largeDataSet.filter(x => x.active),
    [largeDataSet]
  )
  return <MemoizedList items={items} />
}`,
  },
  {
    title: 'Proper State Management',
    lang: 'jsx',
    code: `// Clean state handling with context
const DataContext = createContext(null)

export function DataProvider({ children }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const result = await api.getData()
      setData(result)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <DataContext.Provider value={{ data, loading, error, fetchData }}>
      {children}
    </DataContext.Provider>
  )
}`,
  },
  {
    title: 'Efficient Data Fetching',
    lang: 'jsx',
    code: `// React Query for optimized API calls
import { useQuery } from '@tanstack/react-query'

export function useUserData(userId) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => api.getUser(userId),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2,
    enabled: !!userId,
  })
}

export function UserProfile({ userId }) {
  const { data, isLoading, error } = useUserData(userId)
  
  if (isLoading) return <Skeleton />
  if (error) return <ErrorBoundary error={error} />
  return <div>{data.name}</div>
}`,
  },
]

interface CodeBlockProps {
  example: typeof codeExamples[0]
  index: number
}

function CodeBlock({ example, index }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(example.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.48, delay: index * 0.1 }}
      className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <h4 className="font-semibold text-gray-900">{example.title}</h4>
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          title="Copy code"
        >
          {copied ? (
            <Check size={16} className="text-teal-600" />
          ) : (
            <Copy size={16} className="text-gray-400" />
          )}
        </button>
      </div>
      <pre className="px-6 py-4 overflow-x-auto bg-gray-50 text-sm text-gray-800 font-mono">
        <code>{example.code}</code>
      </pre>
    </motion.div>
  )
}

export default function CodingPhilosophy() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.48 }}
          className="mb-16"
        >
          <p className="text-sm font-mono uppercase tracking-widest text-teal-600 mb-3">
            Engineering Principles
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            How I Think About Code
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Writing code is about solving problems cleanly. Here&apos;s my approach to building scalable,
            maintainable products that developers love working on.
          </p>
        </motion.div>

        {/* Philosophy Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {philosophyPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.48, delay: index * 0.08 }}
              className="rounded-2xl p-8 bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Code Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.48 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Code Examples</h3>
          <div className="grid gap-8">
            {codeExamples.map((example, index) => (
              <CodeBlock key={example.title} example={example} index={index} />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.48 }}
          className="text-center pt-12 border-t border-gray-200"
        >
          <p className="text-gray-600 mb-6">
            Want to see more of my work? Check out my projects and GitHub.
          </p>
          <a
            href="https://github.com/Darckie"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg"
          >
            View on GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
