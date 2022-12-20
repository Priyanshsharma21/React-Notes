import mongoose from 'mongoose'
import crypto from 'crypto'
import { v4 as uuidv4 } from 'uuid';
const {Schema,model} = mongoose



const UserSchema = new Schema({ 
    fname : {
        type : String,
        required : true,
        maxLength : 32,
        trim:true
    },
    lname : {
        type : String,
        maxLength : 32,
        trim:true
    },
    userInfo : {
        type : String,
        trim : true
    },
    email :{
        type : String,
        trim:true,
        required : true,
        unique : true
    },

    encry_password : {
        type : String,
        required : true,
    },
    salt : String,
    role : {
        type : Number,
        default : 0, // higher the number more big role he/she is working on
    },

    purchases:{
        type : Array,
        default : []
    }

},{timestamp : true})


UserSchema.virtual("password")
    .get(function(){
        return this._password
    })
    .set(function(password){
    // way to declear a private variable in virtual function
    this._password = password
    this.salt = uuidv4()
    this.encry_password = this.securePassword(password)
    })



UserSchema.methods = {
    /**This function will compare the hash values and check weather the user authenticate or not */
    authenticate: function(plainPassword){
        return this.securePassword(plainPassword) === this.encry_password
    },

    /*** This method will take plain text and convert it to hash password by combining salt to it */
    securePassword : function(plainPassword){
        if(!plainPassword) return "";
        try {
            return crypto
            .createHmac('sha256', this.salt)
            .update(plainPassword)
            .digest('hex')
        } catch (error) {
            return "";
        }
    }
}




const User = new model('User',UserSchema);

export default User

 