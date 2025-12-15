import { PageHeader } from '../components/common/SectionTitle'
import {
  categoryLabels,
  InspirationItem,
} from '../data/inspiration'

export default function LinksPage() {
  // Group items by category
  const categories = Object.keys(categoryLabels) as InspirationItem['category'][]

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16">
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
          return (
            <section
              key={category}
              className={`mb-12 opacity-0 animate-slide-up`}
              style={{
                animationDelay: `${100 + categoryIndex * 100}ms`,
                animationFillMode: 'forwards',
              }}
            >
              <h2 className="text-xl font-semibold text-surface mb-6">
                {categoryLabels[category]}
              </h2>
              <div className="bg-accent/10 rounded-lg p-6">
                <ul className="space-y-2">
                  <li className="text-gray-300">[Link placeholder]</li>
                  <li className="text-gray-300">[Link placeholder]</li>
                  <li className="text-gray-300">[Link placeholder]</li>
                </ul>
              </div>
            </section>
          )
        })}

        {/* Add Your Own */}
        <section className="mt-16 pt-8 border-t border-gray-800">
          <div className="text-center">
            <a
              href="/contact"
              className="text-accent transition-colors"
            >
              Send me a recommendation →
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
