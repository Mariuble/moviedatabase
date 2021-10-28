import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db'
import { graphqlHTTP } from 'express-graphql'
import movieSchema from './models/movieModel'
import { buildSchema } from 'graphql'

dotenv.config()
const PORT = process.env.PORT || 5000

const app = express()

const init = async () => {
    await connectDB()
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
}

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        return 'Hello world!';
    },
};

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

app.use(express.json()) // Allow JSON data in body

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))

app.listen(PORT, init)