var mongoose = require('mongoose');

var categoryModel = mongoose.Schema({
  value: {type: String}
});

module.exports = mongoose.model('category', categoryModel, 'category');
