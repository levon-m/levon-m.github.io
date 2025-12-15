import Link from 'next/link'

export default function Home() {
  const links = [
    { href: '/bio', text: 'bio' },
    { href: '/projects', text: 'personal projects' },
    { href: '/experience', text: 'work experience' },
    { href: '/education', text: 'education' },
    { href: '/contact', text: 'contact' },
    { href: '/cv.pdf', text: 'download cv' },
  ]

  return (
    <main className="min-h-screen flex items-center">
      <div className="max-w-2xl p-16 space-y-12 ml-[5%]">
        <h1 className="text-5xl name">Levon Melkonyan</h1>
        {links.map((link) => (
          <div key={link.href} className="text-xl">
            <span className="mr-2">•</span>
            <Link href={link.href} className="link">
              <span>{link.text}</span>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
} 