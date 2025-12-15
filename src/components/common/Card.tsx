import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'md',
}: CardProps) {
  return (
    <div
      className={`
        bg-surface rounded-lg border border-gray-800
        ${paddingClasses[padding]}
        ${hover ? 'card-hover hover:border-gray-700' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

// Specialized card for navigation items
interface NavCardProps {
  title: string
  subtitle: string
  to: string
  index?: number
}

export function NavCard({ title, subtitle, to, index = 0 }: NavCardProps) {
  return (
    <a
      href={to}
      className={`
        group block w-full bg-surface rounded-lg border border-gray-800 p-6
        card-hover hover:border-accent/50 focus-ring
        opacity-0 animate-slide-up
      `}
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'forwards' }}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors flex items-center gap-2">
            <span className="font-mono text-gray-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              {'>>'}
            </span>
            {title}
          </h3>
          <p className="mt-1 text-gray-400 text-sm">{subtitle}</p>
        </div>
        <div className="text-gray-600 group-hover:text-accent group-hover:translate-x-1 transition-all">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </a>
  )
}

// Card for external links
interface LinkCardProps {
  title: string
  description: string
  url: string
  category?: string
}

export function LinkCard({ title, description, url, category }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-surface rounded-lg border border-gray-800 p-5 card-hover hover:border-accent/50 focus-ring"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          {category && (
            <span className="inline-block text-xs font-mono text-accent mb-2 uppercase tracking-wide">
              {'//'} {category}
            </span>
          )}
          <h3 className="text-lg font-medium text-white group-hover:text-accent transition-colors truncate">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-400 line-clamp-2">{description}</p>
        </div>
        <div className="text-gray-500 group-hover:text-accent transition-colors flex-shrink-0">
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
        </div>
      </div>
    </a>
  )
}
