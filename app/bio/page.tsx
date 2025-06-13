import Link from 'next/link'

export default function Bio() {
  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-2xl mx-auto">
        <Link href="/hello" className="link text-xl mb-8 inline-block">
          ← back
        </Link>
        <div className="mt-8 space-y-6">
          <h1 className="text-3xl font-bold">bio</h1>
          <div className="prose prose-lg">
            <p>
              [Your bio content here]
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 