var expect = require('chai').expect;
var structures = require('../index');

var Node = structures.node;
var SinglyLinkedList = structures.singly;
var DoublyLinkedList = structures.doubly;
var CircularLinkedList = structures.circular;

describe('Node', function(){
  var node;

  before(function(){
    node = new Node(5);
  });

  it('Node has value 5.', function(){
    expect(node.getData()).to.equal(5);
  });
  it('Node is assigned a next element with value 6.', function(){
    var nextNode = new Node(6);
    node.setNext(nextNode);

    expect(node.getNext().getData()).to.equal(6);
  });
});

describe('Singly Linked List', function(){

});

describe('Doubly Linked List', function(){

});
