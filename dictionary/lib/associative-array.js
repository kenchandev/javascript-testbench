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
   *
   * @param {}
   * @return {}
   */
  AssociativeArray.prototype.has = function(key){
    return key in this.items;
  };
}());
