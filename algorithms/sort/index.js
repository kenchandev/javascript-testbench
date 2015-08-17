/**
 * Written by Ken Chan
 * MIT Licensed
 */

'use strict';

(function(){
  module.exports = {
    bubbleSort: require('./lib/bubble_sort'),
    selectionSort: require('./lib/selection_sort'),
    insertionSort: require('./lib/insertion_sort'),
    mergeSort: require('./lib/merge_sort'),
    quickSort: require('./lib/quick_sort')
  };
}());
