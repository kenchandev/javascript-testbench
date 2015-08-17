'use strict';

(function(){
  /**
   * Bubble Sort: O(n^2) algorithm for naively sorting an array of elements
   *              The array is sorted in ascending order by performing multiple swaps.
   *              Finds the largest element in a given subset, and gradually swaps it towards the right.
   * 45 67 12 34 25 39
   *
   * Example iteration:
   * 45 67 12 34 25 39    (Compared 45 and 67, left them be)
   * 45 12 67 34 25 39    (Compared 67 and 12, swapped them)
   * 45 12 34 67 25 39    (Compared 67 and 34, swapped them)
   * 45 12 34 25 67 39    (Compared 67 and 25, swapped them)
   * 45 12 34 25 39 67    (Compared 67 and 39, swapped them)
   *
   * @param {Array}
   * @return {void}
   */
  var bubbleSort = function(arr){
    var length = arr.length;

    for(var i = 0; i < length; i++){
      for(var j = 0; j < length-i-1; j++){
        //  If the left element is greater than the right element, swap.
        if(arr[j] > arr[j+1]){
          swap(arr, j, j+1);
        }
      }
    }
  };

  /**
   * Auxiliary function for swapping two elements inside an array.
   * @param {Array}
   * @param {int}
   * @param {int}
   * @return {void}
   */
  var swap = function(arr, pos1, pos2){
    //  Small optimization for space if both elements are numbers.
    if(typeof(arr[pos1]) === 'number' && typeof(arr[pos2]) === 'number'){
      arr[pos1] = arr[pos1] + arr[pos2];
      arr[pos2] = arr[pos1] - arr[pos2];
      arr[pos1] = arr[pos1] - arr[pos2];
    }
    else{
      var temp = arr[pos1];
      arr[pos1] = arr[pos2];
      arr[pos2] = temp;
    }
  };

  module.exports = bubbleSort;
}());
