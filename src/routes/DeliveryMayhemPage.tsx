import { PageHeader } from '../components/common/SectionTitle'
import { getProjectBySlug } from '../data/projects'

export default function DeliveryMayhemPage() {
  const project = getProjectBySlug('delivery-mayhem')

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16">
        <PageHeader
          title={project.name}
          subtitle="Interactive Escape Room Experience"
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

        {/* My Contribution */}
        <section className="mb-12 opacity-0 animate-slide-up animate-delay-300">
          <h2 className="text-xl font-semibold text-surface mb-4">
            My Contribution
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

        {/* Media Placeholder */}
        <section className="mb-12 opacity-0 animate-slide-up animate-delay-400">
          <h2 className="text-xl font-semibold text-surface mb-4">
            Media
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* CUSTOMIZE: Replace with actual images */}
            <div className="aspect-video bg-surface rounded-lg border border-gray-800 flex items-center justify-center">
              <span className="text-gray-500 font-mono text-sm">
                [image: prison-island-puzzle.jpg]
              </span>
            </div>
            <div className="aspect-video bg-surface rounded-lg border border-gray-800 flex items-center justify-center">
              <span className="text-gray-500 font-mono text-sm">
                [image: prison-island-room.jpg]
              </span>
            </div>
          </div>
        </section>

        {/* What I Learned */}
        <section className="mb-12 opacity-0 animate-slide-up animate-delay-500">
          <h2 className="text-xl font-semibold text-surface mb-4">
            What I Learned
          </h2>
          <div className="bg-accent/10 rounded-lg p-6">
            <ul className="space-y-3">
              <li className="text-gray-300">
                <strong className="text-white">Cross-cultural collaboration:</strong> Working
                with an international team brought diverse perspectives and creative approaches
                to problem-solving
              </li>
              <li className="text-gray-300">
                <strong className="text-white">Rapid prototyping:</strong> Under tight deadlines,
                learned to quickly iterate on ideas and test with real users
              </li>
              <li className="text-gray-300">
                <strong className="text-white">Physical-digital integration:</strong> Bridging
                hardware props with software systems requires careful attention to timing and
                feedback
              </li>
              <li className="text-gray-300">
                <strong className="text-white">UX for experiences:</strong> Designing for
                immersive experiences is different from traditional interfaces—the environment
                is part of the interface
              </li>
              <li className="text-gray-300">
                <strong className="text-white">Narrative design:</strong> Story and gameplay
                need to reinforce each other; neither can be an afterthought
              </li>
            </ul>
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
        {project.links.article && (
          <section className="opacity-0 animate-slide-up animate-delay-700">
            <h2 className="text-xl font-semibold text-surface mb-4">
              Links
            </h2>
            <div className="flex flex-wrap gap-4">
              <a
                href={project.links.article}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline inline-flex items-center gap-2 px-4 py-2 bg-surface rounded-md text-gray-300 hover:text-white hover:bg-surface-light border border-gray-800 hover:border-gray-700 transition-colors"
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Read Full Write-up
              </a>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
