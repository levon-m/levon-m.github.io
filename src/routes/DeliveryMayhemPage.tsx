import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/common/SectionTitle'
import { getProjectBySlug } from '../data/projects'

export default function DeliveryMayhemPage() {
  const project = useMemo(() => getProjectBySlug('delivery-mayhem'), [])

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="min-h-screen py-12 px-12 sm:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <PageHeader
          title={project.name}
          subtitle="Co-op party game developed for Prison Island (Gothenburg, Sweden)"
          backTo="/"
          backLabel="Home"
        />

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
              During my exchange program at Chalmers University of Technology in Gothenburg, Sweden, I took a DAT375, a Master's-level Game Development course. The computer science department at Chalmers is very project-based, and for this course we got to work with a local escape room company, <a href="https://prisonisland.com/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Prison Island</a>. We got to learn about what makes for a fun gaming experience, especially in an escape room, where good teamwork and communication is the whole point.
            </p>
          </div>
        </section>

        {/* Separator */}
        <div className="flex justify-center my-12">
          <div className="w-1/3 h-px bg-surface/20"></div>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-surface mb-6">
            Overview
          </h2>
          <div className="text-surface space-y-5 text-lg leading-relaxed">
            <p>
              Our interpretation of an escape room was a course for a remote-controlled "car", that had to deliver food to various locations by "escaping" obstacles along its path. It is a two-player co-op game, where one player is blindfolded and has to navigate the car based only on the second player's communication and interaction with the game board. The car was built with an Arduino, with infrared sensors used for the controller. RFID sensors were placed in the game board and under the car for automated checkpoints, and an audio system was implemented for sound effects and background music. Finally, we had a large monitor to display instructions, the time remaining, and high scores for the player without the blindfold. Prison Island was very pleased with our concept and it was a ton of fun building it!
            </p>
          </div>
        </section>

        {/* Separator */}
        <div className="flex justify-center my-12">
          <div className="w-1/3 h-px bg-surface/20"></div>
        </div>

        {/* Photos */}
        <section>
          <h2 className="text-3xl font-bold text-surface mb-6">
            Photos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <img
              src="/assets/images/prisonisland3.jpg"
              alt="Prison Island game board"
              className="w-full rounded-lg"
            />
            <img
              src="/assets/images/prisonisland1.png"
              alt="Prison Island game components"
              className="w-full rounded-lg"
            />
            <img
              src="/assets/images/prisonisland4.png"
              alt="Prison Island gameplay"
              className="w-full rounded-lg"
            />
            <img
              src="/assets/images/prisonisland2.jpg"
              alt="Prison Island game setup"
              className="w-full rounded-lg"
            />
          </div>
        </section>

        {/* Separator */}
        <div className="flex justify-center my-12">
          <div className="w-1/3 h-px bg-surface/20"></div>
        </div>

        {/* Bottom Home Link */}
        <Link to="/" className="underline text-accent hover:italic text-lg inline-block">
          &lt;- Home
        </Link>
      </div>
    </div>
  )
}
