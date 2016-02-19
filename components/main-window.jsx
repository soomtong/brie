'use strict';

var React = require('react');

var color = {
  red: { color: '#fc605b' },
  orange: { color: '#fdbc40' },
  green: { color: '#34c84a' },
  blue: { color: '#57acf5' }
};

var width = {
  version: { width: '10em' }
};

module.exports = React.createClass({
  render: function () {
    return <div className="window">
      <header className="toolbar toolbar-header">
        <h1 className="title">42 package installed in Global</h1>

        <div className="toolbar-actions">

          <button className="btn btn-default" title="Update all packages information">
            <span className="icon icon-network icon-text" /> Check Out
          </button>

          <div className="btn-group">
            <button className="btn btn-default" title="Add new Private folder to Stage">
              <span className="icon icon-download icon-text" /> Add Folder
            </button>
            <button className="btn btn-default btn-inactive" title="Remove selected folder from Stage">
              <span className="icon icon-upload icon-text" /> Remove Folder
            </button>
            <button className="btn btn-default /*active*/" title="Open selected folder to System file manager">
              <span className="icon icon-folder" />
            </button>
          </div>

          <button className="btn btn-default pull-right btn-inactive" title="Search from NPM repository">
            <span className="icon icon-search icon-text" /> Search New Packages
          </button>
          <button className="btn btn-default pull-right" title="Update selected or all package">
            <span className="icon icon-arrows-ccw icon-text" /> Update
          </button>
          <button className="btn btn-default pull-right" title="Install new package">
            <span className="icon icon-install" />
          </button>
        </div>
      </header>

      <div className="window-content">
        <div className="pane-group">
          <div className="pane pane-sm sidebar">

            <div className="pane-group">
              <div className="pane pane-sm sidebar">
                <nav className="nav-group">
                  <h5 className="nav-group-title">Public</h5>
                  <a className="nav-group-item active">
                    <span className="icon icon-home" /> Global
                  </a>
                </nav>

                <nav className="nav-group">
                  <h5 className="nav-group-title">Private</h5>
                  <span className="nav-group-item">
                    <span className="icon icon-record" style={color.blue} /> Brie-development
                  </span>
                  <span className="nav-group-item">
                    <span className="icon icon-record" style={color.red} /> Express.js
                  </span>
                  <span className="nav-group-item">
                    <span className="icon icon-record" style={color.orange} /> Haroo-cloud-core
                  </span>
                  <span className="nav-group-item">
                    <span className="icon icon-record" style={color.green} /> react-example
                  </span>
                  <span className="nav-group-item">
                    <span className="icon icon-record" style={color.green} /> hello
                  </span>
                  <span className="nav-group-item">
                    <span className="icon icon-record" style={color.blue} /> zen
                  </span>
                  <span className="nav-group-item">
                    <span className="icon icon-record" style={color.red} /> Red
                  </span>
                  <span className="nav-group-item">
                    <span className="icon icon-record" style={color.orange} /> Orange
                  </span>
                  <span className="nav-group-item">
                    <span className="icon icon-record" style={color.green} /> Green
                  </span>
                  <span className="nav-group-item">
                    <span className="icon icon-record" style={color.blue} /> Blue
                  </span>
                </nav>

              </div>

            </div>

          </div>
          <div className="pane">
            <table className="table-striped">
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
            </table>
          </div>
        </div>
      </div>

      <footer className="toolbar toolbar-footer">
        <h1 className="title">Brie 0.1.0</h1>
      </footer>
    </div>
  }
});
