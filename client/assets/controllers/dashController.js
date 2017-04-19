//get all factories for all the data
myApp.controller('dashController', ['$scope', 'usersFactory', 'productsFactory', 'ordersFactory', function($scope,usersFactory,productsFactory,ordersFactory){
$scope.orders = [];   //all the orders
$scope.users = [];   //all the users
$scope.products = [];  //all the products
$scope.status = true;  //used for showmore
//get all the users
  var index = function () {
      usersFactory.index(function(data) {
          // console.log('this is the data for the users index', data);
          $scope.users = data;
      })
  }
  index();
  //get all the products
  var index2 = function () {
     productsFactory.index(function(data) {
        //  console.log('this is the data for the products', data);
         $scope.products = data;
     })
 }
 index2();
 //get all the orders
 var index3 = function () {
    ordersFactory.index(function(data) {
        // console.log('this is the data for the orders', data);
        $scope.orders = data;
    })
}
index3();

//show more products
$scope.showmore = function(){
  if($scope.quantity >= $scope.products.length){
    $scope.status = false;
  }else{
    $scope.quantity += 5;
    if($scope.quantity >= $scope.products.length){
      $scope.status = false;
    }
  }
}
$scope.filter = function(){
  $scope.namefilter = $scope.namefilterbefore;
}
}])
