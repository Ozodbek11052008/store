const mongoose = require('mongoose')
const dbUri = 'mongodb://127.0.0.1:27017/lilikay'
const connectDB = async () => {

    await mongoose.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true

    })
        .then(data => console.log(`Mongodb is connected at ` + data.connection.host))
        .catch(err => console.log(err))
}

module.exports = connectDB