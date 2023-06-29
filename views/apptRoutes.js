const router = require('express').Router();
const apptController = require('../controllers/apptController')
const verifyToken = require('../middlewares/verifyToken')

router.post('/add', verifyToken, apptController.newAppointment)
router.get('/', apptController.getAppointments)

module.exports = router