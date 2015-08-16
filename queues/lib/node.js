'use strict';

var Node = module.exports = {
  singly: SinglyNode,
  doubly: DoublyNode
};

/**
 * This node represents an element of a singly linked list.
 * It is comprised of two items - the data and a reference to the next node.
 * @param {int}
 * @return {Node}
 */
function SinglyNode(data){
  this.data = data;
  this.next = null;
};

/**
 * Getter method for obtaining data of a node.
 * @param {void}
 * @return {int}
 */
SinglyNode.prototype.getData = function(){
  return this.data;
};

/**
 * Getter method for obtaining subsequent node of a node.
 * @param {void}
 * @return {Node}
 */
SinglyNode.prototype.getNext = function(){
  return this.next;
};

/**
 * Setter method for settting subsequent node for a node.
 * @param {Node}
 * @return {void}
 */
SinglyNode.prototype.setNext = function(next){
  this.next = next;
};

/**
 * This node represents an element of a doubly linked list.
 * It is comprised of three items - the data, a reference to the previous node and a reference to the next node.
 * @param {int}
 * @return {Node}
 */
function DoublyNode(data){
  this.data = data;
  this.next = null;
  this.prev = null;
};

/**
 * Getter method for obtaining data of a node.
 * @param {void}
 * @return {int}
 */
DoublyNode.prototype.getData = function(){
  return this.data;
};

/**
 * Getter method for obtaining subsequent node of a node.
 * @param {void}
 * @return {Node}
 */
DoublyNode.prototype.getNext = function(){
  return this.next;
};

/**
 * Setter method for settting subsequent node for a node.
 * @param {Node}
 * @return {void}
 */
DoublyNode.prototype.setNext = function(next){
  this.next = next;
};

/**
 * Getter method for obtaining previous node of a node.
 * @param {void}
 * @return {Node}
 */
DoublyNode.prototype.getPrev = function(){
  return this.prev;
};

/**
 * Setter method for settting previous node for a node.
 * @param {Node}
 * @return {void}
 */
DoublyNode.prototype.setPrev = function(next){
  this.prev = prev;
};
