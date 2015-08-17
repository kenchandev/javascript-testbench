'use strict';

(function(){
  /**
   * Insertion Sort: O(n^2) algorithm for sorting an array of elements in-place
   *                 (Has better overall performance compared to selection and bubble sorts)
   * 42 16 84 12 77 26 53
   *
   * Example iteration:
   * 42 16 84 12 77 26 53    (Started off with 42 in the left subsection)
   * 16 42 84 12 77 26 53    (Introduced 16 to the left subsection, and shifted 42 to make room)
   * 16 42 84 12 77 26 53    (Introduced 84 to the left subsection, and left as is)
   * 12 16 42 84 77 26 53    (Introduced 12 to the left subsection, and shifted 16, 42 and 84 to make room)
   * (At this point, the remaining work can be derived easily)
   *
   * @param {Array}
   * @return {void}
   */
  var insertionSort = function(arr){
    var length = arr.length;
    var j, temp;

    //  First element is already in the subsection by default. Hence, start at position 1.
    for(var i = 1; i < length; i++){
      j = i;
      temp = arr[i];

      while(j > 0 && arr[j - 1] > temp){
        arr[j] = arr[j-1];
        j--;
      }

      arr[j] = temp;
    }
  };

  module.exports = insertionSort;
}());
