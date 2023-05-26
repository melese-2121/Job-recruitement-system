const { register, login } = require("../controllers/User");
const express = require("express");
const router = express.Router();
const { User } = require("../models");

//Routes
router.post("/getUser", login);

// Create new user.
router.post("/addUser", register);

module.exports = router;
