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
    <div className="min-h-screen py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <section className="mb-20">
          <h1 className="text-5xl sm:text-6xl font-bold text-surface mb-8">
            Levon Melkonyan
          </h1>

          {/* Bio */}
          <div className="text-surface space-y-5 text-lg leading-relaxed max-w-3xl">
            <p>
              Hello! I'm an embedded software developer based in Los Angeles, CA.
            </p>
            <p>
              I studied Computer Science at <a href="https://www.calpoly.edu/" target="_blank" rel="noopener noreferrer" className="text-accent">Cal Poly SLO</a>, and have since been developing real-time aerospace applications at <a href="https://ckt.com/" target="_blank" rel="noopener noreferrer" className="text-accent">CK Technologies, Inc.</a>
            </p>
            <p>
              At heart, I am a bass player and music producer, and nothing excites me more than the intersection of sound and technology. In my free time, I am developing software and hardware for live music performance and music theory practice, particularly with the <a href="https://www.pjrc.com/teensy/" target="_blank" rel="noopener noreferrer" className="text-accent">Teensy</a> platform.
            </p>

            {/* Links */}
            <div className="flex gap-6 pt-2">
              <a
                href="/assets/Levon_Melkonyan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-accent hover:italic"
              >
                CV
              </a>
              <a
                href="https://github.com/levon-m"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-accent hover:italic"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/levonmelkonyan/"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-accent hover:italic"
              >
                LinkedIn
              </a>
              <a
                href="mailto:levonmelkonyan@gmail.com"
                className="no-underline text-accent hover:italic"
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
                <div key={item.to} className="text-surface-light text-lg leading-relaxed max-w-3xl">
                  <p>
                    Take a look at my <Link to={item.to} className="text-accent">bookmarks</Link> for a collection of some of my favorite mixed media, and things I generally find interesting.
                  </p>
                  <p className="mt-2">
                    I hope something here resonates with you as well!
                  </p>
                </div>
              )
            }

            return (
              <Link
                key={item.to}
                to={item.to}
                className="block group no-underline"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="relative bg-accent/10 rounded-2xl p-10 hover:bg-accent/15 transition-colors">
                  <div className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center`}>
                    {/* Image Placeholder */}
                    <div className="w-full md:w-1/2 aspect-[4/3] bg-surface/10 rounded-lg flex items-center justify-center border border-surface/20">
                      <span className="text-surface-light font-mono text-sm">
                        [Project Image]
                      </span>
                    </div>

                    {/* Project Info */}
                    <div className="w-full md:w-1/2 space-y-4">
                      <h2 className="text-3xl font-bold text-surface group-hover:italic">
                        {item.title}
                      </h2>
                      <p className="text-surface-light text-lg">
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
