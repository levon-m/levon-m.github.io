import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects/microloop', label: 'Projects', isDropdown: true },
  { to: '/voice', label: 'VOICE' },
  { to: '/contact', label: 'Contact' },
  { to: '/resume', label: 'Resume' },
]

const projectLinks = [
  { to: '/projects/microloop', label: 'MicroLoop' },
  { to: '/projects/bassmint', label: 'BassMINT' },
  { to: '/projects/prison-island', label: 'Prison Island' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)
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
              link.isDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setProjectsOpen(true)}
                  onMouseLeave={() => setProjectsOpen(false)}
                >
                  <button
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      location.pathname.startsWith('/projects')
                        ? 'text-accent bg-cream/20'
                        : 'text-surface hover:text-accent hover:bg-cream/10'
                    }`}
                  >
                    {link.label}
                    <span className="ml-1 text-xs">▾</span>
                  </button>
                  {projectsOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-cream rounded-md shadow-lg border border-peach/30 py-1">
                      {projectLinks.map((project) => (
                        <Link
                          key={project.to}
                          to={project.to}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            location.pathname === project.to
                              ? 'text-accent bg-background'
                              : 'text-surface hover:text-accent hover:bg-background'
                          }`}
                        >
                          <span className="font-mono text-surface-light mr-2">//</span>
                          {project.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 text-base rounded-md ${
                  isActive('/')
                    ? 'text-accent bg-cream/20'
                    : 'text-surface hover:text-accent hover:bg-cream/10'
                }`}
              >
                Home
              </Link>
              <div className="px-4 py-2 text-sm text-surface-light font-mono">// Projects</div>
              {projectLinks.map((project) => (
                <Link
                  key={project.to}
                  to={project.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block pl-8 pr-4 py-2 text-base rounded-md ${
                    location.pathname === project.to
                      ? 'text-accent bg-cream/20'
                      : 'text-surface hover:text-accent hover:bg-cream/10'
                  }`}
                >
                  {project.label}
                </Link>
              ))}
              <Link
                to="/voice"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 text-base rounded-md ${
                  isActive('/voice')
                    ? 'text-accent bg-cream/20'
                    : 'text-surface hover:text-accent hover:bg-cream/10'
                }`}
              >
                VOICE
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 text-base rounded-md ${
                  isActive('/contact')
                    ? 'text-accent bg-cream/20'
                    : 'text-surface hover:text-accent hover:bg-cream/10'
                }`}
              >
                Contact
              </Link>
              <Link
                to="/resume"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 text-base rounded-md ${
                  isActive('/resume')
                    ? 'text-accent bg-cream/20'
                    : 'text-surface hover:text-accent hover:bg-cream/10'
                }`}
              >
                Resume
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
