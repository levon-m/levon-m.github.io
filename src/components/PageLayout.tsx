import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
  title: string
  showBackButton?: boolean
}

export default function PageLayout({ children, title, showBackButton = true }: PageLayoutProps) {
  return (
    <main className="min-h-screen p-8 md:p-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        {showBackButton && (
          <Link href="/hello" className="text-secondary hover:text-primary mb-8 inline-block">
            ← Back
          </Link>
        )}
        <h1 className="text-4xl md:text-6xl font-bold mb-8">{title}</h1>
        {children}
      </motion.div>
    </main>
  )
} 