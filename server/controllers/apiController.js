var apiController = (models) => {
  var getAll = (res, model) => {
    model.find({}, (err, records) => {
      if (err) return res.status(500).send(err);
      res.json(records);
    });
  };

  var getAllMedia = (req, res) => {
    getAll(res, models.mediaModel);
  };

  var getAllCategories = (req, res) => {
    getAll(res, models.categoryModel);
  };

  var getAllRssLinks = (req, res) => {
    models.rssLinkModel.find({})
    .populate('media')
    .populate('categories')
    .exec((err, records) => {
      if (err) return res.status(500).send(err);
      res.json(records);
    });
  };

  return {
    getAllRssLinks: getAllRssLinks,
    getAllMedia: getAllMedia,
    getAllCategories: getAllCategories
  };
}

module.exports = apiController;
