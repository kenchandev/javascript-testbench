//  Time Complexity: O(n)
module.exports = {
  /**
   * Calculates the sum and product of the elements within an array.
   * @param {Array}
   * @return {void}
   */
  sum_product: function(array){
    var sum = 0;
    var product = 1;

    for(var i = 0; i < array.length; i++){
      sum += array[i];
    }

    for(var i = 0; i < array.length; i++){
      product *= array[i];
    }

    console.log('Sum: ' + sum);
    console.log('Product: ' + product);
  }
};
