console.log('order factory')
myApp.factory('ordersFactory', ['$http', function($http){
  var factory = {};
  var orders = [];
  factory.index = function(callback){
    $http.get('/orders').then(function(returned_data){
      console.log('this is the returned data from factory index', returned_data.data);
      orders = returned_data.data;
      callback(orders);
    });
  }
  factory.create = function(neworder, callback) {
    console.log('this is the new order', neworder)
      $http.post('/orders', neworder).then(function(returned_data){
        console.log('this is the returned data from the factory attempt', returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
  }
  return factory
}])
