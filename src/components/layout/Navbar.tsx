import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home', internal: true },
  { to: 'https://github.com/levon-m', label: 'GitHub', internal: false },
  { to: 'https://linkedin.com/in/levon-melkonyan', label: 'LinkedIn', internal: false },
  { to: '/resume', label: 'Resume', internal: true },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="font-mono text-lg font-medium text-accent hover:text-accent-dark transition-colors"
          >
            <span className="text-surface-light">&gt;</span> levon.m
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) =>
              link.internal ? (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(link.to)
                      ? 'text-accent bg-cream/20'
                      : 'text-surface hover:text-accent hover:bg-cream/10'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.to}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium rounded-md text-surface hover:text-accent hover:bg-cream/10 transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-surface hover:text-accent hover:bg-cream/10 focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-surface">
            <div className="space-y-1">
              {navLinks.map((link) =>
                link.internal ? (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2 text-base rounded-md ${
                      isActive(link.to)
                        ? 'text-accent bg-cream/20'
                        : 'text-surface hover:text-accent hover:bg-cream/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.to}
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 text-base rounded-md text-surface hover:text-accent hover:bg-cream/10 transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
