const express = require("express");
const { User } = require("./models/User.jsx");
const app = express();

app.get("/", (req, res) => {
  // Create User Table
  User.sync({ alter: true })
    .then(async (response) => {
      console.log("Table created successfully!");

      //Add user to database
      await User.create({
        username: "melese",
        email: "melese@gmail.com",
        password: "345.",
      });

      //Find user from DB
      await User.findAll({
        where: { password: "Mypassword12345." },
      });

      // // Update table
      // const result = User.destroy({
      //   where: {
      //     password: "Mypassword123.",
      //   },
      // // });
      // console.log(JSON.stringify(result));
    })
    .catch((err) => {
      console.log(`Error occured: ${err}`);
    });

  res.send("Welcome to home page.");
});

app.listen(5000, () => {
  console.log("Server is listening on 5000");
});
