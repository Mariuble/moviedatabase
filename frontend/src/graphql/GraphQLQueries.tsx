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
