import React from 'react'
import { Box, Heading, ThemeProvider, theme, FormControl, FormLabel, Input, FormErrorMessage, Button, RadioGroup, Stack, Radio, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Textarea } from '@chakra-ui/react'
import { useForm, Controller } from 'react-hook-form'



// Form for adding Movie
const MovieForm = () => {

    const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm()

    const onSubmit = (values: any) => {
        console.log(values)
    }

    // const validateTitle = (value: any) => {
    //     if (!value) return "Name is required"
    // }

    return (
        <ThemeProvider theme={theme}>
            <Box w={500} p={4} m="20px auto" border='1px' borderColor="gray.300" borderRadius='xl'>
                <Heading as="h1" size="xl" textAlign="center">
                    Add Anime
                </Heading>

                {/* handleSubmit will validate the inputs before invoking onSubmit */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isInvalid={errors.title}>
                        <FormLabel htmlFor='title'>Title</FormLabel>
                        <Input
                            id='title'
                            placeholder='title'
                            {...register('title', {
                                required: 'This is required',
                                minLength: { value: 4, message: 'Minimum length should be 4' }
                            })}
                        />
                        <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                    </FormControl>

                    <FormLabel mt={5} htmlFor='type'>Type</FormLabel>
                    <RadioGroup
                        id='type'
                        // name='type'
                        defaultValue='Movie'
                    >
                        <Stack spacing={5} direction="row">
                            <Radio defaultChecked value="Movie">Movie</Radio>
                            <Radio value="TV">TV</Radio>
                            <Radio value="OVA">OVA</Radio>
                        </Stack>
                    </RadioGroup>

                    <FormLabel mt={5} htmlFor='episodes'>Episodes</FormLabel>
                    <NumberInput defaultValue={15} allowMouseWheel>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>

                    <FormLabel mt={5} htmlFor='description'>Description</FormLabel>
                    <Textarea defaultValue={'This is a default description'} placeholder="Write a description" />



                    <Button mt={10} colorScheme="teal" isLoading={isSubmitting} type="submit">
                        Submit
                    </Button>
                    {/* {submittedData && <pre>{JSON.stringify(submittedData, null, 2)}</pre>} */}
                </form>
            </Box>
        </ThemeProvider>
    )
}

export default MovieForm
