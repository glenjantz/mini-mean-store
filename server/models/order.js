var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrderSchema = new mongoose.Schema({
  //user id for order
  _user: {type: Schema.Types.ObjectId,
          ref: "User",
          required: [true,"must be attached to a user"]},
  qty: {type: Number,
        required: [true, "must set a quantity to order"]},
  //product id for order      
  _product: {type: Schema.Types.ObjectId,
             ref: "Product",
              required: [true, "must select a product"]}
},{timestamps: true});

mongoose.model("Order", OrderSchema)
