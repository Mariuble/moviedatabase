import React from 'react'
import { Episode } from './components/Episode/Episode'
import AllEpisodes from './components/AllEpisodes/AllEpisodes'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Animes from './graphql/Animes'

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
        </div>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
