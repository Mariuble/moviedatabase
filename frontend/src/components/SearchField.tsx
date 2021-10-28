import { setUncaughtExceptionCaptureCallback } from 'process'
import { stringify } from 'querystring'
import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { EpisodeState } from '../store/action/Type'
import { Episode } from '../store/action/Type'
import store from '../store/Store'
import { DropdownButton, Dropdown } from 'react-bootstrap'

//PASS PÅ ANY
export const SearchField = (props: any) => {
  const episodes = useSelector((state: EpisodeState) => state.episodes)
  const options = ['score', 'title']
  const [text, setText] = useState('')
  const [filterOn, setFilter] = useState('Title')
  const handleSelect = (e: any) => {
    console.log(e)
    setFilter(e)
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
    if (
      episode.title.includes(text) &&
      filterOn == 'Title' &&
      text.length != 0
    ) {
      return (
        <div>
          <h1>{episode.title}</h1>
          <p>Viewer rating: {episode.score}</p>
          <p>Episode nr: {episode.episode}</p>
          <a href=''>See more</a>
        </div>
      )
    } else if (
      episode.score >= parseInt(text) &&
      filterOn == 'Score' &&
      text.length != 0
    ) {
      return (
        <div>
          <h1>{episode.title}</h1>
          <p>Viewer rating: {episode.score}</p>
          <p>Episode nr: {episode.episode}</p>
          <a href=''>See more</a>
        </div>
      )
    } else if (text.length == 0)
      return (
        <div>
          <h1>{episode.title}</h1>
          <p>Viewer rating: {episode.score}</p>
          <p>Episode nr: {episode.episode}</p>
          <a href=''>See more</a>
        </div>
      )
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Search'
        onChange={(e) => setText(e.target.value)}
      />
      <DropdownButton
        title='Sort by'
        id='dropdown-menu'
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey='Score'>Score</Dropdown.Item>
        <Dropdown.Item eventKey='Title'>Title</Dropdown.Item>
        <Dropdown.Divider />
      </DropdownButton>
      <h1>{store.getState}</h1>
      <h2>{episodes.map(renderEpisodes)}</h2>
    </div>
  )
  function updateInput(value: string) {
    setText(value)
  }
}

export default SearchField
