'use strict';

app.controller('PostCodeController', ['$scope', 'postCodeService', function($scope, postCodeService){
    $scope.postCodeData = {};

    var success = function(data, status, headers, config){
      console.log(data);
      $scope.postCodeData.result = data.result;
    };

    var error = function(data, status, headers, config){
      console.log(data);
      $scope.postCodeData.error = data;
    };

    postCodeService.getRandomPostCode(success, error);
  }
])
