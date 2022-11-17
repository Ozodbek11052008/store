const mongoose = require('mongoose')

const aksiyaSchema = mongoose.Schema({
    userId : {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
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