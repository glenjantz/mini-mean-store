myApp.controller('orderController', ['$scope','usersFactory', 'productsFactory','ordersFactory','$location', function($scope, usersFactory, productsFactory,ordersFactory,$location) {
  $scope.orders = [];  //orders to show
  $scope.users = [];  //populate possible users
  $scope.products = [];  //populate possible products
  $scope.errors = [];  //used for error msgs
  $scope.newOrder = {};
// tells the factory to get users
  var index = function () {
      usersFactory.index(function(data) {
          // console.log('this is the data for the users index', data);
          $scope.users = data;
      })
  }
  // get the products
  var index2 = function () {
     productsFactory.index(function(data) {
        //  console.log('this is the data for the products', data);
         $scope.products = data;
     })
 }
 //get existing orders
 var index3 = function () {
    ordersFactory.index(function(data) {
        // console.log('this is the data for the orders', data);
        $scope.orders = data;
    })
}
  // invokes indexes
  index();
  index2();
  index3();
  // //tells factory to add this order
  $scope.create = function() {
    if(typeof($scope.newOrder._user) === 'undefined'){
      $scope.errors = {user:{message: "must select a user"}}
    }else if (typeof($scope.newOrder._product) === 'undefined'){
      $scope.errors = {product:{message: "must select a product"}}
    }else if(typeof($scope.newOrder.qty) === 'undefined'){
      $scope.errors = {qty:{message: "must select an amount"}}
    }else{
      ordersFactory.create($scope.newOrder, function(data) {
        //checks for errors
        if(data.errors){
          $scope.errors = data.errors
        }
        else{
          $scope.orders.push(data); //update order array
          $scope.newOrder = {};  //clear form fields
          $location.url('/dashboard')
        }

      });
    }

  }
}]);
