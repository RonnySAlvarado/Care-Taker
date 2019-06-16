const jwt = require("jsonwebtoken");
const secret = require("../secret.js");

function validCredentials(req, res, next) {
  const credentials = req.body;
  if (credentials.username === "" || credentials.password === "") {
    res.status(400).json({ message: "Please enter a username and password." });
  } else {
    next();
  }
}

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secret.jwtSecret, options);
}

module.exports = {
  validCredentials,
  generateToken
};
