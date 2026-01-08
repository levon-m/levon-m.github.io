import { useMemo } from 'react'
import { PageHeader } from '../components/common/SectionTitle'
import { getProjectBySlug } from '../data/projects'

export default function DeliveryMayhemPage() {
  const project = useMemo(() => getProjectBySlug('delivery-mayhem'), [])

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="min-h-screen py-12 px-12 sm:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <PageHeader
          title={project.name}
          subtitle="Co-op party game developed for Prison Island (Gothenburg, Sweden)"
          backTo="/"
          backLabel="Home"
        />

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-surface mb-6">
            Overview
          </h2>
          <div className="text-surface space-y-5 text-lg leading-relaxed">
            <p>
              {project.fullDescription}
            </p>
            <ul className="space-y-3 list-disc pl-6">
              {project.highlights.map((highlight, index) => (
                <li key={index}>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Media */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-surface mb-6">
            Media
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="aspect-video bg-surface/10 rounded-lg flex items-center justify-center border border-surface/20">
              <span className="text-surface-light font-mono text-sm">
                [image: delivery-mayhem-1.jpg]
              </span>
            </div>
            <div className="aspect-video bg-surface/10 rounded-lg flex items-center justify-center border border-surface/20">
              <span className="text-surface-light font-mono text-sm">
                [image: delivery-mayhem-2.jpg]
              </span>
            </div>
          </div>
        </section>

        {/* Links */}
        <section>
          <h2 className="text-2xl font-bold text-surface mb-6">
            Links
          </h2>
          <div className="flex flex-wrap gap-3 items-center">
            {project.links.article && (
              <a
                href={project.links.article}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-accent hover:italic"
              >
                Write-up
              </a>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
