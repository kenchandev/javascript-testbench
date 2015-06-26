//  Closure and internal storage enables encapsulation.

var Set = (function(){
  //  Must keep storage of private objects for this blueprint.
  var storage = {};
  var key = 0;

  function Set(){
    //  Create an object and provide a reference to it within the private storage.
    storage[this.id = key++] = {};
    storage[this.id].dataStore = [];
  };

  Set.prototype.add = function(data){
    if(storage[this.id].dataStore.indexOf(data) > -1){
      return false;
    }
    else{
      storage[this.id].dataStore.push(data);
      return true;
    }
  };

  Set.prototype.remove = function(data){
    var position = storage[this.id].dataStore.indexOf(data);
    if(position > -1){
      storage[this.id].dataStore.splice(position, 1);
      return true;
    }
    else{
      return false;
    }
  };

  Set.prototype.size = function(){
    return storage[this.id].dataStore.length;
  }

  Set.prototype.getSet = function(){
    return storage[this.id].dataStore;
  };

  //  Grab all the elements in the first set that also exist in the second set.
  Set.prototype.intersect = function(set){
    var tempSet = new Set();
    var thisDataStore = storage[this.id].dataStore;
    var setDataStore = storage[set.id].dataStore;
    for(var i = 0; i < thisDataStore.length; i++){
      if(setDataStore.indexOf(thisDataStore[i]) > -1){
        tempSet.add(thisDataStore[i]);
      }
    }
    return tempSet;
  };

  //  Grab all the unique elements in the first and second set.
  Set.prototype.union = function(set){
    var tempSet = new Set();
    var thisDataStore = storage[this.id].dataStore;
    var setDataStore = storage[set.id].dataStore;
    for(var i = 0; i < thisDataStore.length; i++){
      tempSet.add(thisDataStore[i]);
    }
    for(var i = 0; i < setDataStore.length; i++){
      if(thisDataStore.indexOf(setDataStore[i]) == -1){
        tempSet.add(setDataStore[i]);
      }
    }
    return tempSet;
  };

  //  Grab all the elements in the first set that do not exist in the second set.
  Set.prototype.difference = function(set){
    var tempSet = new Set();
    var thisDataStore = storage[this.id].dataStore;
    var setDataStore = storage[set.id].dataStore;
    for(var i = 0; i < thisDataStore.length; i++){
      if(setDataStore.indexOf(thisDataStore[i]) == -1){
        tempSet.add(thisDataStore[i]);
      }
    }
    return tempSet;
  };

  return Set;
})();