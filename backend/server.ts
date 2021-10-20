import express, { Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db'


dotenv.config()


const init = async () => {
    await connectDB()
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
}

const app = express()

app.use(express.json()) // Allow JSON data in body

const PORT = process.env.PORT || 5000

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello World!')
})

app.listen(PORT, init)