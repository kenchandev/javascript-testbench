var React = require('react');

var ListItem = React.createClass({
  render: function(){
    return <li><a>{this.props.item}</a></li>;
  }
});

module.exports = ListItem;