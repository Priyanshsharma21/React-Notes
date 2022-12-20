import mongoose from 'mongoose';
const {Schema, model} = mongoose
const {ObjectId} = mongoose.Schema;

const ProductSchema = new Schema({
    name : {
        type : String,
        trim : true,
        required : true,
        maxLength : 32,
    },
    description : {
        type : String,
        trim : true,
        required : true,
        maxLength : 2000,
    },
    price : {
        type : Number,
        required : true,
        maxLength : 32,
        trim : true,
    },
    category : {
        type : ObjectId,
        ref : "Category",
        required : true,
    },
    stock : {
        type : Number,
    },
    sold : {
        type : Number,
        default : 0
    },
    photo : {
        data : Buffer,
        contentType : String,
    }

},{timestamp : true})



const Product = new model('Product', ProductSchema)

export default Product



//? Now when we want to have a field in our collection which refer to other schema like here our product need to have a category we can give its referance here using type : ObjectId and ref : exact same name as the one we want to refer like Category
//*buffer is use whan we want to store something in binary form like video and images