const { User } = require("../models");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const user = await req.body;

  try {
    //Hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);

    const [newUser, created] = await User.findOrCreate({
      where: { username: user.username },
      defaults: {
        username: user.username,
        email: user.email,
        password: hash,
      },
    });
    if (created) {
      res.json("Thank you for your registration.");
    } else {
      res.json("Username is already taken, please try again.");
    }
  } catch (error) {
    console.log(error);
    res.json("Interval server error, please try again later.");
  }
};

const login = async (req, res) => {
  const username = await req.body.username;

  if (username == "") {
    res.send("Hey you welcome, You must provide username and password!");
  } else {
    const hashedPWD = await User.findOne({ where: { username: username } })
      .password;
    let result = false;
    bcrypt.compare(username, hashedPWD, (err, res) => {
      result = res;
    });
    if (result) {
      const user = await User.findAll({
        where: {
          username: username,
        },
      });
    } else {
      res.send("Hey you welcome, You must provide username and password!");
    }

    res.send(user);
  }
};

module.exports = { register, login };
