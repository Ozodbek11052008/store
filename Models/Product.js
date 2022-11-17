const mongoose = require('mongoose')
const { request } = require('express')
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    photo: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
        required: true
    },
    composition:{
        type: String,
        required: true,
        minlength: 40
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Product", productSchema)