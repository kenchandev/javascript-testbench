'use strict';

var swap = require('./swap');

(function(){
  /**
   * Merge Sort: O(nlogn) algorithm for sorting an array of elements in-place.
   *             Divide-and-conquer strategy, splitting downwards, and assembling upwards.
   *             (Fun Trivia: Firefox and Safari utilize merge sort for their implementation of Array.prototype.sort())
   * 13 4 1 7
   *
   * Example (Splitting and Merging):
   *       13 4 1 7
   *     13 4  |  1 7
   *    13 | 4   1 | 7
   *
   *       1 4 7 13
   *    4 13  |  1 7
   *   13 | 4   1 | 7
   *
   * @param {Array}
   * @return {arr}
   */
  var mergeSort = function(arr){
    var length = arr.length;

    if(length === 1){
      return arr;
    }

    var mid = Math.floor(length / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid, length);

    return merge()
  };

  var merge = function(leftArr, rightArr){

  };

  module.exports = mergeSort;
}());
