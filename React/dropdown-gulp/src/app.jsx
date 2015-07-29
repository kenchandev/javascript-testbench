var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a Dessert',
  items: [
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
};

//  React, create instance and render this class.
//  Second parameter is this.props values...
var element = React.createElement(Dropdown, options);
//  React, after rendering this class, place it in body tag.
React.render(element, document.querySelector('.container'));