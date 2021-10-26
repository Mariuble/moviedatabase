import mongoose from 'mongoose'
import dotenv from 'dotenv'
import movies from '../data/movies'
import Movie from '../models/movieModel'
import connectDB from './db'
import colors from 'colors'

dotenv.config()

connectDB()

const importData = async () => {
    try {

        await Movie.deleteMany()

        const createdMovie = await Movie.insertMany(movies)

        console.log('Data Imported!'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Movie.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

// Handle seeder flag
if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}
