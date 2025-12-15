import { PageHeader } from '../components/common/SectionTitle'
import {
  categoryLabels,
  InspirationItem,
} from '../data/inspiration'

export default function LinksPage() {
  const categories = Object.keys(categoryLabels) as InspirationItem['category'][]

  return (
    <div className="min-h-screen py-12 px-8 sm:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <PageHeader
          title="Inspiration & Links"
          subtitle="Resources, artists, and tools that inspire my work"
          backTo="/"
          backLabel="Home"
        />

        {/* Intro */}
        <div className="mb-16 text-surface space-y-5 text-lg leading-relaxed">
          <p>
            A curated collection of the music, research, and tools that influence my
            projects. These range from artists who push musical boundaries to technical
            resources for audio DSP and embedded systems.
          </p>
        </div>

        {/* Categories */}
        {categories.map((category) => {
          return (
            <section
              key={category}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold text-surface mb-6">
                {categoryLabels[category]}
              </h2>
              <ul className="text-surface space-y-2 text-lg leading-relaxed list-disc pl-6">
                <li>[Link placeholder]</li>
                <li>[Link placeholder]</li>
                <li>[Link placeholder]</li>
              </ul>
            </section>
          )
        })}
      </div>
    </div>
  )
}
