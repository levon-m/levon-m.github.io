export interface Jam {
  id: string
  title: string
  description: string
  platform: 'youtube' | 'soundcloud' | 'bandcamp' | 'other'
  url: string
  date?: string
  tags?: string[]
}

// CUSTOMIZE: Add your jam sessions, recordings, or musical content
export const jams: Jam[] = [
  {
    id: 'looper-demo-1',
    title: 'MicroLoop Live Demo',
    description: 'Testing the live looping capabilities with bass and synth',
    platform: 'youtube',
    url: 'https://youtube.com/watch?v=placeholder1',
    date: '2024-01',
    tags: ['looper', 'bass', 'live'],
  },
  {
    id: 'funk-jam-1',
    title: 'Late Night Funk Jam',
    description: 'Solo bass session exploring pocket grooves',
    platform: 'soundcloud',
    url: 'https://soundcloud.com/placeholder/funk-jam',
    date: '2024-02',
    tags: ['funk', 'bass', 'improvisation'],
  },
  {
    id: 'ambient-layers',
    title: 'Ambient Layers',
    description: 'Experimenting with reverse loops and granular textures',
    platform: 'youtube',
    url: 'https://youtube.com/watch?v=placeholder2',
    date: '2024-03',
    tags: ['ambient', 'experimental', 'looper'],
  },
]

export function getJamsByTag(tag: string): Jam[] {
  return jams.filter((jam) => jam.tags?.includes(tag))
}

// Platform icons/embed helpers
export const platformInfo: Record<
  Jam['platform'],
  { name: string; color: string }
> = {
  youtube: { name: 'YouTube', color: '#FF0000' },
  soundcloud: { name: 'SoundCloud', color: '#FF5500' },
  bandcamp: { name: 'Bandcamp', color: '#629AA9' },
  other: { name: 'Link', color: '#888888' },
}
