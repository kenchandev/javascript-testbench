'use strict';

var swap = require('./swap');

(function(){
  /**
   * Selection Sort: O(n^2) algorithm for sorting an array of elements in-place.
   *                 The array is imaginarily divided into two parts - one sorted and one not sorted.
   *                 Initially, the sorted part is empty, while the unsorted part is the entire array.
   *                 For every step, find the minimal element and append it to the end of the sorted part.
   *
   * 5 1 12 -5 16 2 12 14
   *
   * Example:
   * -5 1 12 5 16 2 12 14    (Swapped -5, the smallest element, into the first position)
   * -5 1 12 5 16 2 12 14    (Left the array as is since 1 is the second smallest element)
   * -5 1 2 5 16 12 12 14    (Swapped 2, the third smallest element, into the third position)
   * (At this point, the remaining work can be derived easily)
   *
   * @param {Array}
   * @return {void}
   */
  var selectionSort = function(arr){
    var length = arr.length;
    var posMin;

    //  Outer loop designates the next position to place a minimal element at.
    for(var i = 0; i < length - 1; i++){
      posMin = i;

      //  Iterate through to find the smallest element's position.
      for(var j = i; j < length; j++){
        if(arr[posMin] > arr[j]){
          posMin = j;
        }
      }

      //  Perform the swap once the smallest element is found.
      if(i !== posMin){
        swap(arr, i, posMin);
      }
    }
  };

  module.exports = selectionSort;
}());
