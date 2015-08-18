/**
 * Written by Ken Chan
 * MIT Licensed
 */

'use strict';

(function(){
  module.exports = {
    bubble: require('./lib/bubble-sort'),
    selection: require('./lib/selection-sort'),
    insertion: require('./lib/insertion-sort'),
    merge: require('./lib/merge-sort'),
    quick: require('./lib/quick-sort')
  };
}());
