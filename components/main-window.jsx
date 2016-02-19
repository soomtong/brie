'use strict';

var React = require('react');
var {Window, Content, Pane} = require('react-photonkit');

var Header = require('./header');
var Footer = require('./footer');
var Repository = require('./repository');
var List = require('./package-list');
var Info = require('./package-info');

var headerTitleInfo = "42 package installed in Global";
var footerTitleInfo = "Brie 0.1.1";

module.exports = React.createClass({
  render: function () {

    return <Window>
      <Header info={headerTitleInfo}/>

      <Content>
        <Pane ptSize="sm" sidebar>
          <Repository />
        </Pane>

        <Pane>
          <Info package=""/>
          <List repository=""/>
        </Pane>
      </Content>

      <Footer info={footerTitleInfo}/>
    </Window>
  }
});
