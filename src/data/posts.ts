export interface Post {
  id: string
  slug: string
  title: string
  date: string
  tags: string[]
  summary: string
  body: string
}

// CUSTOMIZE: Add blog posts or project write-ups
// This is set up for future use - you can add a /blog route to display these
export const posts: Post[] = [
  {
    id: 'building-microloop',
    slug: 'building-microloop',
    title: 'Building MicroLoop: Lessons in Embedded Audio',
    date: '2024-06-15',
    tags: ['embedded', 'audio', 'teensy', 'dsp'],
    summary:
      'A deep dive into the design decisions and challenges of building a hardware looper from scratch.',
    body: `
# Building MicroLoop: Lessons in Embedded Audio

When I started this project, I had a simple goal: build a looper that I could actually use for live performances.
What I didn't expect was how much I'd learn about audio programming, real-time systems, and hardware design.

## The Challenge

Commercial loopers are either too simple (single loop, no sync) or too complex (menu diving, steep learning curves).
I wanted something in between: powerful enough for creative performance, but immediate enough to be playable.

## Technical Deep Dive

The core of MicroLoop is a state machine that manages the looper's modes...

*[Continue writing your blog post here]*
    `,
  },
  {
    id: 'pitch-detection-bass',
    slug: 'pitch-detection-bass',
    title: 'Pitch Detection for Bass: Why It\'s Hard',
    date: '2024-04-20',
    tags: ['dsp', 'audio', 'bassmint'],
    summary:
      'Exploring the challenges of detecting pitch from bass guitar signals and how I approached it in BassMINT.',
    body: `
# Pitch Detection for Bass: Why It's Hard

Bass frequencies are tricky. The fundamental frequency of a low E string is around 41Hz,
which means you need to observe multiple complete cycles before you can accurately determine the pitch.

## The Problem

At 41Hz, one complete cycle takes about 24ms. Most pitch detection algorithms need at least
2-3 cycles to get a reliable estimate, which means ~50-75ms of latency just from physics.

*[Continue writing your blog post here]*
    `,
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getPostsByTag(tag: string): Post[] {
  return posts.filter((p) => p.tags.includes(tag))
}

export function getRecentPosts(count: number = 5): Post[] {
  return [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count)
}
