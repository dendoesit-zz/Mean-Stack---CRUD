// Code goes here
var app = angular.module('app', []);

app.controller('demoController', function($scope) {
  
  $scope.items = [
    'john',
    'mike',
    'hannibal'
  ];
  
  $scope.add = function() {
    $scope.items.push($scope.input);
    $scope.input = '';
  };
  
  $scope.remove = function(index) {
    $scope.items.splice(index, 1);
  };
  
});