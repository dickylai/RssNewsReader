var express = require('express');
var router = express.Router();

var adminRouter = (models, loginRequired) => {
  var rssLinkScrapeController = require('../../controllers/rssLinkScrapeController')(models);

  router.use(loginRequired);
  router.route('/rssLinks/scrape').get(rssLinkScrapeController.scrapeLinks);

  return router;
}

module.exports = adminRouter;
