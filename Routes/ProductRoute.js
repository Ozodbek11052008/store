const { createProduct, products_page, addProducts, deleteProduct, product_update, product_update_page, single_page } = require('../controllers/productController')
const router = require('express').Router()


const path = require('path')
const multer = require('multer')
const md5 = require("md5")
const fs = require("fs")
const store = multer.diskStorage({

    destination(req, file, cb) {
        cb(null, 'public/uploads/products')
    },
    filename(req, file, cb) {
        const ext = path.extname(file.originalname) 
        cb(null, md5(Date.now()) + ext)
    }
})

const upload = multer({
    storage: store
})



router.post('/create/product', upload.single('photo'), createProduct)
router.get("/api/products", products_page)
router.get("/api/add/product", addProducts)
router.delete("/api/delete/product/:id", deleteProduct)
router.get('/api/product/update/:id', product_update_page)
router.put('/api/product/update/:id',  upload.single('photo'),  product_update)
module.exports = router