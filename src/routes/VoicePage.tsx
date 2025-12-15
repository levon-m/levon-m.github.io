import { PageHeader } from '../components/common/SectionTitle'
import Card from '../components/common/Card'

export default function VoicePage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="VOICE"
          subtitle="Media, Privacy & Social Justice"
          backTo="/"
          backLabel="Home"
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8 opacity-0 animate-fade-in animate-delay-100">
          {['computer-vision', 'privacy', 'social-justice', 'python'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-surface rounded-full text-sm text-accent font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* What is VOICE */}
        <section className="mb-12 opacity-0 animate-slide-up animate-delay-200">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="font-mono text-gray-500">//</span> What is VOICE?
          </h2>
          <Card>
            <p className="text-gray-300 leading-relaxed">
              {/* CUSTOMIZE: Update with accurate project description */}
              VOICE is a media archiving and analysis platform designed to support lawyers,
              journalists, and activists working on social justice issues. The project provides
              tools for securely storing and processing video evidence from protests and
              public events, with a focus on protecting the privacy of individuals while
              preserving important documentation.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              The platform addresses the tension between the need to document events for
              accountability and the risk that such documentation can be used to identify
              and target participants. By combining computer vision with privacy-preserving
              techniques, VOICE enables researchers and advocates to work with sensitive
              media responsibly.
            </p>
          </Card>
        </section>

        {/* My Role */}
        <section className="mb-12 opacity-0 animate-slide-up animate-delay-300">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="font-mono text-gray-500">//</span> My Role
          </h2>
          <Card>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-accent font-mono mt-1">{'>'}</span>
                <span>
                  Built the computer vision pipeline using <strong className="text-white">OpenCV</strong> and{' '}
                  <strong className="text-white">YOLOv8</strong> for object detection and tracking
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-accent font-mono mt-1">{'>'}</span>
                <span>
                  Implemented automated <strong className="text-white">face detection and blurring</strong> to
                  protect identities while preserving contextual information
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-accent font-mono mt-1">{'>'}</span>
                <span>
                  Developed the backend infrastructure using <strong className="text-white">Flask</strong>,{' '}
                  <strong className="text-white">MongoDB</strong>, and <strong className="text-white">AWS S3</strong> for
                  secure media storage and retrieval
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-accent font-mono mt-1">{'>'}</span>
                <span>
                  Collaborated with lawyers and activists to align technical implementation with
                  ethical constraints and real-world needs
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-accent font-mono mt-1">{'>'}</span>
                <span>
                  Worked on mapping and visualization features to help researchers understand
                  spatial patterns in protest documentation
                </span>
              </li>
            </ul>
          </Card>
        </section>

        {/* Impact */}
        <section className="mb-12 opacity-0 animate-slide-up animate-delay-400">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="font-mono text-gray-500">//</span> Impact
          </h2>
          <Card>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-accent font-mono mt-1">{'>'}</span>
                <span>
                  Enables journalists and researchers to preserve documentation while
                  minimizing risk to individuals
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-accent font-mono mt-1">{'>'}</span>
                <span>
                  Supports legal teams in organizing and analyzing video evidence for
                  civil rights cases
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-accent font-mono mt-1">{'>'}</span>
                <span>
                  Contributes to the broader conversation about responsible technology
                  in social justice contexts
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-accent font-mono mt-1">{'>'}</span>
                <span>
                  Addresses misinformation by providing tools for verifying and
                  contextualizing media content
                </span>
              </li>
            </ul>
          </Card>
        </section>

        {/* Media Placeholder */}
        <section className="mb-12 opacity-0 animate-slide-up animate-delay-500">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="font-mono text-gray-500">//</span> Media
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* CUSTOMIZE: Replace with actual screenshots or diagrams */}
            <div className="aspect-video bg-surface rounded-lg border border-gray-800 flex items-center justify-center">
              <span className="text-gray-500 font-mono text-sm">
                [image: voice-interface.png]
              </span>
            </div>
            <div className="aspect-video bg-surface rounded-lg border border-gray-800 flex items-center justify-center">
              <span className="text-gray-500 font-mono text-sm">
                [diagram: system-architecture.png]
              </span>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12 opacity-0 animate-slide-up animate-delay-600">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="font-mono text-gray-500">//</span> Tech Stack
          </h2>
          <Card>
            <div className="flex flex-wrap gap-2">
              {[
                'Python',
                'OpenCV',
                'YOLOv8',
                'Flask',
                'MongoDB',
                'AWS S3',
                'Docker',
                'React',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-surface-dark rounded text-sm text-gray-300 border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </section>

        {/* Links */}
        <section className="opacity-0 animate-slide-up animate-delay-700">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="font-mono text-gray-500">//</span> Links
          </h2>
          <div className="flex flex-wrap gap-4">
            {/* CUSTOMIZE: Add actual project links */}
            <a
              href="https://example.com/voice-writeup"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline inline-flex items-center gap-2 px-4 py-2 bg-surface rounded-md text-gray-300 hover:text-white hover:bg-surface-light border border-gray-800 hover:border-gray-700 transition-colors"
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Read Write-up
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
