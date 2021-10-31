import { gql } from "@apollo/client";

export const SEARCH_MOVIES = gql`
query RootQueryType {
  movieByTitle(title: "code", first: 5, offset: 5) {
    Title
    Type
    Description
  }
}
`
