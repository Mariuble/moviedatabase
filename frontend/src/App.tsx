import React from 'react'
import AllEpisodes from './components/AllEpisodes/AllEpisodes'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Episode from './components/Episode/Episode'

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Episode />
      <AllEpisodes />
    </ChakraProvider>
  )
}

export default App
