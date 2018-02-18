var mongoose = require('mongoose');

var rssLinkModel = mongoose.Schema({
  media: {type: mongoose.Schema.Types.ObjectId, ref: 'media'},
  categories: [{type: mongoose.Schema.Types.ObjectId, ref: 'category'}],
  link: {type: String}
});

module.exports = mongoose.model('rssLink', rssLinkModel, 'rssLink');
