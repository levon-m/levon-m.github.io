import Link from 'next/link'

export default function Contact() {
  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-2xl mx-auto">
        <Link href="/hello" className="link text-xl mb-8 inline-block">
          ← back
        </Link>
        <div className="mt-8 space-y-6">
          <h1 className="text-3xl font-bold">contact</h1>
          <div className="space-y-4">
            <div className="border-t border-gray-200 pt-6">
              <p className="text-lg">
                email: <Link href="mailto:your.email@example.com" className="link">your.email@example.com</Link>
              </p>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <p className="text-lg">
                linkedin: <Link href="https://linkedin.com/in/your-profile" className="link" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-profile</Link>
              </p>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <p className="text-lg">
                github: <Link href="https://github.com/your-username" className="link" target="_blank" rel="noopener noreferrer">github.com/your-username</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 