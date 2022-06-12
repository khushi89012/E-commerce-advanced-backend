

const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    productName: {
        type: String,
        required: true,
        unique: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    }
})

const Product = mongoose.model('Product', ProductSchema);  

module.exports = Product;

