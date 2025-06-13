import Link from 'next/link'

export default function Projects() {
  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-2xl mx-auto">
        <Link href="/hello" className="link text-xl mb-8 inline-block">
          ← back
        </Link>
        <div className="mt-8 space-y-6">
          <h1 className="text-3xl font-bold">personal projects</h1>
          <div className="space-y-8">
            {/* Project items will go here */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-bold">[Project Name]</h2>
              <p className="mt-2">[Project Description]</p>
              <div className="mt-2">
                <Link href="#" className="link">
                  [Project Link]
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 