'use strict';

var React = require('react');
var {Table} = require('react-photonkit');

var width = {
  version: { width: '10em' }
};

var List = React.createClass({
  render: function () {
    return <Table>
      <thead>
      <tr>
        <th>Name</th>
        <th style={width.version}>Version</th>
        <th style={width.version}>Latest</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>express</td>
        <td>3.8.1</td>
        <td>4.11.1</td>
      </tr>
      <tr>
        <td>react</td>
        <td>0.13.1</td>
        <td>0.14.3</td>
      </tr>
      <tr>
        <td>puddy</td>
        <td>1.0.0</td>
        <td>1.0.1</td>
      </tr>
      <tr>
        <td>bluebird</td>
        <td>3.0.1</td>
        <td>3.3.1</td>
      </tr>
      </tbody>
    </Table>;
  }
});

module.exports = List;