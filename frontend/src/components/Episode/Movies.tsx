import React, { Component } from 'react'
import { connect } from 'react-redux'
import { useQuery } from '@apollo/client'
import { } from 'react-bootstrap'
import { Spinner, Accordion, AccordionItem, Box, AccordionPanel, AccordionButton } from '@chakra-ui/react'
import './Episode.css'
import { SEARCH_MOVIES } from '../../graphql/MovieByTitle'

const Movies = () => {
    const { loading, error, data } = useQuery(SEARCH_MOVIES)
    if (loading) return <Spinner />
    const { movies } = data
    console.log(movies)

    return (
        <>
            <h1>Animes</h1>
            {data.movieByTitle.map((movie: any) => (
                <Accordion allowToggle className='m-1'>
                    <AccordionItem>
                        <AccordionButton>{movie.Title}</AccordionButton>
                        <AccordionPanel>
                            {movie.Description}
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            ))}
        </>
    )
}

export default Movies
