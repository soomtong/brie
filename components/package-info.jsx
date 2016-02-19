'use strict';

var React = require('react');
var {ListGroup, ListItem} = require('react-photonkit');

var Info = React.createClass({
  render: function () {
    return <ListGroup>
      <ListItem title="commander" subtitle="the complete solution for node.js command-line programs" active/>
      <ListItem title="intern-ui" subtitle="A UI for the intern library. Comes with examples to get you started on testing even faster."/>
      <ListItem title="beyond" subtitle="BeyondJS, a framework for building scalable, modular, single page web applications."/>
    </ListGroup>;
  }
});

module.exports = Info;