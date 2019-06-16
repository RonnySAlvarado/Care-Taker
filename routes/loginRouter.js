const router = require("express").Router();
const bcrypt = require("bcryptjs");

const db = require("./login-model.js");
const validateMethods = require("./validateMethods.js");

router.post("/", validateMethods.validCredentials, async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await db.find(username);
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = validateMethods.generateToken(user);
      console.log(token);
      res.status(200).json({
        message: `Welcome, ${user.username}. Token has been set.`,
        token
      });
    } else {
      res.status(401).json({ message: "Invalid credentials." });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong with this request." });
  }
});

module.exports = router;
