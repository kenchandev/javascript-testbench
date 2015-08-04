var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [{
    title: 'See Tutorial',
    number: 120,
    imageURL: 'http://formatjs.io/img/react.svg',
    header: 'React.js Tutorial',
    description: 'React is a fantastic new library for making fast, dynamic pages.'
  },{
    title: 'See Tutorial',
    number: 25,
    imageURL: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400',
    header: 'Gulp.js Tutorial',
    description: 'Gulp speeds up development workflow.'
  }]
};

//  React, create instance and render this class.
//  Second parameter is this.props values...
var element = React.createElement(ThumbnailList, options);
//  React, after rendering this class, place it in body tag.
React.render(element, document.querySelector('.container'));