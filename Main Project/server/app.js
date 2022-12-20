import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRoutes from './routes/auth.js'

const app = express()
const PORT = process.env.PORT

// DB connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
.then(()=>{
    console.log(`DB CONNECTED`)
})




// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true})); // this allow us to set information coming from form
app.use(cookieParser())


app.use('/api', authRoutes)



// Starting Server
app.listen(PORT,()=>{
    console.log(`Running Up The Hill At ${PORT}km/hr`)
})