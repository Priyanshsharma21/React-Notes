import mongoose from 'mongoose'
import User from '../models/user.js'
import { body, validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'
import { expressjwt } from "express-jwt";
import dotenv from 'dotenv'
dotenv.config()


export const signup = (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({error : errors.array()[0].msg})
    }
    const user = new User(req.body)
    user.save((user,err)=>{
        if(err){
            return res.status(400).json({error : "NOT ABLE TO SAVE DATA IN DB"})
        }

        res.json(user);
    })
}

export const signin = (req,res)=>{
    const errors = validationResult(req)
    const {email, password} = req.body;

    console.log(email)
    console.log(password)
    
    if(!errors.isEmpty()){
        return res.status(422).json({error : errors.array()[0].msg})
    }

    User.findOne({ email }, (err,user)=>{
        if(err || !user){
            return res.status(400).json({error : "User email dosen't exist"})
        }

        if(!user.authenticate(password)){
            return res.status(401).json({error : "Email and password dosen't match"})
        }

        // create token
        const token = jwt.sign({id : user._id}, process.env.JWT_SECRET)

        // put token as cookie
        res.cookie("token", token, {expire : new Date() + 9999})

        // send res to frontend
        const {_id, name, email, role} = user;
        return res.json({token, user : {_id, name, email, role}})

    })
}

export const signout = (req,res)=>{
    res.clearCookie("token")
    res.json({message : 'User SignOut Successfully'})
}



//Protected routes 
export const isSignedIn = expressjwt({
    secret : process.env.JWT_SECRET,
    userProperty : "auth",
});
// this middleware already has the next property thats why we didn't wrote it

//custome middlewares


