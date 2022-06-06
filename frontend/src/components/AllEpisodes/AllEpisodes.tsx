import { useState } from 'react'
import { useSelector } from 'react-redux'
import { EpisodeState } from '../../store/action/Type'
import { Episode } from '../../store/action/Type'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import './AllEpisodes.css'
import { Box, Heading } from '@chakra-ui/react'
import EpisodeComponent from '../Episode/EpisodeComponent'

//PASS PÅ ANY
export const SearchField = (props: any) => {
  const episodes = useSelector((state: EpisodeState) => state.episodes)
  const [text, setText] = useState('')
  const [searchBy, setSearch] = useState('Title')
  const [SortOn, setSort] = useState('Title')

  const handleSearch = (e: any) => {
    setSearch(e)
  }

  const handleFilter = (e: any) => {
    setSort(e)
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
      return EpisodeComponent(episode)
    } else if (
      episode.score >= parseFloat(text) &&
      searchBy == 'Score' &&
      text.length != 0
    ) {
      return EpisodeComponent(episode)
    } else if (text.length == 0) return EpisodeComponent(episode)
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
}

export default SearchField
