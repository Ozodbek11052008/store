const router = require('express').Router()
const { dashboardPage } = require('../controllers/dashboarController')

router.get('/api/dashboard', dashboardPage)
module.exports = router