var _ = require('lodash');
var expect = require('chai').expect;
var sort = require('../index');

var bubbleSort = sort.bubble;
var insertionSort = sort.insertion;
var selectionSort = sort.selection;

describe('Sorting Algorithms', function(){
  var exampleArrays;
  var sortedArray;

  before(function(){
    exampleArrays = {
      bubble: null,
      selection: null,
      insertion: null,
      merge: null,
      quick: null
    };

    _.forIn(exampleArrays, function(value, key){
      exampleArrays[key] = [8, 9, 5, 3, 6, 10, 2];
    });

    sortedArray = [2, 3, 5, 6, 8, 9, 10];
  });

  //  Note: All arrays are sorted in-place using their actual references.

  it('Bubble sort algorithm works.', function(){
    var unsortedArray = exampleArrays.bubble;

    bubbleSort(unsortedArray);
    expect(unsortedArray).to.eql(sortedArray);
  });

  it('Insertion sort algorithm works.', function(){
    var unsortedArray = exampleArrays.insertion;

    insertionSort(unsortedArray);
    expect(unsortedArray).to.eql(sortedArray);
  });

  it('Selection sort algorithm works.', function(){
    var unsortedArray = exampleArrays.selection;

    selectionSort(unsortedArray);
    expect(unsortedArray).to.eql(sortedArray);
  });
});
