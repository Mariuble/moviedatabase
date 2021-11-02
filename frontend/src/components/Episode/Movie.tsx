import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Heading,
  Tag,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Episode } from '../../store/action/Type'

const Movie = (movie: any) => {
  return (
    <div>
      <Accordion allowToggle className='m-1' boxShadow='base' rounded='xl'>
        <AccordionItem className='p-3 m-2'>
          <AccordionButton className=''>
            <Col>
              <Row>
                <Heading as='h5' size='md'>
                  {movie.Title}
                </Heading>
              </Row>
              <Tag className='m-1'>Score: {movie.Score}</Tag>
              <Tag className='m-1'>Type: {movie.Type}</Tag>
              <Tag className='m-1'>Episodes: {movie.Episodes}</Tag>
            </Col>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <p>{movie.Description}</p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Movie
