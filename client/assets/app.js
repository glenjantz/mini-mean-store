var myApp = angular.module('myApp', ['ngRoute', 'angularMoment']);
myApp.config(function ($routeProvider){
  $routeProvider
  //show users partial #!/
  .when('/', {
    templateUrl: 'partials/main.html',
    controller: 'newController'
  })
  //create new order #!/orders
  .when('/orders',{
    templateUrl: 'partials/orders.html',
    controller: 'orderController'
  })
  //show everything #!/dashboard
  .when('/dashboard', {
    templateUrl: 'partials/dashboard.html',
    controller: 'dashController'
  })
  //create product #!/products
  .when('/products', {
    templateUrl: 'partials/products.html',
    controller: 'productController'
  })
  //create new user #!/new
  .when('/new',{
    templateUrl: 'partials/new.html',
    controller: 'newController'
  })
  //redirect to index partial
  .otherwise({
    redirectTo: '/'
  });
});
