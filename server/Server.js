const express = require("express");
const cors = require("cors");
const app = express();
const { User } = require("./models");
const { Org } = require("./models");
const { Post } = require("./models");
const { Worker_org } = require("./models");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

//Routes
const userRouter = require("./routes/Users");
app.use("/users", userRouter);

const adminRouter = require("./routes/Admins");
app.use("/admin", adminRouter);

const orgRouter = require("./routes/Orgs");
app.use("/org", orgRouter);

const postsRouter = require("./routes/Posts");
app.use("/posts", postsRouter);
const _workers_org_router = require("./routes/Worker_org");
app.use("/worker_org", _workers_org_router);

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
