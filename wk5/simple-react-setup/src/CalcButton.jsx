var React = require('react');

module.exports = React.createClass({
  render () {
    return (
      <button onClick={this.props.onClick}>{this.props.title}</button>
    );
  }
});
