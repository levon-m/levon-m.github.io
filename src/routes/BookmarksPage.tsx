import { Link } from 'react-router-dom'
import { PageHeader } from '../components/common/SectionTitle'
import {
  categoryLabels,
  InspirationItem,
} from '../data/inspiration'

export default function LinksPage() {
  const categories = Object.keys(categoryLabels) as InspirationItem['category'][]

  return (
    <div className="min-h-screen py-12 px-12 sm:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <PageHeader
          title="Bookmarks"
          subtitle="Resources, artists, and tools that inspire my work"
          backTo="/"
          backLabel="Home"
        />

        {/* Separator */}
        <div className="flex justify-center my-12">
          <div className="w-1/3 h-px bg-surface/20"></div>
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

        {/* Separator */}
        <div className="flex justify-center my-12">
          <div className="w-1/3 h-px bg-surface/20"></div>
        </div>

        {/* Bottom Home Link */}
        <Link to="/" className="text-surface hover:text-accent inline-block">
          ← Home
        </Link>
      </div>
    </div>
  )
}
