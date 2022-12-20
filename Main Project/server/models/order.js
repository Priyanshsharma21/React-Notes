import mongoose from 'mongoose'
const {Schema, model} = mongoose
const {ObjectId} = mongoose.Schema


const ProductCartSchema = new Schema({
    product : {
        type :  ObjectId,
        ref : 'Product',
    },
    name : String,
    count : Number,
    price : Number,
})

const ProductCart = new model('ProductCart', ProductCartSchema)

const OrderSchema = new Schema({
    products : [ProductCartSchema],
    transaction_id : {},
    amount : {type : Number},
    address : {type : String, maxLength : 1000, required: true},
    date : {type : Date,default : Date.now},
    user : {
        type : ObjectId,
        ref : 'User'
    }
},{timestamp:true})

const Order = new model('Order', OrderSchema)


export {Order,ProductCart}


// so our order is the array of products like we ordered -> Books, Protein, oats, Bag etc. 
// This all the product comes in order
// Noe this product in cart too have some fields we have declear it on ProductCartSchema 