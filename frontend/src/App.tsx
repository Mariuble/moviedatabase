import React from 'react'
import AllEpisodes from './components/AllEpisodes/AllEpisodes'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Episode from './components/Episode/Episode'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Animes from './graphql/Animes'

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
  })
  return (
    <ApolloProvider client={client}>
      <Navbar />
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
