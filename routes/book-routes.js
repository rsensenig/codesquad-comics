const express = require('express');
const { book } = require('../controllers/book-controller');
const router = express.Router();
const bookCtrl = require('../controllers/book-controller');

// ROUTES
router.route('/:_id')
    .get(bookCtrl.book)

module.exports = router;