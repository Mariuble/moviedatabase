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
import { ChakraProvider, ColorModeScript, CSSReset } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Movies from './components/Episode/Movies'
import MovieForm from './components/MovieForm'

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Navbar />
        <AllEpisodes></AllEpisodes>
        <Movies />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
