import React, { useState } from 'react'
import { Box, Heading, ThemeProvider, theme, FormControl, FormLabel, Input, FormErrorMessage, Button, RadioGroup, Stack, Radio, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Textarea } from '@chakra-ui/react'
import { useMutation } from '@apollo/client'
import { ADD_MOVIE } from '../graphql/GraphQLQueries'

// Form for adding Movie
const MovieForm = () => {

    const [title, setTitle] = useState('')
    const [type, setType] = useState('Movie')
    const [episodes, setEpisodes] = useState(0)
    const [description, setDescription] = useState('This is a default description')

    const [addMovie, { data, loading, error }] = useMutation(ADD_MOVIE);

    if (loading) return 'Submitting...'
    if (error) return `Submission error! ${error.message}`

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        addMovie({ variables: { title: title, type: type, episodes: episodes, description: description } })
        // Refetch queries to update cache: data from mutation
    }

    return (
        <ThemeProvider theme={theme}>
            <Box mt={20} w={500} p={4} m="20px auto" border='1px' borderColor="gray.300" borderRadius='xl' boxShadow="lg">
                <Heading as="h1" size="xl" textAlign="center">
                    Add Anime
                </Heading>

                <form
                    onSubmit={onSubmit}
                >
                    <FormControl isRequired mt={5}>
                        <FormLabel htmlFor='title'>Title</FormLabel>
                        <Input
                            placeholder='title'
                            onChange={event => setTitle(event.currentTarget.value)}
                        />
                    </FormControl>

                    <FormControl isRequired mt={5}>
                        <FormLabel htmlFor='type'>Type</FormLabel>
                        <RadioGroup
                            defaultValue={type}
                            onChange={setType}
                        >
                            <Stack spacing={5} direction="row">
                                <Radio defaultChecked value="Movie">Movie</Radio>
                                <Radio value="TV">TV</Radio>
                                <Radio value="OVA">OVA</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>

                    <FormControl isRequired mt={5}>
                        <FormLabel htmlFor='episodes'>Episodes</FormLabel>
                        <NumberInput
                            defaultValue={15}
                            allowMouseWheel
                        >
                            <NumberInputField onChange={event => setEpisodes} />
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
                            placeholder="Write a description"
                            onChange={event => setDescription(event.currentTarget.value)}
                        />
                    </FormControl>


                    <Button mt={10} colorScheme="teal" type="submit" width="full">
                        Submit
                    </Button>
                </form>
            </Box>
        </ThemeProvider>
    )
}

export default MovieForm
