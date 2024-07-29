import mongoose from "mongoose"

const bookStoreSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
},{
    versionKey:false
})

const BookModel=mongoose.model("Book",bookStoreSchema)

export default BookModel