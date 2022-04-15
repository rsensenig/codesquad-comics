const express = require('express');
const router = express.Router();
const siteCtrl = require('../controllers/site-controller');

// ROUTES
router.route('/')
    .get(siteCtrl.index);

router.route('/about')
    .get(siteCtrl.about);

router.route('/login')
    .get(siteCtrl.login);

module.exports = router;