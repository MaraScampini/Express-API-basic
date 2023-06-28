const {book} = require('../models')

let bookController = {}

bookController.getBooks = async (req, res) => {
    let resp = await book.findAll()

    res.json({
        message: "Libros encontrados",
        data: resp
    })
}

bookController.addBook = async (req, res) => {
    let {title, genre} = req.body

    let resp = await book.create({
        title,
        genre
    })

    res.json({
        message: "Libro creado",
        data: resp
    })
}

bookController.deleteBook = async (req, res) => {
    let {id} = req.body

    await book.destroy({
        where: {
            id
        }
    })

    res.json({
        message: "Book deleted"
    })
}

module.exports = bookController