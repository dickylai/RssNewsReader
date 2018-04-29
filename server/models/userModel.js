var mongoose = require('mongoose');

var userModel = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  hashPassword: {
    type: String,
    required: true
  },
  createdTime: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('user', userModel, 'user');
