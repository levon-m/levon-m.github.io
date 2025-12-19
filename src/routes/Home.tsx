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

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Bio */}
            <div className="text-surface space-y-5 text-lg leading-relaxed flex-1 max-w-2xl">
              <p className="text-xl">
                Hello!<br />
                I'm an embedded software developer based in Los Angeles, CA.
              </p>
              <p>
                I studied Computer Science at Cal Poly SLO, and have since been building real-time aerospace systems at <a href="https://ckt.com/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">CK Technologies, Inc.</a>
              </p>
              <p>
                Outside of work, I'm a bass player and music producer, and I love building tools where hardware and software meet sound. To me, the best products come from treating engineering and creativity as equal partners, and I always strive to keep this balance.
              </p>
              <p>
                I try to make tools that get out of the way, feel satisfying to use, and are genuinely helpful to musicians. Lately, I've been working on tools for live music performance and visualized bass guitar tablature with the <a href="https://www.pjrc.com/teensy/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Teensy</a> platform, which you can read more about below.
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
                  href="mailto:levon.melkonyan.cs@gmail.com"
                  className="underline text-accent hover:italic"
                >
                  Email
                </a>
              </div>
            </div>

            {/* Bio Image Placeholder */}
            <div className="w-full md:w-80 self-stretch bg-surface/10 rounded-2xl flex items-center justify-center border border-surface/20 flex-shrink-0 md:-ml-12">
              <span className="text-surface-light font-mono text-sm">
                [Bio Image]
              </span>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="flex justify-center my-20">
          <div className="w-1/3 h-px bg-surface/20"></div>
        </div>

        {/* Projects Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-surface">
            Projects, Research, & Collaborations
          </h2>
          {homeNavItems.map((item, index) => {
            const isImageLeft = index % 2 === 0
            const tags = projectTags[item.to] || []

            // Skip the Bookmarks page from projects
            if (item.to === '/bookmarks') {
              return (
                <div key={item.to}>
                  {/* Separator */}
                  <div className="flex justify-center my-20">
                    <div className="w-1/3 h-px bg-surface/20"></div>
                  </div>

                  <h2 className="text-2xl font-bold text-surface mb-6">
                    Bookmarks
                  </h2>
                  <div className="text-surface text-lg leading-relaxed flex-1">
                    <p>
                      Take a look at my <Link to={item.to} className="underline text-accent hover:italic" onClick={() => window.scrollTo(0, 0)}>bookmarks</Link> for a collection of my favorite mixed media and other things I find interesting.
                    </p>
                    <p className="mt-2">
                      Hope you find something you like!
                    </p>
                  </div>
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
                <div className="relative bg-accent/10 rounded-2xl p-5 hover:bg-accent transition-none">
                  <div className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-5 items-center`}>
                    {/* Image Placeholder */}
                    <div className="w-full md:w-1/2 aspect-[16/9] bg-surface/10 rounded-lg flex items-center justify-center border border-surface/20">
                      <span className="text-surface-light font-mono text-sm">
                        [Project Image]
                      </span>
                    </div>

                    {/* Project Info */}
                    <div className="w-full md:w-1/2 space-y-3">
                      <h2 className="text-4xl sm:text-5xl text-accent underline group-hover:italic group-hover:text-background">
                        {item.title}
                      </h2>
                      <p className="text-surface text-base">
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
