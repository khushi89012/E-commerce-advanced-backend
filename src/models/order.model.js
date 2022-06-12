const mongoose = require("mongoose")
const { db } = require("./brand.model")

const OrderSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:false},
    productId:{type:mongoose.Schema.Types.ObjectId,ref:"Product",required:false},
    brandId:{type:mongoose.Schema.Types.ObjectId,ref:"Brand",
    quantity:{type:Number},
    orderDate:{type:Date,default:Date.now},
    orderStatus:{type:String,default:"pending"},
    orderTotal:{type:Number}
}   },{timestamps:true})



module.exports = mongoose.model("Order", OrderSchema)