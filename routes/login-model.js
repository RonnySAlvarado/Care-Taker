const db = require("../knexconfig.js");

module.exports = {
  find
};

function find(user) {
  return db("users")
    .where({ username: user })
    .first();
}
