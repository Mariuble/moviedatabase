export interface Episode {
  title: string
  episode: number
  score: number
  type: string
  desc: string
}

export interface EpisodeAction {
  type: string
  episode: Episode
}

export interface EpisodeState {
  episodes: Episode[]
}
