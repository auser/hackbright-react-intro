const App = React.createClass({
  render: function() {
    const name = this.props.name;
    return (
      <div>Hello {name}</div>
    );
  }
});