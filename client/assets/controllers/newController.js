myApp.controller('newController', ['$scope','usersFactory', '$location', function($scope, usersFactory, $location) {
  $scope.users = [];  //users to show
  $scope.error; //used for user already exists
//tells the factory to get users
  var index = function () {
      usersFactory.index(function(data) {
          console.log(data);
          $scope.users = data;
      })
  }
  //invokes index for friends
  index();

  //tells factory to add this user
  $scope.create = function() {
      usersFactory.create($scope.newUser, function(data) {
        //if user exists...display msg
        if(data.errmsg){
          $scope.error = "user already exists"
        }
          $scope.newUser = {};  //clear form fields
          $location.url('/')  //redirect to main page
      });
  }
  //tells factory to delete this user and then deletes from the scope
  $scope.delete = function(id, user){
    usersFactory.deletethis(id, function(data){
      //this line deletes the friend from the temp array friends but he is already out of the db
      $scope.users.splice($scope.users.indexOf(user),1)
    });
  }
}]);
