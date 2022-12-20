import express from 'express'
import {signout,signup, signin, isSignedIn} from '../controllers/auth.js'
import { body, validationResult } from 'express-validator'

const router = express.Router()


router.post('/signup',
    body("fname","Name should be at least 3 characters").isLength({min : 3}),
    body("email","Email is required").isEmail(),
    body("password","Password should be at least 5 character").isLength({min : 5}),signup)

router.post('/signin',
    body("email","Email is required").isEmail(),
    body("password","Password field is required").isLength({min : 5}),signin)

router.get('/signout', signout)

router.get('/testroute',isSignedIn, (req,res)=>{
    res.send("Pro Route")
})


export default router

