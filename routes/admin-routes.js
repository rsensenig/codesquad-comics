const express = require('express');
const { admin } = require('../controllers/admin-controller');
const router = express.Router();
const adminCtrl = require('../controllers/admin-controller');

// ROUTES
router.route('/')
    .get(adminCtrl.admin_get)

router.route('/create-book')
    .get(adminCtrl.create_get)

router.route('/update-book/:_id')
    .get(adminCtrl.update_get)

module.exports = router;