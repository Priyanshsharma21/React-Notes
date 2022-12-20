import mongoose from 'mongoose'
const {Schema} = mongoose;

const videoSchema = new Schema({
    thumbnail : String,
    video : String,
    title : String,
    views : Number,
    likes : Number,
    description : String,
})

const userSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : true,
        min : 14,
        max:100,
    },
    email : {
        type:String,
        required : true,
        lowercase: true,
        validate : {
            validator : (v)=>{v.includes('@gmail.com') ? v : v},
            message : props=>`${props.value} is not vailed email`
        }
    },
    createdAt : {
        type : Date,
        default : Date.now(),
        immutable : true,
    },
    updatedAt :{
        type : Date,
        default : Date.now(),
    },
    bestFriend : {
        type : mongoose.SchemaType.objectId,
        ref : "User",
    },
    hobbies : [String],
    address : {
        street : String,
        city : String
    },
    video : videoSchema,
})

// we can decelete this metods and use them to do our work

userSchema.methods.sayHi = function(){
    console.log(`Hi to everyone from ${this.name}`)
}

userSchema.statics.findByAddress = function(){ 
    return this.where({address : new RegExp(address, 'i')})
}

userSchema.query.findBy = function(name){ 
    return this.find({address : new RegExp(name, 'i')})
}


// best is virtuals -> extract extra piece of info from the databse -> this will not save in database only avalaible for use

userSchema.virtual('namedEmail').get(function(){
    return `${this.name}@gmail.com`
})

// Middleware is used when we want to perform some action before the




const User = mongoose.model('User',userSchema)

export default User


// two type to describe nested schema rather create new and give its name here otherwise create it inside only