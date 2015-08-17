'use strict';

(function(){
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

  module.exports = swap;
}());
