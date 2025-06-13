import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  const links = [
    { href: '/bio', label: 'Bio' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/education', label: 'Education' },
    { href: '/contact', label: 'Contact' },
    { href: '/music', label: 'Music' },
  ]

  return (
    <main className="min-h-screen p-8 md:p-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Levon Melkonyan</h1>
        <nav className="space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-xl hover:text-secondary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/cv.pdf"
            className="block text-xl hover:text-secondary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </nav>
      </motion.div>
    </main>
  )
} 