var mongoose = require('mongoose');
var Product = mongoose.model("Product");
module.exports = {
  //get all products
  index: function(req,res){
    Product.find({}, function(err, products){
      if(err){
        console.log('something went wrong finding the friends', err);
      }else{
        res.json(products);
      }
    });
  },
  //create a product
  create: function(req,res){
    console.log('this is the req.body', req.body);
    Product.create(req.body, function (err, product) {
      if (err) {
        res.json(err);
      }else {
        res.json(product)
      }
    });
    },
}
