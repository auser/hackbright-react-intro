const App = React.createClass({
  render: function() {
    const names = this.props.names;
    return (
      <div>
        {names.map(name => (<div>Hello {name}</div>))}
      </div>
    );
  }
});