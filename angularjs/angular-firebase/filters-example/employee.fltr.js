'use strict';

app.filter('seniorEmployeeFilter', function(){
  return function(items){
    return _.filter(items, function(item){
      return item.age >= 58;
    });
  };
});
