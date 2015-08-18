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
   * Auxiliary hash function for hash table to minimize hash collisions.
   * @param {*}
   * @return {int}
   */
  var djb2HashCode = function(key){
    var hash = 5381;

    for(var i = 0; i < key.length; i++){
      hash = hash * 33 + key.charCodeAt(i); //  charCodeAt returns unicode value for character at position i.
    }

    return hash % 1013;
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
   * @return {void}
   */
  HashTable.prototype.remove = function(key){
    table[(key)] = undefined;
  };

  /**
   * Prints hash table.
   * @param {void}
   * @return {void}
   */
  HashTable.prototype.print = function(){
    for(var i = 0; i < this.table.length; i++){
      if(this.table[i] !== undefined){
        console.log(i + ': ' + this.table[i]);
      }
    }
  };

  module.exports = HashTable;
}());
