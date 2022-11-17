const Category = require("../Models/Category")
const Product = require("../Models/Product")

module.exports =  client = {
    clinetPage : async (req, res) => {
     const category = await Category.find().sort({ createdAt: -1 })
         res.render('client/main', {
              layout : './layouts/client_layout.ejs',                                         
              category
         })
    },
     single_page: async (req, res) => {
        const details =  await Product.findById(req.params.id).populate("categoryId").lean()
       
             try {
               res.render('client/product-details', {
                    layout: './layouts/client_layout.ejs',
                    details: [details],
               })
             }
             catch(err) {
              console.log(err)
             }
   }
}   