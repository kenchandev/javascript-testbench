var React = require('react');
var Thumbnail = require('./thumbnail');

var ThumbnailList = React.createClass({
  render: function(){
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      //  Pass in all properties to Thumbnail component.
      return <Thumbnail {...thumbnailProps}/>
    });

    return <div>
      {list}
    </div>
  }
});

module.exports = ThumbnailList;