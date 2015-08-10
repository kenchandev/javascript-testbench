'use strict';

app.service('employeeService', function(){
  var Employee = function(name, age){
    this.name = name;
    this.age = age;
  };

  var getEmployees = function(){
    return [
      new Employee('First Employee', 56),
      new Employee('Second Employee', 44),
      new Employee('Third Employee', 32)
    ];
  };

  this.Employee = Employee;
  this.getEmployees = getEmployees
});
