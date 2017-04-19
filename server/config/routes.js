console.log("future routes");
////require the controllers
var users = require('../controllers/users');
var orders = require('../controllers/orders');
var products = require('../controllers/products');
//have routes call the properc friends db methods
module.exports = function(app){
  //this line doesn't need to exist
  app.get('/', function(req, res) {
    res.render('index')
  });
  //get all users
  app.get('/users', users.index);
  //get all orders
  app.get('/orders', orders.index);
  //get all products
  app.get('/products', products.index);
  //add a user
  app.post('/users', users.create);
  //add a product
  app.post('/products', products.create);
  //add an order
  app.post('/orders', orders.create);
  //delete one user by id
  app.delete('/users/:id', users.deleted)
};
