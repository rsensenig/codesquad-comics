const data = require('../data/data');

module.exports = {
    book: (req, res) => {
        let id = req.params._id;
        const foundBook = data.find(book => book._id === String(id));
        res.render('pages/book', {
            singleBook: foundBook
        });
    },
    book_create_post: (req, res) => {
        const {_id = uuid(), title, author, publisher, genre, pages, rating, synopsis, image} = req.body;
        data.push({_id, title, author, publisher, genre, pages, rating, synopsis, image});
        res.redirect('/admin-console');
    }
}