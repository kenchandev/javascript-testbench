var Stack = (function(){
  function Stack(){

  }

  var _dataStore = [],
      _top = 0;

  Stack.prototype.push = function(element){
    _dataStore[_top++] = element; 
  };

  Stack.prototype.pop = function(){
    return _dataStore[--_top];
  };

  Stack.prototype.peek = function(){
    return _dataStore[_top - 1];
  };

  Stack.prototype.print = function(){
    for(var i = 0; i < _top; i++){
      console.log(_dataStore[i]);
    }
  };

  Stack.prototype.length = function(){
    return _top;
  };

  Stack.prototype.clear = function(){
    _dataStore = [];
    _top = 0;
  };

  return Stack;
})();

var s = new Stack();