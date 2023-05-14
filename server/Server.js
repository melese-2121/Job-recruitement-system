const express = require("express");
const db = require("./models");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//Routes
const registerRouter = require("./routes/Users");
app.use("/users", registerRouter);

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
