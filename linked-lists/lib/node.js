'use strict';

/**
 * A node is an element of a list.
 * It is comprised of two items - the data and a reference to the next node.
 * @param {int}
 * @return {Node}
 */
var Node = module.exports = function Node(data){
  this.data = data;
  this.next = null;
};

/**
 * Getter method for obtaining data of a node.
 * @param {void}
 * @return {int}
 */
Node.prototype.getData = function(){
  return this.data;
};

/**
 * Getter method for obtaining subsequent node of a node.
 * @param {void}
 * @return {Node}
 */
Node.prototype.getNext = function(){
  return this.next;
};

/**
 * Setter method for settting subsequent node for a node.
 * @param {Node}
 * @return {void}
 */
Node.prototype.setNext = function(next){
  this.next = next;
};
