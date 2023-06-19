const { register, login, cookies } = require("../controllers/User");
const express = require("express");
const router = express.Router();
const { User } = require("../models");

//Routes
router.post("/getUser", login);
router.get("/getUser/cookies", cookies);

// Create new user.
router.post("/addUser", register);

module.exports = router;
