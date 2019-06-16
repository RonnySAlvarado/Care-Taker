const router = require("express").Router();
const bcrypt = require("bcryptjs");
const db = require("./register-model.js");
const validateMethods = require("./validateMethods.js");

router.post("/", validateMethods.validCredentials, async (req, res) => {
  const credentials = req.body;
  try {
    const hash = bcrypt.hashSync(credentials.password, 14);
    credentials.password = hash;
    const registerUser = await db.register(credentials);
    res.status(201).json(registerUser);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong with this request." });
  }
});

module.exports = router;
