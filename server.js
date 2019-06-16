const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

const loginRouter = require("./routes/loginRouter.js");
const registerRouter = require("./routes/registerRouter.js");

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/login", loginRouter);
server.use("/register", registerRouter);

module.exports = server;
