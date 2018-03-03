var express = require('express');
var router = express.Router();

var models = require('../../models/models');
var apiController = require('../../controllers/apiController')(models);
var adminRouter = require('./adminRouter');

router.use('/admin/', adminRouter);

router.route('/rssLinks').get(apiController.getAllRssLinks);
router.route('/media').get(apiController.getAllMedia);
router.route('/categories').get(apiController.getAllCategories);

module.exports = router;
