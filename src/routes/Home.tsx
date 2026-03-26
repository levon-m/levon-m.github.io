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
    '/voice': '/assets/images/voice_main.jpg',
    '/delivery-mayhem': '/assets/images/prisonisland_main.jpg',
  }), [])

  return (
    <div className="min-h-screen py-12 px-16 sm:px-24 lg:px-32">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <section className="mb-0">
          <h1 className="text-6xl sm:text-7xl font-normal text-surface mb-8">
            Hi, I'm Levon!
          </h1>

          <div className="flex flex-col md:flex-row gap-7 md:gap-5 md:items-center">
            {/* Bio */}
            <div className="text-surface space-y-4 text-base leading-relaxed flex-1 md:pr-6 lg:pr-10">
              <p>
                I'm an embedded software engineer based in Los Angeles, CA.
              </p>
              <p>
                I play bass guitar, produce electronic music, and build tools for making and performing music in a more expressive way. Currently, I'm exploring human-computer interaction, music information retrieval, and embedded ML for real-time systems. I love interdisciplinary work between engineering and creative practice, and I'm always trying to strike the perfect balance.
              </p>
              <p>
                I hold a BSc in Computer Science from Cal Poly San Luis Obispo, with some MSc-level coursework done during an exchange program at Chalmers University of Technology in Sweden. I am also an incoming MSc student in Sound and Music Computing at Universitat Pompeu Fabra's <a href="https://www.upf.edu/web/mtg" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Music Technology Group</a> in Barcelona, beginning Fall 2026.
              </p>
              <p>
                Since graduating in 2024, I've been building real-time embedded systems full-time at <a href="https://ckt.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">CK Technologies, Inc.</a> I've also done <a href="https://diversity.calpoly.edu/2024-beacon-research-symposium#Zahra%20Raste" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">undergraduate research</a> that evolved into the <a href="https://www.studiovoice.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">VOICE</a> non-profit, where I've been collaborating between both architects and software engineers, and exploring the relationship between social justice in modern media and urban design. I built an ML-based vocal anonymization feature of our work, and led the development of our <a href="https://my.matterport.com/show/?m=1huMtWKupqk&ss=427&sr=-.11,.78" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">interactive installation</a> for the <a href="https://timespaceexistence.com/participants/voice/" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">2025 Time Space Existence Biennale</a> in Venice. This led me to guest lecture for the audio portion of ARCH 498 at the University of Washington regarding our work.
              </p>
              <p>
                Take a look at my <Link to="/bookmarks" className="text-accent hover-slant">bookmarks</Link> for a collection of my favorite writing, media, tools, and other sources of inspiration. I'm always looking for new people to collaborate with, so don't hesitate to reach out!
              </p>

              {/* Links */}
              <div className="flex gap-3 pt-2 items-center">
                <a
                  href="/assets/Levon_Melkonyan_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover-slant"
                >
                  CV
                </a>
                <span className="text-surface">•</span>
                <a
                  href="https://github.com/levon-m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover-slant"
                >
                  GitHub
                </a>
                <span className="text-surface">•</span>
                <a
                  href="https://www.linkedin.com/in/levonmelkonyan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover-slant"
                >
                  LinkedIn
                </a>
                <span className="text-surface">•</span>
                <a
                  href="mailto:levon.melkonyan.cs@gmail.com"
                  className="text-accent hover-slant"
                >
                  Email
                </a>
              </div>
            </div>

            {/* Bio Image */}
            <div className="hidden md:block md:w-80 lg:w-[22rem] flex-shrink-0">
              <img
                src="/assets/images/bio.jpg"
                alt="Levon Melkonyan"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </section>

        <div className="my-10" aria-hidden="true" />

        {/* Projects Section */}
        <section className="space-y-7">
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
                className="block group no-underline max-w-[52rem] mx-auto"
              >
                <div className="relative bg-accent/10 rounded-2xl p-4 hover:bg-accent transition-none">
                  <div className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4 items-center`}>
                    {/* Project Image */}
                    <div className="w-full md:w-[37%] aspect-[4/3] rounded-lg overflow-hidden">
                      <img
                        src={imageSrc}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="w-full md:w-[63%] space-y-2.5">
                      <h2 className="text-4xl sm:text-5xl text-accent underline group-hover-slant group-hover:text-background">
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


