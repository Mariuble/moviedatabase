import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import { Spinner } from '@chakra-ui/react'

export const SEARCH_ANIMES = gql`
  query RootQueryType($title: String!, $offset: Int) {
    movieByTitle(title: $title, first: 10, offset: $offset) {
      Title
      Type
    }
  }
`

const Animes = () => {
  const [baseTitle, setBaseTitle] = useState('a')
  const [baseOffset, setBaseOffset] = useState(0)
  const { loading, error, data } = useQuery(SEARCH_ANIMES, {
    variables: { title: baseTitle, offset: baseOffset },
  })

  const handleSearch = (e: any) => {
    if (e.key === 'Enter') {
      setBaseTitle(e.target.value)
    }
  }
  const handleNextPage = () => {
    setBaseOffset(10)
    console.log('hei')
  }
  if (loading) return <Spinner />
  const { movies } = data
  console.log(movies)
  return (
    <div>
      <input type='text' placeholder='Search' onKeyDown={handleSearch} />
      <h1>Animes go here</h1>
      <h2>
        {data.movieByTitle.map((movie: any) => (
          <tr>
            <td>{movie.Title}</td>
            <td>{movie.Type}</td>
          </tr>
        ))}
      </h2>
      <button onClick={handleNextPage}>Next page</button>
      {/* {data.map((item: { Title: {} | null | undefined }) => (
        <tr>
          <td>{item.Title}</td>
          <td>{item.Title}</td>
        </tr>
      ))} */}
    </div>
  )
}

export default Animes
