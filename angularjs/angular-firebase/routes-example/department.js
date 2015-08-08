app.controller('DepartmentCtrl', ['$scope', function($scope){
    var Department = function(abbreviatedName, name){
      this.abbreviatedName = abbreviatedName;
      this.name = name;
    };

    var getDepartments = function(){
      return [
        new Department('HR', 'Human Resources'),
        new Department('FIN', 'Finance'),
        new Department('MRKT', 'Marketing')
      ];
    };

    $scope.departmentData = {
      departments: getDepartments()
    };
  }
]);
