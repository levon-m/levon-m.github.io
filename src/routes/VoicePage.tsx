import { PageHeader } from '../components/common/SectionTitle'

export default function VoicePage() {
  return (
    <div className="min-h-screen py-12 px-12 sm:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <PageHeader
          title="VOICE"
          backTo="/"
          backLabel="Home"
        />
        <div className="-mt-12 mb-12">
          <p className="text-xl text-surface leading-relaxed">
            Non-profit organization promoting social justice through digital media archiving and privacy protection
          </p>
          <a
            href="https://www.studiovoice.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-accent hover:italic text-xl"
          >
            Website
          </a>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-surface mb-6">
            Overview
          </h2>
          <div className="text-surface space-y-5 text-lg leading-relaxed">
            <p>
              Visual Outputs for Inclusive Change and Environments is a non-profit at the intersection of urban design and technology, aiming to promote social justice through digital media. We provide a way for securely processing and archiving media from protests and public events, with a focus on protecting the privacy of at-risk individuals like refugees and survivors of oppression and gender apartheid.
            </p>
          </div>
        </section>

        {/* Separator */}
        <div className="flex justify-center my-12">
          <div className="w-1/3 h-px bg-surface/20"></div>
        </div>

        {/* Background */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-surface mb-6">
            Background
          </h2>
          <div className="text-surface space-y-5 text-lg leading-relaxed">
            <p>
              I've been involved with this project since my time at Cal Poly, where it started out as a school-funded research project called "Mapping For Social Justice". Our idea was to allow users to upload media to a webpage, and to archive the location of the media on a <a href="https://www.mapbox.com/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">visual map</a>, letting other visitors browse and view this media. Privacy being our biggest concern, we focused on facial anonymization first by automatically applying <a href="https://en.wikipedia.org/wiki/Gaussian_blur" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Gaussian blur</a> with <a href="https://opencv.org/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">OpenCV</a> and <a href="https://yolov8.com/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">YOLOv8</a> upon user upload. It was a joint collaboration between the computer science and architecture departments, where we initially wanted to use tools that aren't too technical like <a href="https://situ.nyc/research/projects/codec-collaborative-tool" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Codec</a> to do the mapping, but realized having our own open-source platform would streamline the whole process. Research was also done on automatically mapping the locations of media with its extracted metadata, but this didn't prove too feasible for the time being. Manual mapping works just fine, but we are still looking into ways to at least partially automate the process.
            </p>
          </div>
        </section>

        {/* Separator */}
        <div className="flex justify-center my-12">
          <div className="w-1/3 h-px bg-surface/20"></div>
        </div>

        {/* Current Work */}
        <section>
          <h2 className="text-3xl font-bold text-surface mb-6">
            Current Work
          </h2>
          <div className="text-surface space-y-5 text-lg leading-relaxed">
            <p>
              After I graduated, we established VOICE as a non-profit. Since, I've been working part-time on leading the new vocal anonymization portion, some help on the backend of the platform, and securing funding for our efforts. One of our biggest wins for visibility was our installation at the 2025 <a href="https://timespaceexistence.com/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Time Space Existence Biennale</a> in Venice, where I added an ESP32 and motion sensors to control a motor that scrolls through our display when someone approaches it. Additionally, I am a guest lecturer for a course about our work at the <a href="https://www.washington.edu/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">University of Washington</a>, where our founder now teaches.
            </p>
            <p>
              Pictures and sound carry people's stories, and ensuring the right to share them in our modern world is key to a democratic society. We are actively looking for funding donations, so if this work is something that excites you, feel free to reach out!
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
