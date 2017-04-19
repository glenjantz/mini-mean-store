//require mongoose to use the schema
var mongoose = require('mongoose');
//use the schema
var User = mongoose.model('User');
console.log('friends controller');
//export db queries and actions
module.exports = {
  //get all users
  index: function(req,res){
    User.find({}, function(err, users){
      if(err){
        console.log('something went wrong finding the friends', err);
      }else{
        res.json(users);
      }
    });
  },
  //create one user
  create: function(req,res){
    console.log('this is the req.body', req.body);
    User.create(req.body, function (err, user) {
      if (err) {
        res.json(err)

      }else {
        res.json(user)
      }
    });
    },
  //delete one user
  deleted: function(req,res){
    User.remove({_id: req.params.id}, function(err){
      if(err){
        console.log('something went wrong deleting');
      }else{
        res.json({deleted: true});
      }
    });
  },
}
