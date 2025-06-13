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
      <div className="max-w-2xl space-y-8">
        <h1 className="text-2xl font-bold mb-8">Levon Melkonyan</h1>
        {links.map((link) => (
          <div key={link.href} className="text-xl">
            <Link href={link.href} className="link">
              <span>{link.text}</span>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
} 