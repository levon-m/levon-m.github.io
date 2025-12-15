import { Link } from 'react-router-dom'
import AsciiWave from '../components/common/AsciiWave'
import { homeNavItems } from '../data/projects'

export default function Home() {
  return (
    <div className="h-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-8 overflow-hidden">
        {/* ASCII Wave Background */}
        <AsciiWave rows={8} speed={0.02} opacity={0.25} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Name & Title */}
          <div className="opacity-0 animate-fade-in">
            <span className="font-mono text-accent text-sm tracking-wider">
              {'>'} hello, I'm
            </span>
          </div>

          <h1 className="mt-1 text-4xl sm:text-5xl font-bold text-surface opacity-0 animate-slide-up animate-delay-100">
            Levon Melkonyan
          </h1>

          {/* Tagline */}
          <p className="mt-2 text-lg sm:text-xl text-surface-light font-light opacity-0 animate-slide-up animate-delay-200">
            Embedded audio & DSP engineer, bass player, and music-tech tinkerer.
          </p>

          {/* Description */}
          <p className="mt-3 text-surface max-w-2xl text-base opacity-0 animate-slide-up animate-delay-300">
            I build things at the intersection of music and technology—from hardware
            loopers and pitch detection systems to interactive experiences. Currently
            exploring real-time audio processing on embedded platforms and creating
            tools that make practicing and performing more engaging.
          </p>
        </div>
      </section>

      {/* Navigation Stack */}
      <section className="py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="space-y-3" aria-label="Main navigation">
            {homeNavItems.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                className="group block text-accent hover:text-accent-dark transition-colors
                          opacity-0 animate-slide-up text-lg"
                style={{
                  animationDelay: `${400 + index * 80}ms`,
                  animationFillMode: 'forwards',
                }}
              >
                <span className="font-mono text-sm text-surface-light mr-3">→</span>
                {item.title}
                <span className="text-surface-light text-sm ml-3">({item.subtitle})</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </div>
  )
}
