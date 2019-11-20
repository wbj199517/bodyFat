const express = require("express");
const routes = require("./routes/api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json');

const app = express();

//swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', routes);


//connect to mongoDB
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost/bodyFat",{ useNewUrlParser: true,useUnifiedTopology: true });
mongoose.Promise = global.Promise;

//to retrieve json data
app.use(bodyParser.json());
app.use("/api", routes);

//next   error handle
app.use(function(err, req, res, next) {
  if(err.message==='Food Not found'){
  res.status(404).send({ error: err.message });
  console.error("error:"+ err.message);}
  else {
    res.status(422).send({ error: err.message });
    console.error("error:"+ err.message);}
});

app.listen(4000, function() {
  console.log("Express Listening on port 4000");
});
