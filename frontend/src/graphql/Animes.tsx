import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import { Spinner } from '@chakra-ui/react'

export const SEARCH_ANIMES = gql`
  query RootQueryType {
    movieByTitle(title: "code", first: 5, offset: 5) {
      Title
      Type
    }
  }
`

const Animes = () => {
  const { loading, error, data } = useQuery(SEARCH_ANIMES)

  if (loading) return <Spinner />
  const { movies } = data
  console.log(movies)
  return (
    <div>
      <h1>animes go here</h1>
      <h2>
        {data.movieByTitle.map((movie: any) => (
          <tr>
            <td>{movie.Title}</td>
            <td>{movie.Type}</td>
          </tr>
        ))}
      </h2>
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
