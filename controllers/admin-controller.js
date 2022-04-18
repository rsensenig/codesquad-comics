const data = require('../data/data');

module.exports = {
    admin: (req, res) => {
        res.render('pages/admin', {
            booksArray: data
        });
    },
    create: (req, res) => {
        res.render('pages/create');
    },
    update: (req, res) => {
        const { _id } = request.params;
        const foundBook = data.find(book => book._id === _id);
        res.render('pages/update', {
            singleBook: foundBook
        });
    },
    book_create_post: (req, res) => {
        const {_id = uuid(), title, author, publisher, genre, pages, rating, synopsis, image} = req.body;
        data.push({_id, title, author, publisher, genre, pages, rating, synopsis, image});
        res.redirect('/admin-console');
    },
    book_update_put: (req, res) => {
        const {_id} = req.params;
        const {title, author, publisher, genre, pages, rating, synopsis, image} = req.body;
        const foundBook = data.find(book => book._id === _id);
        foundBook.title = title;
        foundBook.author = author;
        foundBook.publisher = publisher;
        foundBook.genre = genre;
        foundBook.pages = pages;
        foundBook.rating = rating;
        foundBook.synopsis = synopsis;
        foundBook.image = image;
        res.redirect('/admin-console');
    },
    book_delete: (req, res) => {
        const {_id} = req.params;
        const foundBook = data.find(book => book._id === _id);
        const index = data.indexOf(foundBook);
        data.splice(index, 1);
        res.redirect('/admin-console');
    }
}