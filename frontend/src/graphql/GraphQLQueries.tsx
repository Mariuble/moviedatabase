import { gql } from '@apollo/client'

export const ANIMES_SORTED_TITLE = gql`
  query RootQueryType(
    $title: String!
    $first: Int!
    $offset: Int!
    $sort: String
  ) {
    sortMoviesByTitle(
      title: $title
      first: $first
      offset: $offset
      sort: $sort
    ) {
      Title
      Type
      Score
      Episodes
      Description
    }
  }
`
export const TEST_QUERY = gql`
  query RootQueryType($title: String!, $first: Int!, $offset: Int!) {
    testQuery(title: $title, first: $first, offset: $offset) {
      Title
      Type
      Score
    }
  }
`

export const GET_ANIME_COUNT = gql`
  query RootQueryType($title: String) {
    countMoviesByTitle(title: $title)
  }
`
export const ADD_MOVIE = gql`
  mutation RootMutationType(
    $title: String
    $type: String
    $episodes: Int
    $description: String
    $score: Float
  ) {
    addMovie(
      title: $title
      type: $type
      episodes: $episodes
      description: $description
      score: $score
    ) {
      Title
    }
  }
`
