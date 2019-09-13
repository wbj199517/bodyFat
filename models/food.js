const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  name: {
    type: String,
    required: [true, "name field is required"]
  },
  calorie: {
    type: Number
  },
  protein: {
    type: Number
  },
  fat: {
    type: Number
  },
  carbs: {
    type: Number
  }
});
//food below is for collection name, all the foodschema save to food collection
const FoodModel = mongoose.model("food", FoodSchema);

module.exports = FoodModel;
