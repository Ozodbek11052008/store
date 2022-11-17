const router = require('express').Router()
const { shop_page } = require('../controllers/shopController')

router.get('/shop', shop_page)
module.exports = router