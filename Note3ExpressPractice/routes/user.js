import express from 'express'
import {
    userController,
    newUserController,
    newUserIdController,
    newUserIdPostController,
    newUserIdDeleteController,
    createUser
} from '../controllers/user.js'

const router = express.Router()

router.route('/')
    .get(userController)
    .post(createUser)


router.get('/new', newUserController)


router.route('/:userId')
    .get(newUserIdController)
    .put(newUserIdPostController)
    .delete(newUserIdDeleteController)



// whenever it see userId this will run
// param is middleware in express
// Middleware is a stuff that runs b/w request send to your server and response send back to your server
// So before post delete and put this middleware will run
// for example 
const users = [
    {
    name: 'Shreyansh',
    email: 'lallulal@gmail.com',
    password: 'lallu'
    }, 
    {
    name: 'kunal',
    email: 'lallulal@gmail.com',
    password: 'lallu'
    }
]


router.param('userId', (req, res, next, id) => {
    req.user = users[id]
    next()
})

export default router