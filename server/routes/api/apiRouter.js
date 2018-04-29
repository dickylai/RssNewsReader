var express = require('express');
var router = express.Router();

var apiRouter = (models, loginRequired, properties) => {
  var apiController = require('../../controllers/apiController')(models, properties);

  router.use('/admin/', require('./adminRouter')(models, loginRequired));

  router.route('/rssLinks').get(apiController.getAllRssLinks);
  router.route('/media').get(apiController.getAllMedia);
  router.route('/categories').get(apiController.getAllCategories);

  router.route('/login').post(apiController.login);
  router.route('/signup').post(apiController.signup);

  router.route('/*').get(apiController.notFound);

  return router;
}

module.exports = apiRouter;
