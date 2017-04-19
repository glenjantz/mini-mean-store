//require mongoose to set model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//make the schema
var UserSchema = new mongoose.Schema({
  name: {type: String,
         required: true,
         unique: true},
},{timestamps: true});
//set the schema
mongoose.model("User", UserSchema);
