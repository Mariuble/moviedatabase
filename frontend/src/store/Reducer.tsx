import { Episode, EpisodeAction, EpisodeState } from './action/Type'
import * as actionType from './action/ActionTypes'

/*
const initialState: EpisodeState = {
    episodes: []
}   
*/

function removeDuplicates(duplicateEpisodes: Episode[]) {
  const store = new Set(duplicateEpisodes)
  const turnToArray = [...store]
  return turnToArray
}

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
        type: action.episode.type,
        desc: action.episode.desc,
      }
      state.episodes.forEach((episode) => {
        if (episode.title == newEpisode.title) {
          console.log('DUPLICATE ' + episode.title + ' ' + newEpisode.title)
          return state
        }
      })
      console.log('LEGGER TIL')
      return {
        ...state,
        episodes: state.episodes
          .filter((episode) => episode.title != newEpisode.title)
          .concat(newEpisode),

        //episodes: removeDuplicates(state.episodes),
      }
    default:
      return state
  }
}

export default reducer
