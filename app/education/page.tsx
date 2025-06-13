import Link from 'next/link'

export default function Education() {
  return (
    <main className="min-h-screen p-8 md:p-16">
      <div className="max-w-2xl mx-auto">
        <Link href="/hello" className="link text-xl mb-8 inline-block">
          <span>← back</span>
        </Link>
        <div className="mt-8 space-y-6">
          <h1 className="text-3xl font-bold">education</h1>
          <div className="space-y-8">
            {/* Education items will go here */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold">[University Name]</h2>
                  <p className="text-gray-600">[Degree]</p>
                </div>
                <p className="text-gray-600">[Years]</p>
              </div>
              <p className="mt-2">[Additional details or achievements]</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 