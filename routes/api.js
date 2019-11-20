const express = require("express");
const router = express.Router();
const FoodModel = require("../models/food");
//get list of food from DB
router.get("/food", function(req, res, next) {
  FoodModel.find({}).then(function(ninjas) {
    res.send(ninjas);
  });
});
//get one food from DB by food name
router.get("/food/:name", function(req, res, next) {
  const foodName = req.params.name;
  FoodModel.findOne({name:foodName}).then(function(ninjas) {
    if(ninjas==null){
      throw new Error('Food Not found');}
    res.send(ninjas);
    })
  .catch(next);
  });

//add new food to DB
router.post("/food", function(req, res, next) {
  FoodModel.create(req.body)
    .then(function(food) {
      res.send({ food });
    })
    .catch(next);
});



//update food in DB
router.put("/food/:id", function(req, res, next) {
  res.send({ type: "PUT" }).catch(next);
});

//delete food in DB by query
router.delete("/food/:name*?", function(req, res, next) {
  const foodName= req.query.name;
  FoodModel.deleteOne({name:foodName})
  .then(function(food){
    res.send({food});
  })

});



module.exports = router;
