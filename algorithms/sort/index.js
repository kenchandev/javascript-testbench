/**
 * Written by Ken Chan
 * MIT Licensed
 */

'use strict';

(function(){
  module.exports = {
    bubble: require('./lib/bubble_sort'),
    selection: require('./lib/selection_sort'),
    insertion: require('./lib/insertion_sort'),
    merge: require('./lib/merge_sort'),
    quick: require('./lib/quick_sort')
  };
}());
