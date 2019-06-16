const db = require("../knexconfig.js");

module.exports = {
  register
};

function register(credentials) {
  return db("users").insert(credentials);
}
