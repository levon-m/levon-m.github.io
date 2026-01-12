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

        {/* Separator */}
        <div className="flex justify-center my-12">
          <div className="w-1/3 h-px bg-surface/20"></div>
        </div>

        {/* Content */}
        <div className="text-surface space-y-8 text-lg leading-relaxed">
          <section>
            <h2 className="text-3xl font-bold text-surface mb-6">Articles, Lists & Blogs</h2>
            <ul className="space-y-2 pl-6 list-disc">
              <li><a href="https://github.com/olilarkin/awesome-musicdsp?tab=readme-ov-file" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">More Awesome Music DSP*</a></li>
              <li><a href="https://www.paulgraham.com/do.html" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">What To Do</a></li>
              <li><a href="https://notes.eatonphil.com/2024-08-24-obsession.html" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Obsession</a></li>
              <li><a href="https://linuxcommand.org/lc3_learning_the_shell.php" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Learning the Shell</a></li>
              <li><a href="https://missing.csail.mit.edu/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">The Missing Semester of Your CS Education</a></li>
              <li><a href="http://www.rossbencina.com/code/real-time-audio-programming-101-time-waits-for-nothing" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Real-time audio programming 101: time waits for nothing</a></li>
              <li><a href="https://signalsmith-audio.co.uk/writing/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Signalsmith Audio Blog</a></li>
              <li><a href="https://www.audioholics.com/audio-technologies/codecs" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Audio Codecs Explained for Non-Audiophiles</a></li>
              <li><a href="https://gist.github.com/somebox/d969f8a97e5a4362af5049ed554a9e69" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Teensy 4.1 Microcontroller: A Community Reference Guide</a></li>
              <li><a href="https://www.embeddedrelated.com/showarticle/1532.php" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Modern C++ in Embedded Development: (Don't Fear) The ++</a></li>
              <li><a href="https://www.circle-lang.org/draft-profiles.html" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Why Safety Profiles Failed</a></li>
              <li><a href="https://www.izotope.com/en/learn/psychoacoustics-how-perception-influences-music-production" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Psychoacoustics: how perception influences music production</a></li>
              <li><a href="https://www.izotope.com/en/learn/digital-audio-basics-sample-rate-and-bit-depth" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Digital audio basics: audio sample rate and bit depth</a></li>
              <li><a href="https://www.izotope.com/en/learn/audio-dynamics-101-compressors-limiters-expanders-and-gates" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Audio dynamics 101: compressors, limiters, expanders, and gates</a></li>
              <li><a href="https://flothesof.github.io/cepstrum-pitch-tracking.html" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">A Short Tutorial on Cepstral Analysis for Pitch-tracking</a></li>
              <li><a href="https://en.soundlightup.com/archives-3/reports/justice-at-the-accor-arena-a-concert-without-mics.html" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Justice at the Accor Arena – a concert without mics</a></li>
              <li><a href="https://jakobabesser.github.io/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Jakob Abeßer</a></li>
              <li><a href="https://www.notreble.com/buzz/2009/06/24/ask-damian-erskine/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Ask Damian Erskine</a></li>
              <li><a href="https://www.notreble.com/buzz/2018/06/27/practicing-scales-vs-arpeggios/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Practicing Scales vs. Arpeggios</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-surface mb-6">Projects, Products, & Tools</h2>
            <ul className="space-y-2 pl-6 list-disc">
              <li><a href="https://github.com/dagargo/overwitch" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Overwitch</a></li>
              <li><a href="https://articles.roland.com/introducing-project-lydia/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Project LYDIA</a></li>
              <li><a href="https://www.giadamusic.com/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Giada</a></li>
              <li><a href="https://sonosaurus.com/sooperlooper/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">SooperLooper</a></li>
              <li><a href="https://cosine.club/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">cosine.club</a></li>
              <li><a href="https://github.com/tote-bag-labs/valentine" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">V A L E N T I N E</a></li>
              <li><a href="https://thepiz.org/plugins/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Insert Piz Here</a></li>
              <li><a href="https://eternalresearch.com/pages/the-demon-box" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">The Demon Box</a></li>
              <li><a href="https://midi.org/innovation-award/databass" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">DataBass</a></li>
              <li><a href="https://svmethod.nl/sv-method-english/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">SV Method</a></li>
              <li><a href="https://everynoise.com/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Every Noise at Once</a></li>
              <li><a href="https://juce.com/made-with-juce/arden-butterfield-from-wildergarden-audio/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">MAIM (MAIM Ain't an Implementation of Mp3)</a></li>
              <li><a href="https://www.gnod.com/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Global Network of Discovery</a></li>
              <li><a href="https://supercollider.github.io/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Supercollider</a></li>
              <li><a href="https://sonic-pi.net/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Sonic Pi</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-surface mb-6">Videos</h2>
            <ul className="space-y-2 pl-6 list-disc">
              <li><a href="https://www.youtube.com/watch?v=p8u_k2LIZyo" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Fast Inverse Square Root — A Quake III Algorithm</a></li>
              <li><a href="https://www.youtube.com/watch?v=Tvf7VVH53-4" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">How to Write Bug-Free, Real-Time Audio C++ Code? - Jan Wilczek - ADC23</a></li>
              <li><a href="https://www.youtube.com/watch?v=kwnjF4U8_I0" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Vlad Voina - Loopers and bloopers</a></li>
              <li><a href="https://www.youtube.com/watch?v=fJUmmcGKZMI" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Four Ways To Write A Pitch-Shifter - Geraint Luff - ADC22</a></li>
              <li><a href="https://www.youtube.com/watch?v=JGit0LgBNOM" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Jaco Pastorius | "Modern Electric Bass"</a></li>
              <li><a href="https://www.youtube.com/watch?v=HoPG7XWb9C0" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Sampling Rhodes on tape with FJAAK | RA | Splice</a></li>
              <li><a href="https://www.youtube.com/watch?v=GDe_w18oLhY" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Techno Organic (Technorganic) by Gus Wright (operator)</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-surface mb-6">Books</h2>
            <ul className="space-y-2 pl-6 list-disc">
              <li><a href="https://www.dspguide.com/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">The Scientist and Engineer's Guide to Digital Signal Processing - Steven W. Smith</a></li>
              <li><a href="https://www.oreilly.com/library/view/practical-electronics-for/9781259587559/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Practical Electronics for Inventors - Paul Scherz, Simon Monk</a></li>
              <li><a href="https://www.oreilly.com/library/view/making-embedded-systems/9781098151539/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Making Embedded Systems - Elicia White</a></li>
              <li><a href="https://www.abebooks.com/9783662567173/Real-Time-Efficient-Object-Oriented-Template-Microcontroller-3662567172/plp" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Real-Time C++: Efficient Object-Oriented and Template Microcontroller Programming - Christopher Kormanyos</a></li>
              <li><a href="https://www.oreilly.com/library/view/dafx-digital-audio/9780470665992/c12_level1_2.xhtml" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">DAFX: Digital Audio Effects - Udo Zölzer</a></li>
              <li><a href="https://beej.us/guide/bggit/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Beej's Guide to Git</a></li>
            </ul>
          </section>
        </div>

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
