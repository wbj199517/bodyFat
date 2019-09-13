const express = require("express");
const router = express.Router();
const FoodModel = require("../models/food");
//get list of food from DB
router.get("/food", function(req, res) {
  res.send({ type: "GET" });
});

//add new food to DB
router.post("/food", function(req, res) {
  FoodModel.create(req.body).then(function(food) {
    res.send({ food });
  });
});

//update food in DB
router.put("/food/:id", function(req, res) {
  res.send({ type: "PUT" });
});

//delete food in DB
router.delete("/food/:id", function(req, res) {
  res.send({ type: "DELETE" });
});

module.exports = router;
