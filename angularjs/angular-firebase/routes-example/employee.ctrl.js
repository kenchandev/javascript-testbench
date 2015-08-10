app.controller('EmployeeCtrl', ['$scope', function($scope){
    var Employee = function(name, age){
      this.name = name;
      this.age = age;
    };

    var getEmployees = function(){
      return [
        new Employee('First Employee', 56),
        new Employee('Second Employee', 44),
        new Employee('Last Employee', 32)
      ];
    };

    $scope.employeeData = {
      employees: getEmployees()
    };
  }
]);
