import { Episode, EpisodeAction, EpisodeState } from './action/Type'
import * as actionType from './action/ActionTypes'

/*
const initialState: EpisodeState = {
    episodes: []
}   
*/

/**
 * Tar inn en state og en action som ønskes å utføre
 * Sjekker hvilken Action som ønsker å utføre, går inn i different cases
 * Dersom casen tilsvarer action typen så ønsker vi å lage en ny episode og legge den til i state
 *
 * @param state Store state
 * @param action Handling vi ønsker å utføre, feks addEpisode
 * @returns en oppdatert state
 */
const initialState: EpisodeState = {
  episodes: [],
}

const reducer = (
  state: EpisodeState = initialState,
  action: EpisodeAction
): EpisodeState => {
  switch (action.type) {
    case actionType.ADD_EPISODE:
      const newEpisode: Episode = {
        title: action.episode.title,
        episode: action.episode.episode,
        score: action.episode.score,
      }
      return {
        ...state,
        episodes: state.episodes.concat(newEpisode),
      }
    default:
      return state
  }
}

export default reducer
