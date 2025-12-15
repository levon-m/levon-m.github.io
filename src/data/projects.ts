export interface Project {
  id: string
  slug: string
  name: string
  shortDescription: string
  fullDescription: string
  tags: string[]
  stack: string[]
  links: {
    github?: string
    demo?: string
    video?: string
    article?: string
  }
  images: string[]
  highlights: string[]
}

// CUSTOMIZE: Update these project details with your actual information
export const projects: Project[] = [
  {
    id: 'microloop',
    slug: 'microloop',
    name: 'MicroLoop',
    shortDescription: 'Teensy-based live looper for DAWless performance',
    fullDescription: `MicroLoop is a hardware audio looper built around the Teensy 4.x microcontroller,
    designed for live DAWless performance. It features real-time audio capture, overdub, stutter effects,
    and freeze functionality with tight MIDI clock synchronization. The project explores the intersection
    of embedded systems and creative audio tools, pushing the limits of what's achievable with
    resource-constrained hardware.`,
    tags: ['embedded', 'audio', 'hardware', 'c++'],
    stack: [
      'Teensy 4.1',
      'Teensy Audio Library',
      'C/C++',
      'Custom PCB',
      'MIDI',
      'I2S Audio Codec',
    ],
    links: {
      // CUSTOMIZE: Add your actual links
      github: 'https://github.com/levon-m/microloop',
      video: 'https://youtube.com/watch?v=placeholder',
    },
    images: [
      // CUSTOMIZE: Add your actual image paths
      '/images/microloop-front.jpg',
      '/images/microloop-pcb.jpg',
    ],
    highlights: [
      'Real-time audio buffer management with zero-copy circular buffers',
      'State machine architecture for seamless mode transitions',
      'Sub-millisecond latency audio path optimized for live use',
      'Hardware debouncing and encoder handling via interrupts',
      'MIDI clock sync with configurable quantization grid',
      'Memory-efficient design fitting within Teensy RAM constraints',
    ],
  },
  {
    id: 'bassmint',
    slug: 'bassmint',
    name: 'BassMINT',
    shortDescription: 'Bass-guitar training & visualization tool',
    fullDescription: `BassMINT is an interactive training system for bass guitarists that combines
    hardware sensors with a JUCE-based desktop application. Using optical sensors on the fretboard,
    it provides real-time feedback on finger placement, pitch accuracy, and technique. The system
    aims to make practicing more engaging through visual feedback and gamified exercises.`,
    tags: ['music-tech', 'juce', 'audio', 'hardware'],
    stack: [
      'JUCE Framework',
      'C++',
      'YIN Pitch Detection',
      'Arduino/ESP32',
      'IR Optical Sensors',
      'MIDI',
    ],
    links: {
      // CUSTOMIZE: Add your actual links
      github: 'https://github.com/levon-m/bassmint',
    },
    images: [
      // CUSTOMIZE: Add your actual image paths
      '/images/bassmint-app.png',
      '/images/bassmint-sensors.jpg',
    ],
    highlights: [
      'Real-time pitch detection using YIN algorithm',
      'Custom JUCE UI components for fretboard visualization',
      'Low-latency sensor data via USB serial',
      'Gamified practice modes with progress tracking',
      'Configurable for different bass tunings and scale lengths',
      'MIDI output for integration with DAWs',
    ],
  },
  {
    id: 'prison-island',
    slug: 'prison-island',
    name: 'Prison Island',
    shortDescription: 'Interactive escape room experience',
    fullDescription: `Prison Island is an interactive narrative escape room experience developed
    during a study abroad program. The project combines physical puzzles, digital interfaces, and
    storytelling to create an immersive gameplay experience. Players work together to solve
    challenges and uncover the story behind a mysterious island prison.`,
    tags: ['game-design', 'interactive', 'ux'],
    stack: [
      'Unity',
      'Arduino',
      'Physical Props',
      'Audio Design',
      'Narrative Design',
    ],
    links: {
      // CUSTOMIZE: Add your actual links
      article: 'https://example.com/prison-island-writeup',
    },
    images: [
      // CUSTOMIZE: Add your actual image paths
      '/images/prison-island-puzzle.jpg',
      '/images/prison-island-room.jpg',
    ],
    highlights: [
      'Designed core puzzle mechanics and progression flow',
      'Integrated physical props with digital feedback systems',
      'Created atmospheric audio design and soundscapes',
      'Collaborated with international team under tight deadlines',
      'User-tested and iterated based on player feedback',
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

// Navigation items for home page
export interface NavItem {
  title: string
  subtitle: string
  to: string
}

export const homeNavItems: NavItem[] = [
  {
    title: 'MicroLoop',
    subtitle: 'Teensy-based live looper for DAWless jams',
    to: '/microloop',
  },
  {
    title: 'BassMINT',
    subtitle: 'Bass guitar training & fretboard visualization',
    to: '/bassmint',
  },
  {
    title: 'VOICE',
    subtitle: 'Media archiving & privacy tools for activists',
    to: '/voice',
  },
  {
    title: 'Prison Island',
    subtitle: 'Interactive escape room experience',
    to: '/prison-island',
  },
  {
    title: 'Links',
    subtitle: 'Inspiration, resources, and favorites',
    to: '/links',
  },
]
