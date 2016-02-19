'use strict';

var React = require('react');
var {NavGroup, NavTitle, NavGroupItem} = require('react-photonkit');

function onSelect() {
  console.log('select');
}

var Repository = React.createClass({
  render: function () {
    return <NavGroup activeKey={1} onSelect={onSelect} /*draggable*/>
      <NavTitle>Public</NavTitle>
      <NavGroupItem eventKey={1} glyph="archive" text="Global"/>

      <NavTitle>Private</NavTitle>
      <NavGroupItem eventKey={2} glyph="folder" text="Brie-development"/>
      <NavGroupItem eventKey={3} glyph="folder" text="Express.js"/>
      <NavGroupItem eventKey={4} glyph="folder" text="Haroo-cloud-core"/>
      <NavGroupItem eventKey={5} glyph="folder" text="react-example"/>
      <NavGroupItem eventKey={6} glyph="folder" text="hello"/>
    </NavGroup>;
  }
});

module.exports = Repository;