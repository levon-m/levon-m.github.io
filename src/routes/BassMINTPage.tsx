import { PageHeader } from '../components/common/SectionTitle'
import { getProjectBySlug } from '../data/projects'

export default function BassMINTPage() {
  const project = getProjectBySlug('bassmint')

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16">
        <PageHeader
          title={project.name}
          subtitle={project.shortDescription}
          backTo="/"
          backLabel="Home"
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8 opacity-0 animate-fade-in animate-delay-100">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-cream/50 text-surface text-sm rounded-full font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Overview */}
        <section className="mb-12 opacity-0 animate-slide-up animate-delay-200">
          <h2 className="text-xl font-semibold text-surface mb-4">
            Overview
          </h2>
          <div className="bg-accent/10 rounded-lg p-6">
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {project.fullDescription}
            </p>
          </div>
        </section>

        {/* Technical Highlights */}
        <section className="mb-12 opacity-0 animate-slide-up animate-delay-300">
          <h2 className="text-xl font-semibold text-surface mb-4">
            Technical Highlights
          </h2>
          <div className="bg-accent/10 rounded-lg p-6">
            <ul className="space-y-3">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="text-gray-300">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-12 opacity-0 animate-slide-up animate-delay-400">
          <h2 className="text-xl font-semibold text-surface mb-4">
            Use Cases
          </h2>
          <div className="bg-accent/10 rounded-lg p-6">
            <ul className="space-y-3">
              <li className="text-gray-300">
                <strong className="text-white">Scale Practice:</strong> Visual
                feedback shows which notes you're hitting and helps you navigate
                patterns across the fretboard
              </li>
              <li className="text-gray-300">
                <strong className="text-white">Fretboard Visualization:</strong>{' '}
                See your finger positions in real-time, helping build muscle
                memory for positions and intervals
              </li>
              <li className="text-gray-300">
                <strong className="text-white">Interactive Exercises:</strong>{' '}
                Gamified practice modes that make repetitive exercises more
                engaging
              </li>
              <li className="text-gray-300">
                <strong className="text-white">Technique Analysis:</strong> Track
                timing accuracy and note consistency to identify areas for
                improvement
              </li>
            </ul>
          </div>
        </section>

        {/* Media Placeholder */}
        <section className="mb-12 opacity-0 animate-slide-up animate-delay-500">
          <h2 className="text-xl font-semibold text-surface mb-4">
            Media
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* CUSTOMIZE: Replace with actual images */}
            <div className="aspect-video bg-surface rounded-lg border border-gray-800 flex items-center justify-center">
              <span className="text-gray-500 font-mono text-sm">
                [image: bassmint-app.png]
              </span>
            </div>
            <div className="aspect-video bg-surface rounded-lg border border-gray-800 flex items-center justify-center">
              <span className="text-gray-500 font-mono text-sm">
                [image: bassmint-sensors.jpg]
              </span>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12 opacity-0 animate-slide-up animate-delay-600">
          <h2 className="text-xl font-semibold text-surface mb-4">
            Tech Stack
          </h2>
          <div className="bg-accent/10 rounded-lg p-6">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-surface-dark rounded text-sm text-gray-300 border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="opacity-0 animate-slide-up animate-delay-700">
          <h2 className="text-xl font-semibold text-surface mb-4">
            Links
          </h2>
          <div className="flex flex-wrap gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline inline-flex items-center gap-2 px-4 py-2 bg-surface rounded-md text-gray-300 hover:text-white hover:bg-surface-light border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                View on GitHub
              </a>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
