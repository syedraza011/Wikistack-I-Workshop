const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const { notFoundPage } = require("./views");

app.use(morgan("dev")); //logging middleware
app.use(express.static(path.join(__dirname, "./public"))); //serving up static files (e.g. css files)
app.use(express.urlencoded({ extended: false })); //parsing middleware for form input data
app.use(express.json());
app.use(require("method-override")("_method"));

app.use("/wiki", require("./routes/wiki"));
app.use("/users", require("./routes/users"));

app.use((req, res) => {
  res.status(404).send(notFoundPage());
});

app.get("/", function (req, res) {
  res.redirect("/wiki/");
});
// added a new fucntion
app.use((err, req, res, next) => {
  // console.log("eror");
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = app;
