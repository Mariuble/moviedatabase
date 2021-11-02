import React from 'react'
import AllEpisodes from './components/AllEpisodes/AllEpisodes'
import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
  useQuery,
} from '@apollo/client'
import { Episode } from './store/action/Type'
import store from './store/Store'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import MovieForm from './components/MovieForm'
import { ChakraProvider, Heading } from '@chakra-ui/react'
import Animes from './graphql/Animes'

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Navbar />
        <Heading textAlign='center'>Animes go here</Heading>
        <div>
          <Animes />
        </div>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
