import { Link } from 'react-router-dom'
import { homeNavItems } from '../data/projects'

export default function Home() {
  const projectTags: Record<string, string[]> = {
    '/microloop': ['C++17', 'Teensy 4.1', 'DSP', 'RTOS'],
    '/bassmint': ['C++17', 'Teensy 4.0', 'DSP', 'JUCE'],
    '/voice': ['C++', 'ESP32', 'Python', 'OpenCV', 'PyTorch'],
    '/delivery-mayhem': ['C++', 'Arduino'],
  }

  return (
    <div className="min-h-screen py-12 px-8 sm:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <section className="mb-16">
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
            <div className="flex gap-3 pt-2 items-center">
              <a
                href="/assets/Levon_Melkonyan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-accent hover:italic"
              >
                CV
              </a>
              <span className="text-surface">•</span>
              <a
                href="https://github.com/levon-m"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-accent hover:italic"
              >
                GitHub
              </a>
              <span className="text-surface">•</span>
              <a
                href="https://www.linkedin.com/in/levonmelkonyan/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-accent hover:italic"
              >
                LinkedIn
              </a>
              <span className="text-surface">•</span>
              <a
                href="mailto:levonmelkonyan@gmail.com"
                className="underline text-accent hover:italic"
              >
                Email
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-8">
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
                    I hope something here resonates with you too!
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
                <div className="relative bg-accent/10 rounded-2xl p-6 hover:bg-accent/30 transition-none">
                  <div className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-center`}>
                    {/* Image Placeholder */}
                    <div className="w-full md:w-1/2 aspect-[4/3] bg-surface/10 rounded-lg flex items-center justify-center border border-surface/20">
                      <span className="text-surface-light font-mono text-sm">
                        [Project Image]
                      </span>
                    </div>

                    {/* Project Info */}
                    <div className="w-full md:w-1/2 space-y-3">
                      <h2 className="text-2xl font-bold text-surface group-hover:italic">
                        {item.title}
                      </h2>
                      <p className="text-surface-light text-base">
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
