import React from 'react'
import AllEpisodes from './components/AllEpisodes/AllEpisodes'
import { ChakraProvider } from '@chakra-ui/react'
import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
  useQuery,
} from '@apollo/client'
import { Episode } from './store/action/Type'
import store from './store/Store'
import Animes from './graphql/Animes'

const SEARCH_ANIMES = gql`
  query RootQueryType {
    movieByTitle(title: "code", first: 5, offset: 5) {
      Title
      Episodes
      Score
    }
  }
`

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <div>
          <h1>Animes</h1>
          <Animes />
          <AllEpisodes></AllEpisodes>
        </div>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
