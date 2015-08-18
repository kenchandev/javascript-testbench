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

  /**
   * Retrieves a specific value based on a provided key.
   * @param {*}
   * @return {*}
   */
  AssociativeArray.prototype.get = function(key){
    return this.has(key) ? this.items[key] : undefined;
  };

  /**
   * Returns an array of all keys within the associative array.
   * @param {void}
   * @return {Array}
   */
  AssociativeArray.prototype.keys = function(){
    var keys = [];

    for(var k in this.items){
      if(this.has(k){
        keys.push(k);
      })
    }

    return keys;
  };

  /**
   * Returns an array of all values within the associative array.
   * @param {void}
   * @return {Array}
   */
  AssociativeArray.prototype.values = function(){
    var values = [];

    for(var k in this.items){
      if(this.has(k)){
        values.push(this.items[k]);
      }
    }

    return values;
  };

  /**
   *
   * @param {}
   * @return {}
   */
  AssociativeArray.prototype.clear = function(){
    this.items = {}
  };

  /**
   *
   * @param {}
   * @return {}
   */
  AssociativeArray.prototype.size = function(){
    return Object.keys(this.items).length;
  };

  module.exports = AssociativeArray;
}());
