const App = React.createClass({
  onAdd: function(evt) {
    console.log('Clicked add');
  },
  render: function() {
    const {names} = this.props;
    return (
    <div>
      <button onClick={this.onAdd}>+</button>
      {names.map(name => <Name key={name} name={name} />)}
    </div>
    );
  }
});