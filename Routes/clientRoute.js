const router = require('express').Router()
const { clinetPage, single_page } = require('../controllers/clientController')

router.get('/', clinetPage)
router.get('/product/:id', single_page)
module.exports = router