import { setUncaughtExceptionCaptureCallback } from 'process'
import { stringify } from 'querystring'
import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { EpisodeState } from '../../store/action/Type'
import { Episode } from '../../store/action/Type'
import store from '../../store/Store'
import { DropdownButton, Dropdown, Col, Row } from 'react-bootstrap'
import './AllEpisodes.css'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Heading,
  Tag,
} from '@chakra-ui/react'

//PASS PÅ ANY
export const SearchField = (props: any) => {
  const episodes = useSelector((state: EpisodeState) => state.episodes)
  const options = ['score', 'title']
  const [text, setText] = useState('')
  const [searchBy, setSearch] = useState('Title')
  const [SortOn, setSort] = useState('Title')

  const handleSearch = (e: any) => {
    console.log(e)
    setSearch(e)
  }

  const handleFilter = (e: any) => {
    console.log(e)
    setSort(e)
  }

  /**
   * Rendrer hver enkel episode. Har et filter som bestemmer om man vil søke etter episoder med høyere eller lik score
   * Har man tittel som valg sjekker man om tittelen inneholder søket.
   * Hvis det ikke er noe i søkefeltet så vises alle.
   *
   * @param episode episoden man skal mappe
   * @returns En episode med tittel, score og episodenr
   */

  function renderEpisodes(episode: Episode) {
    return (
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
                <Tag className='m-1'>{episode.score}</Tag>
                <Tag className='m-1'>{episode.episode}</Tag>
              </Col>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>DESC</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    )
  }

  /**
   * Hjelper til med å søke etter en episode for så å returnere episoden(e) man søker etter
   *
   * @param episode Alle episodene
   * @returns Episodene som matcher søkeordet
   */
  function search(episode: Episode) {
    if (
      episode.title.includes(text) &&
      searchBy == 'Title' &&
      text.length != 0
    ) {
      return renderEpisodes(episode)
    } else if (
      episode.score >= parseInt(text) &&
      searchBy == 'Score' &&
      text.length != 0
    ) {
      return renderEpisodes(episode)
    } else if (text.length == 0) return renderEpisodes(episode)
  }

  /**
   * Hjelper til med å sortere listen over episoder basert på hva man ønsker å sortere etter.
   * Lager en kopi av episodene og sorterer dem enten på tittel eller score
   * @param episodes Episoder man ønsker å sortere
   * @returns sortert eller usortert liste over episoder
   */
  function HelpSort(episodes: Episode[]) {
    let sorted = [...episodes]
    if (SortOn == 'Title') {
      sorted = sorted.sort((a, b) => a.title.localeCompare(b.title))
    } else if (SortOn == 'Score') {
      sorted = sorted.sort((a, b) => b.score - a.score)
    } else {
      return episodes.map(search)
    }
    return sorted.map(search)
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Search'
        onChange={(e) => setText(e.target.value)}
      />
      <DropdownButton
        title='Search for'
        id='dropdown-menu'
        onSelect={handleSearch}
      >
        <Dropdown.Item eventKey='Score'>Score</Dropdown.Item>
        <Dropdown.Item eventKey='Title'>Title</Dropdown.Item>
        <Dropdown.Divider />
      </DropdownButton>
      <DropdownButton
        title='Sort by'
        id='dropdown-menu2'
        onSelect={handleFilter}
      >
        <Dropdown.Item eventKey='Score'>Score</Dropdown.Item>
        <Dropdown.Item eventKey='Title'>Title</Dropdown.Item>
        <Dropdown.Item eventKey='None'>None</Dropdown.Item>
        <Dropdown.Divider />
      </DropdownButton>
      <Box flex='1' textAlign='center' className='p-1'>
        <Heading className='m-3'>Animes</Heading>
        <ul>{HelpSort(episodes)}</ul>
      </Box>
    </div>
  )
  function updateInput(value: string) {
    setText(value)
  }
}

export default SearchField
