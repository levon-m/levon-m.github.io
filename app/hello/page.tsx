import Link from 'next/link'

export default function Home() {
  const links = [
    { href: '/bio', text: 'bio' },
    { href: '/projects', text: 'personal projects' },
    { href: '/experience', text: 'work experience' },
    { href: '/education', text: 'education' },
    { href: '/contact', text: 'contact' },
    { href: '/music', text: 'music' },
    { href: '/cv.pdf', text: 'download cv' },
  ]

  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-2xl mx-auto space-y-8">
        {links.map((link) => (
          <div key={link.href} className="text-xl">
            <Link href={link.href} className="link">
              {link.text}
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
} 