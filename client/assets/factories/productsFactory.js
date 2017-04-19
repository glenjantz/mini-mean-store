console.log('product factory')
myApp.factory('productsFactory', ['$http', function($http){
  var factory = {};
  var products = [];
  factory.index = function(callback){
    $http.get('/products').then(function(returned_data){
      console.log('this is the returned data from factory index', returned_data.data);
      products = returned_data.data;
      callback(products);
    });
  }
  factory.create = function(newproduct, callback) {
    console.log('this is the expected product', newproduct)
      $http.post('/products', newproduct).then(function(returned_data){
        console.log('this is the returned data', returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
  }
  return factory
}])
