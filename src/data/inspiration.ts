export interface InspirationItem {
  id: string
  title: string
  description: string
  url: string
  category: 'artist' | 'paper' | 'tool' | 'article' | 'project'
}

// CUSTOMIZE: Add your own favorite resources, artists, papers, and tools
export const inspirationItems: InspirationItem[] = [
  // Artists & Albums
  {
    id: 'jacob-collier',
    title: 'Jacob Collier',
    description: 'Mind-bending harmonies and innovative production techniques',
    url: 'https://www.jacobcollier.com/',
    category: 'artist',
  },
  {
    id: 'knower',
    title: 'KNOWER',
    description: 'Genre-defying electronic/funk duo with incredible live energy',
    url: 'https://knowermusic.com/',
    category: 'artist',
  },
  {
    id: 'vulfpeck',
    title: 'Vulfpeck',
    description: 'Minimalist funk with impeccable groove and bass lines',
    url: 'https://vfrmusic.com/',
    category: 'artist',
  },
  {
    id: 'snarky-puppy',
    title: 'Snarky Puppy',
    description: 'Jazz fusion collective with incredible live recordings',
    url: 'https://snarkypuppy.com/',
    category: 'artist',
  },

  // Papers & Research
  {
    id: 'yin-paper',
    title: 'YIN: A Fundamental Frequency Estimator',
    description: 'Foundational paper on pitch detection algorithms',
    url: 'http://audition.ens.fr/adc/pdf/2002_JASA_YIN.pdf',
    category: 'paper',
  },
  {
    id: 'dafx-book',
    title: 'DAFX: Digital Audio Effects',
    description: 'Comprehensive reference for audio DSP algorithms',
    url: 'https://www.dafx.de/',
    category: 'paper',
  },
  {
    id: 'julius-smith',
    title: "Julius O. Smith III's DSP Resources",
    description: 'Free online books covering audio DSP fundamentals',
    url: 'https://ccrma.stanford.edu/~jos/',
    category: 'paper',
  },

  // Tools & Software
  {
    id: 'juce',
    title: 'JUCE Framework',
    description: 'Cross-platform C++ framework for audio applications',
    url: 'https://juce.com/',
    category: 'tool',
  },
  {
    id: 'teensy-audio',
    title: 'Teensy Audio Library',
    description: 'Powerful audio toolkit for Teensy microcontrollers',
    url: 'https://www.pjrc.com/teensy/td_libs_Audio.html',
    category: 'tool',
  },
  {
    id: 'supercollider',
    title: 'SuperCollider',
    description: 'Platform for audio synthesis and algorithmic composition',
    url: 'https://supercollider.github.io/',
    category: 'tool',
  },
  {
    id: 'vcv-rack',
    title: 'VCV Rack',
    description: 'Open-source virtual modular synthesizer',
    url: 'https://vcvrack.com/',
    category: 'tool',
  },

  // Articles & Resources
  {
    id: 'earlevel',
    title: 'Earlevel Engineering',
    description: 'Excellent tutorials on audio DSP and filter design',
    url: 'https://www.earlevel.com/main/',
    category: 'article',
  },
  {
    id: 'musicdsp',
    title: 'The Music-DSP Source Code Archive',
    description: 'Collection of DSP algorithms and code snippets',
    url: 'https://www.musicdsp.org/',
    category: 'article',
  },

  // Projects
  {
    id: 'daisy',
    title: 'Electrosmith Daisy',
    description: 'Embedded audio platform for instruments and effects',
    url: 'https://www.electro-smith.com/daisy',
    category: 'project',
  },
  {
    id: 'bela',
    title: 'Bela',
    description: 'Ultra-low latency embedded platform for audio and sensors',
    url: 'https://bela.io/',
    category: 'project',
  },
  {
    id: 'monome',
    title: 'Monome',
    description: 'Beautiful minimalist grid controllers and sound devices',
    url: 'https://monome.org/',
    category: 'project',
  },
]

export function getInspirationByCategory(
  category: InspirationItem['category']
): InspirationItem[] {
  return inspirationItems.filter((item) => item.category === category)
}

export const categoryLabels: Record<InspirationItem['category'], string> = {
  artist: 'Artists & Music',
  paper: 'Papers & Research',
  tool: 'Tools & Software',
  article: 'Articles & Tutorials',
  project: 'Projects & Hardware',
}
