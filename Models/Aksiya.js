const mongoose = require('mongoose')

const aksiyaSchema = mongoose.Schema({
    percent : {
        type : Number,
        required : true,
        trim : true,
        unique: true
    },
    date:{
        type: Number,
        required:true,
        trim:true
    },
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: true
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model("aksiya", aksiyaSchema)