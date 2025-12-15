import { ReactNode } from 'react'

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
      {subtitle && <p className="mt-2 text-gray-400 max-w-2xl">{subtitle}</p>}
    </div>
  )
}

// Page header component with back button
interface PageHeaderProps {
  title: string
  subtitle?: string
  backTo?: string
  backLabel?: string
}

export function PageHeader({
  title,
  subtitle,
  backTo = '/',
  backLabel = 'Back',
}: PageHeaderProps) {
  return (
    <div className="mb-12">
      <a
        href={backTo}
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors mb-6 group"
      >
        <svg
          className="h-4 w-4 group-hover:-translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span className="font-mono">{backLabel}</span>
      </a>
      <SectionTitle as="h1" subtitle={subtitle}>
        {title}
      </SectionTitle>
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
