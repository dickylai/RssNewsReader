var jwt = require("jsonwebtoken");

var authHandler = properties => {
  var jwtParser = (req, res, next) => {
    if (req.headers && req.headers.authorization
      && req.headers.authorization.split(" ")[0] == "Bearer") {
        jwt.verify(req.headers.authorization.split(" ")[1],
        properties.jwt.secret,
        (err, decode) => {
          if (err) {
            return res.status(401).json({messages: ["Invalid token!"]});
          }
          req.user = decode;
          next();
        }
      );
    } else {
      req.user = undefined;
      next();
    }
  };

  var loginRequired = (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.status(401).json({messages: ["Unautorized user!"]});
    }
  };

  return {
    jwtParser: jwtParser,
    loginRequired: loginRequired
  }
};

module.exports = authHandler;
