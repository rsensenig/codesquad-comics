const Comic = require('../models/comic-model');

module.exports = {
    admin_get: (req, res) => {
        if(req.isAuthenticated()) {
            Comic.find({}, (error, allComics) => {
                if(error) {
                    return error;
                } else {
                    res.render('pages/admin', {
                        booksArray: allComics
                    });
                }
            })
        } else {
            res.redirect('/login');
        }
    },
    create_get: (req, res) => {
        if(req.isAuthenticated()) {
            res.render('pages/create');
        } else {
            res.redirect('/login');
        }
    },
    update_get: (req, res) => {
        if(req.isAuthenticated()) {
            const { _id } = req.params;
            Comic.findOne({_id: _id}, (error, foundComic) => {
                if(error) {
                    return error;
                } else {
                    res.render('pages/update', {
                        singleBook: foundComic
                    });
                }
            });
        } else {
            res.redirect('/login');
        }
    }
}