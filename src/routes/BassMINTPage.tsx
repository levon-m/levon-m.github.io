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
          titleHref={project.links.github}
          backTo="/"
          backLabel="Home"
        />

        <div className="my-10" aria-hidden="true" />

        {/* Background */}
        <section className="mb-0">
          <h2 className="text-3xl font-bold text-surface mb-6">
            Background
          </h2>
          <div className="text-surface space-y-5 text-base leading-relaxed">
            <p>
              Bass (M)ount for (I)nfrared (N)ote (T)ranscription is a prototype for real-time, on-instrument monophonic note and position sensing on bass guitar. Built around a <a href="https://www.pjrc.com/store/teensy40.html" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Teensy 4.0</a>, the device mounts onto the bridge and outputs estimated string and fret information over MIDI for use in educational, visualization, or transcription applications in software. Currently, BassMINT is designed for 4-string bass guitars with a Fender Jazz-style bridge and supports up to 24 frets.
            </p>
            <p>
              As it turns out, pitch and note estimation is not as straightforward as I thought, especially on fretted instruments that introduce various forms of extraneous signal. Additionally, identifying a played pitch is not always enough to identify the played position since the same pitch can often be played at multiple locations on the fretboard. This ambiguity is a major roadblock for applications that require precise string and fret information, such as technique-aware practice tools, fretboard visualization, and tablature. Especially if the user is a beginner, intuitive visualization is critical for successful practice or learning. While audio-based pitch and note estimation methods can be effective, they work under constraints such as attack transients, inharmonicity, player technique variation, and low latency requirements. Rather than relying on pickup audio alone, BassMINT uses direct optical sensing to move part of the problem out of acoustic territory and into a sensor layer. The project is not intended as a general replacement for audio transcription, but explores a new sensor-assisted approach to musical feedback beyond pitch alone.
            </p>

            <img
              src="/assets/images/bassmint2.JPG"
              alt="BassMINT development"
              className="w-3/5 mx-auto rounded-lg"
            />
          </div>
        </section>

        <div className="my-10" aria-hidden="true" />

        {/* Development */}
        <section className="mb-0">
          <h2 className="text-3xl font-bold text-surface mb-6">
            Development
          </h2>
          <div className="text-surface space-y-5 text-base leading-relaxed">
            <p>
              The project began with an audio-only approach to string and fret inference. In principle, this is the least intrusive design, as the user plays normally and the system estimates directly from the instrument signal. However, pitches on string instruments alone do not uniquely identify where that note was played on the fretboard. We as people can see that the same notes can be played in different places, but they also have slightly different sound qualities. While the frequency, assuming the instrument is perfectly tuned and intonated, is the exact same, these different "qualities" of the sound, called timbre, can be further analyzed along with other secondary cues. Recovering accurate playing position from audio requires the model to use these cues, such as timbre, spectral structure, articulation, and temporal context in addition to fundamental frequency. My initial approach explored using machine learning on a <a href="https://www.idmt.fraunhofer.de/en/publications/datasets/bass.html" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">dataset of bass notes</a> recorded with different playing styles and expressions. The goal was to determine whether timbral features, particularly the structure of upper partials, could help distinguish between different playing positions of the same pitch. In practice, this approach was limited in accuracy, likely due to a difficulty in learning position-specific timbral cues that can generalize across different articulations and recording conditions. Although I moved away from this approach for the prototype described here, I still view audio-based position inference as viable under better-controlled data collection and stronger modeling.
            </p>
            <p>
              Eventually, I settled on a physical device to allow me to gather data directly. Rather than inferring everything from pickup audio alone, this system could first reduce ambiguity through direct sensing of string activity. Each string is monitored by its own optical break-beam pair consisting of an infrared LED and an <a href="https://www.ti.com/lit/ds/symlink/opt101.pdf" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">OPT101 photodiode-amplifier sensor</a>. The vibrating string partially occludes the optical path, creating a string-specific signal that reflects string motion. This provides two advantages: it identifies which string is active, and it produces a more isolated signal for subsequent pitch estimation than a mixed pickup waveform. Instead of searching over all note locations on the instrument, it only needs to search the fret position within the feasible range for that string. BassMINT uses the <a href="https://www.cs.otago.ac.nz/graphics/Geoff/tartini/papers/A_Smarter_Way_to_Find_Pitch.pdf" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Normalized Square Difference Function (NSDF)</a> for pitch estimation, but evaluates candidate peaks in two lag regions corresponding roughly to lower and upper fret ranges. This was motivated by a recurring failure mode in bass signals, where strong harmonics can confuse the octave and cause large jumps between them. To stabilize the final estimate, I added a <a href="https://en.wikipedia.org/wiki/Recursive_Bayesian_estimation" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Bayesian filter</a> that combines the strength of peaks in each band with simple playability priors, penalizing physically unlikely fret jumps between successive notes in a short time interval.
            </p>
            <p>
              Before settling on the optical design, I also explored piezoelectric sensing at the bridge. Conceptually, piezo sensing was promising because it could provide a direct vibration signal without relying on light beam alignment. In practice, however, it proved difficult to create reliable mechanical coupling in a mountable, user-friendly way. (Too much mechanical engineering!) The optical approach was ultimately more practical for rapid prototyping, but introduced its own unique mechanical and alignment challenges.
            </p>

            <img
              src="/assets/images/bassmint3.JPG"
              alt="BassMINT prototype"
              className="w-3/5 mx-auto rounded-lg"
            />

            <img
              src="/assets/images/bassmint4.JPG"
              alt="BassMINT hardware"
              className="w-3/5 mx-auto rounded-lg"
            />
          </div>
        </section>

        <div className="my-10" aria-hidden="true" />

        {/* Challenges & Future Work */}
        <section className="mb-0">
          <h2 className="text-3xl font-bold text-surface mb-6">
            Challenges &amp; Future Work
          </h2>
          <div className="text-surface space-y-5 text-base leading-relaxed">
            <p>
              The most immediate challenge was the mechanical and optical tolerance. In the current bridge-mounted design, the window of the optical sensing path is extremely small (~3mm), making the system very sensitive to positioning errors, vibration geometry, and instrument/string variation. A mount that allows for horizontal adjustments is possible, but outside the scope for my prototype. Sensing performance is currently limited more by physical robustness than by the downstream inference pipeline. A second limitation is signal amplitude at the sensing location. Near the bridge, some strings like the thinner D and G strings produce relatively small horizontal motion, which reduces modulation depth in the optical path and makes detection less reliable. My next iteration will be right under the end of the fretboard instead, where larger string displacement may improve optical signal strength. This would need to be evaluated carefully against new tradeoffs in mounting, playing interference, and environmental sensitivity.
            </p>
            <p>
              On the algorithmic side, the current NSDF-based estimator with Bayesian filtering should be treated as a baseline rather than a final solution. The earlier audio-based machine learning direction may also be worth revisiting under better controlled data collection, particularly if used in combination with direct sensing rather than as a fully separate alternative. Overall, the next phase of the project is to better answer how much ambiguity can be removed in real-time bass transcription. With direct instrument-mounted sensing, what architecture yields the best tradeoff among latency, accuracy, and ease of use?
            </p>

            <img
              src="/assets/images/bassmint1.png"
              alt="BassMINT future iteration"
              className="w-3/5 mx-auto rounded-lg"
            />
          </div>
        </section>

        <div className="my-10" aria-hidden="true" />

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
                <a href="https://www.researchgate.net/publication/347921033_Low-Latency_f0_Estimation_for_the_Finger_Plucked_Electric_Bass_Guitar_Using_the_Absolute_Difference_Function" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">
                  Low-Latency f0 Estimation for the Finger Plucked Electric Bass Guitar Using the Absolute Difference Function
                </a>
              </li>
              <li>
                <a href="https://ieeexplore.ieee.org/document/6616120" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">
                  Real-time guitar string detection for music education software
                </a>
              </li>
              <li>
                <a href="https://www.cs.otago.ac.nz/graphics/Geoff/tartini/papers/A_Smarter_Way_to_Find_Pitch.pdf" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">
                  A Smarter Way To Find Pitch
                </a>
              </li>
              <li>
                <a href="https://www.researchgate.net/publication/393223558_Automatic_Guitar_Transcription_with_Deep_Neural_Networks" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">
                  Automatic Guitar Transcription With Deep Neural Networks
                </a>
              </li>
              <li>
                <a href="https://www.researchgate.net/publication/261633086_Instrument-centered_Music_Transcription_of_Bass_Guitar_Tracks" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">
                  Instrument-centered Music Transcription of Bass Guitar Tracks
                </a>
              </li>
              <li>
                <a href="https://secure.aes.org/forum/pubs/ebriefs/?elib=17146" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">
                  The Sonic Characteristics of the Jazz-Style Electric Bass Guitar
                </a>
              </li>
              <li>
                <a href="https://www.acs.psu.edu/drussell/Demos/Stiffness-Inharmonicity/Stiffness-B.html" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">
                  Inharmonicity due to Stiffness for Guitar Strings
                </a>
              </li>
              <li>
                <a href="https://www.willcoxguitars.com/lightwave-optical-pickup-system/" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">
                  LightWave Optical Pickup System
                </a>
              </li>
            </ul>
          </div>
        </section>

        <div className="my-10" aria-hidden="true" />

        {/* Bottom Home Link */}
        <Link to="/" className="text-accent hover-slant text-lg inline-block">
          &lt;- Home
        </Link>
      </div>
    </div>
  )
}


