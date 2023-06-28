const router = require('express').Router();
const bookController = require('../controllers/bookController')
const verifyToken = require('../middlewares/verifyToken')

router.get('/', bookController.getBooks)
router.post('/add', bookController.addBook)
router.delete('/delete', verifyToken, bookController.deleteBook)

module.exports = router