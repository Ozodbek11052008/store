const Product = require("../Models/Product")
const fs = require('fs')
const path = require('path');
module.exports = shop = {
    shop_page: async (req, res) => {

        const products = await Product.find().sort({ createdAt: -1 }).populate('categoryId')
        res.render('client/shop', {
            layout: './layouts/client_layout.ejs',
            products
        })
    }
}