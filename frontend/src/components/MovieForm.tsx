import React, { useState } from 'react'
import {
  Box,
  Heading,
  ThemeProvider,
  theme,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  RadioGroup,
  Stack,
  Radio,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
} from '@chakra-ui/react'
import { useMutation } from '@apollo/client'
import { ADD_MOVIE } from '../graphql/GraphQLQueries'

// Form for adding Movie
const MovieForm = () => {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('Movie')
  const [score, setScore] = useState(5.0)
  const [episodes, setEpisodes] = useState(15)
  const [description, setDescription] = useState(
    'This is a default description'
  )

  const [addMovie, { data, loading, error }] = useMutation(ADD_MOVIE)

  // if (loading) return 'Submitting...'
  // if (error) return `Submission error! ${error.message}`

  return (
    <ThemeProvider theme={theme}>
      <Box
        mt={20}
        w={500}
        p={4}
        m='20px auto'
        border='1px'
        borderColor='gray.300'
        borderRadius='xl'
        boxShadow='lg'
      >
        <Heading as='h1' size='xl' textAlign='center'>
          Add Anime
        </Heading>

        <form
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            console.log(title, '|', type, '|', episodes, '|', description)
            addMovie({
              variables: {
                title: title,
                type: type,
                episodes: episodes,
                score: score,
                description: description,
              },
            })
            return alert(
              'Movie added successfully. You can now search for it in the overview.'
            )
            // Refetch queries to update cache: data from mutation
          }}
        >
          <FormControl isRequired mt={5}>
            <FormLabel htmlFor='title'>Title</FormLabel>
            <Input
              placeholder='title'
              onChange={(event) => setTitle(event.currentTarget.value)}
            />
          </FormControl>

          <FormControl isRequired mt={5}>
            <FormLabel htmlFor='type'>Type</FormLabel>
            <RadioGroup defaultValue={type} onChange={(val) => setType(val)}>
              <Stack spacing={5} direction='row'>
                <Radio defaultChecked value='Movie'>
                  Movie
                </Radio>
                <Radio value='TV'>TV</Radio>
                <Radio value='OVA'>OVA</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired mt={5}>
            <FormLabel htmlFor='episodes'>Episodes</FormLabel>
            <NumberInput
              defaultValue={episodes}
              allowMouseWheel
              onChange={(val) => setEpisodes(parseInt(val))}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl isRequired mt={5}>
            <FormLabel htmlFor='score'>Score</FormLabel>
            <NumberInput
              onChange={(val) => setScore(parseFloat(val))}
              defaultValue={score}
              allowMouseWheel
              precision={2}
              step={0.1}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl isRequired mt={5}>
            <FormLabel htmlFor='description'>Description</FormLabel>
            <Textarea
              defaultValue={description}
              placeholder='Write a description'
              onChange={(event) => setDescription(event.currentTarget.value)}
            />
          </FormControl>

          <Button
            mt={10}
            colorScheme='teal'
            type='submit'
            width='full'
            isLoading={loading}
          >
            Submit
          </Button>
        </form>
      </Box>
    </ThemeProvider>
  )
}

export default MovieForm
