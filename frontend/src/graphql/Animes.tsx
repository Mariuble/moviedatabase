import React, { useState } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import {
  Box,
  IconButton,
  InputGroup,
  Skeleton,
  Spinner,
  Stack,
} from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Center,
  Button,
  Input,
  Heading,
} from '@chakra-ui/react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { filterStore, setFilter } from '..'
import {
  ADD_MOVIE,
  ANIMES_SORTED_TITLE,
  GET_ANIME_COUNT,
  TEST_QUERY,
} from './GraphQLQueries'
import { SearchIcon } from '@chakra-ui/icons'
import Movie from '../components/Episode/Movie'

const Animes = () => {
  const [baseTitle, setBaseTitle] = useState('')
  const [baseFirst, setBaseFirst] = useState(10)
  const [baseOffset, setBaseOffset] = useState(0)
  const [searchWord, setSearchWord] = useState('Search any title')
  const [searchInput, setsearchInput] = useState('Search any title')
  const [pageNo, setPageNo] = useState(1)
  const [sortOn, setSort] = useState('Title')
  const { loading, error, data, refetch } = useQuery(ANIMES_SORTED_TITLE, {
    variables: {
      title: baseTitle,
      first: baseFirst,
      offset: baseOffset,
      sort: sortOn,
    },
  })
  const {
    loading: loading3,
    error: error3,
    data: data3,
    refetch: refetch3,
  } = useQuery(TEST_QUERY, {
    variables: { title: baseTitle, first: baseFirst, offset: baseOffset },
  })
  const {
    loading: loading2,
    error: error2,
    data: data2,
    refetch: refetch2,
  } = useQuery(GET_ANIME_COUNT, {
    variables: { title: baseTitle },
  })

  const handleSearch = () => {
    setBaseTitle(searchInput)
    setBaseOffset(0)
    setSearchWord(searchInput)
    setPageNo(1)
  }

  const handleUpdate = (e: any) => {
    if (e.key === 'Enter') {
      handleSearch()
    } else {
      setsearchInput(e.target.value)
    }
  }

  const handlePrevPage = () => {
    if (baseOffset >= baseFirst) {
      setBaseOffset(baseOffset - 10)
      setPageNo(pageNo - 1)
    }
  }
  const handleNextPage = () => {
    if (data.sortMoviesByTitle.length == baseFirst) {
      setBaseOffset(baseOffset + 10)
      setPageNo(pageNo + 1)
    }
  }
  const handleNextPage2 = () => {
    console.log('Data length: ' + data.sortMoviesByTitle.length)
    console.log(data.sortMoviesByTitle.length > baseOffset)
    console.log('Page number: ' + pageNo)
    console.log('Results ' + data2.countMoviesByTitle)
  }

  function NextBtn() {
    console.log('result: ' + (data2.countMoviesByTitle % baseFirst > 0))
    if (data2.countMoviesByTitle - pageNo * baseFirst > 0) {
      return (
        <Button colorScheme='blue' onClick={handleNextPage}>
          Next page
        </Button>
      )
    } else {
      return (
        <Button colorScheme='blue' disabled>
          Next page
        </Button>
      )
    }
  }

  function PrevBtn() {
    if (pageNo > 1) {
      return (
        <Button colorScheme='blue' onClick={handlePrevPage}>
          Prev page
        </Button>
      )
    } else {
      return (
        <Button colorScheme='blue' disabled>
          Prev page
        </Button>
      )
    }
  }

  function PageNo() {
    return (
      <p>
        Showing results {baseOffset + 1} -{' '}
        {baseOffset + data.sortMoviesByTitle.length} of{' '}
        {data2.countMoviesByTitle} results
        <Heading>Page {pageNo}</Heading>
      </p>
    )
  }

  const handleFilter = (e: any) => {
    setSort(e)
    filterStore.dispatch(setFilter(e))
    console.log('e: ' + e + ' Type of: ' + typeof e)
  }

  if (loading || loading2 || loading3)
    return (
      <Box textAlign='center'>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
        <Stack>
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
        </Stack>
      </Box>
    )
  console.log(data3)
  console.log('Offset: ' + baseOffset)
  console.log(typeof data)
  console.log(data)
  return (
    <div>
      <InputGroup>
        <Input
          width='40%'
          placeholder={searchWord}
          variant='outline'
          onKeyUp={(e) => handleUpdate(e)}
          aria-label='Searchfield'
        />
        <IconButton
          onClick={handleSearch}
          aria-label='Search button'
          icon={<SearchIcon />}
        />
      </InputGroup>
      <DropdownButton
        title='Sort list on'
        aria-label='Sort list By'
        id='dropdown-menu2'
        onSelect={handleFilter}
      >
        <Dropdown.Item eventKey='Score'>Score</Dropdown.Item>
        <Dropdown.Item eventKey='Title'>Title</Dropdown.Item>
        <Dropdown.Item eventKey='None'>None</Dropdown.Item>
        <Dropdown.Divider />
      </DropdownButton>
      <ul>{data.sortMoviesByTitle.map((movie: any) => Movie(movie))}</ul>
      <Box textAlign='center'>
        <PrevBtn />
        <NextBtn />
        {/* <Button colorScheme='blue' onClick={handleNextPage2}>
          Check stats
        </Button> */}
        <PageNo />
      </Box>
    </div>
  )
}

export default Animes
