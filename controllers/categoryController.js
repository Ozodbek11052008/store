const Category = require("../Models/Category")
const fs = require('fs')
const path = require('path');

const categoryController = {
    category_page: async (req, res) => {
        const category = await Category.find().sort({ createdAt: -1 })
        res.render('admin/category', {
            layout: './layouts/dashboard_layout.ejs',
            category
        })
    },
    createCategory: async (req, res) => {
        const category = new Category({
            name: req.body.name,
            value: req.body.value,
            photo: req.file.filename
        })
        await category.save()
            .then(data => res.redirect("/api/category"))
            .catch(err => {
                res.send(err)
            })
    },
    deleteCategory: async (req, res) => {

        const data = await Category.findById(req.params.id)

        if (data.photo) {
            fs.unlink(path.join(__dirname.replace("controllers", "public/uploads/category"), data.photo), (err) => {
                if (err) {
                    throw err
                }
            })
        }

        await Category.findByIdAndDelete(req.params.id)
            .then(data => res.redirect("/api/category"))
            .catch(err => res.send(err))
    }, addCategory: async (req, res) => {
        await Category.findById(req.params.id)
            .then(data => {
                res.render('admin/add_category', {
                    layout: './layouts/dashboard_layout.ejs'
                })
            })
            .catch(err => res.send(err))
    }, getCategoryUpdatePage: async (req, res) => {

        await Category.findById(req.params.id)

            .then(data => {
                res.render('admin/edit_category', {
                    layout: './layouts/dashboard_layout.ejs',
                    data
                })
            })
    },
    categoryUpdate: async (req, res) => {
        const data = await Category.findById(req.params.id)

        if (data.photo) {
            fs.unlink(path.join(__dirname.replace("controllers", "public/uploads/category"), data.photo), (err) => {
                if (err) {
                   return
                }
            })
        }

        await Category.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            value: req.body.value,
            photo: req.file.filename
        })

            .then(data => {

                res.redirect('/api/category')
            })
            .catch(err => res.send(err))
    }
}


module.exports = categoryController