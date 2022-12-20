import mongoose from 'mongoose';
const {Schema, model} = mongoose

const CategorySchema = new Schema({
    name : {
        type : String,
        trim : true,
        required : true,
        maxLength : 32,
        unique : true,
    }
},{timestamp : true})



const Category = new model('Category', CategorySchema)

export default Category

//? timestamp will keep the record in database that when the entry was created this is use for the sorting purpose like sort by date