const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/admin-controller');

// ROUTES
router.route('/admin-console')
    .get(adminCtrl.admin);

router.route('/admin-console/create-book')
    .get(adminCtrl.create);

router.route('/admin-console/update-book/:_id')
    .get(adminCtrl.update);

module.exports = router;