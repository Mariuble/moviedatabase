import {
  GraphQLFloat,
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
    _id: { type: GraphQLString },
    Title: { type: GraphQLString },
    Type: { type: GraphQLString },
    Episodes: { type: GraphQLInt },
    Status: { type: GraphQLString },
    Start_airing: { type: GraphQLString },
    End_airing: { type: GraphQLString },
    Starting_season: { type: GraphQLString },
    Broadcast_time: { type: GraphQLString },
    Producers: { type: GraphQLString },
    Licensors: { type: GraphQLString },
    Studios: { type: GraphQLString },
    Sources: { type: GraphQLString },
    Genres: { type: GraphQLString },
    Duration: { type: GraphQLString },
    Rating: { type: GraphQLString },
    Score: { type: GraphQLFloat },
    Scored_by: { type: GraphQLInt },
    Members: { type: GraphQLInt },
    Favorites: { type: GraphQLInt },
    Description: { type: GraphQLString },
  }),
})

// Endpoint for queries
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    //Query tags
    movieById: {
      type: new GraphQLList(MovieType),
      args: {
        id: { type: GraphQLString },
        first: { type: GraphQLInt },
        offset: { type: GraphQLInt },
      },
      async resolve(parent, args) {
        const movies = await Movie.find({})
        let mov = []
        for (let i = 0; i < movies.length; i++) {
          if (movies[i]._id == args.id) {
            console.log(movies[i]._id)
            mov.push(movies[i])
            console.log(mov.length)
          }
        }
        return mov.slice(args.offset, args.offset + args.first)
      },
    },
    countMoviesByTitle: {
      type: GraphQLInt,
      args: {
        title: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const movies = await Movie.count()
        let mov = []
        // for (let i = 0; i < movies.length; i++) {
        //   if (
        //     movies[i].Title.toLowerCase().includes(args.title.toLowerCase())
        //   ) {
        //     console.log(movies[i].Title)
        //     mov.push(movies[i])
        //     console.log(mov.length)
        //   }
        // }
        return movies
      },
    },
    sortMoviesByTitle: {
      type: new GraphQLList(MovieType),
      args: {
        title: { type: GraphQLString },
        first: { type: GraphQLInt },
        offset: { type: GraphQLInt },
        sort: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const movies = await Movie.find({
          Title: new RegExp(args.title, 'i'),
        })
        let mov = [...movies]
        // for (let i = 0; i < movies.length; i++) {
        //   if (
        //     movies[i].Title.toLowerCase().includes(args.title.toLowerCase())
        //   ) {
        //     console.log(movies[i].Title)
        //     mov.push(movies[i])
        //     console.log(mov.length)
        //   }
        // }
        if (args.sort === 'Title') {
          mov = mov.sort((a, b) => a.Title.localeCompare(b.Title))
        } else if (args.sort === 'Score') {
          mov = mov.sort((a, b) => b.Score - a.Score)
        }
        return mov.slice(args.offset, args.offset + args.first)
      },
    },
    testQuery: {
      type: new GraphQLList(MovieType),
      args: {
        title: { type: GraphQLString },
        first: { type: GraphQLInt },
        offset: { type: GraphQLInt },
        sorting: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const movies = await Movie.find({ Score: { $elemMatch: { $gte: 8 } } })
        let mov = []
        return movies
      },
    },
  },
})

// Mutation query under here...

const schema = new GraphQLSchema({
  query: RootQuery,
})

export default schema
