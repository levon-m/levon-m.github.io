import './globals.css'
import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
} 