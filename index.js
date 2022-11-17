const express = require("express") 
const app = express()
const PORT = 5000
const path = require('path')
const connectDB = require("./Config/config")
const Layout = require('express-ejs-layouts')
connectDB()
app.use(express.json(), express.urlencoded({ extended: true }))
//for suport json

app.use(express.static(path.join(__dirname + '/public')))
// for support files in public folder
const methodOverride = require('method-override')
app.use(methodOverride('_method', {
    methods: ['POST', "GET"]
}))
// for Delete or Update 
require('ejs')
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(Layout)
// for support ejs
app.use(express.static(path.join(__dirname + '/public')))
app.use("client", express.static(path.join(__dirname + '/public')))



app.use(require('./Routes/dashboardRoute'))
app.use(require('./Routes/categoryRoute'))
app.use(require('./Routes/clientRoute'))
app.use(require('./Routes/ProductRoute'))
app.use(require('./Routes/shopRoute'))
app.use(require('./Routes/userRoute'))

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} port`);
})