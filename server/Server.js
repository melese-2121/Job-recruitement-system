const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

//Routes
const userRouter = require("./routes/Users");
app.use("/users", userRouter);

const adminRouter = require("./routes/Admins");
app.use("/admin", adminRouter);

const orgRouter = require("./routes/Orgs");
app.use("/org", orgRouter);

const postsRouter = require("./routes/Posts");
app.use("/posts", postsRouter);

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
