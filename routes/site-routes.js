const express = require('express');
const router = express.Router();
const siteCtrl = require('../controllers/site-controller');

// ROUTES
router.route('/')
    .get(siteCtrl.index_get);

router.route('/about')
    .get(siteCtrl.about_get);

router.route('/login')
    .get(siteCtrl.login_get)
    .post(siteCtrl.login_post);

router.route('/register')
    .get(siteCtrl.register_get)
    .post(siteCtrl.register_post);

router.route('/auth/google')
    .get(siteCtrl.google_get);

router.route('/auth/google/admin-console')
    .get(siteCtrl.google_redirect_get);

router.route('/logout')
    .get(siteCtrl.logout_get);

module.exports = router;