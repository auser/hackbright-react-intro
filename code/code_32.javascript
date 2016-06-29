const App = React.createClass({
  // ...
  render: function() {
    const {names} = this.state;
    return (
    <div>
      <button onClick={this.onAdd}>+</button>
      {names.map(name => <Name key={name} name={name} />)}
    </div>
    );
  }
});