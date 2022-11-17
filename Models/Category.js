const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
        unique: true
    },
    value:{
        type: Number,
        required:true,
        trim:true
    },
    photo:{
        type: String,
        required: true
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model("Category", categorySchema)