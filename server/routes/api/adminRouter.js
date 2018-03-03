var express = require('express');
var router = express.Router();

var models = require('../../models/models');
var rssLinkScrapeController = require('../../controllers/rssLinkScrapeController')(models);

router.route('/rssLinks/scrape').get(rssLinkScrapeController.scrapeLinks);

module.exports = router;
