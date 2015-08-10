var app = angular.module('filterApp', []);

app.controller('EmployeeController', ['$scope', 'employeeService', function($scope, employeeService){
    $scope.employeeData = {
      employees: employeeService.getEmployees()
    }
  }
])
