import React from 'react'
import { Episode } from './components/Episode/Episode'
import AllEpisodes from './components/AllEpisodes/AllEpisodes'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <AllEpisodes></AllEpisodes>
    </ChakraProvider>
  )
}

export default App
