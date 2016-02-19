'use strict';

var React = require('react');
var {Window, Toolbar} = require('react-photonkit');

var Header = React.createClass({
  render: function () {
    return <header className="toolbar toolbar-header">
      <h1 className="title">{ this.props.info }</h1>

      <div className="toolbar-actions">

        <button className="btn btn-default" title="Update all packages information">
          <span className="icon icon-network icon-text"/> Check Out
        </button>

        <div className="btn-group">
          <button className="btn btn-default" title="Add new Private folder to Stage">
            <span className="icon icon-download icon-text"/> Add Folder
          </button>
          <button className="btn btn-default btn-inactive" title="Remove selected folder from Stage">
            <span className="icon icon-upload icon-text"/> Remove Folder
          </button>
          <button className="btn btn-default /*active*/" title="Open selected folder to System file manager">
            <span className="icon icon-folder"/>
          </button>
        </div>

        <button className="btn btn-default pull-right btn-inactive" title="Search from NPM repository">
          <span className="icon icon-search icon-text"/> Search New Packages
        </button>
        <button className="btn btn-default pull-right" title="Update selected or all package">
          <span className="icon icon-arrows-ccw icon-text"/> Update
        </button>
        <button className="btn btn-default pull-right" title="Install new package">
          <span className="icon icon-install"/>
        </button>
      </div>
    </header>;
  }
});

module.exports = Header;