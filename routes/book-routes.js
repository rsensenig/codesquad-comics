const express = require('express');
const { book } = require('../controllers/book-controller');
const router = express.Router();
const bookCtrl = require('../controllers/book-controller');

// ROUTES
router.route('/')
    .post(bookCtrl.book_create_post)

router.route('/:_id')
    .get(bookCtrl.book)
    .put(bookCtrl.book_update_put)
    .delete(bookCtrl.book_delete)

module.exports = router;