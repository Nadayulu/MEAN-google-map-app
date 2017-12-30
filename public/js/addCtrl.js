//Creates the addCtrl Module and controller.
var addCtrl = angular.module('addCtrl', ['geolocation']);
addCtrl.controller('addCtrl', function($scope, $http, geolocation){

  $scope.formData = {};
  var coords = {};
  var lat = 0;
  var long = 0;

  // Set initial coordinates to LA
  $scope.formData.latitude = 118.243;
  $scope.formData.longitude = 34.052;

  // Functions

  // Creates a new user with datas from the fields
  $scope.createUser = function() {

    // Grabs all of the text box fields
    var userData = {
        username: $scope.formData.username,
        gender: $scope.formData.gender,
        age: $scope.formData.age,
        favlang: $scope.formData.favlang,
        location: [$scope.formData.longitude, $scope.formData.latitude],
        htmlverified: $scope.formData.htmlverified
    };

    $http.post('/users', userData)
      .success(function (data) {

        $scope.formData.username = "";
        $scope.formData.gender = "";
        $scope.formData.age = "";
        $scope.formData.favlang = "";

      })
      .error(function(err) {
          console.log('Error: ' + err);
      })
  }
})