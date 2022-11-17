const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email : {
        type : String,
        required : true,
        trim : true,
        unique: true
    },
    name : {
        type : String,
        required : true,
        trim : true,
        unique: true
    },
    password : {
        type : String,
        required : true,
        trim : true
        },
    isAdmin : {
        type: String,
        default: "User",
        enum: ["User", "SuperAdmin", "Admin"]
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model("User", userSchema)