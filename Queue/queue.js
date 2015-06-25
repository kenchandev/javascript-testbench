var Queue = (function(){
  function Queue(){

  }

  var _dataStore = [];

  Queue.prototype.enqueue = function(element){
    _dataStore.push(element);
  };

  Queue.prototype.dequeue = function(){
    _dataStore.shift();
  };

  Queue.prototype.front = function(){
    return _dataStore[0];
  };

  Queue.prototype.back = function(){
    return _dataStore[_dataStore.length - 1];
  };

  Queue.prototype.toString = function(){  
    for(var i = 0; i < _dataStore.length; i++){
      console.log(_dataStore[i]);
    }
  };

  Queue.prototype.isEmpty = function(){
    return (_dataStore.length === 0) ? true : false;
  };

  return Queue;
})();