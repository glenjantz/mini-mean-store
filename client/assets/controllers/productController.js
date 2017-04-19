myApp.controller('productController', ['$scope', 'productsFactory', '$location', function($scope,productsFactory, $location) {
  $scope.products = [];  //products to show
  $scope.newProduct = {};  //don't need this line for ng model
  $scope.quantity = 1;  //used for show more
  $scope.status = true;  //used for show more
  $scope.errors = [];  //display these erros
//tells the factory to get products
   var index = function () {
      productsFactory.index(function(data) {
          console.log(data);
          $scope.products = data;
      })
  }
  //invokes index for product
  index();

  //tells factory to add this product
  $scope.create = function() {
      productsFactory.create($scope.newProduct, function(data) {
        //check for errors
        if(data.errors){
          $scope.errors = data.errors;
        }else{
          $scope.newProduct = {};  //clear form fields
          $location.url('/')  //redirect to main page
        }
      });
  }
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

}]);
