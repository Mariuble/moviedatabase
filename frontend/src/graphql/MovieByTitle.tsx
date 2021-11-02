import { gql } from '@apollo/client'

export const SEARCH_MOVIES = gql`
  query RootQueryType {
    movieByTitle(title: "", first: 5, offset: 5) {
      Title
      Score
      Episodes
      Type
      Description
    }
  }
`
