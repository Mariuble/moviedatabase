import React from 'react'
import { Episode } from './components/Episode/Episode'
import AllEpisodes from './components/AllEpisodes/AllEpisodes'
import { ChakraProvider, Heading } from '@chakra-ui/react'
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
        <Heading textAlign='center'>Animes go here</Heading>
        <div>
          <Animes />
        </div>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
