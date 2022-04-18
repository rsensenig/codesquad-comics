const { splice } = require('../data/data');
const data = require('../data/data');

module.exports = {
    book: (req, res) => {
        let id = req.params._id;
        const foundBook = data.find(book => book._id === String(id));
        res.render('pages/book', {
            singleBook: foundBook
        });
    }
}