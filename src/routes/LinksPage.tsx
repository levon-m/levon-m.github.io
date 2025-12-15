import { PageHeader } from '../components/common/SectionTitle'
import { LinkCard } from '../components/common/Card'
import {
  inspirationItems,
  categoryLabels,
  InspirationItem,
} from '../data/inspiration'

export default function LinksPage() {
  // Group items by category
  const categories = Object.keys(categoryLabels) as InspirationItem['category'][]

  const groupedItems = categories.reduce((acc, category) => {
    acc[category] = inspirationItems.filter((item) => item.category === category)
    return acc
  }, {} as Record<InspirationItem['category'], InspirationItem[]>)

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Inspiration & Links"
          subtitle="Resources, artists, and tools that inspire my work"
          backTo="/"
          backLabel="Home"
        />

        {/* Intro */}
        <div className="mb-12 opacity-0 animate-fade-in">
          <p className="text-gray-400 max-w-2xl">
            A curated collection of the music, research, and tools that influence my
            projects. These range from artists who push musical boundaries to technical
            resources for audio DSP and embedded systems.
          </p>
        </div>

        {/* Categories */}
        {categories.map((category, categoryIndex) => {
          const items = groupedItems[category]
          if (items.length === 0) return null

          return (
            <section
              key={category}
              className={`mb-12 opacity-0 animate-slide-up`}
              style={{
                animationDelay: `${100 + categoryIndex * 100}ms`,
                animationFillMode: 'forwards',
              }}
            >
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="font-mono text-gray-500">//</span>{' '}
                {categoryLabels[category]}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {items.map((item) => (
                  <LinkCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                  />
                ))}
              </div>
            </section>
          )
        })}

        {/* Add Your Own */}
        <section className="mt-16 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-500 font-mono text-sm mb-2">
              {'// want to suggest something?'}
            </p>
            <a
              href="/contact"
              className="text-accent hover:text-accent-light transition-colors"
            >
              Send me a recommendation →
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
