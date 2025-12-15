import { Link } from 'react-router-dom'
import { homeNavItems } from '../data/projects'

export default function Home() {
  const projectTags: Record<string, string[]> = {
    '/microloop': ['embedded', 'audio', 'hardware', 'c++'],
    '/bassmint': ['music-tech', 'juce', 'audio', 'hardware'],
    '/voice': ['privacy', 'activism', 'web'],
    '/prison-island': ['game-design', 'interactive', 'ux'],
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <section className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-surface mb-6">
            Levon Melkonyan
          </h1>

          {/* Bio */}
          <div className="text-surface space-y-4 text-base leading-relaxed max-w-2xl">
            <p>
              Hello! I'm an embedded software developer based in Los Angeles, CA.
            </p>
            <p>
              I studied Computer Science at Cal Poly SLO, and have since been developing real-time aerospace applications at CK Technologies, Inc.
            </p>
            <p>
              At heart, I am a bass player and music producer, and nothing excites me more than the intersection of sound and technology. In my free time, I am developing software and hardware for live music performance and music theory practice, particularly with the Teensy platform.
            </p>

            {/* Links */}
            <div className="flex gap-6 pt-2">
              <a
                href="/assets/Levon_Melkonyan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline hover:italic"
              >
                CV
              </a>
              <a
                href="https://github.com/levon-m"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline hover:italic"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/levonmelkonyan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline hover:italic"
              >
                LinkedIn
              </a>
              <a
                href="mailto:levonmelkonyan@gmail.com"
                className="text-accent underline hover:italic"
              >
                Email
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-12">
          {homeNavItems.map((item, index) => {
            const isImageLeft = index % 2 === 0
            const tags = projectTags[item.to] || []

            // Skip the Links page from projects
            if (item.to === '/links') {
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block text-accent underline hover:italic text-xl"
                >
                  {item.title} - {item.subtitle}
                </Link>
              )
            }

            return (
              <Link
                key={item.to}
                to={item.to}
                className="block group no-underline"
              >
                <div className="relative bg-accent/10 rounded-2xl p-8 hover:bg-accent/15 transition-colors">
                  <div className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                    {/* Image Placeholder */}
                    <div className="w-full md:w-1/2 aspect-video bg-surface/10 rounded-lg flex items-center justify-center border border-surface/20">
                      <span className="text-surface-light font-mono text-sm">
                        [Project Image]
                      </span>
                    </div>

                    {/* Project Info */}
                    <div className="w-full md:w-1/2 space-y-3">
                      <h2 className="text-2xl font-bold text-surface group-hover:italic transition-all">
                        {item.title}
                      </h2>
                      <p className="text-surface-light">
                        {item.subtitle}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-cream/50 text-surface text-sm rounded-full font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </section>
      </div>
    </div>
  )
}
