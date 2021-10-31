import movieModel from "../models/movieModel"

// how to return the data for the schema operations
export const resolvers = {
  Query: {
    movies: () => movieModel.find()
  }
}