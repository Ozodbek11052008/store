const categoryController = require('../controllers/categoryController')
const router = require('express').Router()


const path = require('path')
const multer = require('multer')
const md5 = require("md5")
const fs = require("fs")
const { single_page } = require('../controllers/categoryController')
const store = multer.diskStorage({

    destination(req, file, cb) {
        cb(null, 'public/uploads/category')
    },
    filename(req, file, cb) {
        const ext = path.extname(file.originalname)
        cb(null, md5(Date.now()) + ext)
    }
})

const upload = multer({
    storage: store
})


router.get('/api/category',  categoryController.category_page)
router.post('/api/create/category',  upload.single('photo'), categoryController.createCategory)
router.delete('/api/delete/category/:id', categoryController.deleteCategory)
router.get('/api/add/category', categoryController.addCategory)
router.get('/api/category/update/:id', categoryController.getCategoryUpdatePage)
router.put('/api/category/update/:id',  upload.single('photo'),  categoryController.categoryUpdate)
module.exports = router