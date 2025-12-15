import { PageHeader } from '../components/common/SectionTitle'
import Card from '../components/common/Card'

export default function ResumePage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Resume"
          subtitle="Experience, skills, and education"
          backTo="/"
          backLabel="Home"
        />

        {/* Intro */}
        <div className="mb-8 opacity-0 animate-slide-up animate-delay-100">
          <Card>
            <p className="text-gray-300 leading-relaxed">
              {/* CUSTOMIZE: Write your own intro */}
              I'm an embedded systems and audio software engineer with a passion for
              building tools at the intersection of music and technology. My background
              spans real-time audio processing, hardware design, and interactive
              experiences. I'm particularly interested in projects that make creative
              workflows more intuitive and engaging.
            </p>
          </Card>
        </div>

        {/* Download Button */}
        <div className="mb-12 opacity-0 animate-slide-up animate-delay-200">
          <a
            href="/assets/Levon_Melkonyan_Resume.pdf"
            download
            className="inline-flex items-center gap-3 px-6 py-4 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-dark transition-colors"
          >
            <svg
              className="h-6 w-6"
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
            Download Resume (PDF)
          </a>
          <p className="mt-2 text-sm text-gray-500">
            {/* CUSTOMIZE: Update path to your actual resume */}
            Place your resume at: <code className="text-accent">/public/assets/Levon_Melkonyan_Resume.pdf</code>
          </p>
        </div>

        {/* PDF Embed */}
        <div className="mb-12 opacity-0 animate-slide-up animate-delay-300">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="font-mono text-gray-500">//</span> Preview
          </h2>
          <div className="bg-surface rounded-lg border border-gray-800 overflow-hidden">
            {/* PDF Viewer - will work once you add the actual PDF */}
            <div className="aspect-[8.5/11] bg-surface-dark flex items-center justify-center">
              <div className="text-center p-8">
                <svg
                  className="h-16 w-16 text-gray-600 mx-auto mb-4"
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
                <p className="text-gray-500 font-mono text-sm mb-4">
                  [PDF preview will appear here]
                </p>
                <p className="text-gray-600 text-sm">
                  Add your resume PDF to enable the embedded viewer
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

        {/* Quick Skills Overview */}
        <div className="opacity-0 animate-slide-up animate-delay-400">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="font-mono text-gray-500">//</span> Skills at a Glance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* CUSTOMIZE: Update with your actual skills */}
            <Card padding="sm">
              <h3 className="font-medium text-white mb-2">Languages</h3>
              <div className="flex flex-wrap gap-1">
                {['C/C++', 'Python', 'TypeScript', 'Rust'].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 bg-surface-dark rounded text-xs text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card padding="sm">
              <h3 className="font-medium text-white mb-2">Audio/DSP</h3>
              <div className="flex flex-wrap gap-1">
                {['JUCE', 'Teensy Audio', 'SuperCollider', 'FFT'].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 bg-surface-dark rounded text-xs text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card padding="sm">
              <h3 className="font-medium text-white mb-2">Embedded</h3>
              <div className="flex flex-wrap gap-1">
                {['Teensy', 'Arduino', 'ESP32', 'STM32'].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 bg-surface-dark rounded text-xs text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card padding="sm">
              <h3 className="font-medium text-white mb-2">Web/App</h3>
              <div className="flex flex-wrap gap-1">
                {['React', 'Node.js', 'Flask', 'PostgreSQL'].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 bg-surface-dark rounded text-xs text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card padding="sm">
              <h3 className="font-medium text-white mb-2">Tools</h3>
              <div className="flex flex-wrap gap-1">
                {['Git', 'Docker', 'AWS', 'KiCad'].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 bg-surface-dark rounded text-xs text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card padding="sm">
              <h3 className="font-medium text-white mb-2">Other</h3>
              <div className="flex flex-wrap gap-1">
                {['OpenCV', 'MIDI', 'Audio Hardware', 'UX Design'].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 bg-surface-dark rounded text-xs text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
