import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Levon Melkonyan',
  description: 'Personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="fixed top-4 left-4">
          <Link href="/hello" className="back-button">
            <span>← back</span>
          </Link>
        </div>
        {children}
      </body>
    </html>
  )
} 