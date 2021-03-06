import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' })
const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) throw new Error('URI not found')
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error: any) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
