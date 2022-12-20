import express from 'express'
import ejs from 'ejs'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRouter from './routes/user.js'
import cookieParser  from 'cookie-parser'


const PORT = process.env.PORT || 5000
const app = express()

app.set('view engine', 'ejs');
app.use(logger)
app.use(bodyParser.urlencoded({extended: true})); // this allow us to set information comming from form
app.use(express.static('public/css/styles.css'))
app.use(express.json()) // when we want to send json information to client like react

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())




app.use('/users',userRouter)

function logger(req,res,next){
    next()
}

const isLogin = (req,res,next)=>{
    console.log('Yes login')
    next()
}

const isAdmin = (req,res,next)=>{
    console.log('Yes Admin')
    next()
}


app.get('/admin', isLogin, isAdmin, (req,res)=>{
    res.json({message : "Welcome to admin"})
})

app.listen(PORT,()=>(
    console.log(`Listening at port ${PORT}`)
))




// app.get('/', (req, res) => {
//     // res.send("<h1>hello duniya</h1>") // single line
//     // res.write("<h1>hello duniya</h1>") // multline
//     res.render('index',{text : 'Priyansh Sharma'})
// })

// app.get('/video/:id', (req, res) => {
//     const id = req.params.id
//     res.send(`Video of ${id}`)
//     res.status(500).json({message : 'Error'}) // we can send status to client
//     res.json(data) // we can send data to client in form of json
// })

// app.get('/login', (req, res) => {
//     res.send("Login karlo friends")
// })


// app.use(bodyParser.urlencoded({extended:true}))
// app.use(express.static('public'))