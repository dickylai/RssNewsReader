var mongoose = require('mongoose');

var rssPageModel = mongoose.Schema({
  media: {type: mongoose.Schema.Types.ObjectId, ref: 'media'},
  link: {type: String}
});

module.exports = mongoose.model('rssPage', rssPageModel, 'rssPage');
