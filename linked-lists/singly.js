//  Singly Linked List
var Node = (function(){
  var _data,
      _next;

  function Node(data){
    _data = data;
    _next = null;
  };

  Node.prototype.getData = function(){
    return _data;
  };

  Node.prototype.getNext = function(){
    console.log(_next);
    return _next;
  };

  Node.prototype.setNext = function(nextNode){
    _next = nextNode;
  };

  return Node;
})();

var LinkedList = (function(){
  var _head;

  function LinkedList(){
    _head = new Node("head");
  };

  LinkedList.prototype.find = function(data){
    console.log(_head.getData());
    var currentNode = _head;
    console.log(_head.getData());
    console.log(currentNode.getData());
    while(currentNode.getData() != data){
      currentNode = currentNode.getNext();
    }
    return currentNode;
  };

  LinkedList.prototype.insert = function(newData, precedingData){
    console.log(_head.getData());
    var newNode = new Node(newData);
    console.log(_head.getData());
    var precedingNode = this.find(precedingData);
    console.log(precedingNode);
    newNode.setNext(precedingNode.getNext());
    precedingNode.setNext(newNode);
  };

  LinkedList.prototype.display = function(){
    var currentNode = _head;
    while(currentNode.getNext() != null){
      console.log(currentNode.getNext().getData());
      currentNode = currentNode.getNext();
    }
  };

  LinkedList.prototype.remove = function(data){
    var previousNode = this.findPrevious(data);
    if(previousNode != null){
      previousNode.setNext(previousNode.getNext().getNext());
    }
  };

  LinkedList.prototype.findPrevious = function(data){
    var currentNode = _head;
    while(currentNode.getNext() != null && 
          currentNode.getNext().getData() != data){
      currentNode = currentNode.getNext();
    }
    return currentNode;
  };

  return LinkedList;
})();

















