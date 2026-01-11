import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { homeNavItems } from '../data/projects'

export default function Home() {
  const projectTags: Record<string, string[]> = useMemo(() => ({
    '/microloop': ['C++17', 'Teensy 4.1', 'DSP', 'RTOS'],
    '/bassmint': ['C++17', 'Teensy 4.0', 'DSP', 'JUCE'],
    '/voice': ['C++', 'ESP32', 'Python', 'OpenCV', 'PyTorch'],
    '/delivery-mayhem': ['C++', 'Arduino'],
  }), [])

  const projectImages: Record<string, string> = useMemo(() => ({
    '/microloop': '/assets/images/microloop_main.JPG',
    '/bassmint': '/assets/images/bassmint_main.JPG',
    '/voice': '/assets/images/voice_main.png',
    '/delivery-mayhem': '/assets/images/prisonisland_main.jpg',
  }), [])

  return (
    <div className="min-h-screen py-12 px-16 sm:px-24 lg:px-32">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <section className="mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-surface mb-8">
            Hi,
          </h1>

          <div className="flex flex-col md:flex-row gap-8 md:gap-6 items-start">
            {/* Bio */}
            <div className="text-surface space-y-5 text-base leading-relaxed flex-1">
              <p>
                My name is <span className="font-bold">Levon</span>, and I'm an embedded software developer based in Los Angeles, CA.
              </p>
              <p>
                In my free time, I play bass guitar, produce electronic music, and explore the intersection of sound, hardware, and user interaction. I believe the best tools come from keeping a precise balance between creativity and engineering, and equally nurturing both is very important to me.
              </p>
              <p>
                I hold a Bachelor's in Computer Science from <a href="https://www.calpoly.edu/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Cal Poly SLO</a>, with additional Master's-level coursework completed during an exchange program at <a href="https://www.chalmers.se/en/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Chalmers University of Technology</a> in Sweden.
              </p>
              <p>
                Since graduating in 2024, I've been building real-time aerospace systems full-time at <a href="https://ckt.com/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">CK Technologies, Inc.</a> I've also been involved with non-profit work at <a href="https://www.studiovoice.org/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">VOICE</a> since college, including building a physical installation for the 2025 <a href="https://timespaceexistence.com/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Time Space Existence Biennale</a> in Venice, and guest lecturing for a course at the <a href="https://www.washington.edu/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">University of Washington</a> about our work.
              </p>
              <p>
                Take a look at my <Link to="/bookmarks" className="underline text-accent hover:italic">bookmarks</Link> for a collection of my favorite mixed media and other sources of inspiration. I'm always open to new opportunities and collaborations, so don't hesitate to reach out!
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
            <div className="w-full md:w-96 self-stretch bg-surface/10 rounded-2xl flex items-center justify-center border border-surface/20 flex-shrink-0">
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
          <h2 className="text-3xl font-bold text-surface">
            Projects, Research, & Collaborations
          </h2>
          {homeNavItems.map((item, index) => {
            const isImageLeft = index % 2 === 0
            const tags = projectTags[item.to] || []
            const imageSrc = projectImages[item.to]

            // Skip the Bookmarks page from projects
            if (item.to === '/bookmarks') {
              return null
            }

            return (
              <Link
                key={item.to}
                to={item.to}
                className="block group no-underline max-w-4xl mx-auto"
              >
                <div className="relative bg-accent/10 rounded-2xl p-5 hover:bg-accent transition-none">
                  <div className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-5 items-center`}>
                    {/* Project Image */}
                    <div className="w-full md:w-2/5 aspect-[4/3] rounded-lg overflow-hidden">
                      <img
                        src={imageSrc}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="w-full md:w-3/5 space-y-3">
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
