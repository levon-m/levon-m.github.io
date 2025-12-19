export interface InspirationItem {
  id: string
  title: string
  description: string
  url: string
  category: 'artist' | 'paper' | 'tool' | 'article' | 'project'
}

export const categoryLabels: Record<InspirationItem['category'], string> = {
  artist: 'Artists & Music',
  paper: 'Papers & Research',
  tool: 'Tools & Software',
  article: 'Articles & Tutorials',
  project: 'Projects & Hardware',
}
