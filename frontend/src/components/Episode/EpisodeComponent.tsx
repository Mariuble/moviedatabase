import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Heading,
  Tag,
} from '@chakra-ui/react'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Episode } from '../../store/action/Type'

const EpisodeComponent = (episode: Episode) => {
  return (
    <div>
      <div>
        <Accordion allowToggle className='m-1' boxShadow='base' rounded='xl'>
          <AccordionItem className='p-3 m-2'>
            <AccordionButton className=''>
              <Col>
                <Row>
                  <Heading as='h5' size='md'>
                    {episode.title}
                  </Heading>
                </Row>
                <Tag className='m-1'>Score: {episode.score}</Tag>
                <Tag className='m-1'>Type: {episode.type}</Tag>
                <Tag className='m-1'>Episodes: {episode.episode}</Tag>
              </Col>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>{episode.desc}</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default EpisodeComponent
