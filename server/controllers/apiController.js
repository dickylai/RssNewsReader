var jwt = require("jsonwebtoken");
var bcrypt = require('bcrypt');
var validator = require('validator');

var apiController = (models, properties) => {
  const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
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

  var login = (req, res) => {
    var loginMessages = [];
    if (!validator.isEmail('' + req.body.email)) {
      loginMessages.push("Invalid email.");
    }
    if (!validator.matches('' + req.body.password, passwordPattern)) {
      loginMessages.push("Invalid password.");
    }
    if (loginMessages.length > 0) {
      return res.status(400).json({messages: loginMessages});
    }
    models.userModel.findOne({email: req.body.email}, (err, user) => {
      if (err) return res.status(500).send(err);
      if (user && bcrypt.compareSync(req.body.password, user.hashPassword)) {
        res.json({token: jwt.sign({email: user.email, _id: user._id}, properties.jwt.secret, { expiresIn: '1h' })});
      } else {
        res.status(401).json({messages: ["User not found!"]});
      }
    })
  };

  var signup = (req, res) => {
    var signupMessages = [];
    if (!validator.isEmail('' + req.body.email)) {
      signupMessages.push("Invalid email.");
    }
    if (!validator.matches('' + req.body.password, passwordPattern)) {
      signupMessages.push("Invalid password.");
    } else if (!validator.matches('' + req.body.confirmPassword, passwordPattern)
      || req.body.password !== req.body.confirmPassword){
      signupMessages.push("Invalid confirm password.");
    }
    if (signupMessages.length > 0) {
      return res.status(400).json({messages: signupMessages});
    }
    var newUser = new models.userModel({
      email: req.body.email,
      hashPassword: bcrypt.hashSync(req.body.password, 10)
    });
    newUser.save((err, user) => {
      if (err) return res.status(500).send(err);
      user.hashPassword = undefined;
      res.json(user);
    })
  };

  var notFound = (req, res) => {
    res.status(404).json({messages: ["Not found"]});
  }

  return {
    getAllRssLinks: getAllRssLinks,
    getAllMedia: getAllMedia,
    getAllCategories: getAllCategories,
    signup: signup,
    login: login,
    notFound: notFound
  };
}

module.exports = apiController;
