import express from 'express'
import ejs from 'ejs'

const app = express()

app.set('view engine', 'ejs');

const users = [{name : 'Shreyansh',email:'lallulal@gmail.com',password : 'lallu'},{name : 'kunal',email:'lallulal@gmail.com',password : 'lallu'}]

export const userController = (req,res)=>{
    const age = req.query.age
    res.render('index',{text : 'Priyansh Sharma',age : age})
}

export const newUserController = (req,res)=>{
    res.render("users/new")
}

export const createUser = (req,res)=>{
    const email = req.body.email
    const password = req.body.password
    const name = req.body.fullName

    if(email && password && name){
        users.push({email : email, password : password,name:name})
        res.redirect(`/users/${users.length - 1}`)
    }else{
        res.render('users/error')
    }

    console.log(`Email is ${email} and password is ${password}`)
}

export const newUserIdController = (req,res)=>{
    console.log(req.user)
    res.render('index',{text : `${req.user}`})
}

export const newUserIdPostController = (req,res)=>{
    const userId = req.params.userId
}

export const newUserIdDeleteController = (req,res)=>{
    const userId = req.params.userId
}

