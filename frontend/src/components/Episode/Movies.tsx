import React, { Component } from 'react'
import { connect, useSelector } from 'react-redux'
import { useQuery } from '@apollo/client'
import { Col, Row } from 'react-bootstrap'
import {
  Spinner,
  Accordion,
  AccordionItem,
  Box,
  AccordionPanel,
  AccordionButton,
  Tag,
  Heading,
  AccordionIcon,
} from '@chakra-ui/react'
import './Episode.css'
import { SEARCH_MOVIES } from '../../graphql/MovieByTitle'
import { Episode, EpisodeState } from '../../store/action/Type'
import store from '../../store/Store'

const Movies = () => {
  const { loading, error, data } = useQuery(SEARCH_MOVIES)
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
      type: element.Type,
      desc: element.Description,
    }
    store.dispatch(addEpisode(newEpisode))
  }

  return <></>
}

export default Movies
