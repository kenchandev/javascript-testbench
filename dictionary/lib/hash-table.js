'use strict';

(function(){
  /**
   * A hash table finds a value in the shortest time possible.
   * @param {void}
   * @return {void}
   */
  var HashTable = function(){
    this.table = [];
  };

  /**
   * Adds a new item to the hash table.
   * @param {*}
   * @param {*}
   * @return {void}
   */
  HashTable.prototype.put = function(key, value){
    var position = ;
    console.log(position + ' - ' + key);
    this.table[position] = value;
  };

  /**
   * Retrieves a value from the hash table.
   * @param {*}
   * @return {*}
   */
  HashTable.prototype.get = function(){
    return table[(key)];
  };

  /**
   * Removes a value from the hash table.
   * @param {*}
   * @return {*}
   */
  HashTable.prototype.get = function(){
    table[(key)] = undefined;
  };

  module.exports = HashTable;
}());
