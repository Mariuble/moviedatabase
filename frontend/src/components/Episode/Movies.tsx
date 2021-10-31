import React, { Component } from 'react'
import { connect } from 'react-redux'
import { useQuery } from '@apollo/client'
import { Col, Row } from 'react-bootstrap'
import { Spinner, Accordion, AccordionItem, Box, AccordionPanel, AccordionButton, Tag, Heading, AccordionIcon } from '@chakra-ui/react'
import './Episode.css'
import { SEARCH_MOVIES } from '../../graphql/MovieByTitle'

const Movies = () => {
    const { loading, error, data } = useQuery(SEARCH_MOVIES)
    if (loading) return <Spinner />
    const { movies } = data
    console.log(movies)

    return (
        <Box flex="1" textAlign="center" className='p-1'>
            <Heading className='m-3'>Animes</Heading>
            {data.movieByTitle.map((movie: any) => (
                <Accordion allowToggle className='m-1' boxShadow="base" rounded='xl'>
                    <AccordionItem className='p-3 m-2'>
                        <AccordionButton className='' >
                            <Col>
                                <Row>
                                    <Heading as='h5' size='md' >{movie.Title}</Heading>
                                </Row>
                                <Tag className='m-1'>{movie.Type}</Tag>
                            </Col>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            {movie.Description}
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            ))
            }
        </Box>
    )
}

export default Movies
