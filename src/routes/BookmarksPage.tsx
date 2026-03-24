import { Link } from 'react-router-dom'
import { PageHeader } from '../components/common/SectionTitle'

export default function LinksPage() {
  return (
    <div className="min-h-screen py-12 px-12 sm:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <PageHeader
          title="Bookmarks"
          backTo="/"
          backLabel="Home"
        />

        <div className="my-10" aria-hidden="true" />

        {/* Content */}
        <div className="text-surface space-y-8 text-base leading-relaxed">
          <section>
            <h2 className="text-3xl font-bold text-surface mb-6">Articles, Lists & Blogs</h2>
            <ul className="space-y-2 pl-6 list-disc">
              <li><a href="https://www.izotope.com/en/learn/psychoacoustics-how-perception-influences-music-production" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Psychoacoustics: how perception influences music production</a></li>
              <li><a href="https://www.ctm-festival.de/magazine/post-music-with-subwoofers-as-instruments-a-new-approach-to-bodily-composition" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Post-Music with Subwoofers as Instruments: A New Approach to Bodily Composition</a></li>
              <li><a href="https://en.soundlightup.com/archives-3/reports/justice-at-the-accor-arena-a-concert-without-mics.html" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Justice at the Accor Arena &ndash; a concert without mics</a></li>
              <li><a href="https://www.zinemun.ch/p/shipley-numero" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Anti-Pop and the Aesthetic of Failure (w/ Ken Shipley, of The Numero Group)</a></li>
              <li><a href="https://www.notreble.com/column/ask-damian-erskine-column/" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Ask Damian Erskine</a></li>
              <li><a href="https://legowelt.org/cyberzine/" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">LEGOWELT CYBER ZINES</a></li>
              <li><a href="https://missing.csail.mit.edu/" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">The Missing Semester of Your CS Education</a></li>
              <li><a href="http://www.rossbencina.com/code/real-time-audio-programming-101-time-waits-for-nothing" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Real-time audio programming 101: time waits for nothing</a></li>
              <li><a href="https://signalsmith-audio.co.uk/writing/" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Signalsmith Audio Blog</a></li>
              <li><a href="https://www.attackmagazine.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Attack Magazine</a></li>
              <li><a href="https://blog.bela.io/" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">The Bela Blog</a></li>
              <li><a href="https://gist.github.com/somebox/d969f8a97e5a4362af5049ed554a9e69" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Teensy 4.1 Microcontroller: A Community Reference Guide</a></li>
              <li><a href="https://www.circle-lang.org/draft-profiles.html" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Why Safety Profiles Failed</a></li>
              <li><a href="https://www.paulgraham.com/do.html" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">What To Do</a></li>
              <li><a href="https://map.simonsarris.com/p/californias" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Californias</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-surface mb-6">Projects, Products, & Tools</h2>
            <ul className="space-y-2 pl-6 list-disc">
              <li><a href="https://github.com/dagargo/overwitch" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Overwitch</a></li>
              <li><a href="https://articles.roland.com/introducing-project-lydia/" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Project LYDIA</a></li>
              <li><a href="https://www.giadamusic.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Giada</a></li>
              <li><a href="https://sonosaurus.com/sooperlooper/" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">SooperLooper</a></li>
              <li><a href="https://github.com/MTG/essentia" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Essentia</a></li>
              <li><a href="https://cosine.club/" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">cosine.club</a></li>
              <li><a href="https://github.com/tote-bag-labs/valentine" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Valentine</a></li>
              <li><a href="https://github.com/sudara/pamplejuce" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Pamplejuce</a></li>
              <li><a href="https://thepiz.org/plugins/" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Insert Piz Here</a></li>
              <li><a href="https://eternalresearch.com/pages/the-demon-box" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">The Demon Box</a></li>
              <li><a href="https://midi.org/innovation-award/databass" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">DataBass</a></li>
              <li><a href="https://svmethod.nl/sv-method-english/" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">SV Method</a></li>
              <li><a href="https://everynoise.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Every Noise at Once</a></li>
              <li><a href="https://juce.com/made-with-juce/arden-butterfield-from-wildergarden-audio/" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">MAIM (MAIM Ain't an Implementation of Mp3)</a></li>
              <li><a href="https://www.gnod.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">GNOD - Global Network of Discovery</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-surface mb-6">Videos</h2>
            <ul className="space-y-2 pl-6 list-disc">
              <li><a href="https://www.youtube.com/watch?v=p8u_k2LIZyo" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Fast Inverse Square Root &mdash; A Quake III Algorithm</a></li>
              <li><a href="https://www.youtube.com/watch?v=Tvf7VVH53-4" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">How to Write Bug-Free, Real-Time Audio C++ Code? - Jan Wilczek - ADC23</a></li>
              <li><a href="https://www.youtube.com/watch?v=kwnjF4U8_I0" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Vlad Voina - Loopers and bloopers</a></li>
              <li><a href="https://www.youtube.com/watch?v=fJUmmcGKZMI" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Four Ways To Write A Pitch-Shifter - Geraint Luff - ADC22</a></li>
              <li><a href="https://www.youtube.com/watch?v=JGit0LgBNOM" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Jaco Pastorius | "Modern Electric Bass"</a></li>
              <li><a href="https://www.youtube.com/watch?v=HoPG7XWb9C0" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Sampling Rhodes on tape with FJAAK | RA | Splice</a></li>
              <li><a href="https://www.youtube.com/watch?v=GDe_w18oLhY" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Techno Organic (Technorganic) by Gus Wright (operator)</a></li>
              <li><a href="https://www.youtube.com/watch?v=F8Nh7sJl4gU" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Yoyaku Instore session Helena Hauff</a></li>
              <li><a href="https://www.youtube.com/watch?v=0HffibenJl8" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Mr G Boiler Room London Live Set</a></li>
              <li><a href="https://www.youtube.com/watch?v=caiD2csXzrY" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Inside the Studio w/ Boys Noize "All I Want" Live Production Masterclass</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-surface mb-6">Books</h2>
            <ul className="space-y-2 pl-6 list-disc">
              <li><a href="https://www.dspguide.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">The Scientist and Engineer's Guide to Digital Signal Processing - Steven W. Smith</a></li>
              <li><a href="https://www.oreilly.com/library/view/practical-electronics-for/9781259587559/" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Practical Electronics for Inventors - Paul Scherz, Simon Monk</a></li>
              <li><a href="https://www.oreilly.com/library/view/making-embedded-systems/9781098151539/" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Making Embedded Systems - Elicia White</a></li>
              <li><a href="https://www.abebooks.com/9783662567173/Real-Time-Efficient-Object-Oriented-Template-Microcontroller-3662567172/plp" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Real-Time C++: Efficient Object-Oriented and Template Microcontroller Programming - Christopher Kormanyos</a></li>
              <li><a href="https://www.oreilly.com/library/view/dafx-digital-audio/9780470665992/c12_level1_2.xhtml" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">DAFX: Digital Audio Effects - Udo Z&#246;lzer</a></li>
              <li><a href="https://beej.us/guide/bggit/" target="_blank" rel="noopener noreferrer" className="text-accent hover-slant">Beej's Guide to Git</a></li>
            </ul>
          </section>
        </div>

        <div className="my-10" aria-hidden="true" />

        {/* Bottom Home Link */}
        <Link to="/" className="text-accent hover-slant text-lg inline-block">
          &lt;- Home
        </Link>
      </div>
    </div>
  )
}
