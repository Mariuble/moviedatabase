import React, { Component } from 'react'
import { connect } from 'react-redux'
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
import { Episode } from '../../store/action/Type'
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
    }
    store.dispatch(addEpisode(newEpisode))
  }

  return (
    <Box flex='1' textAlign='center' className='p-1'>
      <Heading className='m-3'>Animes</Heading>
      {data.movieByTitle.map((movie: any) => (
        <Accordion allowToggle className='m-1' boxShadow='base' rounded='xl'>
          <AccordionItem className='p-3 m-2'>
            <AccordionButton className=''>
              <Col>
                <Row>
                  <Heading as='h5' size='md'>
                    {movie.Title}
                  </Heading>
                </Row>
                <Tag className='m-1'>{movie.Type}</Tag>
              </Col>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>{movie.Description}</AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
    </Box>
  )
}

export default Movies
