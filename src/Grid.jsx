/** @jsx React.DOM */

var React = require('react');
var PropTypes = require('./PropTypes');


var Grid = React.createClass({
  propTypes: {
    fluid: React.PropTypes.bool,
    componentClass: PropTypes.componentClass
  },

  getDefaultProps: function () {
    return {
      componentClass: React.DOM.div
    };
  },

  render: function () {
    var componentClass = this.props.componentClass;

    return this.transferPropsTo(
      <componentClass className={this.props.fluid ? 'container-fluid' : 'container'}>
        {this.props.children}
      </componentClass>
    );
  }
});

module.exports = Grid;