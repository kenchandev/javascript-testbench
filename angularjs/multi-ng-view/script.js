var app = angular.module('newApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      controller: 'RouteCtrl',
      templateUrl: 'router.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
});

app.controller('RouteCtrl', function($scope){
  $scope.template = {
    'partial1': 'partial-1.html',
    'partial2': 'partial-2.html',
    'partial3': 'partial-3.html'
  };

  $scope.message = {
    'partial1': 'Hello From Partial 1!',
    'partial2': 'Hello From Partial 2!',
    'partial3': 'Hello From Partial 3!'
  }
});
