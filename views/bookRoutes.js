const router = require('express').Router();
const bookController = require('../controllers/bookController')

router.post('/add', bookController.addBook)
router.delete('/delete', bookController.deleteBook)

module.exports = router