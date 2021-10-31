import mongoose from 'mongoose'

// Defining the data in the actual database. One const per 'collection'
const movieSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
    default: '',
  },
  Type: {
    type: String,
    required: true,
    default: '',
  },
  Episodes: {
    type: Number,
    required: true,
    default: 0,
  },
  Status: {
    type: String,
    required: true,
    default: '',
  },
  Start_airing: {
    type: String,
    required: true,
    default: '',
  },
  End_airing: {
    type: String,
    required: true,
    default: '',
  },
  Starting_season: {
    type: String,
    required: true,
    default: '',
  },
  Broadcast_time: {
    type: String,
    required: true,
    default: '',
  },
  Producers: {
    type: [String],
    required: true,
    default: '',
  },
  Licensors: {
    type: [String],
    required: true,
    default: '',
  },
  Studios: {
    type: String,
    required: true,
    default: '',
  },
  Sources: {
    type: String,
    required: true,
    default: '',
  },
  Genres: {
    type: [String],
    required: true,
    default: '',
  },
  Duration: {
    type: String,
    required: true,
    default: '',
  },
  Rating: {
    type: String,
    required: true,
    default: '',
  },
  Score: {
    type: Number,
    required: true,
    default: 0,
  },
  Scored_by: {
    type: Number,
    required: true,
    default: 0,
  },
  Members: {
    type: Number,
    required: true,
    default: 0,
  },
  Favorites: {
    type: Number,
    required: true,
    default: 0,
  },
  Description: {
    type: String,
    required: true,
    default: '',
  },
})

const Movie = mongoose.model('Movie', movieSchema)

export default Movie
