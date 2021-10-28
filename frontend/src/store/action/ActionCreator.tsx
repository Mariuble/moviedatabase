import { Episode, EpisodeAction } from "./Type";
import * as actionType from "./ActionTypes"

export function addEpisode(episode: Episode) {
    const action: EpisodeAction = {
        type: actionType.ADD_EPISODE,
        episode,
    }
}
    