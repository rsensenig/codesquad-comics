const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/admin-controller');

// ROUTES
router.route('/')
    .get(adminCtrl.admin);

router.route('/create-book')
    .get(adminCtrl.create);

router.route('/update-book/:_id')
    .get(adminCtrl.update);

module.exports = router;