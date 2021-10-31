import { gql } from 'apollo-server-express'
import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql'
import Movie from '../models/movieModel'

// Object type, gql vs. GraphQLObjectType??
// const MovieType2 = gql`
//   type Movie {
//     title: String!
//     type: String!
//     episodes: Number!
//     status: String!
//     start-airing: String!
//     end-airing: String!
//     starting-season: String!
//     broadcast-time: String!
//     producers: [String]!
//     licensors: [String]!
//     studios: String!
//     sources: String!
//     genres: [String]!
//     duration: String!
//     rating: String!
//     score: Number!
//     scored_by: Number!
//     members: Number!
//     favorites: Number!
//     description: String!
//   }
// `
const MovieType = new GraphQLObjectType({
  name: 'movie',
  fields: () => ({
    title: { type: GraphQLString }, //Looked like it was missing, remove otherwise
    id: { type: GraphQLString },
    type: { type: GraphQLString },
    episodes: { type: GraphQLInt },
    status: { type: GraphQLString },
    start_airing: { type: GraphQLString },
    end_airing: { type: GraphQLString },
    starting_season: { type: GraphQLString },
    broadcast_time: { type: GraphQLString },
    producers: { type: GraphQLString },
    licensors: { type: GraphQLString },
    studios: { type: GraphQLString },
    sources: { type: GraphQLString },
    genres: { type: GraphQLList(GraphQLString) },
    duration: { type: GraphQLString },
    rating: { type: GraphQLString },
    score: { type: GraphQLInt },
    scored_by: { type: GraphQLInt },
    members: { type: GraphQLInt },
    favorites: { type: GraphQLInt },
    description: { type: GraphQLString },
  }),
})

// Endpoint for queries
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    //Query tag
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLString } },
      async resolve(parent, args) {
        // Get data from db

        const movies = await Movie.find({})
        for (let i = 0; i < movies.length; i++) {
          if (movies[i].id == args.id) {
            return movies[i]
          }
        }
      },
    },
  },
})

// Mutation query under here...

const schema = new GraphQLSchema({
  query: RootQuery,
})

export default schema
