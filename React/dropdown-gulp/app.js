var options = {
  thumbnailData: [{
    title: 'See Tutorial',
    number: 32,
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

var Badge = React.createClass({displayName: "Badge",
  render: function(){
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
      this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
    )
  }
});
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function(){
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      //  Pass in all properties to Thumbnail component.
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    });

    return React.createElement("div", null, 
      list
    )
  }
});
var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function(){
    return React.createElement("div", {className: "thumbnail"}, 
      React.createElement("img", {src: this.props.imageURL, alt: "..."}), 
      React.createElement("div", {className: "caption"}, 
        React.createElement("h3", null, this.props.header), 
        React.createElement("p", null, this.props.description), 
        React.createElement("p", null, 
          React.createElement(Badge, {title: this.props.title, number: this.props.number})
        )
      )
    )
  }
});