'use strict';

var swap = require('./swap');

(function(){
  /**
   * Insertion Sort: O(n^2) algorithm for naively sorting an array of elements
   *                 The array is sorted in ascending order by performing multiple swaps.
   *                 Finds the largest element in a given subset, and gradually swaps it towards the right.
   *                 (Has better overall performance compared to selection and bubble sorts)
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
  var insertionSort = function(arr){

  };

  module.exports = insertionSort;
}());
