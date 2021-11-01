import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import { Spinner } from '@chakra-ui/react'
import { Episode, EpisodeState } from '../store/action/Type'
import store from '../store/Store'
import { useSelector } from 'react-redux'

export const SEARCH_ANIMES = gql`
  query RootQueryType {
    movieByTitle(title: "code", first: 5, offset: 5) {
      Title
      Episodes
      Score
    }
  }
`

const Animes = () => {
  const { loading, error, data } = useQuery(SEARCH_ANIMES)
  //const episodes = useSelector((state: EpisodeState) => state.episodes)

  function addEpisode(episode: Episode) {
    return {
      type: 'addepisode',
      episode: episode,
    }
  }

  if (loading) return <Spinner />
  const { movies } = data
  console.log(movies)
  for (let index = 0; index < data.movieByTitle.length; index++) {
    const element = data.movieByTitle[index]
    const newEpisode: Episode = {
      title: element.Title,
      score: element.Score,
      episode: element.Episodes,
    }
    store.dispatch(addEpisode(newEpisode))
  }
  return <div></div>
}

export default Animes
