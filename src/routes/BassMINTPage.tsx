import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/common/SectionTitle'
import { getProjectBySlug } from '../data/projects'

export default function BassMINTPage() {
  const project = useMemo(() => getProjectBySlug('bassmint'), [])

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="min-h-screen py-12 px-12 sm:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <PageHeader
          title={project.name}
          backTo="/"
          backLabel="Home"
        />
        <div className="-mt-12 mb-12">
          <p className="text-xl text-surface leading-relaxed">
            Bridge-mounted optical sensor device that streams real-time tablature over MIDI
          </p>
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-accent hover:italic text-xl"
            >
              GitHub
            </a>
          )}
        </div>

        {/* Separator */}
        <div className="flex justify-center my-12">
          <div className="w-1/3 h-px bg-surface/20"></div>
        </div>

        {/* Background */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-surface mb-6">
            Background
          </h2>
          <div className="text-surface space-y-5 text-base leading-relaxed">
            <p>
              Bass (M)ount for (I)nfrared (N)ote (T)ranscription is a device built with the Teensy 4.0 that slides onto your bass guitar bridge and streams the string/fret played (monophonically) in real time via MIDI. This information can be utilized by software like DAW plugins to create practice, transcription, or education tools. The device currently only supports 4-string bass guitars with the Fender Jazz-style bridge, with up to 24 frets.
            </p>
            <p>
              Pitch is a surprisingly human concept, and as it turns out, computers tend to struggle with it, especially on instruments where real-world edge cases are introduced (like attack transients, inharmonicity, or just having poor fretting form). Even with lots of similar tools that include pitch detection for analog waveforms, pitch detection is far from perfect, and always includes some sort of trade-offs, usually between latency and accuracy. A waveform from an instrument will never be perfect, and will include all kinds of noise and harmonics that muddy the fundamental frequency, and other inconsistencies that make life difficult for the algorithm. This is especially true in the case of stringed instruments like a guitar or bass, where the same pitch can be played on multiple parts of the fretboard. Many similar transcription or visualization tools don't really address this fact, either disregarding it without any visualization, or visualizing a single note played in multiple different places on the fretboard. This, of course, isn't ideal for the user. Especially if the user is a beginner, intuitive visualization is critical for successful practice or learning.
            </p>
          </div>
        </section>

        {/* Separator */}
        <div className="flex justify-center my-12">
          <div className="w-1/3 h-px bg-surface/20"></div>
        </div>

        {/* Development */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-surface mb-6">
            Development
          </h2>
          <div className="text-surface space-y-5 text-base leading-relaxed">
            <p>
              I tried several different approaches to this problem. Conceptually, making this work with only the audio waveform is the ideal scenario. But how can an algorithm differentiate between two waveforms with the same frequency? We as people can obviously see that these notes are played on different frets and strings, and also have slightly different sound qualities. While the frequency, assuming the instrument is perfectly tuned and intonated, is the exact same, these different "qualities" of the sound, called timbre, can be further analyzed. This led me to a machine learning approach, where a model would be trained on a dataset (<a href="https://www.idmt.fraunhofer.de/en/publications/datasets/bass.html" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">IDMT-SMT-BASS</a>) of single notes played, and the upper harmonics, which are the higher-frequency partials above the fundamental frequency (the lowest frequency component associated with the perceived pitch), are compared for similarities. Either the dataset was too limited, or the timbral qualities were inconsistent due to human error in playing, but this approach yielded pretty low accuracy. This approach has been tried and tested by others, but I just wasn't able to get reliable results. In the future I will definitely revisit this approach and try again from a different angle.
            </p>
            <p>
              Eventually, I settled on a physical device. The idea was that the device would slide on and grasp onto the bass bridge, where a user could easily mount it, and would detect the string and fret in a two-phase system. Each string would have its own infrared photodiode and LED, with the string in between them, making a break-beam optical light path that uses the string's shadow/displacement to modulate a continuous signal. This would allow for individual string detection with envelope followers, which already greatly reduces the work that the pitch detector has to do with a much more narrow frequency range. With support for up to a 24-fret bass, it reduces the possible octaves of a note down to just two. After the string is detected, the actual pitch detection is run. One of the benefits of using OPT101 photodiode-amplifier sensors is that the break-beam optical waveform is clean enough to actually run the pitch algorithms on. Initially, I went with a piezoelectric vibration approach, but this proved to not be viable in an easy-to-mount scenario for the user (they had a severe lack of preload, and could not make solid enough contact with the bridge). The system uses the NSDF (Normalized Square Difference Function) to detect the frequency, but searches for peaks in two separate lag ranges (frets 0-11 and 12-24), since bass harmonics often cause octave confusion. A Bayesian filter tracks which octave is being played by combining the strength of peaks in each band with weighted hand-span coefficients that penalize physically unlikely fret jumps in a short amount of time (like jumping 15 frets in one note). This approach goes beyond simple pitch detection by adding classification as well, and tries to address the octave ambiguity problem instead of just picking the strongest peak.
            </p>

            <img
              src="/assets/images/bassmint2.JPG"
              alt="BassMINT development"
              className="w-2/3 mx-auto rounded-lg"
            />

            <img
              src="/assets/images/bassmint4.JPG"
              alt="BassMINT hardware"
              className="w-2/3 mx-auto rounded-lg"
            />
          </div>
        </section>

        {/* Separator */}
        <div className="flex justify-center my-12">
          <div className="w-1/3 h-px bg-surface/20"></div>
        </div>

        {/* Future Work */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-surface mb-6">
            Future Work
          </h2>
          <div className="text-surface space-y-5 text-base leading-relaxed">
            <p>
              Of course, this still isn't a perfect solution. One of the biggest hurdles I ran into is that this is much more of a mechanical nightmare than I imagined. For one, the optical alignment window of the OPT101 sensors is tiny, which makes the break-beam setup extremely sensitive to positioning changes, even by a single millimeter. While this was tackled with way too many 3D printed housings and lots of hot glue, the actual string vibrations still posed an issue. Speaking of housings, I made sure to cover each break-beam light path with as much plastic as possible to block ambient light, and wrapped each LED with electrical tape to concentrate the light onto the string. Even with all these optimizations, the D and G strings turned out to be much thinner than I had imagined, and their vibrations are physically very minimal at the bridge. My next iteration will be moved to right under the end of the fretboard instead, where the strings tend to vibrate more on average, making their amplitude stronger across the optical windows.
            </p>
            <p>
              Overall, the project works as an MVP, but it's far from being a usable product. More research needs to be done on optimizing the pitch detection and classification, and it might be worth considering the ML approach again. While having the whole product work with just the infrared sensors would be nice, other sensors are always on the table, and if I find a way to reliably mount piezoelectric sensors, that would make for a much cleaner waveform. Finally, I'll be redesigning the whole enclosure to sit at the top of the bass body for maximum string vibration. If you have any other ideas or would like to discuss this work with me, don't hesitate to reach out!
            </p>

            <img
              src="/assets/images/bassmint3.JPG"
              alt="BassMINT prototype"
              className="w-2/3 mx-auto rounded-lg"
            />

            <img
              src="/assets/images/bassmint1.png"
              alt="BassMINT future iteration"
              className="w-2/3 mx-auto rounded-lg"
            />
          </div>
        </section>

        {/* Separator */}
        <div className="flex justify-center my-12">
          <div className="w-1/3 h-px bg-surface/20"></div>
        </div>

        {/* Resources */}
        <section>
          <h2 className="text-3xl font-bold text-surface mb-6">
            Resources
          </h2>
          <div className="text-surface space-y-5 text-base leading-relaxed">
            <p>
              Here are some research papers and other resources that helped me along the way:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <a href="https://www.researchgate.net/publication/347921033_Low-Latency_f0_Estimation_for_the_Finger_Plucked_Electric_Bass_Guitar_Using_the_Absolute_Difference_Function" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">
                  Low-Latency f0 Estimation for the Finger Plucked Electric Bass Guitar Using the Absolute Difference Function
                </a>
              </li>
              <li>
                <a href="https://ieeexplore.ieee.org/document/6616120" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">
                  Real-time guitar string detection for music education software
                </a>
              </li>
              <li>
                <a href="https://www.researchgate.net/publication/393223558_Automatic_Guitar_Transcription_with_Deep_Neural_Networks" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">
                  Automatic Guitar Transcription With Deep Neural Networks
                </a>
              </li>
              <li>
                <a href="https://www.researchgate.net/publication/261633086_Instrument-centered_Music_Transcription_of_Bass_Guitar_Tracks" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">
                  Instrument-centered Music Transcription of Bass Guitar Tracks
                </a>
              </li>
              <li>
                <a href="https://secure.aes.org/forum/pubs/ebriefs/?elib=17146" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">
                  The Sonic Characteristics of the Jazz-Style Electric Bass Guitar
                </a>
              </li>
              <li>
                <a href="https://www.acs.psu.edu/drussell/Demos/Stiffness-Inharmonicity/Stiffness-B.html" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">
                  Inharmonicity due to Stiffness for Guitar Strings
                </a>
              </li>
              <li>
                <a href="https://www.willcoxguitars.com/lightwave-optical-pickup-system/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">
                  LightWave Optical Pickup System
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Separator */}
        <div className="flex justify-center my-12">
          <div className="w-1/3 h-px bg-surface/20"></div>
        </div>

        {/* Bottom Home Link */}
        <Link to="/" className="text-surface hover:text-accent inline-block">
          ← Home
        </Link>
      </div>
    </div>
  )
}
