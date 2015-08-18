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
   * @param {}
   * @return {}
   */
  AssociativeArray.prototype.set = function(key, value){

  };

  /**
   *
   *
   */
}());
