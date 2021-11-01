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
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Movies from './components/Episode/Movies'
import { Container } from 'react-bootstrap'

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
        <AllEpisodes></AllEpisodes>
        <Navbar />
        {/* <Container>
          <Route path='/movies' component={Movies} />
          {/* <Route path='/register' component={} />
        </Container> */}
        <Movies />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
