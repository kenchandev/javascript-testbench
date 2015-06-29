//  A dictionary is a collection of key/value pairs.
//  - A key is a unique identifier mapped to a particular element.

function Dictionary(){
  this._items = {};
}

Dictionary.prototype = {
  constructor: Dictionary,
  set: function(key, value){
    _items[key] = value;
  }
  remove: function(key){
    if(_items.has(key)){
      delete items[key];
      return true;
    }
    return false;
  }
}