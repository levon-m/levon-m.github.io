import { Link } from 'react-router-dom'
import AsciiWave from '../components/common/AsciiWave'
import { homeNavItems } from '../data/projects'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        {/* ASCII Wave Background */}
        <AsciiWave rows={8} speed={0.02} opacity={0.12} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Name & Title */}
          <div className="opacity-0 animate-fade-in">
            <span className="font-mono text-accent text-sm tracking-wider">
              {'>'} hello, I'm
            </span>
          </div>

          <h1 className="mt-2 text-5xl sm:text-7xl font-bold text-white opacity-0 animate-slide-up animate-delay-100">
            Levon Melkonyan
          </h1>

          {/* Tagline */}
          <p className="mt-4 text-xl sm:text-2xl text-gray-300 font-light opacity-0 animate-slide-up animate-delay-200">
            Embedded audio & DSP engineer, bass player, and music-tech tinkerer.
          </p>

          {/* Description */}
          <p className="mt-6 text-gray-400 max-w-2xl text-lg opacity-0 animate-slide-up animate-delay-300">
            {/* CUSTOMIZE: Write your own bio here */}
            I build things at the intersection of music and technology—from hardware
            loopers and pitch detection systems to interactive experiences. Currently
            exploring real-time audio processing on embedded platforms and creating
            tools that make practicing and performing more engaging.
          </p>

          {/* Quick Links */}
          <div className="mt-8 flex flex-wrap gap-4 opacity-0 animate-slide-up animate-delay-400">
            <a
              href="https://github.com/levon-m"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-surface rounded-md text-gray-300 hover:text-white hover:bg-surface-light transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/levon-melkonyan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-surface rounded-md text-gray-300 hover:text-white hover:bg-surface-light transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-md text-accent hover:bg-accent/20 transition-colors"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Resume
            </Link>
          </div>
        </div>
      </section>

      {/* ASCII Divider */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="font-mono text-gray-700 text-sm select-none overflow-hidden py-4">
          {'// ─────────────────────── explore ───────────────────────'}
        </div>
      </div>

      {/* Navigation Stack */}
      <section className="py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="space-y-4" aria-label="Main navigation">
            {homeNavItems.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                className="group block w-full bg-surface rounded-lg border border-gray-800 p-6
                          hover:border-accent/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10
                          transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-dark
                          opacity-0 animate-slide-up"
                style={{
                  animationDelay: `${500 + index * 80}ms`,
                  animationFillMode: 'forwards',
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-white group-hover:text-accent transition-colors flex items-center gap-2">
                      <span className="font-mono text-gray-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        {'>>'}
                      </span>
                      {item.title}
                    </h2>
                    <p className="mt-1 text-gray-400 text-sm">{item.subtitle}</p>
                  </div>
                  <div className="text-gray-600 group-hover:text-accent group-hover:translate-x-1 transition-all">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* Bottom ASCII decoration */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <pre className="font-mono text-xs text-gray-800 select-none text-center">
          {`
    ~  ~  ~  ~  ~  ~  ~  ~  ~
          `}
        </pre>
      </div>
    </div>
  )
}
