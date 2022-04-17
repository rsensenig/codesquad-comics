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
        res.render('pages/update');
    }
}