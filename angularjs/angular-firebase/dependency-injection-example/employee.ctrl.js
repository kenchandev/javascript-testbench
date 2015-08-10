app.controller('EmployeeController', ['$scope', 'employeeService', function($scope, employeeService){
    $scope.employeeData = employeeService.getEmployees();
  }
]);
