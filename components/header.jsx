'use strict';

var React = require('react');
var {Toolbar, Actionbar, Button, ButtonGroup} = require('react-photonkit');

var Header = React.createClass({
  render: function () {
    return <Toolbar title={this.props.info}>
      <Actionbar>
        <Button glyph="network" text="Check Out" title="Update all packages information" />

        <ButtonGroup>
          <Button glyph="download" text="Add Folder" title="Add new Private folder to Stage" />
          <Button className="btn-inactive" glyph="upload" text="Remove Folder" title="Remove selected folder from Stage" />
          <Button className="/*active*/" glyph="folder" title="Open selected folder to System file manager" />
        </ButtonGroup>

        <Button className="pull-right btn-inactive" glyph="search" text="Search New Packages" title="Search from NPM repository" />
        <Button className="pull-right" glyph="install" title="Install new package" />
        <Button className="pull-right" glyph="arrows-ccw" text="Update" title="Update selected or all package" />
      </Actionbar>
    </Toolbar>;
  }
});

module.exports = Header;