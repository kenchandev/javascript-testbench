'use strict';

var Node = require('./node').doubly;

/**
 * A doubly linked list contains nodes with references to previous and next nodes.
 * @param {void}
 * @return {}
 */
var DoublyLinkedList = module.exports = function DoublyLinkedList(){
  this.head = null;
  this.tail = null;
  this.length = 0;
};

/**
 * Insert an element at any position within the linked list
 * @param {int}
 * @param {int}
 * @return {boolean}
 */
DoublyLinkedList.prototype.insert = function(position, data){
  //  Check if out-of-bounds
  if(position >= 0 && position <= this.length){
    var node = new Node(data);
    var current;
    var previous;
    var index = 0;

    //  Inserting into the first position.
    if(position === 0){
      current = this.head;

      if(!head){
        this.head = node;
        this.tail = node;
      }
      else{
        //  Must set references for node's next and current node's previous.
        node.setNext(current);
        current.setPrev(node);
        this.head = node;
      }
    }
    //  Inserting into the last position.
    else if(position === this.length){
      current = this.tail;

      //  Must set references for node's previous  and current node's next.
      current.setNext(node);
      node.setPrev(current);
      this.tail = node;
    }
    else{
      
    }
  }
};

/**
 *
 *
 *
 */
DoublyLinkedList.prototype.removeAt = function(position){

};
