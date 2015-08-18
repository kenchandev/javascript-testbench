'use strict';

(function(){
  /**
   * An associative array contains key-value pairs.
   * @param {void}
   * @return {AssociativeArray}
   */
  var AssociativeArray = function(){
    this.items = {};
  };

  /**
   * Checks if a key exists within the associative array.
   * @param {*}
   * @return {boolean}
   */
  AssociativeArray.prototype.has = function(key){
    return key in this.items;
  };

  /**
   * Adds a new item to the associative array.
   * @param {*}
   * @param {*}
   * @return {void}
   */
  AssociativeArray.prototype.set = function(key, value){
    this.items[key] = value;
  };

  /**
   * Removes a value from the associative array using a corresponding key.
   * @param {*}
   * @return {boolean}
   */
  AssociativeArray.prototype.remove = function(key){
    if(this.has(key)){
      delete items[key];
      return true;
    }
    return false;
  };


}());
