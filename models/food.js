const mongoose = require("mongoose");
const foodSchemaJson = require("../schemas/food.json")
const Schema = mongoose.Schema;

const FoodSchema = new Schema(foodSchemaJson);
//food below is for collection name, all the foodschema save to food collection
const FoodModel = mongoose.model("food", FoodSchema);

module.exports = FoodModel;
