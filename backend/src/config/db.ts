import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' })
process.env.MONGO_URI = "mongodb+srv://gabrielh:mSsij949HCwD6mlM@cluster0.tnrqf.mongodb.net/Cluster0?retryWrites=true&w=majority"
console.log(process.env.MONGO_URI)
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
