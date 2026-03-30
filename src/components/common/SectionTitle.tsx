import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface SectionTitleProps {
  children: ReactNode
  subtitle?: string
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}

export default function SectionTitle({
  children,
  subtitle,
  className = '',
  as: Tag = 'h2',
}: SectionTitleProps) {
  const sizeClasses = {
    h1: 'text-4xl sm:text-5xl',
    h2: 'text-2xl sm:text-3xl',
    h3: 'text-xl sm:text-2xl',
  }

  return (
    <div className={`mb-8 ${className}`}>
      <Tag className={`font-bold text-surface ${sizeClasses[Tag]}`}>{children}</Tag>
      {subtitle && <p className="mt-2 text-surface max-w-2xl">{subtitle}</p>}
    </div>
  )
}

// Page header component with back button
interface PageHeaderProps {
  title: string
  subtitle?: string
  backTo?: string
  backLabel?: string
  titleHref?: string
}

export function PageHeader({
  title,
  subtitle,
  backTo = '/',
  backLabel = 'Back',
  titleHref,
}: PageHeaderProps) {
  const linkedTitle = titleHref && titleHref.includes('github.com')
    ? `${title} on GitHub`
    : title

  return (
    <div className="mb-0">
      <Link
        to={backTo}
        className="text-accent hover-slant text-lg mb-8 inline-block"
      >
        &lt;- {backLabel}
      </Link>
      <h1 className="text-6xl sm:text-7xl font-normal text-surface mb-4">
        {titleHref ? (
          <a
            href={titleHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover-slant"
          >
            {linkedTitle}
          </a>
        ) : (
          title
        )}
      </h1>
      {subtitle && <p className="text-surface text-lg leading-relaxed">{subtitle}</p>}
    </div>
  )
}

// ASCII-style divider
export function AsciiDivider({ className = '' }: { className?: string }) {
  return (
    <div
      className={`font-mono text-gray-700 text-sm select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {'// ' + '─'.repeat(60)}
    </div>
  )
}


