const express = require('express');
const siteRouter = require('./site-routes');
const adminRouter = require('./admin-routes');
const booksRouter = require('./book-routes');
const router = express.Router();

router.use('/', siteRouter);
router.use('/book', booksRouter);
router.use('/admin-console', adminRouter);

module.exports = router;