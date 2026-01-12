import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/common/SectionTitle'
import { getProjectBySlug } from '../data/projects'

export default function MicroLoopPage() {
  const project = useMemo(() => getProjectBySlug('microloop'), [])

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="min-h-screen py-12 px-8 sm:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <PageHeader
          title={project.name}
          backTo="/"
          backLabel="Home"
        />
        <div className="-mt-12 mb-12">
          <p className="text-xl text-surface leading-relaxed">
            MIDI-synced looper, sampler, & effects machine made for live performance
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
              I wanted a looper that can sample live audio, but also quantize the capture and playback to an external MIDI clock, like from a drum machine. Put more simply, I needed all interactions with the loops to stay locked to the grid. Quantization being the key feature, I couldn't find it in a desktop looper that wasn't upwards of $400, so I decided to build my own using the <a href="https://www.pjrc.com/store/teensy41.html" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Teensy 4.1</a> microcontroller. Aimed at being a live performance effects box (for my use case), I prioritized immediacy and ease of use with minimal menu diving, as users can't sift through a giant menu during a live performance. The effects I chose were based around the kinds of electronic music that I personally like to play, although it can be used for just about anything with enough creativity. All in all, it came out to just $120! (and hundreds of hours of debugging and developing)
            </p>
          </div>
        </section>

        {/* Separator */}
        <div className="flex justify-center my-12">
          <div className="w-1/3 h-px bg-surface/20"></div>
        </div>

        {/* Demo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-surface mb-6">
            Demo
          </h2>
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/drOhE85E4RI"
              title="MicroLoop Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* Separator */}
        <div className="flex justify-center my-12">
          <div className="w-1/3 h-px bg-surface/20"></div>
        </div>

        {/* How to Play */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-surface mb-6">
            How to Play
          </h2>
          <div className="text-surface space-y-6 text-base leading-relaxed">
            <img
              src="/assets/images/microloop1.png"
              alt="MicroLoop layout diagram"
              className="w-2/3 mx-auto rounded-lg"
            />
            <p>
              The idea is that you play audio into the device, record up to four different loops, and play them back over the original audio with the STUTTER effect. You have a "scratch work space", where you test out different loops, and commit them to one of four preset slots when you like what you hear. Alongside this, you have a FREEZE effect that sustains the last 30ms of audio, and a CHOKE effect that acts as an instant mute. Each effect has it's own settings menu, where you can toggle different capture/playback parameters to either be quantized to the MIDI clock, or activated freehand. There is also a Global Quantization menu, where you choose between 8 different beat subdivisions for the quantization to snap to.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-4 underline">Inputs</h3>
              <ul className="space-y-3 list-disc pl-6">
                <li><strong>STUTTER</strong> - Square activates STUTTER, circle is for setting navigation and selection</li>
                <li><strong>FREEZE</strong> - Square activates FREEZE, circle is for setting navigation and selection</li>
                <li><strong>CHOKE</strong> - Square activates CHOKE, circle is for setting navigation and selection</li>
                <li>
                  <strong>FUNC</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>FUNC + STUTTER starts loop capture, capture ends automatically via quantization or when FUNC is let go in freehand mode. If STUTTER is still held after loop capture end, the loop is automatically launched right after loop capture.</li>
                    <li>FUNC + PX saves current loop in scratch space to that preset slot, only if the slot is empty. If it is full, that slot's preset is deleted.</li>
                  </ul>
                </li>
                <li><strong>GLOBAL</strong> - Global settings, with quantization currently being the only one. Select between 8 different beat subdivisions, that all settings set to quantized will snap to.</li>
                <li><strong>PX</strong> - Preset buttons, where pressing a full preset button will load that preset to the scratch space. Note that creating a new loop while a preset is selected will NOT overwrite the selected preset, it will just de-select it.</li>
                <li><strong>MIDI DIN IN</strong> - MIDI cable carrying clock signal from any hardware that includes it.</li>
                <li><strong>3.5mm LINE IN</strong> - Stereo audio input, where the device will simply pass through the audio unless an effect is activated.</li>
                <li><strong>MicroUSB Power</strong> - Powers the device, and stays on as long as the cable is plugged in. Later iterations will include a battery with a switch instead.</li>
                <li><strong>MicroSD Card</strong> - For storing the presets. Note that the card must be inserted into the Teensy slot, NOT the Audio Adapter board slot. As only 4 slots are supported for now, any card above 4GB will work with plenty of room to spare.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 underline">Menu Settings</h3>
              <p className="mb-4">
                All setting selections are either Freehand or Quantized, with the exception of GLOBAL's Quantization, which includes 1/32, 1/32T, 1/16, 1/16T, 1/8, 1/8T, 1/4, and 1/4T.
              </p>
              <ul className="space-y-3 list-disc pl-6">
                <li>
                  <strong>STUTTER</strong>
                  <ul className="list-disc pl-6 mt-1">
                    <li>Capture Start</li>
                    <li>Capture End</li>
                    <li>Onset</li>
                    <li>Length</li>
                  </ul>
                </li>
                <li>
                  <strong>FREEZE</strong>
                  <ul className="list-disc pl-6 mt-1">
                    <li>Onset</li>
                    <li>Length</li>
                  </ul>
                </li>
                <li>
                  <strong>CHOKE</strong>
                  <ul className="list-disc pl-6 mt-1">
                    <li>Onset</li>
                    <li>Length</li>
                  </ul>
                </li>
                <li>
                  <strong>GLOBAL</strong>
                  <ul className="list-disc pl-6 mt-1">
                    <li>Quantization</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="flex justify-center my-12">
          <div className="w-1/3 h-px bg-surface/20"></div>
        </div>

        {/* Design and Architecture */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-surface mb-6">
            Design and Architecture
          </h2>
          <div className="text-surface space-y-5 text-base leading-relaxed">
            <p>
              This was my first time facing product design at this scale and across software, hardware, electrical, and even mechanical domains, but it was one of my most rewarding experiences. For the brain, I chose the <a href="https://www.pjrc.com/teensy/" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Teensy 4.1</a> microcontroller, as it has a very strong audio ecosystem, and a powerful Cortex-M7 core, giving me plenty of processing headroom for experimenting. Speaking of the audio ecosystem, I used the <a href="https://www.pjrc.com/store/teensy3_audio.html" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Teensy Audio Adapter board</a> with the SGTL5000 codec over I2S, which gave me 16-bit, 44.1 kHz audio to work with over stereo line I/O. More importantly, this allowed me to use the <a href="https://www.pjrc.com/teensy/td_libs_Audio.html" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Teensy Audio library</a>, which abstracted a lot of the register-level interactions with the DAC, like buffering the audio with DMA (I made my own driver that somewhat worked, but ultimately went with the library's implementation).
            </p>
            <p>
              One of the biggest challenges was designing the system to be deterministic, with absolutely no audio glitches, and a responsive interface. A multithreaded design was the clear choice for this, giving each element like the MIDI, buttons, encoders, etc. their own processing space. My code absolutely could not block anything else from running and had to stay atomic, especially in the audio thread. If the audio cuts out or crackles, the whole product is basically useless. Anything I used for DSP, especially the main loop buffers, had to be allocated beforehand, as dynamic allocation would make the performance very sluggish and at risk of memory leaks. For the thread concurrency, I used the <a href="https://github.com/ftrias/TeensyThreads" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:italic">Teensy Threads library</a> instead of a full RTOS. Of course, it is made specifically for the Teensy, but it also excels at providing very lightweight preemptive multithreading without the extra overhead of a full RTOS like heavy synchronization primitives. Other housekeeping included using CMake and Ninja instead of the Arduino IDE, which makes for more reproducible and cross-compatible builds.
            </p>

            <img
              src="/assets/images/microloop3.svg"
              alt="MicroLoop architecture diagram"
              className="w-2/3 mx-auto rounded-lg"
            />

            <img
              src="/assets/images/microloop2.svg"
              alt="MicroLoop design diagram"
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
              Most obviously, I want to design my own PCB for the device. It's proving to take much longer than I thought, and there are definitely some quality of life features I want to add first. A dedicated on/off switch would be very nice to avoid unplugging cables all the time, as well as an actual volume potentiometer (the Audio Adapter already has a dedicated spot for it). On the software side, there is a little bit of inconsistency and jitter between the quantization grid, that's measured in MIDI ticks, and the actual audio samples of the incoming audio. This is expected, but I feel like I can handle it in a more robust way, as I can sometimes hear the quantization is off by just a hair.
            </p>
            <p>
              As far as actual features go, I think a dedicated pumping "sidechain" effect and some overdrive would be perfect for the kind of music I play, as well as a potentiometer to scrub the playhead of the loop while it's in the process of being played. An overdub would also be very fun, where the audio stream is still passing through but my effects are layered on top of it. Lots of fun directions this device can go!
            </p>
          </div>
        </section>

        {/* Separator */}
        <div className="flex justify-center my-12">
          <div className="w-1/3 h-px bg-surface/20"></div>
        </div>

        {/* Hardware */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-surface mb-6">
            Hardware
          </h2>
          <ul className="text-surface space-y-3 text-base leading-relaxed list-disc pl-6">
            <li><strong>Teensy 4.1</strong> + <strong>Audio Adapter</strong> - The brain and audio interface</li>
            <li><strong>Adafruit MIDI FeatherWing</strong> - MIDI DIN I/O, although we only use the input</li>
            <li><strong>Adafruit NeoKey 1X4 switches</strong> - For all interactions with effects</li>
            <li><strong>CYT1100 Rotary Encoders with switches</strong> - For settings menu navigation and selection</li>
            <li><strong>MCP23017 I2C I/O expander</strong> - Not enough pins on the Teensy without it, also adds interrupts to the encoders</li>
            <li><strong>8 MB PSRAM Chip</strong> - Allows for use of much larger loop buffers</li>
            <li><strong>MicroSD Card</strong> - Non-volatile storage for loop presets</li>
            <li><strong>SSD1306 128x64 OLED Display</strong> - For settings menu navigation and effects feedback</li>
            <li><strong>Red LEDs</strong> - Visualizes preset slot selection and operations</li>
            <li><strong>Green LED</strong> - Visualizes MIDI clock</li>
            <li><strong>RGB LED</strong> - Visualizes feedback for effect states and loop capture</li>
          </ul>
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
