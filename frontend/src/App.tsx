import React from 'react'
import AllEpisodes from './components/AllEpisodes/AllEpisodes'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Movies from './components/Episode/Movies'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { Container } from 'react-bootstrap'

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
  })
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Navbar />
        {/* <Container>
          <Route path='/movies' component={Movies} />
          {/* <Route path='/register' component={} />
        </Container> */}
        <Movies />
      </ChakraProvider>
    </ApolloProvider >
  )
}

export default App
