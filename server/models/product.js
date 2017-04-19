//require mongoose to set model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//make the schema
var ProductSchema = new mongoose.Schema({
  name: {type: String,
         required: [true, "name of the product is required"]},
  qtyleft: {type: Number,
            required: [true, "initial quantity is required"]},
  description: {type: String,
                required: [true, "description is required"]},
  img: {type: String}
},{timestamps: true});
//set the schema
mongoose.model("Product", ProductSchema);
