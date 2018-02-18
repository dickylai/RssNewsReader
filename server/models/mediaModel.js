var mongoose = require('mongoose');

var mediaModel = mongoose.Schema({
  value: {type: String}
});

module.exports = mongoose.model('media', mediaModel, 'media');
