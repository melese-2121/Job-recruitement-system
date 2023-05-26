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
  const user = req.body;

  try {
    const targetUser = await User.findOne({
      where: { username: user.username },
    });
    const hashedPWD = targetUser.password;
    await bcrypt.compare(user.password, hashedPWD, async (err, response) => {
      if (response) {
        const dbUser = await User.findOne({
          where: { username: user.username },
        });
        res.send({ user: dbUser });
      } else {
        res.send("User not found");
      }
    });
  } catch (error) {
    error && res.send("User not found");
  }
};

module.exports = { register, login };
