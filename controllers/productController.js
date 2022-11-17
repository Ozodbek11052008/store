const Category = require('../Models/Category')
const fs = require('fs')
const path = require('path');
const Product = require('../Models/Product')

const productController = {

     createProduct: async (req, res) => {
          const { name, categoryId, description, price, composition} = req.body
          const products = new Product({
               name, categoryId, price, description, composition, photo: req.file.filename
          })
          await products.save()
               .then(data => res.redirect('/api/dashboard'))
               .catch(err => res.send(err))
     },
     products_page: async (req, res) => {
          const products = await Product.find().sort({ createdAt: -1 }).populate('categoryId')
          res.render('admin/products', {
               layout: './layouts/dashboard_layout.ejs',
               products
          })
     },
     deleteProduct: async (req, res) => {

          const data = await Product.findById(req.params.id)

          if (data.photo) {
               fs.unlink(path.join(__dirname.replace("controllers", "public/uploads/products"), data.photo), (err) => {
                    if (err) {
                         throw err
                    }
               })
          }
          await Product.findByIdAndDelete(req.params.id)
               .then(data => res.redirect("/api/products"))
               .catch(err => res.send(err))
     },
     addProducts: async (req, res) => {
          const category = await Category.find()
          res.render('admin/add_products', {
               layout: './layouts/dashboard_layout.ejs',
               category
          })
     },
     product_update_page: async (req, res) => {
          const category = await Category.find()
          await Product.findById(req.params.id)

               .then(data => {
                    res.render('admin/edit_product', {
                         layout: './layouts/dashboard_layout.ejs',
                         data,
                         category
                    })
               })
     },
     product_update: async (req, res) => {
          const data = await Product.findById(req.params.id)

          if (data.photo) {
               fs.unlink(path.join(__dirname.replace("controllers", "public/uploads/products"), data.photo), (err) => {
                    if (err) {
                         return
                    }
               })
          }

          await Product.findByIdAndUpdate(req.params.id, {
               name: req.body.name,
               description: req.body.description,
               price: req.body.price,
               categoryId: req.body.categoryId,
               photo: req.file.filename,
               composition:req.body.composition
          })

               .then(data => {
                    res.redirect('/api/products')
               })
               .catch(err => res.send(err))
     }
}

module.exports = productController