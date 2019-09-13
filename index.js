const express = require("express");
const routes = require("./routes/api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

//connect to mongoDB
mongoose.connect("mongodb://localhost/bodyFat");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use("/api", routes);

app.listen(4000, function() {
  console.log("Express Listening on port 4000");
});
