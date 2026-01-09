import { PageHeader } from '../components/common/SectionTitle'

export default function VoicePage() {
  return (
    <div className="min-h-screen py-12 px-12 sm:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <PageHeader
          title="VOICE"
          subtitle="Non-profit organization building media archiving & privacy tools for activists"
          backTo="/"
          backLabel="Home"
        />

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-surface mb-6">
            Overview
          </h2>
          <div className="text-surface space-y-5 text-lg leading-relaxed">
            <p>
              VOICE is a media archiving and analysis platform designed to support lawyers,
              journalists, and activists working on social justice issues. The project provides
              tools for securely storing and processing video evidence from protests and
              public events, with a focus on protecting the privacy of individuals while
              preserving important documentation.
            </p>
            <p>
              The platform addresses the tension between the need to document events for
              accountability and the risk that such documentation can be used to identify
              and target participants. By combining computer vision with privacy-preserving
              techniques, VOICE enables researchers and advocates to work with sensitive
              media responsibly.
            </p>
            <ul className="space-y-3 list-disc pl-6">
              <li>Built the computer vision pipeline using OpenCV and YOLOv8 for object detection and tracking</li>
              <li>Implemented automated face detection and blurring to protect identities while preserving contextual information</li>
              <li>Developed the backend infrastructure using Flask, MongoDB, and AWS S3 for secure media storage and retrieval</li>
              <li>Collaborated with lawyers and activists to align technical implementation with ethical constraints and real-world needs</li>
              <li>Worked on mapping and visualization features to help researchers understand spatial patterns in protest documentation</li>
            </ul>
          </div>
        </section>

        {/* Separator */}
        <div className="flex justify-center my-20">
          <div className="w-1/3 h-px bg-surface/20"></div>
        </div>

        {/* Media */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-surface mb-6">
            Media
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="aspect-video bg-surface/10 rounded-lg flex items-center justify-center border border-surface/20">
              <span className="text-surface-light font-mono text-sm">
                [image: voice-interface.png]
              </span>
            </div>
            <div className="aspect-video bg-surface/10 rounded-lg flex items-center justify-center border border-surface/20">
              <span className="text-surface-light font-mono text-sm">
                [diagram: system-architecture.png]
              </span>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="flex justify-center my-20">
          <div className="w-1/3 h-px bg-surface/20"></div>
        </div>

        {/* Links */}
        <section>
          <h2 className="text-3xl font-bold text-surface mb-6">
            Links
          </h2>
          <div className="flex flex-wrap gap-3 items-center">
            <a
              href="https://example.com/voice-writeup"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-accent hover:italic"
            >
              Write-up
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
