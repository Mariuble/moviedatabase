import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import { Box, Spinner } from '@chakra-ui/react'
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

export const SEARCH_ANIMES = gql`
  query RootQueryType($title: String!, $first: Int!, $offset: Int!) {
    movieByTitle(title: $title, first: $first, offset: $offset) {
      Title
      Type
      Score
    }
  }
`
export const ANIMES_SORTED_TITLE = gql`
  query RootQueryType(
    $title: String!
    $first: Int!
    $offset: Int!
    $sort: String
  ) {
    sortMoviesByTitle(
      title: $title
      first: $first
      offset: $offset
      sort: $sort
    ) {
      Title
      Type
      Score
    }
  }
`
export const TEST_QUERY = gql`
  query RootQueryType($title: String!, $first: Int!, $offset: Int!) {
    testQuery(title: $title, first: $first, offset: $offset) {
      Title
      Type
      Score
    }
  }
`

export const GET_ANIME_COUNT = gql`
  query RootQueryType($title: String) {
    countMoviesByTitle(title: $title)
  }
`

const Animes = () => {
  const [baseTitle, setBaseTitle] = useState('')
  const [baseFirst, setBaseFirst] = useState(10)
  const [baseOffset, setBaseOffset] = useState(0)
  const [searchWord, setSearchWord] = useState('Search any title')
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

  const handleSearch = (e: any) => {
    if (e.key === 'Enter') {
      setBaseTitle(e.target.value)
      setBaseOffset(0)
      setSearchWord(e.target.value)
      setPageNo(1)
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
      <TableCaption>
        Showing results {baseOffset + 1} -{' '}
        {baseOffset + data.sortMoviesByTitle.length} of{' '}
        {data2.countMoviesByTitle} results
        <Heading>Page {pageNo}</Heading>
      </TableCaption>
    )
  }

  const handleFilter = (e: any) => {
    setSort(e)
    filterStore.dispatch(setFilter(e))
    console.log('e: ' + e + ' Type of: ' + typeof e)
  }

  if (loading || loading2 || loading3)
    return (
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    )
  console.log(data3)
  console.log('Offset: ' + baseOffset)
  console.log(typeof data)
  console.log(data)
  return (
    <div>
      <Input placeholder={searchWord} onKeyDown={handleSearch} />
      <DropdownButton
        title={sortOn}
        id='dropdown-menu2'
        onSelect={handleFilter}
      >
        <Dropdown.Item eventKey='Score'>Score</Dropdown.Item>
        <Dropdown.Item eventKey='Title'>Title</Dropdown.Item>
        <Dropdown.Item eventKey='None'>None</Dropdown.Item>
        <Dropdown.Divider />
      </DropdownButton>
      <Table variant='striped' colorScheme='blue'>
        <PageNo />
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Type</Th>
            <Th>Score</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.sortMoviesByTitle.map((movie: any) => (
            <Tr>
              <Td>{movie.Title}</Td>
              <Td>{movie.Type}</Td>
              <Td>{movie.Score}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Box textAlign='center'>
        <PrevBtn />
        <NextBtn />
        <Button colorScheme='blue' onClick={handleNextPage2}>
          Check stats
        </Button>
      </Box>
      {/* {data.map((item: { Title: {} | null | undefined }) => (
        <tr>
          <td>{item.Title}</td>
          <td>{item.Title}</td>
        </tr>
      ))} */}
    </div>
  )
}

export default Animes
