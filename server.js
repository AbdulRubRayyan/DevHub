const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const posts = require("./routes/api/posts");
const users = require("./routes/api/users");
const profiles = require("./routes/api/profiles");

const app = express();
const port = process.env.PORT || 5000;

//DB Configuration
const db = require("./config/keys").mongoURI;

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected. "))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello world!"));

//Use routes
app.use("/api/users", users);
app.use("/api/profiles", profiles);
app.use("/api/posts", posts);

app.listen(port, () => console.log("Connected to port 5000.."));
