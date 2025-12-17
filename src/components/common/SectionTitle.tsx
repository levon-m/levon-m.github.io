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
}

export function PageHeader({
  title,
  subtitle,
  backTo = '/',
  backLabel = 'Back',
}: PageHeaderProps) {
  return (
    <div className="mb-16">
      <a
        href={backTo}
        className="underline text-accent hover:italic text-lg mb-8 inline-block"
      >
        &lt;- {backLabel}
      </a>
      <h1 className="text-5xl sm:text-6xl font-bold text-surface mb-4">
        {title}
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
