import { PageHeader } from '../components/common/SectionTitle'

export default function ResumePage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Resume"
          subtitle="Experience, skills, and education"
          backTo="/"
          backLabel="Home"
        />

        {/* PDF Preview */}
        <div className="mb-8 opacity-0 animate-slide-up animate-delay-100">
          <div className="bg-cream rounded-lg border border-peach/30 overflow-hidden">
            <div className="aspect-[8.5/11] bg-white flex items-center justify-center">
              <div className="text-center p-8">
                <svg
                  className="h-16 w-16 text-surface-light mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <p className="text-surface font-mono text-sm mb-2">
                  [PDF preview will appear here]
                </p>
                <p className="text-surface-light text-sm">
                  Place your resume at: <code className="text-accent">/public/assets/Levon_Melkonyan_Resume.pdf</code>
                </p>
              </div>
            </div>
            {/* Uncomment this once you have a PDF */}
            {/*
            <iframe
              src="/assets/Levon_Melkonyan_Resume.pdf"
              className="w-full aspect-[8.5/11]"
              title="Resume PDF"
            />
            */}
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center opacity-0 animate-slide-up animate-delay-200">
          <a
            href="/assets/Levon_Melkonyan_Resume.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-background font-medium rounded-lg hover:italic hover:bg-accent-dark transition-all"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download PDF
          </a>
        </div>
      </div>
    </div>
  )
}
