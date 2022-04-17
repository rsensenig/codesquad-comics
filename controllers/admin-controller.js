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
    }
}