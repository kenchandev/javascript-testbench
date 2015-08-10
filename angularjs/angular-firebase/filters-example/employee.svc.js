'use strict';

app.service('employeeService', function(){
  var Employee = function(name, age){
    this.name = name;
    this.age = age;
  };

  var getEmployees = function(){
    return [
      new Employee('First Employee', 56),
      new Employee('First Old Employee', 58),
      new Employee('Second Employee', 32),
      new Employee('Second Old Employee', 59),
      new Employee('Last Employee', 32)
    ];
  };

  this.Employee = Employee;
  this.getEmployees = getEmployees
});
