'use strict';

var React = require('react');
var {Toolbar} = require('react-photonkit');

var Footer = React.createClass({
  render: function () {
    return <Toolbar title={this.props.info}/>;
  }
});

module.exports = Footer;