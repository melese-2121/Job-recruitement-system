const express = require("express");
const app = express();
const mysql = require("mysql2");

// Create Connection
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "job_recruitement_system",
});

app.get("/", (req, res) => {
  const insertData = `INSERT INTO users (username, email, password) VALUES ("melese", "me@gamail.com", "password");`;
  db.query(insertData, (err, result) => {
    if (err) console.log(err);
    res.send("Welcome melese.");
    console.log("Data added to the sytem ");
  });
});

app.listen(4000, () => {
  console.log("It is now working on 4000 let's go man!!");
});
