import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv" 
import bookRoute from './route/book.route.js';
import cors from 'cors'
import userRouter from "./route/user.route.js"

const app = express()

app.use(cors())
app.use(express.json())

dotenv.config()

const PORT = process.env.PORT || 4000;

const URI = process.env.Mongodb_URI

try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

        })
    
    console.log("connected to mongoDB")
} catch (error) {
    console.log("Error", error )
}


app.use('/book', bookRoute);  
app.use('/user', userRouter)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})