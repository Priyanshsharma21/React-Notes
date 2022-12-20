import mongoose from 'mongoose';
import express from 'express'
import User from './models/user.js'


const app = express()
mongoose.connect('mongodb://127.0.0.1:27017/userDB', {useNewUrlParser: true}).then(()=>console.log("CONNECTED BRO")).catch(e=>console.log(e))

app.get('/', (req, res) =>res.send("Hello"))


const run = async()=>{
   try {
    const user = await User.create(
        {name : 'John',
         age : 41,
         email : 'john@example.com',
         friends : ['John','mike','will','lucas','dustin','eleven','max'],
        }
        )

    const newUser = {name : 'josh', age : 20, email : 'josh@gmail.com', friends : ['steve','robin','nancy','jonathan']}

    await User.findByIdAndUpdate({id : id}, {user : newUser})

    const deleteUser = await User.deleteOne({name : name})

    const findUser = await User.where("age").gt(12).equals("john").limit(2).select('age').populate("bestfriend")
    //this will populate it to best friends // new way to join in mongo

    const resHi = await User.sayHi() // normal methods
    const meth2 = await User.findByAddress() // by statics
    const meth3 = await User.find().byName("priyansh") // by query
    console.log(user)
   } catch (error) {
    console.log(error)
   }
}
run()





app.listen(5000,()=>console.log("Server started at port 5000"))