const express = require('express');
const { admin } = require('../controllers/admin-controller');
const router = express.Router();
const adminCtrl = require('../controllers/admin-controller');

// ROUTES
router.route('/')
    .get(adminCtrl.admin)
    .delete(adminCtrl.book_delete)

router.route('/create-book')
    .get(adminCtrl.create)
    .post(adminCtrl.book_create_post)

router.route('/update-book/:_id')
    .get(adminCtrl.update)
    .put(adminCtrl.book_update_put)

module.exports = router;